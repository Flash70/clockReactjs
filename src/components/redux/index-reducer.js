const INDEX_TIMEZONE = 'INDEX-TIMEZONE';


const initialState =
    {
        index: 0,
    };


const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case INDEX_TIMEZONE: {
            return {
                ...state,
                index: action.payload
            }
        }
        default:
            return state;
    }
};

export const setTimeIndex = (index) => ({
    type: INDEX_TIMEZONE,
    payload: index
})

export default indexReducer;