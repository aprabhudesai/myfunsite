import { connect }          from 'react-redux';
import Footer               from '../components/Footer'
import { getFooterContent } from '../actions'


const mapStateToProps = (state) => {
  return {
    title: state.footer.title
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getFooterData: () => {
      dispatch(getFooterContent());
    }
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default FooterContainer;
