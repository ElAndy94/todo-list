import * as actionTypes from './actionTypes';

let list = [
    {
        "id": 1,
        "title": "Monday Post",
        "body": "totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        "id": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        "id": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        "id": 9,
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        "id": 10,
        "title": "optio molestias id quia eum",
        "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
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