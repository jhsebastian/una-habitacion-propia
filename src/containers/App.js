import Home from '../pages/Home/Home';
import ApoyoVisual from '../pages/ApoyoVisual/ApoyoVisual';
import QuienesSomos from '../pages/QuienesSomos/QuienesSomos';
import Descargables from '../pages/Descargables/Descargables';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quienesSomos" exact component={QuienesSomos} />
          <Route path="/apoyoVisual" exact component={ApoyoVisual} />
          <Route path="/descargables" exact component={Descargables} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
