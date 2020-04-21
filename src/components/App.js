import React from 'react';
import { connect } from 'react-redux';
import CreatePosts from './posts/CreatePost';
import PostContainer from './posts/PostContainer';

class App extends React.Component {
    render() {
        return(
            <div>
                <CreatePosts />
                <PostContainer/>
            </div>
        )
    }
}



export default connect()(App)