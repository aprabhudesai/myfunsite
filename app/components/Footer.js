import React, { Component, PropTypes }      from 'react';

class Footer extends Component {
  render () {
    const title = this.props.title;
    return (
      <div className="box app-footer">
        {title}
      </div>
    );
  }
}

Footer.propTypes = {
  title: PropTypes.string
};

export default Footer;
