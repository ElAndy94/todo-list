import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [],
    item: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LIST:
            return {
                ...state,
                items: action.payload
            };
        case actionTypes.NEW_ITEM:
            return {
                ...state,
                item: action.payload
            };
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items: action.payload
            };
        case actionTypes.EDIT_ITEM:
            return {
                ...state,
                items: action.payload
            };
        default: 
            return state;
    }
};

export default reducer;