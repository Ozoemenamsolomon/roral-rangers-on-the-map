import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Test from './components/Test';
import Ann from './components/ann';

function App() {
  return (
    <Router>
      <main className="App">
        <header className="App-header">
          <Anleitung>
            Edit <code>src/App.js</code> and save to reload.
            <Link to="/solozo">sompo</Link>
            <Link to="/ann">Ann</Link>
          </Anleitung>
          <a
            className="App-link"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
        </header>
      </main>
      <Route path="/solozo">
        <Test />
      </Route>
      <Route path="/ann">
        <Ann word="" />
      </Route>
    </Router>
  );
}

export default App;

const Anleitung = styled.p`
  color: red;
`;
