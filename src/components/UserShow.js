import React from 'react'
import axios from '../config/axios';
import { Link } from 'react-router-dom'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            postsData: []
        }
    }

    componentDidMount() {
        axios.get(`/users/${this.props.match.params.id}`)
         .then((response) => {
             const user = response.data
             this.setState({user})
         })
         .catch((err) => {
             alert(err)
         })
        axios.get(`/posts?userId=${this.props.match.params.id}`)
         .then((response) => {
             const postsData = response.data
             this.setState({postsData})
         })
         .catch((err) => {
             alert(err)
         })
    }

    render() {
        return (
            <div className="container">
                <h1 style={{color: '#343a40'}}>User Name - <span style={{color: 'gray'}}>{this.state.user.name}</span></h1>
                <h2 style={{color: '#343a40'}}>Posts written by { this.state.user.name }</h2>
                <ul className="list-group list-group-flush">
                    {
                        this.state.postsData.map(post => {
                            return <li key={post.id} className="list-group-item"><Link to={`/post/${post.id}/${post.userId}`}> {post.title }</Link></li>
                        })
                    }
                </ul>
                <Link to="/users" className="btn btn-secondary">back</Link>
            </div>
        )
    }
}
export default UserShow