import './GeneradorDeVideos.css';
import { Link } from "react-router-dom"

function GeneradorDeVideos({videos}) {
    return (
    <div>
        {videos.map((video, i)=>(
            <div className= "generador" key={video.id}>
                <Link to={`/videos/${video.id}`}><h2 className="tituloVideo">{video.title}</h2></Link>
                <h3 className="artista">{video.artist}</h3>
                <div className="video">
                    <iframe className="videoIndividual" src={video.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        ))}
    </div>
    );
}

export default GeneradorDeVideos;