import Header from "../../commons/Header/Header";
import Footer from "../../commons/Footer/Footer";
import "./QuienesSomos.css";
import equipo1 from "../../assets/quienesSomos/equipo1.png";
import equipo2 from "../../assets/quienesSomos/equipo2.png";
import data from "./data-quienesSomos";
import Title from '../../commons/Title/Title';

const QuienesSomos = () => {
    return (
        <div>
            <Header></Header>
            <Title title="nuestro equipo"></Title>
            <div className="quienesSomos-principal-container">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
                <img className="image-quienesSomos img-fluid" src={equipo1} alt="" />
                <div className="list-names-container">
                    <div>
                        <h3 className="names-subititle">{data.subtitle2}</h3>
                        <ul>
                            {data.names2.map((names) => <li>{names}</li> )}
                        </ul>
                    </div>
                </div>
                <img className="image-quienesSomos img-fluid" src={equipo2} alt="" />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default QuienesSomos;