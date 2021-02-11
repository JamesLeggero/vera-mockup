import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';


import ElectionEve from './components/ElectionEve/ElectionEve'

function App() {
  return (
    <div className="App">
      {/* <Router>
      
      <Switch>
        
        <Route exact path='/vera-mockup/' component={ElectionEve} />
      </Switch>
      </Router> */}
      <ElectionEve />
      

      
    </div>
  );
}

export default App;
