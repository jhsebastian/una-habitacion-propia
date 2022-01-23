import './ApoyoVisual.css';
import Header from '../../commons/Header/Header';
import Footer from '../../commons/Footer/Footer';
import Title from '../../commons/Title/Title';

const ApoyoVisual = () => {
    return (
        <div>
            <Header />
            <Title title="producto audiovisual"></Title>
            <div className="container-youtube">
                <iframe width="400" height="315" src="https://www.youtube.com/embed/HNCbZIzMAYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="400" height="315" src="https://www.youtube.com/embed/Eyova87IRhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="400" height="315" src="https://www.youtube.com/embed/ibOI6sEIt7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                <h4>Encuentra todos los episodios en nuestro canal de <a  className="youtube-link" href="https://www.youtube.com/channel/UCYHX5VrGAE5V56AZdWJcSxg">YouTube</a></h4>          
            </div>

            <div className="container-spotify">
                <iframe src="https://open.spotify.com/embed/show/1hxVtMnnNNtgstmEp6qDnm?utm_source=generator" width="80%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <iframe src="https://open.spotify.com/embed/episode/52hozcgVHn9HCIeqADH1Fq?utm_source=generator" width="80%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <iframe src="https://open.spotify.com/embed/episode/1MnSPGptTITI4G8ujHqtVX?utm_source=generator" width="80%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <iframe src="https://open.spotify.com/embed/episode/0TMNVZUVSEbdYyEjpKT5K3?utm_source=generator" width="80%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <iframe src="https://open.spotify.com/embed/episode/6t4skiQU3vJfUZzv1iGVLT?utm_source=generator" width="80%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>

            <Footer />
        </div>
    )
};

export default ApoyoVisual;