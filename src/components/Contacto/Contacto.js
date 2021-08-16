import './Contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function Contacto() {
  return (
    <div>
      <div className="infoContacto">
        <h2 className="tituloContacto">Email</h2>
        <h3>efekafilms@gmail.com</h3>
        <h2 className="tituloContacto">Celular</h2>
        <h3>15-6861-9696</h3>
      </div>
      <div className="icons">
        <a href="mailto:efekafilms@gmail.com"><FontAwesomeIcon icon={['fab', 'google']} className="fab fa-google iconContacto"></FontAwesomeIcon></a>
        <a href="https://www.instagram.com/efe_ka_/"><FontAwesomeIcon icon={['fab', 'instagram']} className="fab fa-instagram iconContacto"></FontAwesomeIcon></a>
        <a href="https://wa.link/xa5qx5"><FontAwesomeIcon icon={['fab', 'whatsapp']} className="fab fa-whatsapp iconContacto"/></a>
      </div>
    </div>
  );
}

export default Contacto;
