import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '@/static/styles/layout.css';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { useServer } from '@/context/ServerContext';
import DataTable from 'react-data-table-component';
import moment from 'moment/moment';
import { showBasicAlert } from '@/helpers/sweetAlert';
import { io } from 'socket.io-client';

export const ListProcedure = () => {
  const [procedures, setProcedures] = useState([]);
  const [proceduresFilter, setProceduresFilter] = useState([]);
  const socket = io(import.meta.env.VITE_API);

  const deleteProcedure = async (id) => {
    try {
      socket.emit('cliente:delete-tramite', id);
      showBasicAlert('Tramite eliminado correctamente');
    } catch (error) {
      console.log('error al eliminar el tramite');
    }
  };

  const appendNewProcedure = (newProcedure) => {
    newProcedure.createdAt = moment(newProcedure.createdAt).format('DD/MM/YYYY');
    newProcedure.updatedAt = moment(newProcedure.updatedAt).format('DD/MM/YYYY');
    setProceduresFilter((prevProcedures) => prevProcedures.concat(newProcedure));
  };

  const columns = [
    {
      name: 'Tramite',
      selector: (row) => row?.descripcion,
      sortable: true,
      width: '300px',
    },
    {
      name: 'Precio',
      selector: (row) => row?.costo,
      sortable: true,
      width: '100px',
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
    {
      name: 'Acciones',
      cell: (row) => (
        <div className='d-flex gap-2'>
          <Link
            to={'/editar-tramite'}
            state={{ tramite: row }}
            className='btn btn-primary py-1 px-1'>
            Editar
          </Link>
          <button className='btn btn-danger py-1 px-1' onClick={() => deleteProcedure(row?._id)}>
            Eliminar
          </button>
        </div>
      ),
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

  const searchByProcedures = (event) => {
    const filterTitle = procedures.filter((curso) => {
      return curso.descripcion.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setProceduresFilter(filterTitle);
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  useEffect(() => {
    socket.on('server:loadtramites', (data) => {
      data.map((tramite) => {
        tramite.createdAt = moment(tramite.createdAt).format('DD/MM/YYYY');
        tramite.updatedAt = moment(tramite.updatedAt).format('DD/MM/YYYY');
      });
      setProcedures(data);
      setProceduresFilter(data);
    });
  }, []);

  useEffect(() => {
    socket.on('server:realizar-tramite', (data) => {
      appendNewProcedure(data);
    });
  }, []);

  useEffect(() => {
    socket.on('server:delete-tramite', (id) => {
      setProceduresFilter((prevProcedures) =>
        prevProcedures.filter((procedure) => procedure._id !== id)
      );
    });
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <div className='contentwithoutsidebar3'>
        <Link to='/crear-tramite' className='btn btn-success p-2'>
          <AiOutlineDeliveredProcedure className='fs-4' /> Realizar Tramite
        </Link>

        <div className='selector-items'>
          <div className='mt-2 mb-2 col-sm-4'>
            <input
              onChange={searchByProcedures}
              type='text'
              className='form-control p-2'
              placeholder='Buscar por cliente'
            />
          </div>
          {proceduresFilter.length > 0 ? (
            <DataTable
              columns={columns}
              striped
              customStyles={customStyles}
              fixedHeader
              highlightOnHover
              selectableRows
              pagination
              data={proceduresFilter}
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
