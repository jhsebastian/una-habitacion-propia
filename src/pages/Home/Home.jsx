import Banner from './components/banner/Banner';
import Header from '../../commons/Header/Header';
import Footer from '../../commons/Footer/Footer';
import mujer from '../../../src/assets/lotties/47245-mujer-414x493.json';
import Lottie from 'react-lottie';


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

    return(
        <div>
            <Header />
            <h1 className="temporal-title-home">Una Habitación Propia</h1>
            <Banner />
            <Lottie options={{animationData: mujer, ...defaultOptions}} width={300} height={300} />
            <div className="temporal-container">
                <h2>Hola, este sitio web está en construcción</h2>
                <h3>pronto podrás encontrar el sitio web y disfrutar.</h3>
            </div>
            <div className="container-modals">
                <ModalComponent
                textButton = "Cama"
                title="Cama Modal"
                text = "lorem ipsum sdhfjshdfjhakdfhajhdfisbdfjhsudfbjksdbhfjsbdjfhsdjbfhjs"
                />
                <ModalComponent
                textButton = "Ventana"
                title="Ventana Modal"
                text = "lorem ipsum sdhfjshdfjhakdfhajhdfisbdfjhsudfbjksdbhfjsbdjfhsdjbfhjs"
                />
                <ModalComponent
                textButton = "Puerta"
                title="Puerta Modal"
                text = "lorem ipsum sdhfjshdfjhakdfhajhdfisbdfjhsudfbjksdbhfjsbdjfhsdjbfhjs"
                />
                <ModalComponent
                textButton = "Paredes"
                title="Paredes Modal"
                text = "lorem ipsum sdhfjshdfjhakdfhajhdfisbdfjhsudfbjksdbhfjsbdjfhsdjbfhjs"
                />
                <ModalComponent
                textButton = "Closet"
                title="Closet Modal"
                text = "lorem ipsum sdhfjshdfjhakdfhajhdfisbdfjhsudfbjksdbhfjsbdjfhsdjbfhjs"
                />
            </div>
            
            <Footer />
        </div>
    )
}

export default Home;