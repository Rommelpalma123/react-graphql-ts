import React, { Fragment, useState, useEffect } from 'react';
import '@/static/styles/layout.css';
import { createProcedure } from '@/helpers/constants';
import { showBasicAlert } from '@/helpers/sweetAlert';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

const socket = io(import.meta.env.VITE_API);

export const CreateProcedure = () => {
  const [inputValues, setInputValues] = useState(createProcedure);
  const navigate = useNavigate();

  socket.on('connect', () => {
    console.log('Conectado');
  });

  const createProcedureClient = async () => {
    if (validateForm()) {
      try {
        const data = {
          descripcion: inputValues.descripcion,
          costo: parseInt(inputValues.costo),
        };
        //await server.procedure(data);
        socket.emit('client:realizar-tramite', data);
        showBasicAlert('Tramite creado correctamente', 'success');
        navigate('/tramites');
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

    if (inputValues.descripcion === '') {
      showBasicAlert('La descripcion esta vacia', icon);
      return false;
    }

    if (!Number.isInteger(parseInt(inputValues.costo))) {
      showBasicAlert('El costo debe ser un numero', icon);
      return false;
    }

    return true;
  };

  return (
    <div style={{ height: '100vh' }}>
      <div className='contentwithoutsidebar3'>
        <Fragment>
          <div className='row d-flex justify-content-center h-100 pt-5 animate__animated animate__fadeInUp animate__slow'>
            <div className='col-lg-8 col-md-5 col-sm-3 col-12'>
              <div className='card text-center'>
                <h3 className='mt-2'>Realizar Tramite</h3>
                <div className='card-body py-3'>
                  <div className='card-text'>
                    <div className='w-75 m-auto gap-3'>
                      <div className='mb-3'>
                        <div className='text-start'>
                          <label className='form-label'>Ingrese una descripcion</label>
                        </div>
                        <input
                          type={'text'}
                          name='name'
                          value={inputValues.descripcion}
                          placeholder='Ingrese una descripcion'
                          onChange={(text) => {
                            setInputValues({ ...inputValues, descripcion: text.target.value });
                          }}
                          className='form-control py-1 px-1'
                          aria-label='Sizing example input'
                        />
                      </div>

                      <div className='mb-3'>
                        <div className='text-start'>
                          <label className='form-label'>Ingrese la cantidad</label>
                        </div>
                        <input
                          type={'text'}
                          name='cedula'
                          value={inputValues.costo}
                          placeholder='Ingrese la contidad'
                          onChange={(text) => {
                            setInputValues({ ...inputValues, costo: text.target.value });
                          }}
                          className='form-control py-1 px-1'
                          aria-label='Sizing example input'
                        />
                      </div>

                      <div className='d-grid gap-2'>
                        <button
                          onClick={() => {
                            createProcedureClient();
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
