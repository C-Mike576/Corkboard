import React from 'react'
import { connect } from 'react-redux';
import { pushNewPost } from '../../actions/postActions';

class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            content: ""
        }
    }
    
    handleChange(event) {
        switch (event.target.className) {
            case "username":
                this.setState({
                    ...this.state,
                    username: event.target.value
                
                })
                break
            case "content":
                this.setState({
                    ...this.state,
                    content: event.target.value
                })
                break
            default:
                return this.state
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        pushNewPost(this.state)
        this.setState({
            username: "",
            content: ""
        }) 
        
        
    }

    render() {
        return (
            <div className="newPostForm">
            <h1>Post to Corkboard</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.username} className="username" />
                    <br/>
                    <label>Content:</label>
                    <textarea onChange={(event) => this.handleChange(event)} value={this.state.content} className="content" />
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
    
    
}

// const mapDispatchToProps = dispatch => ({
//     addPost: formData => dispatch({ type: 'ADD_POST', payload: formData })
// })

export default connect()(CreatePost)

