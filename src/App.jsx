import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pedido from './components/PedidoFormV1/Pedido';
import NavBar from './components/NavBarV1/NavBar';
import VerPedidoPage from './pages/VerPedidoPage';
import PedidosFinalizados from './pages/PedidosFinalizados';

import './App.css'

function App() {
  const [pedidos, setPedidos] = useState([]);
  const confirmarPedido = (pedido) => {
    setPedidos([...pedidos, pedido]);
  };

  return (
    <>
    <BrowserRouter>
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Pedido confirmarPedido={confirmarPedido} />}/>
          <Route path="/pedidos" element={<VerPedidoPage pedidos={pedidos} />}/>
          <Route path="/pedidosFinalizados" element={<PedidosFinalizados pedidos={pedidos} />}/>

        </Routes>
  
      </BrowserRouter>
    </>
  );
}

export default App;

