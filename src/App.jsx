import './App.css';
import PedidoForm from './components/PedidoFormV1/PedidoForm';
import NavBar from './components/NavBarV1/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerPedidoPage from './pages/VerPedidoPage';
import { useState } from 'react';
import { PedidosFinalizados } from './pages/PedidosFinalizados';

function App() {
  // Estado global para los pedidos
  const [pedidos, setPedidos] = useState([]);

  // Función para agregar pedidos confirmados
  const confirmarPedido = (pedido) => {
    setPedidos([...pedidos, pedido]);
  };

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<PedidoForm confirmarPedido={confirmarPedido} />}/>
          <Route path="/pedidos" element={<VerPedidoPage pedidos={pedidos} />}/>
          <Route path="/pedidosFinalizados" element={<PedidosFinalizados pedidos={pedidos} />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;

