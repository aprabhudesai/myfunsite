import React, { Component }     from 'react';
import HeaderContainer          from '../containers/Header';
import FooterContainer          from '../containers/Footer';

class App extends Component {
  render () {
    return (
      <div className="app">
        <HeaderContainer />
        <div className="box app-content">
          Fun Site
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default App;
