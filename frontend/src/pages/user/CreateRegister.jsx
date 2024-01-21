import React, { Fragment, useEffect, useState } from 'react';
import '@/static/styles/layout.css';
import { useNavigate } from 'react-router-dom';
import { createRegister } from '@/helpers/constants';
import { useServer } from '@/context/ServerContext';
import moment from 'moment';
import { showBasicAlert } from '@/helpers/sweetAlert';

export const CreateRegister = () => {
  const [inputValues, setInputValues] = useState(createRegister);
  const [clients, setclients] = useState([]);
  const [procedures, setprocedures] = useState([]);
  const server = useServer();
  const navigate = useNavigate();

  const createRegisterProcedure = async () => {
    if (validateForm()) {
      try {
        const data = {
          id_cliente: inputValues.id_cliente,
          id_tramite: inputValues.id_tramite,
          fecha: inputValues.fecha,
        };
        await server.createRegister(inputValues);
        showBasicAlert('Registrado correctamente', 'success');
        navigate('/registros');
      } catch (error) {
        console.log(error?.response?.data?.mensaje);
        showBasicAlert(
          error?.response?.data?.mensaje ?? 'Ocurrio un problema! Intentelo más tarde',
          'error'
        );
      }
    }
  };

  const validateForm = () => {
    const icon = 'warning';

    if (inputValues.id_cliente === '') {
      showBasicAlert('El cliente esta vacio', icon);
      return false;
    }

    if (inputValues.id_tramite === '') {
      showBasicAlert('El tramite esta vacio', icon);
      return false;
    }

    if (inputValues.fecha === '') {
      showBasicAlert('La fecha esta vacia', icon);
      return false;
    }

    return true;
  };

  const getClients = async () => {
    try {
      const clients = await server.getClients();
      setclients(clients);
    } catch (error) {
      console.log('Error al obtener los clientes');
    }
  };

  const getProcedures = async () => {
    const procedures = await server.getProcedures();
    setprocedures(procedures);
    try {
    } catch (error) {
      console.log('Error al obtener los tramites');
    }
  };

  useEffect(() => {
    getClients();
    getProcedures();
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <div className='contentwithoutsidebar3'>
        <Fragment>
          <div className='row d-flex justify-content-center h-100 pt-5 animate__animated animate__fadeInUp animate__slow'>
            <div className='col-lg-8 col-md-5 col-sm-3 col-12'>
              <div className='card text-center'>
                <h3 className='mt-2'>Crear Registro</h3>
                <div className='card-body py-3'>
                  <div className='card-text'>
                    <div className='w-75 m-auto gap-3'>
                      <div className='mb-3'>
                        <div className='text-start'>
                          <label className='form-label'>Seleccione una fecha</label>
                        </div>
                        <input
                          type={'date'}
                          name='name'
                          value={inputValues.fecha}
                          placeholder='Ingrese una descripcion'
                          onChange={(text) => {
                            setInputValues({ ...inputValues, fecha: text.target.value });
                          }}
                          className='form-control py-1 px-1'
                          aria-label='Sizing example input'
                        />
                      </div>

                      <div className='mb-3'>
                        <select
                          name='id_pais'
                          value={inputValues.id_cliente}
                          onChange={(text) => {
                            setInputValues({ ...inputValues, id_cliente: text.target.value });
                          }}
                          className='form-select py-1 px-1'
                          aria-label='Select your country'>
                          <option value='' disabled>
                            Seleccion un cliente
                          </option>
                          {clients.map((client) => (
                            <option key={client?._id} value={client?._id}>
                              {client?.nombre}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className='mb-3'>
                        <select
                          name='id_pais'
                          value={inputValues.id_tramite}
                          onChange={(text) => {
                            setInputValues({ ...inputValues, id_tramite: text.target.value });
                          }}
                          className='form-select py-1 px-1'
                          aria-label='Select your country'>
                          <option value='' disabled>
                            Seleccion un tramite
                          </option>
                          {procedures.map((procedure) => (
                            <option key={procedure?._id} value={procedure?._id}>
                              {procedure?.descripcion}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className='d-grid gap-2'>
                        <button
                          onClick={() => {
                            createRegisterProcedure();
                          }}
                          className='btn btn-primary'
                          type='submit'>
                          Crear Tramite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  );
};
