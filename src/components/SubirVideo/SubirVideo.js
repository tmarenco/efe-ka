import { useState } from 'react';
import { useHistory,  } from 'react-router-dom';
import useFetch from '../../useFetch';
import './SubirVideo.css';

function SubirVideo(){

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [selectArtist, setSelectArtist] = useState("")
    const [selectArtistID, setSelectArtistID] = useState("")
    const [link, setLink] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();
    const {data, loading, error} = useFetch("http://localhost:8000/videos")



    // const buscarArtista = ()=>{
    //     if (data != null){
    //         const artistaEncontrado = data.find(artista => artista.title === selectArtist)
    //         setSelectArtistID(artistaEncontrado.id)
    //     }
    // }


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

    const handleDelete = (e) =>{
        e.preventDefault()
        if (data != null){
            const artistaEncontrado = data.find(artista => artista.title === selectArtist)
            setSelectArtistID(artistaEncontrado.id)
        }

        if (selectArtistID !== ""){
            fetch("http://localhost:8000/videos/" + selectArtistID, {
                method: "DELETE"
            }).then(()=>{
                history.push("/videos")
            })
        }
        console.log(selectArtistID)
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
            <form className="formulario">
                <h2 className="tituloForm">Eliminar Video</h2>
                {error && <div className="error">{error}</div>}
                {loading && <div className="loading">Cargando..</div>}
                {data &&
                    <select
                        value={selectArtist}
                        onChange={(e)=> setSelectArtist(e.target.value)}
                    >
                        {data.map((video)=>(
                            <option key={video.id}>{video.title}</option>
                        ))}
                    </select>
                }
                <button onClick={handleDelete}>Eliminar video</button>
            </form>
        </div>
    )
}

export default SubirVideo