import { Header } from '@/components/Header';
import { Fragment, useEffect } from 'react';
import React, { useState } from 'react';
import { showBasicAlert } from '@/helpers/sweetAlert';
import { validateEmail } from '@/helpers/utils';
import { useServer } from '@/context/ServerContext';
import { useAuth } from '@/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const server = useServer();
  const { authLogin } = useAuth();
  const navigate = useNavigate();

  /*const giftIds = [2, 1, 3, 5, 3, 2];
  const giftIds2 = [1, 2, 3, 4];
  const giftIds3 = [5, 1, 5, 1];

  const findFirstRepeated = (gifts) => {
    return gifts.forEach((element) => {
      element + 1;
    });
  };

  const dat = findFirstRepeated(giftIds);
  console.log(dat);

  useEffect(() => {
    findFirstRepeated();
  }, []);*/

  const login = async () => {
    if (validateForm()) {
      try {
        const result = await server.login(inputValues);
        authLogin(result?.user);
        showBasicAlert('Inicio de session correctamente', 'success');
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

    if (inputValues.email === '') {
      showBasicAlert('El email esta vacio', icon);
      return false;
    }
    if (inputValues.password === '') {
      showBasicAlert('Ingrese su contraseña', icon);
      return false;
    }

    if (!validateEmail(inputValues.email)) {
      showBasicAlert('El email no es valido', icon);
      return false;
    }
    return true;
  };

  return (
    <Fragment>
      <Header />
      <div className='row d-flex justify-content-center h-100 pt-5 animate__animated animate__fadeInUp animate__slow'>
        <div className='col-lg-3 col-md-4 col-sm-6 col-9'>
          <div className='card text-center'>
            <div className='card-body py-3'>
              <h5 className='card-title mb-4'>Iniciar Session</h5>
              <div className='card-text'>
                <div className='w-75 m-auto gap-3'>
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
                    />
                  </div>

                  <div className='mb-3'>
                    <div className='text-start'>
                      <label className='form-label'>Ingrese su contraseña</label>
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

                  <div className='d-grid'>
                    <button
                      onClick={() => {
                        login();
                      }}
                      className='btn btn-primary'
                      type='submit'>
                      Iniciar Session
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
