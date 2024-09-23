import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';

const Pedido = () => {
    // Definir el menú con las comidas y extras disponibles
    const menu = {
        pizzas: {
            items: [
                { nombre: 'Pizza Comun', precio: 2000 },
                { nombre: 'Pizza Especial', precio: 2500 },
                { nombre: 'Pizza Calabresa', precio: 2500 },
                { nombre: 'Pizza Ternra', precio: 2500 },
                { nombre: 'Pizza Fugazetta', precio: 2500 },
                { nombre: 'Pizza Napolitana', precio: 2500 }

            ],
            extras: ['Queso Extra', 'Aceitunas', 'Jamón', 'Huevo', 'Sin salsa'],
        },
        sanguches: {
            items: [
                { nombre: 'Sanguche de Carne Comun', precio: 2000 },
                { nombre: 'Sanguche de Carne Especial', precio: 2300 },
                { nombre: 'Sanguche de Carne P/2', precio: 2300 },
                { nombre: 'Sanguche de Pollo Comun', precio: 2000 },
                { nombre: 'Sanguche de Pollo Especial', precio: 2300 },
                { nombre: 'Sanguche de Pollo P/2', precio: 2300 }

            ],
            extras: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],
        },
        hamburguesas: {
            items: [
                { nombre: 'Hamburguesa Comun', precio: 1800 },
                { nombre: 'Hamburguesa Especial', precio: 2200 },
                { nombre: 'Hamburguesa Doble', precio: 2200 }
            ],
            extras: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],
        },
        alPlato: {
            items: [
                { nombre: 'Napolitana', precio: 2000 },
                { nombre: 'Suprema', precio: 2000 },
                { nombre: 'Papas Fritas', precio: 2000 },
                { nombre: 'Papas Fritas Gratinadas', precio: 2000 }
            ],
            extras:['Sin salsa', 'Huevo extra' ],
        },
        Bebidas: {
            items: [
                { nombre: 'Gaseosa', precio: 2000 },
                { nombre: 'Agua', precio: 2000 },
                { nombre: 'Jugo', precio: 2000 },
            ],
            extras:['500ml' , '1L' , '1,25L'],
        }
    };

    // Estados para gestionar las selecciones del pedido
    const [pedido, setPedido] = useState([]);
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [comidaSeleccionada, setComidaSeleccionada] = useState(null);
    const [menuCategoria, setMenuCategoria] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [extrasSeleccionados, setExtrasSeleccionados] = useState([]);

    // Manejar el cambio de la comida seleccionada
    const handleComidaChange = (e) => {
        const { value } = e.target;
        const categoria = Object.keys(menu).find(categoria =>
            menu[categoria].items.some(comida => comida.nombre === value)
        );
        setComidaSeleccionada(value);
        setMenuCategoria(categoria);
        setExtrasSeleccionados([]); // Resetear extras
    };

    // Manejar el cambio de los extras seleccionados
    const handleExtrasChange = (e) => {
        const { options } = e.target;
        const seleccionados = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setExtrasSeleccionados(seleccionados);
    };

    // Agregar comida al pedido
    const handleAgregarPedido = () => {
        const comidaInfo = menu[menuCategoria].items.find(item => item.nombre === comidaSeleccionada);
        const nuevaComida = {
            comida: comidaSeleccionada,
            cantidad,
            extras: extrasSeleccionados,
            precio: comidaInfo.precio * cantidad
        };

        setPedido([...pedido, nuevaComida]);
        // Resetear selección
        setComidaSeleccionada(null);
        setCantidad(1);
        setExtrasSeleccionados([]);
    };

    // Eliminar un item del pedido
    const handleEliminarItem = (index) => {
        const nuevoPedido = pedido.filter((_, i) => i !== index);
        setPedido(nuevoPedido);
    };

    // Confirmar Pedido
    const handleConfirmar = () => {
        const pedidoConfirmado = {
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            comidas: pedido,
            precioTotal: pedido.reduce((total, comida) => total + comida.precio, 0),
        };

        if (!nombre || !direccion || !telefono || pedido.length === 0) {
            alert('Por favor, completa todos los campos requeridos antes de confirmar el pedido.');
            return; 
        }

        const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidosGuardados.push(pedidoConfirmado);
        localStorage.setItem('pedidos', JSON.stringify(pedidosGuardados));

        alert('Pedido confirmado y guardado exitosamente.');

        setNombre('');
        setDireccion('');
        setTelefono('');
        setPedido([]);
    };

    const handleCancelarPedido = () =>{
        setNombre('');
        setDireccion('');
        setTelefono('');
        setPedido([]);
    }

    // Calcular el total del pedido
    const totalPedido = pedido.reduce((acc, item) => acc + item.precio, 0);

    return (
        <div className="container mt-5">
            <h3>Realiza tu Pedido</h3>
            <Form>
                {/* Datos del Cliente */}
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Control
                        type="text"
                        placeholder="Nombre del Cliente"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDireccion">
                    <Form.Control
                        type="text"
                        placeholder="Dirección del cliente"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Control
                        type="number"
                        placeholder="Número del cliente"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Selección de comida */}
                <Form.Group controlId="formOpcionComida">
                    <Form.Label>Elige tu comida</Form.Label>
                    <select value={comidaSeleccionada || ''} onChange={handleComidaChange} className="form-control">
                        <option value="">Seleccionar comida</option>
                        {Object.keys(menu).map((categoria) => (
                            <optgroup key={categoria} label={categoria}>
                                {menu[categoria].items.map((comida) => (
                                    <option key={comida.nombre} value={comida.nombre}>
                                        {comida.nombre} - ${comida.precio}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                </Form.Group>

                {/* Selección de extras según la comida seleccionada */}
                {comidaSeleccionada && (
                    <Form.Group controlId="formExtras" className="mt-3">
                        <Form.Label>Elige tus extras</Form.Label>
                        <select multiple value={extrasSeleccionados} onChange={handleExtrasChange} className="form-control">
                            {menu[menuCategoria].extras.map((extra) => (
                                <option key={extra} value={extra}>
                                    {extra}
                                </option>
                            ))}
                        </select>
                    </Form.Group>
                )}

                {/* Selección de cantidad */}
                <Form.Group controlId="formCantidad" className="mt-3">
                    <Form.Label>Cantidad</Form.Label>
                    <div className="d-flex">
                        <Button variant="outline-secondary" onClick={() => setCantidad(Math.max(1, cantidad - 1))}>-</Button>
                        <span className="mx-2">{cantidad}</span>
                        <Button variant="outline-secondary" onClick={() => setCantidad(cantidad + 1)}>+</Button>
                    </div>
                </Form.Group>

                {/* Botón para agregar al pedido */}
                <Button variant="success" className="mt-3" onClick={handleAgregarPedido}>
                    Agregar Comida
                </Button>
            </Form>

            {/* Mostrar el pedido */}
            <div className="my-4 border border-dark">
                <p className='my-3'> <strong>Pedido de:</strong>   {nombre}</p>
                <p><strong>Dirección:</strong> {direccion}</p>
                <p><strong>Teléfono:</strong> {telefono}</p>
                <table className="w-100 p-0 border text-center m-auto">
                    <tbody >
                        {pedido.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item.cantidad} - {item.comida}
                                    {item.extras.length > 0 && (
                                        <> - {item.extras.join(', ')}</>
                                    )}
                                    - ${item.precio} c/u - Total: ${item.precio * item.cantidad}
                                </td>
                                <td>
                                    <button className="btn btn-danger mx-3 my-2" onClick={() => handleEliminarItem(index)}>
                                        <DeleteIcon />
                                    </button>
                                </td>

                            </tr>
                        ))}
                        <h3>Total: ${totalPedido}</h3>

                    </tbody>
                </table>
            </div>

            {/* Mostrar el total */}

            <Button variant="danger" className="mt-3 mx-3" onClick={handleCancelarPedido}>
                Cancelar
            </Button>
            <Button variant="primary" className="mt-3 mx-3" onClick={handleConfirmar}>
                Confirmar Pedido
            </Button>
        </div>
    );
};

export default Pedido;
