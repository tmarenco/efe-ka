import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SubirVideo.css';

function SubirVideo(){

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [link, setLink] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const video = {title, artist, link}
        setIsLoading(true)
        
        fetch("http://localhost:8000/videos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(video)
        }).then(()=>{
            console.log("Video agregado")
            setIsLoading(false)
            history.push("/videos")
        })
    }


    return (
        <div className="formulario">
            <h2 className="tituloForm">Subir Videos</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre del tema :</label>
                <input
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Nombre del artista :</label>
                <input
                    type="text" 
                    required
                    value={artist}
                    onChange={(e)=> setArtist(e.target.value)}
                />
                <label>Link :</label>
                <input
                    type="text" 
                    required
                    value={link}
                    onChange={(e)=> setLink(e.target.value)}
                />
                {!isLoading && <button>Subir video nuevo</button>}
                {isLoading && <button disabled>Subiendo video</button>}

            </form>
        </div>
    )
}

export default SubirVideo