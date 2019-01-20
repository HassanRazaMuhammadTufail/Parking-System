import React, { Component } from 'react';
import Routers from './Route';
import {Provider} from 'react-redux';
import store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      
        <Routers />
      </Provider>
    );
  }
}

export default App;




      // class App extends Component {
      //   render() {
      //     return (
      //       <div className="App">
      //         <header className="App-header">
      //           <img src={logo} className="App-logo" alt="logo" />
      //           <h1 className="App-title">Welcome to React</h1>
      //         </header>
      //         <p className="App-intro">
      //           To get started, edit <code>src/App.js</code> and save to reload.
      //         </p>
      //       </div>
      //     );
      //   }
      // }