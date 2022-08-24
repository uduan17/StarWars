import './footer.css';
import logo from '../Imagen/logo.png'
import { BsGithub } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { FaFacebookF } from 'react-icons/fa'

function HeaderAndFooterExample() {
  return (
<div className='bg-black'>
  <div className='d-flex  flex-wrapp text-light  contenedor' >
    <div className="p-5">
    <img width={80} className='d-inline' src={logo}/>
    </div>
    <div className="p-4">
    <h3>Jose Uduan Hurtado</h3>
        <p>Mi Primera Api</p>
    </div>
      <div className='text-light p-5'>
      <CgMail size={40}/>
      <BsGithub size={30}/>
      <FaFacebookF size={30}/>
    </div>
  </div>
   <p className='text-center bg-black text-light'>Todos los derechos reservados@2022</p>
</div>
  );
};

export default HeaderAndFooterExample;