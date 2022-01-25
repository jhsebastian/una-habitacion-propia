import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
                <h6 className="footer-title">Una Habitación Propia</h6>
                <p>Todos los derechos reservados ®</p>
                <div className="links-footer">
                    <p><a href="https://instagram.com/unahabitacionpropia1?utm_medium=copy_link">Instagram</a></p>
                    <p><a href="https://open.spotify.com/show/1hxVtMnnNNtgstmEp6qDnm?si=da87f2f287334d71">Spotify</a></p>
                    <p><a href="https://www.youtube.com/channel/UCYHX5VrGAE5V56AZdWJcSxg">YouTube</a></p>
                    <p><a href="mailto:habitacionpropia1@gmail.com">Correo Electrónico</a></p>
                </div>
        </footer>
    )
}

export default Footer;