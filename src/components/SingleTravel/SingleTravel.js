import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./singletravel.css"


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
            <div className="single">
                <div className="container single-flex d-flex align-items-center justify-content-around">
                    <img src={data.thumbnail} alt="" />
                    <div className="single__right bg-light">
                        <div className="m-5">
                            <h1>✅Nomi: <strong>{data.title}</strong></h1>
                            <p>✅Tavsifi: <strong>{data.description}</strong></p>
                            <p>✅Narxi: <strong>{data.price}$</strong></p>
                            <p>✅Reytingi: <strong>{data.rating}</strong> </p>
                            <p>✅Kategoriya: <strong>{data.category}</strong></p> <br /><br />
                            <p>✅To'lov naqd pul yoki web sahifamizning o'zidan o'tkazib berishingiz mumkin</p>
                            <p>❗❗Narxlar o'zgarishi mumkin</p>
                            <Link to={`/${data.title}`}>Davom etish</Link>
                        </div>
                    </div>
                </div> <br /> <br />
                <div className="bg-dark h-100 mt-5">
                    <span className="text-dark">.</span>
                </div>
            </div>
        </>
    )
}