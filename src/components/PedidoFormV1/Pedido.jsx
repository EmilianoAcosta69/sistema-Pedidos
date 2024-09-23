// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import './PedidoForm.css';
// import DeleteIcon from '@mui/icons-material/Delete';
// import formData from '/Users/WINDOWS 10/Desktop/SistemaJavucho/javucho/src/pedidos.json';

// const PedidoForm = () => {
//     const [comidaSeleccionada, setComidaSeleccionada] = useState(null);
//     const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
//     const extrasDisponibles = {
//         sangucheCarneComun: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],
//         sangucheCarneEspecial: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],
//         sangucheCarnePara2: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],

//         sanguchePolloComun: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],
//         sanguchePolloEspecial: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],
//         sanguchePolloPara2: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],

//         hamburguesaComun: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],
//         hamburguesaEspecial: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],
//         hamburguesaDoble: ['Solo Verdura', 'Solo Mayonesa', 'Solo Savora', 'Verdura y Mayonesa', 'Verdura y Savora ', 'Completo', 'Completo Sin Aji', 'JQH'],

//         napolitana: ['con jamon' , 'sin salsa'],
//         suprema: ['con jamon' , 'sin salsa'],
//     };
//     const preciosComida1 = {
//         pizzaComun: 2000,
//         pizzaEspecial: 2000,
//         pizzaTernera: 2000,
//         pizzaNapolitana: 2000,
//         pizzaCalabrea: 2000,
//         pizzaFugazetta: 2000,

//         sangucheCarneComun: 2000,
//         sangucheCarneEspecial: 2000,
//         sangucheCarnePara2: 2000,

//         sanguchePolloComun: 2000,
//         sanguchePolloEspecial: 2000,
//         sanguchePolloPara2: 2000,

//         hamburguesaComun: 2000,
//         hamburguesaEspecial: 2000,
//         hamburguesaDoble: 2000,

//         napolitana: 2000,
//         suprema: 2000,

//         papas: 2000,
//         papasGratinadas: 2000,

//         gaseosa: 2000,
//     };




//     // Declaración del estado
//     const [formData, setFormData] = useState({
//         nombre: '',
//         direccion: '',
//         comidas: [],
//         cantidad: 1,
//         extras: {},
//         optionNapolitana: {},
//         optionPizza: {},

//     });

//     const [currentComida, setCurrentComida] = useState({
//         comida: '',
//         cantidad: 1,
//         extras: {},
//         optionNapolitana: {},
//         optionPizza: {},
//         precio: 0
//     });

//     const handleChange = (e) => {
//         const { name, type, checked, value } = e.target;

//         if (type === "checkbox") {
//             // Manejo de extras
//             if (formData.extras.hasOwnProperty(name)) {
//                 setFormData((prev) => ({
//                     ...prev,
//                     extras: {
//                         ...prev.extras,
//                         [name]: checked,
//                     },
//                 }));
//             }
//             // Manejo de opciones de napolitana
//             else if (formData.optionNapolitana.hasOwnProperty(name)) {
//                 setFormData((prev) => ({
//                     ...prev,
//                     optionNapolitana: {
//                         ...prev.optionNapolitana,
//                         [name]: checked,
//                     },
//                 }));
//             }
//             // Manejo de opciones de pizza
//             else if (formData.optionPizza.hasOwnProperty(name)) {
//                 setFormData((prev) => ({
//                     ...prev,
//                     optionPizza: {
//                         ...prev.optionPizza,
//                         [name]: checked,
//                     },
//                 }));
//             }
//         } else {
//             // Manejo de otros tipos de inputs
//             setFormData((prev) => ({
//                 ...prev,
//                 [name]: value,
//             }));
//         }
//     };


//     const handleAgregarPedido = (e) => {
//         e.preventDefault();

//         setFormData((formData) => ({
//             ...formData,
//             comidas: [
//                 ...formData.comidas,
//                 {
//                     ...currentComida,
//                     precio: preciosComida1[currentComida.comida] * currentComida.cantidad
//                 }
//             ]
//         }));

