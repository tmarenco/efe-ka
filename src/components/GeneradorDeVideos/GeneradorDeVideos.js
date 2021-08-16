import './GeneradorDeVideos.css';

function GeneradorDeVideos(props) {
    return (
    <div className="generador">
        <h2 className="tituloVideo">{props.nombre}</h2>
        <div className="video">
            <iframe className="videoIndividual" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    );
}

export default GeneradorDeVideos;