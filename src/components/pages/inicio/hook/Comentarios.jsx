import { useEffect, useState } from 'react';
import './Comentarios.css';
import Estrellas from './Estrellas';

const Comentarios = () => {
    // Estado para almacenar los usuarios obtenidos del fetch
    const [users, setUser] = useState([]);

    // Función para realizar el fetch de los datos de usuarios desde la API
    const fetchUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUser(data); // Guardamos los datos en el estado "users"
        } catch (error) {
            // dejo el console.error y no muestro un msj al  usuario porque el llamado al fetch se hace con comentarios estaticos es decir que no lo llamamos a traves de una busqueda
            console.error("Ocurrió un error al obtener los datos de usuarios, por favor intenta nuevamente.");
        }
    };

    // Hook useEffect que se ejecuta al montar el componente para realizar el fetch de usuarios
    useEffect(() => {
        fetchUser();
    }, []); // El array vacío asegura que el fetch se realice solo una vez al cargar el componente

    // Array de comentarios que se mostrarán junto a los datos de los usuarios
    const comentarios = [
        "¡Un lugar increíble, definitivamente volveré!",
        "La comida estaba deliciosa, muy recomendado.",
        "El servicio fue excepcional, me sentí como en casa.",
        "Ambiente acogedor y comida exquisita.",
        "Una experiencia gastronómica inolvidable.",
        "Cada plato fue una delicia, excelente atención.",
        "El mejor restaurante en la ciudad, sin duda.",
        "Comida deliciosa y un ambiente encantador.",
        "Gran experiencia culinaria, muy buen servicio.",
        "El lugar perfecto para una cena especial."
    ];

    return (
        <>
            <div className="container">
                <h3> TU OPINIÓN ES IMPORTANTE PARA NOSOTROS</h3>
                <p>DÍA A DÍA NUESTROS CLIENTES NOS AYUDAN A MEJORAR Y CRECER HACIÉNDONOS LLEGAR SUS EXPERIENCIAS</p>
            </div>

            <div className="contenedor_listas">
                <div className="contenedor_listas_card">
                    {/* Iteramos sobre el array de usuarios para mostrar sus datos junto a un comentario */}
                    {users.map((user, index) => (
                        <div className="resena" key={user.id}>
                            <Estrellas value={3.8} /> 
                            <p><strong>Comentario:</strong> {comentarios[index % comentarios.length]}</p> 
                            <p><strong>Nombre:</strong> {user.name}</p> 
                            <p><strong>Apellido:</strong> {user.username}</p> 
                            <p><strong>Email:</strong> {user.email}</p> 
                            <p><strong>Ciudad:</strong> {user.address.city}</p> 
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Comentarios;


