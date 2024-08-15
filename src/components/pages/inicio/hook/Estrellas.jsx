import React from 'react'; // Importa React para poder usar JSX
import Box from '@mui/material/Box'; // Importa el componente Box de Material UI para el diseño
import Rating from '@mui/material/Rating'; // Importa el componente Rating de Material UI para mostrar la calificación
import StarIcon from '@mui/icons-material/Star'; // Importa el ícono de estrella de Material UI

// Objeto que mapea los valores de calificación a sus descripciones textuales
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: '',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

// Componente de calificación por estrellas
const StarRating = ({ value = 3.8 }) => {
  return (
    <Box
      sx={{
        width: 200, // Ancho del contenedor de calificación
        display: 'flex', // Usa flexbox para alinear los elementos
        alignItems: 'center', // Alinea verticalmente el contenido
      }}
    >
      <Rating
        name="text-feedback" // Nombre para el componente Rating, útil para accesibilidad y pruebas
        value={value} // Valor actual de la calificación (propiedad que se puede pasar al componente)
        readOnly // Hace que la calificación sea solo lectura (no editable por el usuario)
        precision={0.5} // Permite media estrella en la calificación
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} // Ícono para estrellas vacías
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box> {/* Muestra la descripción textual basada en el valor */}
    </Box>
  );
};

export default StarRating; // Exporta el componente StarRating para su uso en otras partes de la aplicación
