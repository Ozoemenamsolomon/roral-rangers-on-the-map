import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AddLocation from './pages/AddLocation';
import NotFound from './pages/NotFound';


const FindOutpost = React.lazy(() => import('./pages/FindOutpost'));
const Info = React.lazy(() => import('./pages/Info'));
const Shop = React.lazy(() => import('./pages/Shop'));
const Account = React.lazy(() => import('./pages/Account'));

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/add-location">
            <AddLocation />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <React.Suspense
            fallback
            {...() => {
              <h1>Loading...</h1>;
            }}
          >
            <Route path="/find-outpost">
              <FindOutpost />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            {/* TODO create "/login", "/request" under account route*/}
            <Route path="/account" exact >
              <Account />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
          </React.Suspense>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
