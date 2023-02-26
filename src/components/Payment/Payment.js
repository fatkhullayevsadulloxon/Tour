import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./payment.css"


export const Payment = () => {

    const elService = useRef("")
    const elUserCount = useRef("")
    const elPayment = useRef("")
    const elFirstName = useRef("")
    const elLastName = useRef("")
    const elAddress = useRef("")
    const elPhone = useRef("")
    const elEmail = useRef("")
    const elDate = useRef("")
    const elGender = useRef("")
    const elPaymeCheck = useRef("")
    
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://travel.iprogrammer.uz/services/get/${id}`)
            .then(res => res.json())
            .then((data) => setData(data))
            .catch(err => console.log(err))

    }, [])
    const localData = window.localStorage.getItem("id")
    

    const hanldeForm = (evt) => {
        evt.preventDefault()
        const formdata = new FormData()

        formdata.append("service", elService.current.value)
        formdata.append("user_count", elUserCount.current.value)
        formdata.append("payment_type", elPayment.current.value)
        formdata.append("first_name", elFirstName.current.value)
        formdata.append("last_name", elLastName.current.value)
        formdata.append("addres", elAddress.current.value)
        formdata.append("phone", elPhone.current.value)
        formdata.append("gmail", elEmail.current.value)
        formdata.append("birth_day", elDate.current.value)
        formdata.append("gender", elGender.current.value)
        formdata.append("amount", elPaymeCheck.current.value)

        axios
            .post(
                "https://travel.iprogrammer.uz/payme/create/", formdata, {
                headers: {
                    "Authorization": "token " + window.localStorage.getItem("token",)
                }
            }
            )
            .then((data) => {
                 
                if (data.data.pay_id !== undefined) {
                    window.localStorage.setItem("id", data.data.pay_id)
                    // window.location.reload(true)
                } 

                if(data.data.pay_url !== undefined){
                    window.localStorage.setItem("payurl", data.data.pay_url)
                } 

                if(elPayment.current.value === "Payme") {
                    navigate("/payme")
                }
            })
            .catch((err) => console.log(err));
             if (elPayment.current.value === "Naqd") {
                    navigate('/cabinet')
                    window.location.reload(true)
            }

        axios.get(`https://travel.iprogrammer.uz/payme/check/${localData}`, {
            headers: {
                "Authorization": "token " + window.localStorage.getItem("token",)
            }
                .then((data) => console.log(data.res))
                .catch((err) => console.log(err))
        })

        axios
            .post(
                "https://travel.iprogrammer.uz/order/create/", formdata, {
                    headers: {
                        "Authorization": "token " + window.localStorage.getItem("token",)
                    }
                } 
                 )
            .then((data) => {
                if (data) {
                    console.log(data)
                    // navigate('/cabinet')
                    // window.location.reload(true)
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div className="container">
                <form onSubmit={hanldeForm} className="">
                  <div className="flex-list">
                        <div className="register-page">
                            <div className="container">
                                <div className="register">
                                    <div className="register__right bg-light mx-auto mt-5">
                                        <div className="p-5 ms-5 me-5">
                                            <h3 className="text-center pt-5">Buyurtma qilish</h3>
                                            <form className="register__form">
                                                <input defaultValue={data.id} ref={elService} required type="number" placeholder="service" />
                                                <input ref={elUserCount} required type="number" placeholder="Yo'lovchi soni" />
                                                <select ref={elPayment} className="select">
                                                    <option value="Naqd">Naqd To'lov</option>
                                                    <option value="Payme">Payme</option>
                                                </select>
                                                <p>paymedan to'lasangiz buyurtmangiz narxi👇</p>
                                                <input defaultValue={data.price} ref={elPaymeCheck} required type="number" placeholder="Paymedan to'lash uchun narx" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="register-page">
                            <div className="container">
                                <div className="register">
                                    <div className="register__right bg-light mx-auto mt-5">
                                        <div className="p-5 ms-5 me-5">
                                            <form className="register__form">
                                                <input ref={elFirstName} required type="text" placeholder="Ismingiz" />
                                                <input ref={elLastName} required type="text" placeholder="Familyangiz" />
                                                <input ref={elAddress} required type="text" placeholder="Address" />
                                                <input ref={elPhone} required type="number" placeholder="Phone" />
                                                <input ref={elEmail} type="email" placeholder="Email" />
                                                <input ref={elDate} required type="date" placeholder="Tu'gilgan sana" />
                                                <select ref={elGender} className="select">
                                                    <option value="Erkak">Erkak</option>
                                                    <option value="Ayol">Ayol</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                    <div className="text-center pb-5 mt-4">
                        <button type="submit" className="start-btn">Next step</button>
                    </div>
               </form>
            </div>
        </>
    )
}