import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
   render() {
      return (
         <div>
            About...
            <br></br>
            <Link to="/"className="btn-primary btn-md">Return to Homepage  <span className="glyphicon glyphicon-home"></span></Link>
         </div>
      );
   }
}

export default About;