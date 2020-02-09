import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetPosts } from '../actions/postsAction'

function PostsList(props) {  
    if ( props.posts == 0 ) {
        props.dispatch(startGetPosts())
    }
    return (
        <div className="container">
            <h1 style={{color: '#343a40'}}>Total posts - {props.posts.length}</h1>
            <ul className="list-group list-group-flush">
            {
                props.posts.map(post => {
                    return <li key={post.id} className="list-group-item"> <Link to={`/post/${post.id}/${post.userId}`}>{ post.title }</Link> </li>
                })
            }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(PostsList)