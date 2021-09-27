import {createStore, combineReducers, applyMiddleware} from 'redux';
import timezonesReducer, {fetchTimeZone} from '../redux/timezones-reducer';
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    timezones: timezonesReducer,
    fetchTimeZone: fetchTimeZone
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;