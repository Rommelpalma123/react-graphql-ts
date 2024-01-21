import React, { useEffect, useState } from 'react';
import '@/static/styles/layout.css';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import DataTable from 'react-data-table-component';
import { useServer } from '@/context/ServerContext';
import { showBasicAlert } from '@/helpers/sweetAlert';

export const ListClient = () => {
  const [clients, setClients] = useState([]);
  const [clientFilter, setClientFilter] = useState(clients);
  const server = useServer();

  const getClients = async () => {
    try {
      const data = await server.getClients();
      setClients(data);
      setClientFilter(data);
    } catch (error) {
      console.log('error al traer los clientes');
    }
  };

  const deleteUser = async (id) => {
    try {
      await server.deleteClient(id);
      showBasicAlert('Cliente eliminado correctamente');
    } catch (error) {
      console.log('error al eliminar el cliente');
      showBasicAlert('Error al eliminar el cliente, Intentelo mas tarde');
    } finally {
      getClients();
    }
  };

  const columns = [
    {
      name: 'Cliente',
      selector: (row) => row?.nombre,
      sortable: true,
      width: '300px',
    },
    {
      name: 'Cedula',
      selector: (row) => row?.cedula,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Edad',
      selector: (row) => row?.edad,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Email',
      selector: (row) => row?.email,
      sortable: true,
      width: '300px',
    },
    {
      name: 'Pais',
      selector: (row) => row?.id_pais?.nombre,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <div className='d-flex gap-2'>
          <Link
            className='btn btn-primary py-1 px-1'
            to={'editar-cliente'}
            state={{ cliente: row }}
            style={{ color: '#fff' }}>
            Editar
          </Link>
          <button
            className='btn btn-danger py-1 px-1'
            onClick={() => {
              deleteUser(row?._id);
            }}>
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

  const searchByClient = (event) => {
    const filterTitle = clients.filter((curso) => {
      return curso.nombre.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setClientFilter(filterTitle);
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <div className='contentwithoutsidebar3'>
        <Link to='/crear-cliente' className='btn btn-success p-2'>
          <CiUser className='fs-4' /> Crear Cliente
        </Link>

        <div className='selector-items'>
          <div className='mt-2 mb-2 col-sm-4'>
            <input
              onChange={searchByClient}
              type='text'
              className='form-control p-2'
              placeholder='Buscar por cliente'
            />
          </div>
          {clientFilter.length > 0 ? (
            <DataTable
              columns={columns}
              striped
              customStyles={customStyles}
              fixedHeader
              highlightOnHover
              selectableRows
              pagination
              data={clientFilter}
              paginationComponentOptions={paginationComponentOptions}
              selectableRowsComponent={() => <div></div>}
            />
          ) : (
            <DataTable />
          )}
        </div>

        <div className='selector-items'></div>
      </div>
    </div>
  );
};
