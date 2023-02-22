import './App.css';
import { Header } from './components/Header/Header';
import "../src/assets/css/animate.min.css"
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/font-awesome.min.css"
import "../src/assets/css/jquery-ui.css"
import "../src/assets/css/jquery.fancybox.min.css"
import "../src/assets/css/jquery.mCustomScrollbar.min.css"
import "../src/assets/css/meanmenu.css"
import "../src/assets/css/nice-select.css"
import "../src/assets/css/normalize.css"
import "../src/assets/css/owl.carousel.min.css"
import "../src/assets/css/responsive.css"
import "../src/assets/css/slick.css"
import "../src/assets/css/style.css"
import {HomePage} from "./components/Pages/HomePage"
import { Route, Routes } from 'react-router-dom';
import { SingleTravel } from './components/SingleTravel/SingleTravel';





function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/travel/:id" element={<SingleTravel/>}/>
      </Routes>
    </div>
  );
}

export default App;
