import React, { Component }         from 'react';
import { render }                   from 'react-dom';
import Header                       from './components/Header';
import Footer                       from './components/Footer';

class App extends Component {
  render () {
    const year = new Date().getFullYear();
    const footerText = `\u00A9 ${year} All Rights Reserved`;
    return (
      <div className="app">
        <Header title="Header Title"/>
        <div className="box app-content">
          Fun Site
        </div>
        <Footer title={footerText}/>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById("app-container")
);
