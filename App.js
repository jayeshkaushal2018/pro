
import React from 'react';
import PublicRoute from './action/publicRoute';
// import Index from './action/index';
// import Registration from './action/registration';
// import Home from './action/home';
import './App.css';
//import Post from './component';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
    <>
      <BrowserRouter>

        <div className="App">
          <Switch>
           
            <PublicRoute/>
            
          </Switch>

        </div>
      </BrowserRouter>
    </>
    </Provider>
  );
}

export default App;
