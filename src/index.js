import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'

// import { startGetPosts } from './actions/postsAction'

import { Provider } from 'react-redux'

const store = configureStore()
console.log(store.getState())

// store.dispatch(startGetPosts())
console.log('posts', store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

console.log('after subscribe',store.getState())


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))