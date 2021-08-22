import './App.css';
import Contacto from "../Contacto/Contacto"
import Videos from "../Videos/Videos"
import VideoDetalle from "../VideoDetalle/VideoDetalle"
import SobreMi from "../SobreMi/SobreMi"
import Inicio from "../Inicio/Inicio"
import SubirVideo from "../SubirVideo/SubirVideo"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
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
        <Route path="/cargar" component={SubirVideo} />
        <Route exact path="/videos" component={Videos} />
        <Route path="/videos/:id" component={VideoDetalle} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
