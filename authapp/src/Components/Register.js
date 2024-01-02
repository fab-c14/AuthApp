import { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  }

  handleEmail = (e) => {
    this.setState({user:{...this.state.user,email:e.target.value}});
  }
  handleName = (e) => {
    this.setState({ user: { ...this.state.user, name: e.target.value } });
  };

  handlePassword = (e) => {
    this.setState({ user: { ...this.state.user, password: e.target.value } });
  };
// for testing purposes
//   logUser = () => {
//     console.log(this.state);
//   };
  registerUser = ()=>{

  }

  render() {
    const { routeChange } = this.props;
    return (
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" onChange={this.handleName} />
              </div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" onChange={this.handleEmail} />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={this.handlePassword} />
              </div>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onSubmit={this.registerUser}/>
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db" onClick={() => routeChange('home')}>Sign In</a>
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default Register;
