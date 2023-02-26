import axios from "axios"
import { useEffect, useRef, useState } from "react"
import "./cabinet.css"

export const Cabinet = () => {

    const [travel, setTravel] = useState({})
    const [me, setMe] = useState({})

    const elEmail = useRef("")
    const elUsername = useRef("")
    const elId = useRef("")
    // const elConPassword = useRef("")

    const handleSecurity = (evt) => {
        evt.preventDefault()

        const formData = new FormData()

        formData.append("email", elEmail.current.value)
        formData.append("id", elId.current.value)
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
            .then((data) => setTravel(data))
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
                                    <input className="form__input" ref={elId} type="text" defaultValue={me.id} />
                                </li>
                                <li className="form__item">
                                    <input className="form__input" ref={elUsername} type="text" defaultValue={me.email} />
                                </li>
                            </ul>
                           <div className="text-center mt-3">
                                <button className="start-btn">O'zgartirish</button>
                           </div>
                        </form>
                    </div>
                    <div className="row row2 mt-4">
                        <h2>Buyurtmalaringiz</h2>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-primary border">
                            <p className="text-center text-white p-3">Nomi</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-light border">
                            <p className="text-center text-primary p-3">Bu yerga nomi yoziladi</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-primary border">
                            <p className="text-center text-white p-3">Sanasi</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-light border">
                            <p className="text-center text-primary p-3">Bu yerga sanasi yoziladi</p>
                        </div>
                    </div>
                    <div className="row row2 mt-3">
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-primary border">
                            <p className="text-center text-white p-3">Narxi</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-light border">
                            <p className="text-center text-primary p-3">Bu yerga narxi yoziladi</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-primary border">
                            <p className="text-center text-white p-3">Buyurtmani ko'rish</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-light border">
                            <p className="text-center text-primary p-3">Buyurtmani ko'rish</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}