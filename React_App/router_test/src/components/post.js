import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from "../actions/postActions";

class Post extends React.Component {

    // state = {
    //     post : null
    // }

    // componentDidMount(){
    //     let id = this.props.match.params.id
    //     Axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(
    //         res => {
    //             this.setState({ post : res.data })
    //             console.log(this.state.post)
    //         }
    //     )
    // }

    //commented because of Redux

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        // using push method from the props, we do programmatic redirect, so when the event is called, it redirects to '/' url
        // we can also use the link tag in the button
        this.props.history.push('/')
    }

    render(){
        console.log(this.props)
        const post = this.props.post ? 
        (
            <div className="container">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className = "center">
                        <button className="btn grey" onClick = {this.handleClick}>
                            Delete Post
                        </button>
                </div>
            </div>
        ) 
        : 
        (
            <div className="container"> Post Doesn't Exist </div>   
        )

        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    return {
        post : state.posts.find(post => post.id === id)
        // the .find method is the kind of methos which takes a callback function with an individual post as an argument
        // .find( (post) => { return post.id === id })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)