import axios from 'axios';

const TIMEZONE = 'TIMEZONE';
const SET_LOADED = 'SET_LOADED';


const initialState =
    {
        items: [],
        isLoaded: false
    };


const timeZonesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TIMEZONE:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            };
        default:
            return state;
    }
};

export const fetchTimeZone = () => (dispatch) => {
    dispatch({
        type: SET_LOADED,
        payload: false
    })
    axios.get('http://localhost:3000/db.json').then(({data}) => {
        dispatch(setTimeZones(data.timezones));
    });
}


export const setTimeZones = (items) => ({
    type: TIMEZONE,
    payload: items
});

export default timeZonesReducer;
