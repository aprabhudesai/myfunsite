import { connect }          from 'react-redux';
import Header               from '../components/Header'
import { getHeaderContent } from '../actions'

const mapStateToProps = (state) => {
  return {
    title: state.header.title
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getHeaderData: () => {
      dispatch(getHeaderContent());
    }
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
