import React, {Component} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {

    // state = {
    //     posts : [ ]
    // }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         this.setState({
    //             posts: res.data.slice(0,10)
    //         })
    //         console.log(this.state)
    //     })
    // }

    //commented because of Redux

    render() {
        console.log(this.props)
        const posts  = this.props.posts          
        // to get the posts property from the state, we can use :
        // 1 . { posts } = this.state
        // 2. posts = this.state.posts
        const postList = posts.map( post => {
            return (
                <div key={post.id}>
                    <Link to={'/' + post.id}>
                        <h1>{post.title}</h1>
                    </Link>
                    <p>{post.body}</p>
                </div>
            )
        })
        
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin diam in malesuada accumsan. Nam vitae enim faucibus, dapibus nulla sit amet, ultricies quam. Donec sit amet lectus vitae dolor rutrum eleifend. Vivamus vitae velit in erat malesuada sodales et a ligula. Sed tellus erat, iaculis sed hendrerit eu, bibendum vitae augue. Praesent venenatis id lectus at maximus. Aliquam sit amet ligula ac turpis volutpat facilisis. Vivamus aliquam purus nisl, vitae aliquet augue elementum in. Praesent augue purus, volutpat vitae dapibus et, dapibus in nunc. </p> */}
                {postList}
            </div>   
        )
    }
}
    
const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Home)