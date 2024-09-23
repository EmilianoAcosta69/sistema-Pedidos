import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';

const VerPedidoPage = () => {
    const [pedidos, setPedidos] = useState([]);
    const [pedidosListos, setPedidosListos] = useState([]);

    useEffect(() => {
        // Cargar pedidos del localStorage
        const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];
        setPedidos(pedidosGuardados);

        // Cargar pedidos listos del localStorage
        const pedidosListosGuardados = JSON.parse(localStorage.getItem("pedidosListos")) || [];
        setPedidosListos(pedidosListosGuardados);
    }, []);

    // Función para manejar la cancelación del pedido
    const handleCancelarPedido = (index) => {
        const nuevosPedidos = pedidos.filter((_, i) => i !== index);
        setPedidos(nuevosPedidos);
        localStorage.setItem("pedidos", JSON.stringify(nuevosPedidos));
    };

    // Función para manejar el pedido como "Listo"
    const handlePedidoListo = (index) => {
        const pedidoListo = pedidos[index]; // Obtener el pedido actual
        const nuevosPedidosListos = [...pedidosListos, pedidoListo]; // Agregarlo a la lista de pedidos listos
        setPedidosListos(nuevosPedidosListos);
        localStorage.setItem("pedidosListos", JSON.stringify(nuevosPedidosListos));

        // Eliminar el pedido de la lista de pedidos pendientes
        handleCancelarPedido(index);
    };

    return (
        <Container className="mt-5">
            <Row>
                {pedidos.length === 0 ? (
                    <h3>No hay pedidos confirmados</h3>
                ) : (
                    pedidos.map((pedido, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title className=''>Nombre: {pedido.nombre}</Card.Title>
                                    <Card.Text>Dirección: {pedido.direccion}</Card.Text>
                                    <Card.Text>Telefono: {pedido.telefono}</Card.Text>
                                    
                                    <hr className='my-4' />

                                    <Card.Text>
                                        Comidas:
                                        <div>
                                            {pedido.comidas.map((item, idx) => (
                                                <div key={idx}>
                                                    <strong>
                                                        {item.cantidad}- {item.comida}
                                                    </strong>
                                                    {item.extras.length > 0 && (
                                                        <> - {item.extras.join(', ')}</>
                                                    )}

                                                </div>
                                            ))}
                                        </div>
                                    </Card.Text>
                                    <hr className='my-4' />
                                    <div className='d-flex m-auto'>
                                        <Button
                                            className='mx-2 w-100 p-1'
                                            variant='danger'
                                            onClick={() => handleCancelarPedido(index)}
                                        >
                                            Cancelar <span className="icon"><CancelIcon /></span>
                                        </Button>
                                        <Button
                                            className='mx-2 w-100 p-1'
                                            variant='success'
                                            onClick={() => handlePedidoListo(index)}
                                        >
                                            Listo <span className="icon"><CheckBoxIcon /></span>
                                        </Button>
                                    </div>

                                </Card.Body>

                            </Card>


                        </Col>
                    ))
                )}
            </Row>
            {/* Mostrar tabla de pedidos listos */}

        </Container>
    );
};

export default VerPedidoPage;
