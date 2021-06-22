import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Test from './components/Test';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Anleitung>
            Edit <code>src/App.js</code> and save to reload.
          </Anleitung>
          <Route path="/solozo">
            <Test />
          </Route>

          <Link to="/solozo">sompo</Link>
          <a
            className="App-link"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;

const Anleitung = styled.p`
  color: red;
`;
