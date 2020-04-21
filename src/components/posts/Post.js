import React from 'react'
 
const Post = props => {
  return (
    <li>{props.username}<br/>{props.content}</li>
  );
};
 
export default Post;