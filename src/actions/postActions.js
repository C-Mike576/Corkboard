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
    Axios({
        method: 'post',
        url: 'http://localhost:4000/posts',
        data: newPost
    })
}