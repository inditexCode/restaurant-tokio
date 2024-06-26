import { useEffect, useState } from 'react';
import './Comentarios.css';
import Estrellas from './Estrellas';

const Comentarios = () => {
    const [users, setUser] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
            setUser(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    // Array: decidi hacerlo en el mismo componente para no hacer tantos componentes, pero podria haber hecho el fetch y el array en distintos componentes
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


