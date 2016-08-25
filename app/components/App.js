import React, { Component }     from 'react';
import HeaderContainer          from '../containers/Header';
import Footer                   from './Footer';

class App extends Component {
  render () {
    const year = new Date().getFullYear();
    const footerText = `\u00A9 ${year} All Rights Reserved`;
    return (
      <div className="app">
        <HeaderContainer />
        <div className="box app-content">
          Fun Site
        </div>
        <Footer title={footerText}/>
      </div>
    );
  }
}

export default App;
