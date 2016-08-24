import { combineReducers }    from 'redux';
import headerReducer          from './headerReducer';

const myApp = combineReducers({
  headerReducer
});

export default myApp;
