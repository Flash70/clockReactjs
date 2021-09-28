import {createStore, combineReducers, applyMiddleware} from 'redux';
import timezonesReducer, {fetchTimeZone} from './timezones-reducer';
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    timezones: timezonesReducer,
    fetchTimeZone: fetchTimeZone
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;