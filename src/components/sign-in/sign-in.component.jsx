import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustonButton from "../custom-button/custom-button.component";

import {auth,signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);

      this.setState({ email: "", password: "" });
    } catch(err) {
      console.log(err)
    }


    
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            required
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <CustonButton type="submit">Sign In</CustonButton>
            <CustonButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustonButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
