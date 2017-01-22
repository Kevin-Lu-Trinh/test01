import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'

import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'

class Home extends React.Component {
   render() {

        const { dispatch, visibleTodos } = this.props

      return (
         <div>
            <h1>Home...</h1>

                <AddTodo
               onAddClick = {text =>
               dispatch(addTodo(text))}
            />
				
            <TodoList todos = {visibleTodos}/>
         </div>
      )
   }
}

function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(Home)