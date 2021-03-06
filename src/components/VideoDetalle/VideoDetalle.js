import './VideoDetalle.css';
import { useParams } from "react-router-dom"
import useFetch from '../../useFetch';

function VideoDetalle (){
    const {id} = useParams();
    const {data: video, error, loading} = useFetch("http://localhost:8000/videos/" + id)


    return(
        <div>
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Cargando..</div>}
            {video && (
                <div className="generador">
                    <h2 className="tituloVideo">{video.title}</h2>
                    <h3 className="artista">{video.artist}</h3>
                    <div className="video">
                        <iframe className="videoIndividual" src={video.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            )}
        </div>
    )
}
export default VideoDetalle