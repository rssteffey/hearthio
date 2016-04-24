import React, { Component } from 'react';

// Filter component - represents a filter to be rendered in the filters list in the Nav-Bar
class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="login">
          <input type="text"/>
        </div>
      );
    }
}

export default Login;