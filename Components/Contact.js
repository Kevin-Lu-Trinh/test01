import React from 'react';
import { Link } from 'react-router';

class Contact extends React.Component {
   render() {
      return (
         <div>
            Contacts...
            <br></br>
            <Link to="/"className="btn-primary btn-md">Return to Homepage  <span className="glyphicon glyphicon-home"></span></Link>
         </div>
      );
   }
}

export default Contact;