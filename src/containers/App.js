import Banner from '../pages/Home/components/banner/Banner';
import Footer from '../commons/Footer/Footer'
import Header from '../commons/Header/Header'
import Layout from '../pages/ApoyoVisual/components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello world from Una Habitación Propia</h1>
      <Layout />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
