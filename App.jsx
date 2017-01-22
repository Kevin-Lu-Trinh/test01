import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'
import { Link } from 'react-router'

import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'

class App extends Component {
   render() {

      const { dispatch, visibleTodos } = this.props
	
      return (
         <div>
			<h1><Link to='/'> Title </Link></h1>
            <ul>
               <li><Link to="home">Home</Link></li>
               <li><Link to="about">About</Link></li>
               <li><Link to="contact">Contact</Link></li>
            </ul>
				
           {this.props.children}
			
         </div>
      )
   }
}

function select(state) {
   return {
      visibleTodos: state.todos
   }
}

export default (connect(select)(App))