//         setCurrentComida({
//             comida: '',
//             cantidad: 1,
//             extras: {},
//             optionNapolitana: {},
//             optionPizza: {},
//             precio: 0
//         });
//     };

//     const handleComidaChange = (e) => {
//         const { name, options } = e.target;

//         // Obtener los valores seleccionados del select múltiple
//         const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);

//         setCurrentComida((prevComida) => ({
//             ...prevComida,
//             [name]: selectedOptions // Actualizar los extras con las opciones seleccionadas
//         }));
//     };

//     const handleCancelar = () => {
//         setFormData({
//             nombre: '',
//             direccion: '',
//             comidas: [],
//         });
//         setCurrentComida({
//             comida: '',
//             cantidad: 1,
//             extras: {},
//             optionNapolitana: {},
//             optionPizza: {},
//             precio: 0
//         });
//     };
//     const handleEliminarItem = (index) => {
//         const nuevosItems = formData.comidas.filter((_, i) => i !== index);
//         const nuevoTotal = nuevosItems.reduce((acc, item) => acc + item.precioTotal, 0);

//         setFormData({ ...formData, comidas: nuevosItems });
//         setTotal(nuevoTotal);
//     };


//     return (
//         <>
//             <h1>Javucho - Realizar Pedido</h1>
//             <Form onSubmit={handleAgregarPedido}>
//                 <div className='m-auto'>
//                     <Form.Group className="mb-3" controlId="formNombre">
//                         <Form.Label>Nombre del cliente</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Nombre del cliente"
//                             name="nombre"
//                             value={formData.nombre}
//                             onChange={handleChange}
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formDireccion">
//                         <Form.Label>Dirección</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Direccion del cliente"
//                             name="direccion"
//                             value={formData.direccion}
//                             onChange={handleChange}
//                             required
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formOpcionComida">
//                         <Form.Label>Elige tu comida</Form.Label>
//                         <div className="d-flex flex-wrap w-100 m-auto">
//                             {/* Botones para seleccionar comidas */}
//                             {Object.keys(preciosComida1).map((comida) => ( 
//                                 <Button
//                                     key={comida}
//                                     variant={comidaSeleccionada === comida ? 'primary' : 'outline-primary'}
//                                     onClick={() => {
//                                         setComidaSeleccionada(comida);
//                                         setCantidadSeleccionada(1); // Reiniciar cantidad al seleccionar comida
//                                     }}
//                                     className="mx-2 mb-2"
//                                 >
//                                     {comida.charAt(0).toUpperCase() + comida.slice(1)}
//                                 </Button>
//                             ))}
//                         </div>

//                         {(comidaSeleccionada === 'sangucheCarneComun' || comidaSeleccionada === 'sangucheCarneEspecial' || comidaSeleccionada === 'sangucheCarnePara2' 
//                             || comidaSeleccionada === 'hamburguesaComun' || comidaSeleccionada === 'hamburguesaEspecial' || comidaSeleccionada === 'hamburguesaDoble' 
//                             || comidaSeleccionada === 'sanguchePolloComun' || comidaSeleccionada === 'sanguchePolloEspecial' || comidaSeleccionada === 'sanguchePolloPara2'

//                         )
//                         && 
//                         (
//                             <div className="mt-3">
//                                 <Form.Label>Elige tus extras</Form.Label>
//                                 <Form.Control
//                                     as="select"
//                                     multiple
//                                     name="extras" // Nombre del campo que actualizará los extras
//                                     value={currentComida.extras || []} // El estado actual de los extras seleccionados
//                                     onChange={handleComidaChange} // Asignamos la función handleComidaChange
//                                 >
//                                     {extrasDisponibles[comidaSeleccionada].map((extra) => (
//                                         <option key={extra} value={extra}>
//                                             {extra}
//                                         </option>
//                                     ))}
//                                 </Form.Control>
//                             </div>
//                         )}



