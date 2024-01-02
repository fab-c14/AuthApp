import { Component } from "react";

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                email:'',
                password:''
            }
        }
    }
    handleEmail = (e) => {
        this.setState({ user: { ...this.state.user, email: e.target.value } });
    };
    
    handlePassword = (e) => {
        this.setState({ user: { ...this.state.user, password: e.target.value } });
    };
    
    DetectUser = ()=>{
        // console.log(this.state.user)
        fetch("https://3000-fabc14-authapp-cwl7uap5yd6.ws-us107.gitpod.io/sign")
        .then(response => response.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

    render(){
        const {routeChange} = this.props;
        return(
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.handleEmail}/>
                        </div>
                        <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.handlePassword}/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onSubmit={this.DetectUser}/>
                    </div>
                    <div className="lh-copy mt3">
                        <a href="#0" className="f6 link dim black db" onClick={()=>routeChange('register')}>Register</a>
                    </div>
                    </form>
                </main>
        </article>
        )
    }
}


export default SignIn;