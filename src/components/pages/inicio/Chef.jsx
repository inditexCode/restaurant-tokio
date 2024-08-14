import './Chef.css'
import chef from './video-img/chef.jpg';  
import chefSombrero from './video-img/sombrero-de-cocinero.png';  


const Chef = () => {
  return (

    <div className='conteiner'>  
        <div className="conteiner_tex">
            <h3>LUIGI DI MARCO <img src={ chefSombrero } alt="sombrer" className='icono' /></h3>
            <h6>DESDE LA PRESTIGIOSA CIUDAD DE NÁPOLES - ITALIA, DONDE NACIO UNO DE LOS CHEF MÁS RECONOCIDO.  </h6>
            <p> 
            Luigi Di Marco nació en la vibrante ciudad de Nápoles, conocida por su rica tradición culinaria y su amor por la buena comida. Desde joven, Luigi mostró una pasión innata por la cocina, influenciado por los sabores y aromas que emanaban de la cocina de su abuela. Ella le enseñó los secretos de la auténtica cocina napolitana, una influencia que ha dejado una huella indeleble en su estilo culinario.
            Decidido a perfeccionar su arte, Luigi se matriculó en la prestigiosa Escuela de Cocina Italiana de Nápoles, donde se formó bajo la tutela de algunos de los chefs más reconocidos de Italia. Durante su formación, Luigi no solo aprendió las técnicas tradicionales, sino que también desarrolló una profunda comprensión de los ingredientes frescos y de temporada, así como una gran habilidad para combinar sabores de manera innovadora.
            Tras graduarse, Luigi trabajó en varios restaurantes de renombre en Italia, donde perfeccionó su talento y ganó reconocimiento por su capacidad para crear platos que celebran la esencia de la cocina italiana. Su especialidad radica en la preparación de pastas frescas, risottos cremosos y pizzas auténticas napolitanas, cada uno preparado con una dedicación meticulosa y un respeto absoluto por las tradiciones culinarias de su tierra natal.
            En busca de nuevas experiencias y retos, Luigi se trasladó a España, donde encontró en il Napoli el lugar perfecto para compartir su pasión por la cocina italiana con un público internacional. Como chef principal de il Napoli, Luigi ha sido fundamental en la creación de un menú que refleja la riqueza y diversidad de la gastronomía italiana, combinando clásicos tradicionales con toques modernos que deleitan a los comensales.
            Luigi se enorgullece de su herencia napolitana y se esfuerza por llevar un pedazo de Italia a cada plato que sirve. Su dedicación, creatividad y amor por la cocina se reflejan en cada bocado, haciendo de una comida en il Napoli una experiencia inolvidable para todos los que tienen el placer de disfrutar de sus creaciones.
            </p>
        </div>
        <img className='img_luigi' src={ chef } alt="" />
    </div>
    
  )
}

export default Chef
