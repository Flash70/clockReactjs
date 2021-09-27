import {createStore, combineReducers} from 'redux';
import timezonesReducer from '../redux/timezones-reducer';
import indexReducer from "./index-reducer";



const reducers = combineReducers({
    timezones: timezonesReducer,
    index: indexReducer,
});


const store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;