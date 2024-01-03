// Import React and Tachyons
import React, { Component } from 'react';
import 'tachyons'; // Make sure to adjust the path based on your project structure

// Define the Home component
class Home extends Component {
  render() {
    return (
      <div className="tc bg-light-gray pa4">
        <h1 className="f2">Welcome to My React App</h1>
        <p className="f4">This is the home page of the app.</p>

        <div className="flex justify-center mt4">
          <button className="f5 link dim ph3 pv2 mb2 dib white bg-dark-blue">Click Me</button>
        </div>
      </div>
    );
  }
}

export default Home;
