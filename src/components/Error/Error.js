import './Error.css';
import {Link} from "react-router-dom"


function Error() {
  return (
    <div className="paginaError">
      <h1>Lo siento, esta pagina no existe</h1>
      <Link to="/"><img className="logo" src="./documents/logoEfeKa.png" alt="logo-efe-ka"></img></Link>
      <h2>Presiona el logo para volver al inicio!</h2>
    </div>
  );
}

export default Error;
