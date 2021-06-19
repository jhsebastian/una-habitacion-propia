import bannerImage from '../assets/animals-2222007_640.jpg';

const Banner = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={bannerImage} class="d-block w-100 img-fluid" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={bannerImage} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={bannerImage} class="d-block w-100" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Siguiente</span>
            </a>
        </div>

    )
};

export default Banner;