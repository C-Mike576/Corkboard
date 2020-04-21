import { applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware'

import postReducer from './reducers/postReducer'

const middleware = applyMiddleware(thunk, promise)

let store = createStore(postReducer, middleware)

export default store