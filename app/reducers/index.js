import { combineReducers }    from 'redux';
import header                 from './Header';
import footer                 from './Footer';

const myApp = combineReducers({
  header,
  footer
});

export default myApp;
