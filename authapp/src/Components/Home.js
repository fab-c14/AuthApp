import React, { Component } from 'react';
import 'tachyons'; 
import './Home.css'; // Import additional styles

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { routeChange } = this.props;
    return (
      <div className="tc bg-light-gray pa4">
        <div className="flex justify-between items-center mb4">
          <button className="f5 link dim ph3 pv2 mb2 dib white bg-red" onClick={() => routeChange('sign')}>Sign Out</button>
          <h1 className="f2">Welcome to Your Marvelous React App</h1>
        </div>

        <p className="f4">Explore the wonders of this amazing application.</p>

        <div className="flex justify-center mt4">
          <button className="f5 link dim ph3 pv2 mb2 dib white bg-dark-blue">Click Me</button>
        </div>

        <div className="image-grid mt4">
          {/* Random Images */}
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              key={index}
              className="image-item"
              src={`https://source.unsplash.com/random/300x200?sig=${index}`}
              alt={`Random Image ${index}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
