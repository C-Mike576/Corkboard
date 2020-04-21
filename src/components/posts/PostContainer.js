import React from 'react';
import { connect } from 'react-redux'
import Post from './Post'

class PostContainer extends React.Component {
    
    renderPosts = () =>
    this.props.posts.map((post, id) =>
    <Post key={id} text={post} />
    )

    render() {
        return(
            <div>
                {this.renderPosts}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        Posts: state.posts
    }
}

export default connect(mapStateToProps)(PostContainer)