import './App.css';
import 'tachyons';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route:'home'
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
        ? <SignIn routeChange={this.routeChange}/>
        : <Register routeChange={this.routeChange} />
      }
      </div>
    )
  }
}

export default App;
