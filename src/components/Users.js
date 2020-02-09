import React from 'react'
import axios from '../config/axios'
import { Link } from 'react-router-dom'

class UsersList extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('/users')
         .then((response) => {
            const users = response.data
            this.setState({users})
         })
         .catch((err) => {
             alert(err)
         })
    }

    render(){
        return (
            <div className="container">
                <h1 style={{ color: '#343a40' }}>Listing users - {this.state.users.length}</h1>
                <ul className="list-group list-group-flush">
                    {
                        this.state.users.map(user => {
                            return <li key={user.id} className="list-group-item"> <Link to={`/user/${user.id}`}>{ user.name }</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default UsersList