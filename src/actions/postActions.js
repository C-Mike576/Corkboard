function fetchPosts() {
    fetch("http://localhost:4000/posts")
    .then(res => res.json)
    .then(postsObj => renderPost(postsObj))
    
}

function renderPost(postsObj) {
    postsObj.map(post => {
        dispatch({
            type: "ADD_POST",
            payload: post
        })
    })
}