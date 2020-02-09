import React from 'react'
import axios from '../config/axios'
import { Link } from 'react-router-dom'

class PostShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            post: {},
            commentsData: [],
            userName: ''
        }
    }
    componentDidMount() {
        axios.get(`/posts/${this.props.match.params.id}`)
         .then((response) => {
             const post = response.data
             this.setState({ post })
         })
         .catch((err) => {
             alert(err)
         })
        axios.get(`/comments?postId=${this.props.match.params.id}`)
         .then((response) => {
             const commentsData = response.data
             this.setState({commentsData})
         })
         .catch((err) => {
            alert(err)
         })

         axios.get(`/users/${this.props.match.params.userId}`)
         .then((response) => {
            const user = response.data
            // const userName = users.find(user => user.id == this.state.post.userId)
            // console.log(userName)
            this.setState({user})
         })
         .catch((err) => {
             alert('error in users ajax',err)
         })
        
    }

    render() {
        return (
            <div className="container">
                <h1 style={{color: '#343a40'}}>User name - <span style={{color: 'gray'}}>{this.state.user.name}</span> </h1>
                <h2 style={{color: '#343a40'}}>Title - <span style={{color: 'gray'}}>{this.state.post.title}</span></h2>
                <h2 style={{color: '#343a40'}}>Body - <span style={{color: 'gray'}}>{ this.state.post.body }</span></h2>
                <h2 style={{color: '#343a40'}}>Comments </h2>
                <div className="card">
                    {
                        this.state.commentsData.map(comment => {
                            return <li key={comment.id} style={{color: 'gray'}}>{ comment.body }</li>
                        })
                    }   
                </div>
                 
                <br/>
                <Link to={`/user/${this.state.user.id}`} className="btn btn-secondary"> More post of authoe: {this.state.user.name} </Link>| 
                <Link to="/posts" className="btn btn-secondary"> Back </Link>

            </div>
        )
    }
}
export default PostShow