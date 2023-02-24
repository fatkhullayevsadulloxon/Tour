import { useEffect, useState } from "react"
import { TravelCard } from "../TravelCard/TravelCard"
import "./travel.css"

export const Travel = () => {

    const [ travel, setTravel ] = useState({})

    useEffect(() => {
        fetch("https://travel.iprogrammer.uz/services/all/", {
            headers: {
                "Content-type": "application/json",
            },
        })
            .then(res => res.json())
            .then((data) => setTravel(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <div id="travel" className="traveling">
                <div className="container">
                    <div className="row">   
                        <div className="col-md-12 ">
                            <div className="titlepage">
                                <h2>Sayohat Uchun Takliflarni Tanlang</h2>
                                <span>It is a long established fact that a reader will be distracted by the readable content of a page
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters,</span>
                            </div>
                        </div>
                    </div>
                    <div className="row row2">
                        {travel.length && travel.map(e => (
                            <>
                                <TravelCard key={e.id} item={e}/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}