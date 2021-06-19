import Footer from '../commons/Footer/Footer'
import Header from '../commons/Header/Header'
import Layout from '../pages/ApoyoVisual/components/Layout/Layout';
import Lottie from 'react-lottie';
import mujer from '../assets/lotties/47245-mujer-414x493.json';
import './App.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello world from Una Habitación Propia</h1>
      <Lottie options={{animationData: mujer, ...defaultOptions}} width={300} height={300} />
      <div className="temporal-container">
      <h2>Hola, este sitio web está en construcción</h2>
      <h3>pronto podrás encontrar el sitio web y disfrutar.</h3>
      </div>
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
