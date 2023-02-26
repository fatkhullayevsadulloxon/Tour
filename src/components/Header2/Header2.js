import "./Header.css"
import rasm1 from "../../assets/images/1.png"
import rasm2 from "../../assets/images/2.png"
import rasm3 from "../../assets/images/3.png"
import { Link, NavLink } from "react-router-dom"

export const Header2 = () => {
    return (
        <>
            <header>
                <div class="header">
                    <div class="header_white_section">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="header_information">
                                        <ul>
                                            <li><img src={rasm1} alt="#" /> Beshariq shahar markazi</li>
                                            <li><img src={rasm2} alt="#" /> +998 93 489 11 21</li>
                                            <li><img src={rasm3} alt="#" /> tbtgroup@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div class="full">
                                    <div class="center-desk">
                                        <div class="logo">
                                          <Link to="/">
                                                <h1 class="logo__heading">Besh tour</h1>
                                          </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div class="menu-area">
                                    <div class="limit-box">
                                        <nav class="main-menu">
                                            <ul class="menu-area-main">
                                                <li> <NavLink className={({ isActive }) =>
                                                    isActive
                                                        ? "active d-inline-block"
                                                        : "text-decoration-none"
                                                } to="/" href="#">Bosh sahifa</NavLink> </li>
                                                <li> <NavLink className={({ isActive }) =>
                                                    isActive
                                                        ? "active d-inline-block"
                                                        : "text-decoration-none"
                                                } to="/about" href="#about">Haqida</NavLink> </li>
                                                <li><NavLink className={({ isActive }) =>
                                                    isActive
                                                        ? "active d-inline-block"
                                                        : "text-decoration-none"
                                                } to="/travel" href="#travel">Sayohat</NavLink></li>
                                                <li><NavLink className={({ isActive }) =>
                                                    isActive
                                                        ? "active d-inline-block"
                                                        : "text-decoration-none"
                                                } to="/cabinet" href="#contact">Profil</NavLink></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}