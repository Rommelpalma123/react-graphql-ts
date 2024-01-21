import { Header } from '@/components/Header';
import { showBasicAlert } from '@/helpers/sweetAlert';
import { validateEmail } from '@/helpers/utils';
import React, { Fragment, useEffect, useState } from 'react';
import { useServer } from '@/context/ServerContext';
import { useNavigate } from 'react-router-dom';
import { registerClient } from '@/helpers/constants';

export const CreateClient = () => {
  const [inputValues, setInputValues] = useState(registerClient);
  const [countries, setCountries] = useState([]);

  const server = useServer();
  const navigate = useNavigate();

  const getAllCountries = async () => {
    try {
      const countries = await server.getCountries();
      setCountries(countries);
    } catch (error) {
      console.log('error al traer todos los paises');
    }
  };

  const register = async () => {
    if (validateForm()) {
      try {
        await server.register(inputValues);
        showBasicAlert('Registrado correctamente', 'success');
        navigate('/');
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

    if (inputValues.nombre === '') {
      showBasicAlert('El nombre esta vacio', icon);
      return false;
    }

    if (inputValues.cedula === '') {
      showBasicAlert('La cedula esta vacia', icon);
      return false;
    }

    if (inputValues.edad === '') {
      showBasicAlert('La edad esta vacia', icon);
      return false;
    }

    if (inputValues.email === '') {
      showBasicAlert('El email esta vacio', icon);
      return false;
    }

    if (inputValues.password === '') {
      showBasicAlert('La contraseña esta vacia', icon);
      return false;
    }

    if (!validateEmail(inputValues.email)) {
      showBasicAlert('El email no es valido', icon);
      return false;
    }

    return true;
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <Fragment>
      <div className='row d-flex justify-content-center h-100 pt-5 animate__animated animate__fadeInUp animate__slow'>
        <div className='col-lg-8 col-md-5 col-sm-3 col-12'>
          <div className='card text-center'>
            <h3 className='mt-2'>Crear cliente</h3>
            <div className='card-body py-3'>
              <div className='card-text'>
                <div className='w-75 m-auto gap-3'>
                  <div className='mb-3'>
                    <div className='text-start'>
                      <label className='form-label'>Ingrese sus nombres</label>
                    </div>
                    <input
                      type={'text'}
                      name='name'
                      value={inputValues.nombre}
                      placeholder='Ingrese sus nombres'
                      onChange={(text) => {
                        setInputValues({ ...inputValues, nombre: text.target.value });
                      }}
                      className='form-control py-1 px-1'
                      aria-label='Sizing example input'
                    />
                  </div>

                  <div className='mb-3'>
                    <div className='text-start'>
                      <label className='form-label'>Ingrese su cedula</label>
                    </div>
                    <input
                      type={'text'}
                      name='cedula'
                      value={inputValues.cedula}
                      placeholder='Ingrese su cedula'
                      onChange={(text) => {
                        setInputValues({ ...inputValues, cedula: text.target.value });
                      }}
                      className='form-control py-1 px-1'
                      aria-label='Sizing example input'
                    />
                  </div>

                  <div className='mb-3'>
                    <div className='text-start'>
                      <label className='form-label'>Escriba su edad</label>
                    </div>
                    <input
                      type={'text'}
                      name='edad'
                      value={inputValues.edad}
                      placeholder='Ingrese su edad'
                      onChange={(text) => {
                        setInputValues({ ...inputValues, edad: text.target.value });
                      }}
                      className='form-control py-1 px-1'
                      aria-label='Sizing example input'
                    />
                  </div>

                  <div className='mb-3'>
                    <div className='text-start'>
                      <label className='form-label'>Ingrese su correo electronico</label>
                    </div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Correo Electrónico'
                      value={inputValues.email}
                      onChange={(text) => {
                        setInputValues({ ...inputValues, email: text.target.value });
                      }}
                      className='form-control py-1 px-1'
                      aria-label='Sizing example input'
                      aria-describedby='inputGroup-sizing-default'
                    />
                  </div>

                  <div className='mb-3'>
                    <div className='text-start'>
                      <label className='form-label'>Ingrese una contraseña</label>
                    </div>
                    <input
                      type={'password'}
                      name='password'
                      value={inputValues.password}
                      placeholder='Ingrese su contraseña'
                      onChange={(text) => {
                        setInputValues({ ...inputValues, password: text.target.value });
                      }}
                      className='form-control py-1 px-1'
                      aria-label='Sizing example input'
                      aria-describedby='passwordHelpBlock'
                    />
                  </div>

                  <div className='mb-3'>
                    <select
                      name='id_pais'
                      value={inputValues.id_pais}
                      onChange={(text) => {
                        setInputValues({ ...inputValues, id_pais: text.target.value });
                      }}
                      className='form-select py-1 px-1'
                      aria-label='Select your country'>
                      <option value='' disabled>
                        Seleccion su país
                      </option>
                      {countries.map((country) => (
                        <option key={country?._id} value={country?._id}>
                          {country?.nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='d-grid gap-2'>
                    <button
                      onClick={() => {
                        register();
                      }}
                      className='btn btn-primary'
                      type='submit'>
                      Crear Cliente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
