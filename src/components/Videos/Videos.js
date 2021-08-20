import './Videos.css';
import GeneradorDeVideos from "../GeneradorDeVideos/GeneradorDeVideos"
import useFetch from '../../useFetch';


function Videos() {

  const {data: videos, loading, error} = useFetch("http://localhost:8000/videos")
  
  return (
    <div className= "videos">
      <h1 className="tituloVideos">Videos</h1>
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">Cargando..</div>}
      {videos && <GeneradorDeVideos videos={videos}/>}
    </div>
  );
}

export default Videos;
