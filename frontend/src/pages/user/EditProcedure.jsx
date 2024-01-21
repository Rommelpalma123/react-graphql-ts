import { useServer } from '@/context/ServerContext';
import { updateProcedure } from '@/helpers/constants';
import { showBasicAlert } from '@/helpers/sweetAlert';
import React, { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const EditProcedure = () => {
  const [inputValues, setInputValues] = useState(updateProcedure);
  const server = useServer();
  const navigate = useNavigate();
  const location = useLocation();
  const tramite = location.state?.tramite;

  const updateProcedureUser = async () => {
    if (validateForm()) {
      try {
        const data = {
          descripcion: inputValues.descripcion,
          costo: parseInt(inputValues.costo),
        };
        await server.updateProcedure(tramite?._id, data);
        showBasicAlert('Tramite actualizado correctamente', 'success');
        navigate('/tramites');
      } catch (error) {
        console.log('error al actualizar el tramite');
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

    if (inputValues.costo === '') {
      showBasicAlert('El costo esta vacio', icon);
      return false;
    }

    return true;
  };

  useEffect(() => {
    setInputValues(tramite);
  }, [tramite]);

  return (
    <div style={{ height: '100vh' }}>
      <div className='contentwithoutsidebar3'>
        <Fragment>
          <div className='row d-flex justify-content-center h-100 pt-5 animate__animated animate__fadeInUp animate__slow'>
            <div className='col-lg-8 col-md-5 col-sm-3 col-12'>
              <div className='card text-center'>
                <h3 className='mt-2'>Crear Tramite</h3>
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
                            updateProcedureUser();
                          }}
                          className='btn btn-primary'
                          type='submit'>
                          Actualizar Tramite
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
