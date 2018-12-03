import * as actionTypes from './actionTypes';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
            .then(posts => 
                dispatch({
                    type: actionTypes.FETCH_POSTS,
                    payload: posts
                })
            );
};

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
        .then(post => 
            dispatch({
                type: actionTypes.NEW_POST,
                payload: post
            })
        );
};