import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Pedido from './components/PedidoFormV1/Pedido';
import NavBar from './components/NavBarV1/NavBar';
import VerPedidoPage from './pages/VerPedidoPage';
import PedidosFinalizadosPage from './pages/PedidosFinalizadosPage';

import './App.css'

import { createHashRouter } from 'react-router-dom';

// function App() {

//   const [pedidos, setPedidos] = useState([]);
//   const confirmarPedido = (pedido) => {
//     setPedidos([...pedidos, pedido]);
//   };

//   const router = createHashRouter([
//     {
//       path: "/",
//       element: <Pedido confirmarPedido={confirmarPedido} />,
//     },
//     {
//       path: "/pedidos",
//       element: <VerPedidoPage pedidos={pedidos} />,
//     },
//     {
//       path: "/pedidosFinalizados",
//       element: <PedidosFinalizadosPage pedidos={pedidos} />,
//     }


//   ])
//   return (
//     <>
//       <BrowserRouter>
//         <RouterProvider router={router}>
//           <NavBar />

//           {/* <Routes>
//             <Route path="/" element={<Pedido confirmarPedido={confirmarPedido} />} />
//             <Route path="/pedidos" element={<VerPedidoPage pedidos={pedidos} />} />
//             <Route path="/pedidosFinalizados" element={<PedidosFinalizadosPage pedidos={pedidos} />} />

//           </Routes> */}
//         </RouterProvider>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

function App() {
  const [pedidos, setPedidos] = useState([]);

  const confirmarPedido = (pedido) => {
    setPedidos([...pedidos, pedido]);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Pedido confirmarPedido={confirmarPedido} />,
    },
    {
      path: '/pedidos',
      element: <VerPedidoPage pedidos={pedidos} />,
    },
    {
      path: '/pedidosFinalizados',
      element: <PedidosFinalizadosPage pedidos={pedidos} />,
    },
  ]);

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

