import './App.css';
import Contacto from "../Contacto/Contacto"
import Videos from "../Videos/Videos"
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
        <Route path="/sobre-mi" component={SobreMi} />
        <Route path="/videos" component={Videos} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
