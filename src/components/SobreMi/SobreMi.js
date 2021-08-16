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
      <div>
        <img className="foto" src= "/documents/fotoEfeKa.png" alt="fotoEfeKa" width="50%"></img>
      </div>
      <div className="descripcion">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum quis lacus efficitur pellentesque. Maecenas quis mauris non ligula dictum vestibulum a eget mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eu sem lectus. Quisque lacinia massa eget dictum mollis. Mauris vitae eros lectus. Vivamus porttitor non nibh a bibendum. Sed tincidunt erat ac ex dapibus, nec auctor sapien laoreet. Nam mollis dolor a enim rhoncus, in suscipit purus consequat. Etiam volutpat tincidunt fermentum. Maecenas pretium, erat non varius tempus, dui tortor convallis orci, auctor mattis sem lectus non dui. Vivamus et rutrum eros.
        </p>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/fkunis/"><FontAwesomeIcon icon={['fab', 'instagram']} className="fab fa-instagram iconContacto"></FontAwesomeIcon></a>
      </div>
    </div>
  );
}

export default SobreMi;
