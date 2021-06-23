import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DesktopLayout from './components/layout/DesktopLayout';
import About from './pages/About';
import Docs from './pages/Docs';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <DesktopLayout>
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
      </DesktopLayout>
    </Router>
  );
}

export default App;
