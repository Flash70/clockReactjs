const TIMEZONE = 'TIMEZONE';


const initialState =
    {
        items: [],
        // index: [],
        isLoaded: false
    };



const timeZonesReducer = (state = initialState, action) => {
    switch (action.type){
        case TIMEZONE: {
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        }
        default:
            return state;
    }
};



export const setTimeZones = (items) => ({
    type: TIMEZONE,
    payload: items
});

export default timeZonesReducer;
