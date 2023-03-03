import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuth } from "../../hook/hook"
import "./signup.css"
export const SignUp = () => {
    const {setToken} = useAuth
    const elUserName = useRef("")
    const elFirstName = useRef("")
    const elPhone = useRef("")
    const elPassword = useRef("")
    const navigate = useNavigate()

    const hanldeForm = (evt) => {
        evt.preventDefault()
        const formdata = new FormData()

        formdata.append("username", elUserName.current.value)
        formdata.append("first_name", elFirstName.current.value)
        formdata.append("phone", elPhone.current.value)
        formdata.append("password", elPassword.current.value)

        axios
            .post(
                "https://travel.iprogrammer.uz/accounts/users/",
                formdata
            )
            .then((data) => {
                if (data) {
                    navigate('/login')
                    window.location.reload(true)
                }
            })
            .catch((err) => console.log(err));

        if (elUserName.current.value === "") {
    alert("Iltimos username kiriting")
        } else if (elFirstName.current.value === "") {
    alert("Iltimos ism kiriting")
} else if (elPassword.current.value >= 8) {
    // navigate('/login')
    // window.location.reload(true)
} else if (elPassword.current.value <= 8) {
    alert("Parol 8ta raqamdan kam bo'lmasligi zarur")
} else if (elPhone.current.value < 11){
    alert("telefon raqam to'liq kiritilmadi")
}
        }
    return (
        <>
            <div className="register-page">
                <div className="container">
                    <div className="register">
                        <div className="register__right bg-light mx-auto mt-5">
                            <h3 className="text-center pt-5">Ro'yxatdan o'tish</h3>
                            <p className="text-center">Ro'yxatdan o'tganmisiz <Link to="/login"><strong> Kirish</strong></Link></p>
                            <form onSubmit={hanldeForm} className="register__form">
                                <input className="form-input" ref={elUserName} type="text" placeholder="Username" />
                                <input className="form-input" ref={elFirstName} type="text" placeholder="First Name" />
                                <input className="form-input" ref={elPhone} defaultValue={+998} type="number" placeholder="Phone" />
                                <input className="form-input" ref={elPassword} type="text" placeholder="Password" />
                                <div className="text-center pb-5 mt-4">
                                    <button type="submit" className="start-btn">Next step</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}