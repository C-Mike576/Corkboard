import React from 'react';
import { connect } from 'react-redux'
import Post from './Post';
import { v4 as uuidv4 } from 'uuid';


class PostContainer extends React.Component {
    
    renderPosts = () =>
        this.props.posts.map((post) =>
            <Post key={uuidv4()} text={post.content} user={post.username} />
    )

    render() {
        return(
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostContainer)