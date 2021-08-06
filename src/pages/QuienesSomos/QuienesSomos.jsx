import Header from "../../commons/Header/Header";
import Footer from "../../commons/Footer/Footer";
import imagen1 from "../../assets/1.png";
import imagen2 from "../../assets/2.png";
import imagen3 from "../../assets/3.png";
import imagen4 from "../../assets/4.png";
import "./QuienesSomos.css";

const QuienesSomos = () => {
    return (
        <div>
            <Header></Header>
            <h1>NUESTRO EQUIPO</h1>
            <div className="quienesSomos-principal-container">
                <img className="image-quienesSomos img-fluid" src={imagen1} alt="" />
                <img className="image-quienesSomos img-fluid" src={imagen2} alt="" />
                <img className="image-quienesSomos img-fluid" src={imagen3} alt="" />
                <img className="image-quienesSomos img-fluid" src={imagen4} alt="" />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default QuienesSomos;