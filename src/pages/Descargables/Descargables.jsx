import './Descargables.css';
import Header from '../../commons/Header/Header';
import Footer from '../../commons/Footer/Footer';
import Title from '../../commons/Title/Title';
import { data }  from './data';
import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';

const Descargables = () => {
    return(
        <div>
            <Header></Header>
            <Title title="Descargables" />
            <div className="texts-container">
                <div className="descargables-container">
                    <div>
                        <img src={image1} alt="" />
                    </div>  
                    <div className="descargables-texts">
                        <h2>{data.title1}</h2>
                        <p>{data.text1}</p>
                        <p>{data.text11}</p>
                        <p>{data.text12}</p>
                    </div>
                      
                </div>
                <div className="planos-container">
                    <div className="planos-texts">
                        <h2>{data.title2}</h2>
                        <p>{data.text2}</p>
                        <p>{data.text21}</p>
                        <p>{data.text22}</p>
                    </div>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default Descargables;