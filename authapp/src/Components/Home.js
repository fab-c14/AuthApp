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
          <h1 className="f2">Welcome to Your Marvelous React App</h1>
          <button className="f5 link dim ph3 pv2 mb2 dib white bg-red self-end" onClick={() => routeChange('sign')}>
            Sign Out
          </button>
        </div>

        <p className="f4">Explore the wonders of this amazing application. Here's some additional content:</p>

        <ul className="list pl0">
          <li className="mb2">Feature 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li className="mb2">Feature 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li className="mb2">Feature 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
        </ul>

        <div className="image-grid mt4">
          {/* Lorem Picsum Images */}
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              key={index}
              className="image-item"
              src={`https://picsum.photos/300/200?random=${index}`}
              alt={`Lorem Picsum Image ${index}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
