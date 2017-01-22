import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/actions'
import { routerReducer } from 'react-router-redux'

function todo(state, action) {
   switch (action.type) {
	
      case ADD_TODO:
         return {
            id: action.id,
            text: action.text,
         }
			
      default:
      return state
   }
}

function todos(state = [], action) {
   switch (action.type) {
	
      case ADD_TODO:
         return [
            ...state,
            todo(undefined, action)
         ]
			
      default:
      return state
   }
}

const todoApp = combineReducers({
   todos,
   routing: routerReducer
})

export default todoApp