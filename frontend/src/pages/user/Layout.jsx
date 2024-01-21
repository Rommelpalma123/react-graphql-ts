import { Route, Routes, Navigate } from 'react-router-dom';
import '@/static/styles/layout.css';
import { SideBar } from '@/components/SideBar';
import { ListClient } from './ListClient';
import { ListProcedure } from './ListProcedure';
import { CreateClient } from './CreateClient';
import { EditClient } from './EditClient';
import { ListRegister } from './ListRegister';
import { CreateRegister } from './CreateRegister';
import { CreateProcedure } from './CreateProcedure';
import { EditProcedure } from './EditProcedure';
import { Graphql } from './Graphql';

export const Layout = () => {
  return (
    <div className='container-padre'>
      <SideBar />
      <div className='' style={{ height: '100%', width: '100%' }}>
        <Routes>
          <Route path='/' element={<ListClient />} />
          <Route path='/registros' element={<ListRegister />} />
          <Route path='/tramites' element={<ListProcedure />} />
          <Route path='/crear-cliente' element={<CreateClient />} />
          <Route path='/crear-registro' element={<CreateRegister />} />
          <Route path='/editar-cliente' element={<EditClient />} />
          <Route path='/crear-tramite' element={<CreateProcedure />} />
          <Route path='/editar-tramite' element={<EditProcedure />} />
          <Route path='/crear-registro' element={<CreateRegister />} />
          <Route path='/graphql' element={<Graphql />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </div>
  );
};
