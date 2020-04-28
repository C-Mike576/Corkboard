import Axios from "axios";

export function fetchPosts() {
    return function(dispatch) {
       Axios.get('http://localhost:4000/posts')
       .then(res => {
           dispatch({
               type: "FETCH_POSTS_FULFILLED",
               payload: res
            })
        })    
        .catch(err => {
            dispatch({
                type: "FETCH_POSTS_REJECTED",
                payload: err
            })
        })
    }
}

export function pushNewPost(newPost) {
    return function(dispatch) {
        Axios({
            method: 'post',
            url: 'http://localhost:4000/posts',
            data: newPost
        }).then(res => { 
            dispatch({
                type: "ADD_POST",
                payload: res.data
            })
        })
    }
}