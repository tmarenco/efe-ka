import {useState, useEffect} from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
            .then(res => {
            if (!res.ok){
                throw Error ("Lo siento, los videos no estan cargando")
            }
            return res.json()
        })
            .then(data=>{
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch(err =>{
                setError(err.message)
                setLoading(false)
            })
        }, [url]);

        return {data, loading, error}
}

export default useFetch