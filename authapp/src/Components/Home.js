import React, { Component } from 'react';
import 'tachyons';
import './Home.css'; // Import additional styles

class Home extends Component {
  handleButtonClick = () => {
    alert('Button Clicked!');
  };

  render() {
    const { routeChange } = this.props;

    return (
      <div className="tc gradient-background pa4">
        <h1 className="f2 center black">Welcome to Your Marvelous React App</h1>
        <button className="f5 link dim ph3 pv2 mb2 dib white bg-red" onClick={() => routeChange('sign')}>
          Sign Out
        </button>

        <div className="mt4">
          <h2 className="f3 black">Featured Content</h2>
          <div className="flex flex-wrap justify-around">
            {/* Card 1 */}
            <div className="card pa3 ma2 grow shadow-5">
              <img
                src="https://placekitten.com/300/200"
                alt="Kitten"
                className="br-100 h4 w4 dib ba b--black-05 pa2"
              />
              <h2 className="tc">Card Title 1</h2>
              <p>Card content goes here.</p>
            </div>

            {/* Card 2 */}
            <div className="card pa3 ma2 grow shadow-5">
              <img
                src="https://placekitten.com/300/200"
                alt="Kitten"
                className="br-100 h4 w4 dib ba b--black-05 pa2"
              />
              <h2 className="tc">Card Title 2</h2>
              <p>Card content goes here.</p>
            </div>

            {/* Additional Cards */}
            <div className="card pa3 ma2 grow shadow-5">
              <img
                src="https://placekitten.com/300/200"
                alt="Kitten"
                className="br-100 h4 w4 dib ba b--black-05 pa2"
              />
              <h2 className="tc">Card Title 3</h2>
              <p>Card content goes here.</p>
            </div>

            {/* Add more cards as needed */}
          </div>
        </div>

        <div className="mt4">
          <h2 className="f3 black">Latest Articles</h2>
          <div className="flex flex-wrap justify-around">
            {/* Article 1 */}
            <div className="article pa3 ma2 grow shadow-5">
              <h2>Article Title 1</h2>
              <p>Article content goes here.</p>
            </div>

            {/* Article 2 */}
            <div className="article pa3 ma2 grow shadow-5">
              <h2>Article Title 2</h2>
              <p>Article content goes here.</p>
            </div>

            {/* Additional Articles */}
            <div className="article pa3 ma2 grow shadow-5">
              <h2>Article Title 3</h2>
              <p>Article content goes here.</p>
            </div>

            {/* Add more articles as needed */}
          </div>
        </div>

        <div className="mt4">
          <h2 className="f3 black">Interactive Section</h2>
          <p className="f5 black">
            Click the button below for an interactive experience.
          </p>
          <button
            className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue"
            onClick={this.handleButtonClick}
          >
            Click Me
          </button>
          {/* Additional interactive elements can be added here */}
        </div>

        {/* Animated background */}
        <div className="animation-container">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="animation-item" />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;

