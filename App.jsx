import React from 'react';
import { Link } from 'react-router';

import Letter from './Styles/Letter.js';

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

        const jumbotron = {
            padding: 20,
            margin: 20,
            backgroundColor: "#6A5ACD",
            color: "#FFFFFF",
            fontFamily: "Century Gothic",
            fontSize: 25,
            textAlign: "center",
        };
        
        
        
        return (
         <div className="container">
            <div className="page-header">
            <h1 style={containerStyle}>THE</h1>

            <Letter bgcolor="#58B3FF">W</Letter>
            <Letter bgcolor="#FF605F">O</Letter>
            <Letter bgcolor="#FFD52E">R</Letter>
            <Letter bgcolor="#49DD8E">R</Letter>
            <Letter bgcolor="#AE99FF">D</Letter>

            <h1 style={containerStyle}>Game</h1>
            </div>

            <div style={jumbotron}>
            <p>
            This is only a prototype.<br></br>
            Please provide us a review and come back later to view the final product.<br></br>
            Thank you for your interest!
            </p>
            <p>
                <span className="glyphicon glyphicon-wrench"></span>
                <span className="glyphicon glyphicon-wrench"></span>
                <span className="glyphicon glyphicon-wrench"></span>
            </p>
            </div>

            <div>
            {this.props.children}
            </div>

            <br></br>
            <br></br>
        

            <div className="page-footer">
            <strong>
            <Link to="about" className="btn-primary btn-lg">About  <span className="glyphicon glyphicon-pencil"></span></Link>
            <Link to="contact" className="btn-primary btn-lg">Contact  <span className="glyphicon glyphicon-envelope"></span></Link>
            </strong>
            
            
            </div>

         </div>
      )
   }
}

export default App; 