import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import HomePage from './components/Home'
import UsersList from './components/Users'
import PostsList from './components/Posts'
import UserShow from './components/UserShow'
import PostShow from './components/PostShow'

function App(props) {
    return (
        <BrowserRouter>
            <div className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="">

                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/users" className="nav-link">Users</Link>
                        <Link to="/posts" className="nav-link">Posts</Link>
                    </div>
                </div>
            </div>

            <Route path="/" component={HomePage} exact={true} />
            <Route path="/users" component={UsersList} />
            <Route path="/posts" component={PostsList} />
            <Route path="/user/:id" component={UserShow} />
            <Route path="/post/:id/:userId" component={PostShow} />
            

        </BrowserRouter>

    )
}
export default App
