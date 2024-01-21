import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '@/static/styles/layout.css';
import { MdOutlineAppRegistration } from 'react-icons/md';
import DataTable from 'react-data-table-component';
import { useServer } from '@/context/ServerContext';
import moment from 'moment';

export const ListRegister = () => {
  const [register, setRegister] = useState([]);
  const [registerFilter, setRegisterFilter] = useState(register);
  const server = useServer();

  const getRegister = async () => {
    try {
      const data = await server.getRegisters();
      data.forEach((register) => {
        register.createdAt = moment(register.createdAt).format('DD-MM-YYYY');
        register.updatedAt = moment(register.updatedAt).format('DD-MM-YYYY');
      });
      setRegister(data);
      setRegisterFilter(data);
    } catch (error) {
      console.log('error al traer los registros');
    }
  };

  const columns = [
    {
      name: 'Cliente',
      selector: (row) => row?.id_cliente?.nombre,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Cedula',
      selector: (row) => row?.id_cliente?.cedula,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Tramite',
      selector: (row) => row?.id_tramite?.descripcion,
      sortable: true,
      width: '300px',
    },
    {
      name: 'Fecha de Creacion',
      selector: (row) => row?.createdAt,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Fecha de Actualizacion',
      selector: (row) => row?.updatedAt,
      sortable: true,
      width: '200px',
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        color: 'white',
        backgroundColor: 'black',
        fontSize: '15px',
      },
    },
    pagination: {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        gap: '20px',
        alignItems: 'center',
        marginTop: '10px',
      },
    },
  };

  const searchByRegister = (event) => {
    const filterTitle = register.filter((curso) => {
      return curso?.id_cliente?.nombre.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRegisterFilter(filterTitle);
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  useEffect(() => {
    getRegister();
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <div className='contentwithoutsidebar3'>
        <Link to='/crear-registro' className='btn btn-success p-2'>
          <MdOutlineAppRegistration className='fs-4' /> Crear Registro
        </Link>
        <div className='selector-items'>
          <div className='mt-2 mb-2 col-sm-4'>
            <input
              onChange={searchByRegister}
              type='text'
              className='form-control p-2'
              placeholder='Buscar por cliente'
            />
          </div>
          {registerFilter.length > 0 ? (
            <DataTable
              columns={columns}
              striped
              customStyles={customStyles}
              fixedHeader
              highlightOnHover
              selectableRows
              pagination
              data={registerFilter}
              paginationComponentOptions={paginationComponentOptions}
              selectableRowsComponent={() => <div></div>}
            />
          ) : (
            <DataTable />
          )}
        </div>
      </div>
    </div>
  );
};
