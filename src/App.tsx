import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import About from './pages/About';
import Docs from './pages/Docs';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Layout>
        <header className="App-header"></header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
