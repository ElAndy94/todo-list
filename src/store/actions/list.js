import * as actionTypes from './actionTypes';

let list = [
    {
        "id": 1,
        "title": "Monday",
        "body": "Pick up mail, check dog has food"
    },
    {
        "id": 2,
        "title": "Tuesday",
        "body": "Take out bins"
    },
    {
        "id": 3,
        "title": "Wednesday",
        "body": "Make sure to take the car to do its service"
    },
    {
        "id": 4,
        "title": "Thursday",
        "body": "Finish the exam for the Sainsbury's job"
    },
    {
        "id": 5,
        "title": "Friday",
        "body": "Go to hairdressers, its my monthly trim"
    },
    {
        "id": 6,
        "title": "Weekend",
        "body": "Visit family and redo TODO list!!"
    }
] 
let filteredItems = null;

export const fetchList = () => dispatch => {
    dispatch({
        type: actionTypes.FETCH_LIST,
        payload: list
    })
};

export const createItem = (itemData) => dispatch => {
    const randomId = Math.floor(Math.random() * 1000);
    itemData.id = randomId;
    dispatch({
        type: actionTypes.NEW_ITEM,
        payload: itemData
    })
};

export const deleteItem = (id, prevFiltered) => dispatch => {
    if (prevFiltered) {
        filteredItems = filteredItems.filter(item => item.id !== id);
        dispatch({
            type: actionTypes.DELETE_ITEM,
            payload: filteredItems
        })
    } else {
        filteredItems = list.filter(item => item.id !== id);
        dispatch({
            type: actionTypes.DELETE_ITEM,
            payload: filteredItems
        })
    }
};

export const editItem = (data, prevFiltered) => dispatch => {
    if (prevFiltered) {
        filteredItems = filteredItems.map( (item) => {
            if (item.id === data.id) {
                item.body = data.body
            }
            return item;
        });
        dispatch({
            type: actionTypes.EDIT_ITEM,
            payload: filteredItems
        });
    } else {
        filteredItems = list.map( (item) => {
            if (item.id === data.id) {
                item.body = data.body
            }
            return item;
        });
        dispatch({
            type: actionTypes.EDIT_ITEM,
            payload: filteredItems
        });
    }
};