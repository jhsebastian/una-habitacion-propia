import Banner from './components/banner/Banner';
import Header from '../../commons/Header/Header';
import Footer from '../../commons/Footer/Footer';
import mujer from '../../../src/assets/lotties/47245-mujer-414x493.json';
import Lottie from 'react-lottie';
import textItems from '../../data';
import cama from '../../assets/images-banner/cama.jpg';
import closet from '../../assets/images-banner/closet.jpg';
import paredes from '../../assets/images-banner/paredes.jpg';
import puerta from '../../assets/images-banner/puerta.jpg';
import ventana from '../../assets/images-banner/ventana.jpg';


import './Home.css';
import ModalComponent from './components/modal/FirstModal';

const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const Home = () => {

    return (
        <div>
            <Header />
            <h1 className="temporal-title-home">Una Habitación Propia</h1>
            <Banner />
            <div className="temporal-container">

            </div>
            <div className="container-modals">
                <ModalComponent
                    textButton="Cama"
                    title="Cama"
                    text={textItems.camas}
                    img={cama}
                />
                <ModalComponent
                    textButton="Ventana"
                    title="Ventana"
                    text={textItems.ventanas}
                    img={ventana}
                />
                <ModalComponent
                    textButton="Puerta"
                    title="Puerta"
                    text={textItems.puertas}
                    img={puerta}
                />
                <ModalComponent
                    textButton="Paredes"
                    title="Paredes"
                    text={textItems.paredes}
                    img={paredes}
                />
                <ModalComponent
                    textButton="Closet"
                    title="Closet"
                    text={textItems.closet}
                    img={closet}
                />
            </div>

            <Footer />
        </div>
    )
}

export default Home;