//                         {(comidaSeleccionada === 'napolitana' || comidaSeleccionada === 'suprema') && (
//                             <div className="mt-3">
//                                 <Form.Label>Elige tus extras</Form.Label>
//                                 <Form.Control
//                                     as="select"
//                                     multiple
//                                     value={Object.keys(formData.comidas.find(item => item.comida === comidaSeleccionada)?.extras || {}).filter(extra => formData.comidas.find(item => item.comida === comidaSeleccionada)?.extras[extra])}
//                                     onChange={(e) => {
//                                         const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
//                                         setFormData((prev) => ({
//                                             ...prev,
//                                             comidas: prev.comidas.map(item => {
//                                                 if (item.comida === comidaSeleccionada) {
//                                                     const updatedExtras = {};
//                                                     extrasDisponibles[comidaSeleccionada].forEach(extra => {
//                                                         updatedExtras[extra] = selectedOptions.includes(extra);
//                                                     });
//                                                     return {
//                                                         ...item,
//                                                         extras: updatedExtras,
//                                                     };
//                                                 }
//                                                 return item;
//                                             }),
//                                         }));
//                                     }}
//                                 >
//                                     {extrasDisponibles[comidaSeleccionada].map((extra) => (
//                                         <option key={extra} value={extra}>
//                                             {extra}
//                                         </option>
//                                     ))}
//                                 </Form.Control>
//                             </div>
//                         )}


//                         {(comidaSeleccionada === 'pizza') && (
//                             <div className="mt-3">
//                                 <Form.Label>Elige tus extras</Form.Label>
//                                 {extrasDisponibles[comidaSeleccionada].map((extra) => (
//                                     <Form.Check
//                                         key={extra}
//                                         type="checkbox"
//                                         label={extra}
//                                         onChange={(e) => {
//                                             const { checked } = e.target;
//                                             setFormData((prev) => ({
//                                                 ...prev,
//                                                 comidas: prev.comidas.map(item => {
//                                                     if (item.comida === comidaSeleccionada) {
//                                                         return {
//                                                             ...item,
//                                                             extras: {
//                                                                 ...item.extras,
//                                                                 [extra]: checked,
//                                                             },
//                                                         };
//                                                     }
//                                                     return item;
//                                                 }),
//                                             }));
//                                         }}
//                                     />
//                                 ))}
//                             </div>
//                         )}


//                         <div className="m-auto">
//                             <Button
//                                 variant="outline-secondary"
//                                 onClick={() => setCantidadSeleccionada(Math.max(1, cantidadSeleccionada - 1))}
//                                 className="mx-2"
//                             >
//                                 -
//                             </Button>
//                             <span>{cantidadSeleccionada}</span>
//                             <Button
//                                 variant="outline-secondary"
//                                 onClick={() => setCantidadSeleccionada(cantidadSeleccionada + 1)}
//                                 className="mx-2"
//                             >
//                                 +
//                             </Button>
//                         </div>

//                         <Button
//                             variant="success"
//                             onClick={() => {
//                                 if (comidaSeleccionada) {
//                                     const comidaYaSeleccionada = formData.comidas.find(item => item.comida === comidaSeleccionada);
//                                     const extrasSeleccionados = formData.comidas.find(item => item.comida === comidaSeleccionada)?.extras || {};
//                                     if (comidaYaSeleccionada) {
//                                         // Aumentar la cantidad
//                                         const comidasActualizadas = formData.comidas.map(item =>
//                                             item.comida === comidaSeleccionada
//                                                 ? { ...item, cantidad: item.cantidad + cantidadSeleccionada }
//                                                 : item
//                                         );
//                                         setFormData({ ...formData, comidas: comidasActualizadas });
//                                     } else {
//                                         // Agregar nueva comida
//                                         setFormData({
//                                             ...formData,
//                                             comidas: [
//                                                 ...formData.comidas,
//                                                 {
//                                                     comida: comidaSeleccionada,
//                                                     cantidad: cantidadSeleccionada,
//                                                     extras: { ...extrasSeleccionados },
//                                                     optionNapolitana: {},
//                                                     optionPizza: {},
//                                                     precio: preciosComida1[comidaSeleccionada]
//                                                 }
//                                             ]
//                                         });
//                                     }
//                                     setComidaSeleccionada(null);
//                                     setCantidadSeleccionada(1);
//                                 }
//                             }}
//                             className="mt-3"
//                         >
//                             Agregar Comida
//                         </Button>
//                     </Form.Group>

