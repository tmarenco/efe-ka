import './App.css';
import Contacto from "../Contacto/Contacto"
import Proyectos from "../Proyectos/Proyectos"
import Tecnologias from "../Tecnologias/Tecnologias"
import SobreMi from "../SobreMi/SobreMi"
import Inicio from "../Inicio/Inicio"
import Header from "../Header/Header"
import Error from "../Error/Error"

import {Route, Switch} from "react-router-dom"



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/proyectos" component={Proyectos} />
        <Route path="/sobre-mi" component={SobreMi} />
        <Route path="/tecnologias" component={Tecnologias} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
