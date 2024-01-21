import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiExit } from 'react-icons/bi';
import { Link, Outlet } from 'react-router-dom';
import { ButtomMobil } from './ButtomMobil';
import { useAuth } from '@/context/AuthContext';
import { FaUser } from 'react-icons/fa';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { MdOutlineAppRegistration } from 'react-icons/md';
import { TbBrandGraphql } from 'react-icons/tb';

import '@/static/styles/layout.css';

export const SideBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const { authLogout } = useAuth();

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <ButtomMobil showSidebar={showSidebar} />
      <div className='d-grid' style={{ height: '100vh' }}>
        <div className={`fijar-sidebar bg-dark ${sidebarVisible ? 'active' : ''}`} id='side_nav'>
          <div className='px-2 pt-3 pb-4'>
            <button
              className='btn d-md-none d-block bg-dark close-btn px-1 py-0 text-white fs-1'
              onClick={hideSidebar}>
              <GiHamburgerMenu />
            </button>
          </div>
          <ul className='list-unstyled px-2'>
            <li
              onClick={() => handleItemClick(0)}
              style={{
                backgroundColor: selectedItem === 0 ? '#00fa32' : '#fff',
              }}
              className='text-decoration-none rounded mt-3 item-registro'>
              <Link
                className='d-flex text-dark align-items-center m-2'
                to='/'
                style={{
                  color: selectedItem === 0 ? '#00fa32' : '#090909',
                  height: '40px',
                }}
                onClick={() => {
                  hideSidebar();
                }}>
                <FaUser className='fs-4 m-2' /> Clientes
              </Link>
            </li>
            <li
              onClick={() => handleItemClick(1)}
              style={{
                backgroundColor: selectedItem === 1 ? '#00fa32' : '#fff',
              }}
              className='text-decoration-none rounded mt-3 item-registro'>
              <Link
                className='d-flex text-dark align-items-center m-2'
                to='/tramites'
                style={{
                  color: selectedItem === 1 ? '#00fa32' : '#090909',
                  height: '40px',
                }}
                onClick={() => {
                  hideSidebar();
                }}>
                <AiOutlineDeliveredProcedure className='fs-4 m-2' /> Tramites
              </Link>
            </li>

            <li
              onClick={() => handleItemClick(2)}
              style={{
                backgroundColor: selectedItem === 2 ? '#00fa32' : '#fff',
              }}
              className='text-decoration-none rounded mt-3 item-registro'>
              <Link
                className='d-flex text-dark align-items-center m-2'
                to='/registros'
                style={{
                  color: selectedItem === 2 ? '#00fa32' : '#090909',
                  height: '40px',
                }}
                onClick={() => {
                  hideSidebar();
                }}>
                <MdOutlineAppRegistration className='fs-4 m-2' /> Registros
              </Link>
            </li>

            <li
              onClick={() => handleItemClick(3)}
              style={{
                backgroundColor: selectedItem === 3 ? '#00fa32' : '#fff',
              }}
              className='text-decoration-none rounded mt-3 item-registro'>
              <Link
                className='d-flex text-dark align-items-center m-2'
                to='/graphql'
                style={{
                  color: selectedItem === 3 ? '#00fa32' : '#090909',
                  height: '40px',
                }}
                onClick={() => {
                  hideSidebar();
                }}>
                <TbBrandGraphql className='fs-4 m-2' /> GraphQl
              </Link>
            </li>

            <li
              onClick={() => handleItemClick(4)}
              style={{
                backgroundColor: selectedItem === 4 ? '#e11111' : '#fff',
              }}
              className='text-decoration-none rounded mt-3 item-seccion'>
              <Link
                className='d-flex text-dark align-items-center m-2'
                onClick={() => {
                  hideSidebar();
                  authLogout();
                }}>
                <BiExit className='fs-4 m-2' /> Cerrar Sesion
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
