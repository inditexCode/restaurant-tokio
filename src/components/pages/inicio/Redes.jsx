
 import './Redes.css'
 import FacebookIcon from '@mui/icons-material/Facebook';
 import InstagramIcon from '@mui/icons-material/Instagram';
 import XIcon from '@mui/icons-material/X';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';


 const face = 'https://es-es.facebook.com/'
 const insta = 'https://www.instagram.com/'
 const twt = 'https://x.com/'
 const li = 'https://www.linkedin.com/'
 const Redes = () => {
  return (
    <div className='container_redes'>
        <p>SEGUINOS EN NUESTRAS REDES SOCIALES</p>
      <div className="container_links">
        <a href={ face } target="_blank" rel="noopener noreferrer"> 
        <FacebookIcon className='redes'></FacebookIcon>
         </a>
         <a href={insta  } target="_blank" rel="noopener noreferrer"> 
        <InstagramIcon className='redes'></InstagramIcon>
         </a>
         <a href={ twt } target="_blank" rel="noopener noreferrer"> 
        <XIcon className='redes'></XIcon>
         </a>
         <a href={ li } target="_blank" rel="noopener noreferrer"> 
        <LinkedInIcon className='redes'></LinkedInIcon>
         </a>
       
      </div>
    </div>
  )
}

export default Redes
