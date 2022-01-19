import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../../assets/banner/banner1.jpg';
import banner2 from '../../../../assets/banner/banner2.jpg';
import banner3 from '../../../../assets/banner/banner3.jpg';
import banner4 from '../../../../assets/banner/banner4.jpg';
import banner5 from '../../../../assets/banner/banner5.jpg';
import { Carousel } from 'react-responsive-carousel';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel className="carousel-container">
            <div>
                <img src={banner1} className="banner-image" />
            </div>
            <div>
                <img src={banner2} className="banner-image" />
            </div>
            <div>
                <img src={banner3} className="banner-image" />
            </div>
            <div>
                <img src={banner4} className="banner-image" />
            </div>
            <div>
                <img src={banner5} className="banner-image" />
            </div>
        </Carousel>
    )
}

export default Banner;