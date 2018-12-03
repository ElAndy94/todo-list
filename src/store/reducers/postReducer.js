import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../../shared/utility';

const initialState = {
    items: [],
    item: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case actionTypes.NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default: 
            return state;
    }
};

export default reducer;