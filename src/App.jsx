import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pedido from './components/PedidoFormV1/Pedido';
import NavBar from './components/NavBarV1/NavBar';
import VerPedidoPage from './pages/VerPedidoPage';
import PedidosFinalizadosPage from './pages/PedidosFinalizadosPage';

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
          <Route path="/pedidosFinalizados" element={<PedidosFinalizadosPage pedidos={pedidos} />}/>

        </Routes>
  
      </BrowserRouter>
    </>
  );
}

export default App;

