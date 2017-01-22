import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'

import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'

class Contacts extends React.Component {
   render() {

        const { dispatch, visibleTodos } = this.props

      return (
         <div>
            <h1>Contacts...</h1>
         </div>
      )
   }
}

function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(Contacts)