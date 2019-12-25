import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PostsList extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
         .then((response) => {
             const posts = response.data
             this.setState({posts})
         })
         .catch((err) => {
             alert(err)
         })
    }
    render(){
        return (
            <div className="container">
                <h1 style={{color: '#343a40'}}>Total posts - {this.state.posts.length}</h1>
                <ul className="list-group list-group-flush">
                {
                    this.state.posts.map(post => {
                        return <li key={post.id} className="list-group-item"> <Link to={`/post/${post.id}/${post.userId}`}>{ post.title }</Link> </li>
                    })
                }
                </ul>
            </div>
        )
    }
}
export default PostsList