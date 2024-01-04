import React, { Component } from 'react';
import 'tachyons';
import './Home.css'; // Import additional styles

class Home extends Component {
  render() {
    const { routeChange } = this.props;

    return (
      <div className="tc smooth-background">
        <div className="pa4">
          <div className="flex justify-between items-center mb4">
            <h1 className="f2 center white">Welcome to Your Marvelous React App</h1>
            <button className="f5 link dim ph3 pv2 mb2 dib white bg-red self-end" onClick={() => routeChange('sign')}>
              Sign Out
            </button>
          </div>

          <p className="f4 white mb4">Explore the wonders of this amazing application. Here's some additional content:</p>

          <ul className="list pl0 white">
            <li className="mb2">Feature 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="mb2">Feature 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li className="mb2">Feature 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
            {/* Add more features as needed */}
          </ul>

          <div className="image-grid mt4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <img
                key={index}
                className="image-item br3 ba b--white-10"
                src={`https://picsum.photos/300/200?random=${index}`}
                alt={`Lorem Picsum Image ${index}`}
              />
            ))}
          </div>

          {/* Additional content below the images */}
          <div className="mt4">
            <h2 className="f3 white">Discover More</h2>
            <p className="f5 white">
              Immerse yourself in the beauty of our curated images and explore the endless possibilities
              that await you. Your journey begins here!
            </p>
            <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue" onClick={() => alert("Button Clicked")}>
              Get Started
            </button>
          </div>
        </div>

        {/* Animated background */}
        <div className="animation-container">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="animation-item" />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
