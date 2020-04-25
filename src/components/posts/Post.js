import React from 'react'
 
function Post(props) {

  return (
    <div className="note-card">
      <h4>{props.post.username}</h4>
      <p>{props.post.content}</p>
    </div>
  );
};
 
export default Post;

//