//                 </div>
//                 {/* Mostrar ingredientes extras solo si el usuario selecciona Sanguche o Hamburguesa */}
//                 {formData.comidas.some(item => item.comida === 'sanguche' || item.comida === 'hamburguesa') && (
//                     <Form.Group className="mb-3">
//                         <Form.Label>Elige tus extras</Form.Label>
//                         <div className='d-block'>
//                             {/* Checkbox para extras */}
//                             {Object.keys(formData.extras).map((extra) => (
//                                 <Form.Check
//                                     key={extra}
//                                     type="checkbox"
//                                     label={extra.charAt(0).toUpperCase() + extra.slice(1)}
//                                     name={extra}
//                                     checked={formData.extras[extra]}
//                                     onChange={handleChange}
//                                 />
//                             ))}
//                         </div>
//                     </Form.Group>
//                 )}
//                 {/* Mostrar opciones si el usuario selecciona napolitana o suprema */}
//                 {(formData.comidas.napolitana || formData.comidas.suprema) && (
//                     <Form.Group className="mb-3">
//                         <Form.Label>Elige tus opciones</Form.Label>
//                         <div className='d-block'>
//                             {Object.keys(formData.optionNapolitana).map((option) => (
//                                 <Form.Check
//                                     key={option}
//                                     type="checkbox"
//                                     label={option.charAt(0).toUpperCase() + option.slice(1)}
//                                     name={option}
//                                     checked={formData.optionNapolitana[option]}
//                                     onChange={handleChange}
//                                 />
//                             ))}
//                         </div>
//                     </Form.Group>
//                 )}
//                 {/* Mostrar opciones si el usuario selecciona pizza */}
//                 {formData.comidas.pizza && (
//                     <Form.Group className="mb-3">
//                         <Form.Label>Elige tus opciones</Form.Label>
//                         <div className='d-block'>
//                             {Object.keys(formData.optionPizza).map((option) => (
//                                 <Form.Check
//                                     key={option}
//                                     type="checkbox"
//                                     label={option.charAt(0).toUpperCase() + option.slice(1)}
//                                     name={option}
//                                     checked={formData.optionPizza[option]}
//                                     onChange={handleChange}
//                                 />
//                             ))}
//                         </div>
//                     </Form.Group>
//                 )}


//                 {/* Mostrar el pedido en un área */}
//                 <div className="my-4 border border-dark">
//                     <h5 className='my-3'>Pedido: {formData.nombre}</h5>
//                     <table className='w-100 p-0 border'>
//                         <tbody>
//                             {formData.comidas.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>
//                                         {item.cantidad} {item.comida}
//                                         {/* Mostrar extras si hay alguno seleccionado */}
//                                         {item.extras && item.extras.length > 0 && (
//                                             <span> con {item.extras.join(', ')}</span>
//                                         )}

//                                         - ${item.precio} c/u - Total: ${item.precio * item.cantidad}
//                                     </td>
//                                     <td>
//                                         <button className='btn btn-danger mx-3 my-2' onClick={() => handleEliminarItem(index)}>
//                                             <DeleteIcon />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>


//                 <Button className='btnCancelarPedido mx-2' variant="danger" type="button" onClick={handleCancelar}>
//                     Cancelar
//                 </Button>

//                 <Button className='btnConfirmarPedido mx-2' onClick={handleConfirmar} variant="success" type="button">
//                     Confirmar Pedido
//                 </Button>

//             </Form>
//         </>
//     );
// };

// export default PedidoForm;


import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import './Pedido.css';

const Pedido = () => {
    // Definir el menú con las comidas y extras disponibles
    const menu = {
        pizzas: {
            items: [
                { nombre: 'pizzaComun', precio: 2000 },
                { nombre: 'pizzaEspecial', precio: 2500 },
                { nombre: 'pizzaCalabresa', precio: 2500 },
                { nombre: 'pizzaTernra', precio: 2500 },
                { nombre: 'pizzaFugazetta', precio: 2500 },
                { nombre: 'pizzaNapolitana', precio: 2500 }

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
