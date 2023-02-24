import { Route, Routes } from "react-router-dom"
import { About } from "../About/About"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Login } from "../Login/Login"
import { HomePage } from "../Pages/HomePage"
import { SignUp } from "../SignUp/SignUp"
import { SingleTravel } from "../SingleTravel/SingleTravel"
import { Travel } from "../Travel/Travel"

export const PrivatePage = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/travel/:id" element={<SingleTravel />} />
                <Route path="/travel/travel/:id" element={<SingleTravel />} />
                <Route path="/about" element={<About />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/order" element={<h1>Bu yerda sizning buyurtmalaringiz bo'ladi</h1>} />
                <Route path="/:title" element={<h1>bu yerda to'lov tizimi bo'ladi</h1>} />
            </Routes>
            <Footer />
        </>
    )
}