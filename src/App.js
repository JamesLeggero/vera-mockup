import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
// import Navigation from './components/Navigation'
import Landing from './components/Landing'
import MainPage from './components/ElectionEve/MainPage'

function App() {
  return (
    <div className="App">
      <Router>
      {/* <header>
        <Navigation />
      </header> */}
      <Switch>
        <Route exact path='/vera-mockup' component={Landing} />
        <Route exact path='/vera-mockup/electioneve' component={MainPage} />
      </Switch>
      </Router>
      

      
    </div>
  );
}

export default App;
