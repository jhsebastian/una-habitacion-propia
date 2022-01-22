import './ApoyoVisual.css';
import Header from '../../commons/Header/Header';
import Footer from '../../commons/Footer/Footer';

const ApoyoVisual = () => {
    return (
        <div>
            <Header />
            <h1>producto audiovisual
            </h1>
            <iframe src="https://open.spotify.com/embed/show/1hxVtMnnNNtgstmEp6qDnm?utm_source=generator" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <Footer />
        </div>
    )
};

export default ApoyoVisual;