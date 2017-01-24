import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Homepage</h1>
            <p>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            </p>

            {this.props.children}
         </div>
      )
   }
}

export default App; 