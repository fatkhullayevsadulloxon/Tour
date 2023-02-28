import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { OrderAll } from "../orderAll/OrderAll"
import "./cabinet.css"

const localId = window.localStorage.getItem("localId")
export const Cabinet = ({ data }) => {
    console.log(data);
    
    const [travel, setTravel] =  useState({})
    const [me, setMe] = useState({})
    const [order, setOrder] = useState({})
    const [servis, setServis] = useState({})


    const elPhone = useRef("")
    const elUsername = useRef("")
    const elLastname = useRef("")
    // const elConPassword = useRef("")
    const handleSecurity = (evt) => {
        evt.preventDefault()

        const formData = new FormData()

        formData.append("phone", elPhone.current.value)
        formData.append("lastname", elLastname.current.value)
        formData.append("username", elUsername.current.value)

        axios.put(`https://travel.iprogrammer.uz/accounts/users/me/`, formData, {
            headers: {
                "Authorization": "token " + window.localStorage.getItem("token",)
            }
        }).then(data => console.log(data)).catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`https://travel.iprogrammer.uz/accounts/users/me/`, {
            headers: {
                "Authorization": "token " + window.localStorage.getItem("token",)
            }
        }).then(data => setMe(data.data)).catch(err => console.log(err))
    }, [])


    useEffect(() => {
        fetch("https://travel.iprogrammer.uz/accounts/users/me/", {
            headers: {
                "Content-type": "application/json",
                "Authorization": "token " + window.localStorage.getItem("token",)
            },
        })
            .then(res => res.json())
            .then((data) => setMe(data))
            .catch(err => console.log(err))
        
    }, [])

    useEffect(() => {
        fetch(`https://travel.iprogrammer.uz/order/all/`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "token " + window.localStorage.getItem("token",)
            },
        })
            .then(res => res.json())
            .then((data) => setOrder(data))
            .catch(err => console.log(err))
        
    }, [])

    return (
        <>
            <div id="travel" className="traveling">
                <div className="container">
                    <p>Salom <strong>{travel.username}</strong> ishlar yaxshimi</p>
                    <div>
                        <h2>Sozlamalar</h2>
                        <form onSubmit={handleSecurity} className="register__form">
                            <ul className="form__list">
                                <li className="form__item">
                                    <input className="form__input" ref={elUsername} type="text" defaultValue={me.username} />
                                </li>
                                <li className="form__item">
                                    <input className="form__input" ref={elPhone} type="text" defaultValue={me.phone} />
                                </li>
                                <li className="form__item">
                                    <input className="form__input" ref={elLastname} type="text" defaultValue={me.first_name} />
                                </li>
                            </ul>
                           <div className="text-center mt-3">
                                <button className="start-btn">O'zgartirish</button>
                           </div>
                        </form>
                    </div>
                    <h2>Buyurtmalaringiz</h2>
                    {order.length && order.map(e => (
                        <>
                            <OrderAll key={e.id} item={e} />

                        </>
                    ))}
                </div>
            </div>
        </>
    )
}