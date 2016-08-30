import React, { Component, PropTypes }      from 'react';

class Footer extends Component {
  render () {
    const title = this.props.title;
    const getFooterData = this.props.getFooterData;
    return (
      <div className="box app-footer">
        {title}
        <button onClick={() => {getFooterData()} }>Get Footer</button>
      </div>
    );
  }
}

Footer.propTypes = {
  title: PropTypes.string
};

export default Footer;
