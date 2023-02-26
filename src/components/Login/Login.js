import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuth } from "../../hook/hook"
import "./login.css"
export const Login = () => {
    const { setToken } = useAuth
    const elUserName = useRef("")
    const elPassword = useRef("")
    const navigate = useNavigate()

    const hanldeForm = (evt) => {
        evt.preventDefault()


        fetch('https://travel.iprogrammer.uz/accounts/token/login/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: elUserName.current.value,
                password: elPassword.current.value
            })
        })
            .then(res => res.json())
            .then((data) => {
                if (data.auth_token !== undefined) {
                    window.localStorage.setItem("token", data.auth_token)
                    navigate("/cabinet")
                    window.location.reload(true)
                }
            })
            .catch((err) => console.log(err));
            console.log(setToken);
    }
    
    return (
        <>
            <div className="register-page">
                <div className="container">
                    <div className="register">
                        <div className="register__right bg-light mx-auto mt-5">
                            <h3 className="text-center pt-5">Kirish</h3>
                            <p className="text-center">Ro'yxatdan o'tmaganmisiz <Link to="/sign-up"><strong> Ro'yxatdan o'tish</strong></Link></p>
                            <form onSubmit={hanldeForm} className="register__form">
                                <input ref={elUserName} type="text" placeholder="Username" />
                                <input ref={elPassword} type="password" placeholder="Password" />
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