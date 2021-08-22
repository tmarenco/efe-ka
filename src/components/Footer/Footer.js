import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function Footer(){

    function topFunction() {
        document.documentElement.scrollTop = 0;
    }

    return(
        <div className="footer">
            <div className="logoFooter">
                <img src="./documents/logoEfeKa.png" alt="logo-efe-ka"></img>
            </div>
            <div className="iconosFooter">
                <div className="iconsFooter">
                    <a href="https://wa.link/xa5qx5"><FontAwesomeIcon icon={['fab', 'whatsapp']} className="fab fa-whatsapp iconFooter"/></a>
                    <p>+54 9 11 6861-9696</p>
                </div>
                <div className="iconsFooter">
                    <a href="mailto:efekafilms@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fab fa-whatsapp iconFooter"/></a>
                    <p>efekafilms@gmail.com</p>
                </div>
                <div className="iconsFooter">
                    <a href="https://www.instagram.com/efe_ka_/"><FontAwesomeIcon icon={['fab', 'instagram']} className="fab fa-instagram iconFooter"></FontAwesomeIcon></a>
                    <p>@efe_ka_</p>
                </div>
                <div className="iconsFooter">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="fab fa-whatsapp iconFooter"/>
                    <p>Buenos Aires</p>
                </div>
            </div>
            <FontAwesomeIcon onClick={()=> topFunction()} icon={faAngleDoubleUp} className=" fab fa-whatsapp iconFooter arrow"/>
        </div>
    )
}

export default Footer;
