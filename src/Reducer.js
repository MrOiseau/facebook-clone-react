// Initial state of data layer
export const initialState = {
    user: null,
};

// To dispatch action into the data
export const actionTypes = {
    SET_USER: 'SET_USER'
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {                // New data layer 
                ...state,
                user: action.user   //change the user to whatever is passed in as a user payload inside of the dispatched action
            };

        default:
            return state;
    }
};

export default reducer;
