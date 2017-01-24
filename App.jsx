import React from 'react';
import { Link } from 'react-router';

import Letter from './Components/Letter.js';

class App extends React.Component {
    render() {
        
        const containerStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: "#DEB887",
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center",
        };
        
        
        return (
         <div>
            <h1 style={containerStyle}>THE</h1>

            <Letter bgcolor="#58B3FF">W</Letter>
            <Letter bgcolor="#FF605F">O</Letter>
            <Letter bgcolor="#FFD52E">R</Letter>
            <Letter bgcolor="#49DD8E">R</Letter>
            <Letter bgcolor="#AE99FF">D</Letter>

            <h1 style={containerStyle}>Game</h1>

            <ul>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>

            {this.props.children}
         </div>
      )
   }
}

export default App; 