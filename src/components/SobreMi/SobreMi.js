import './Sobremi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function SobreMi() {
  return (
    <div className="bio">
      <div className="tiuloBio">
        <h1>Fabio Kunis</h1>
      </div>
      <section clasName="carrusel">
        <div className="fotosEfeKa">
          <ul>
            <li><img className="foto" src= "/documents/fotoEfeKa1.jpg" alt="fotoEfeKa1" width="50%"></img></li>
            <li><img className="foto" src= "/documents/fotoEfeKa2.jpg" alt="fotoEfeKa2" width="50%"></img></li>
            <li><img className="foto" src= "/documents/fotoEfeKa3.jpg" alt="fotoEfeKa3" width="50%"></img></li>
          </ul>
        </div>
      </section>
      <div className="descripcion">
        <p>
        Fabio Kunis (27 de Abril de 1995) es un Filmmaker residente de la ciudad de Buenos Aires. Con bases de formacion como Licenciado en Diseño Audiovisual en la Universidad Argentina de la Empresa, actualmente se dedica mayormente a la realizacion de Videoclips de artistas emergentes de la musica urbana.
        </p>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/fkunis/"><FontAwesomeIcon icon={['fab', 'instagram']} className="fab fa-instagram iconContacto iconSobreMi"></FontAwesomeIcon></a>
      </div>
    </div>
  );
}

export default SobreMi;
