import React from 'react';
import { connect } from 'react-redux'
import Post from './Post';
import { fetchPosts } from '../../actions/postActions';



class PostContainer extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchPosts())
    }
  

    render() {
       return(
           <div>
               {!this.props.posts ? <h4>Loading...</h4> :
                this.props.posts.map( p => 
            <Post key={p.id} post={p}/>)}
           </div>
       )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.data,
        
    }
}

export default connect(mapStateToProps)(PostContainer)