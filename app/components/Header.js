import React, { Component, PropTypes }         from 'react';

class Header extends Component {
  render () {
    const title = this.props.title;
    return (
      <div className="box app-header">
        {title}
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
