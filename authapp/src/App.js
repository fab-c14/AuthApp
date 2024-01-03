import './App.css';
import 'tachyons';
import { Component } from 'react';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import Home from './Components/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route:'sign'
    }
  }
  routeChange = (route)=>{
    this.setState({route:route});
  }
  render(){
      return (
        <div className="App">
      {
        (this.state.route==='home')
        ? <Home />
        : (
         <>
         {
          (this.state.route==='sign')
          ? <SignIn routeChange={this.routeChange} />
          : <Register routeChange={this.routeChange} />
         }
         </>
         )
      }
      </div>
    )
  }
}

export default App;
