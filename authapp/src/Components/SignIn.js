import { Component } from "react";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        };
    }

    handleEmail = (e) => {
        // e.preventDefault()
        this.setState({ user: { ...this.state.user, email: e.target.value } });
    };

    handlePassword = (e) => {
        // e.preventDefault(); // Prevent the default form submission behavior
        this.setState({ user: { ...this.state.user, password: e.target.value } });
    };

    DetectUser = () => {
        fetch("https://3000-fabc14-authapp-miadiq2llmj.ws-us107.gitpod.io/sign", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.user.email,
                password: this.state.user.password
            })
        })
        .then(response => response.json())
        .then((data) => {
            if (data==='success') {
                this.props.routeChange('home');
            } else {
                // Handle the case where data is falsy, e.g., user not found
                console.log("User not found or other error occurred");
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        const { routeChange } = this.props;
        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                <form className="measure center" onSubmit={(e) => { e.preventDefault();}} >

                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.DetectUser} />
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#0" className="f5 link dim black b db" onClick={() => routeChange('register')}>Register</a>
                        </div>
                    </form>
                </main>
            </article>
        )
    }
}

export default SignIn;
