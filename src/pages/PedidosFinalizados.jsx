import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

export const PedidosFinalizados = () => {
    const [pedidosListos, setPedidosListos] = useState([]);

    useEffect(() => {
        // Cargar pedidos listos del localStorage
        const pedidosListosGuardados = JSON.parse(localStorage.getItem("pedidosListos")) || [];
        setPedidosListos(pedidosListosGuardados);
    }, []);
    const calcularPrecioTotal = (comidas) => {
        return comidas.reduce((total, item) => total + item.cantidad * item.precio, 0);
    };

    const CalcularTotalDelDia = () => {
        return pedidosListos.reduce((total, pedido) => total + calcularPrecioTotal(pedido.comidas), 0);
    }

    return (
        <Container className="mt-5">
            <h3>Pedidos Listos</h3>
            {pedidosListos.length === 0 ? (
                <h4>No hay pedidos listos</h4>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Telefono</th>
                            <th>Cantidad</th>
                            <th>Comida</th>
                            <th>Extras/Opciones</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidosListos.map((pedido, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{pedido.nombre}</td>
                                <td>{pedido.direccion}</td>
                                <td>{pedido.telefono}</td>
                                <td> {pedido.comidas.map((item, idx) => (
                                    <div key={idx}>
                                        {item.cantidad}
                                    </div>
                                ))}</td>
                                <td>
                                    {pedido.comidas.map((item, idx) => (
                                        <div key={idx}>
                                            {item.comida} (${item.precio} c/u)
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    {pedido.comidas.map((item, idx) => (
                                        <div key={idx}>
                                            {item.extras.length > 0 && (
                                                <> - {item.extras.join(', ')}</>
                                            )}
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    ${calcularPrecioTotal(pedido.comidas)} {/* Muestra el precio total */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            <h3>Total del dia: ${CalcularTotalDelDia(pedidosListos)} </h3>

        </Container>
    );
};
