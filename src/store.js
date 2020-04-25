import { applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import logger from 'redux-logger';



import postReducer from './reducers/postReducer'

const middleware = applyMiddleware(thunk, logger)

let store = createStore(postReducer, middleware)

export default store