import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import Chat from './Chat';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) :
          (
            <React.Fragment>
              <Header />
              <div className="app__body">
                <Sidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                  </Route>
                </Switch>
              </div>
            </React.Fragment>
          )}

      </Router>
    </div>
  );
}

export default App;
