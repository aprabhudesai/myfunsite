import React, { Component, PropTypes }         from 'react';

class Header extends Component {
  render () {
    const title = this.props.title;
    const getHeaderData = this.props.getHeaderData;
    return (
      <div className="box app-header">
        {title}
        <button onClick={() => {getHeaderData()} }>Get Header</button>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
