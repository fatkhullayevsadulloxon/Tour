import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export const SingleTravel = () => {

    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => setData(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <h1>{data.title}</h1>
        </>
    )
}