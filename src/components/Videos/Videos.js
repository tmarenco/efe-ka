import './Videos.css';
import GeneradorDeVideos from "../GeneradorDeVideos/GeneradorDeVideos"

function Videos() {
  return (
    <div className= "videos">
      <h1 className="tituloVideos">Videos</h1>
      <GeneradorDeVideos nombre="Fotogenica" link="https://www.youtube.com/embed/lK8ZYwjmX3M"/>
      <GeneradorDeVideos nombre="Peaches" link="https://www.youtube.com/embed/tQ0yjYUFKAE"/>
      <GeneradorDeVideos nombre="Circles" link="https://www.youtube.com/embed/wXhTHyIgQ_U"/>
    </div>
  );
}

export default Videos;
