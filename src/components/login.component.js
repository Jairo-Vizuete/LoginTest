import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  submiting = (e) => {
    // console.log(this.state)
    this.props.adduser(this.state.email, this.state.password)
    e.preventDefault();
  };

  onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // this.props.adduser("sese@gmail.com","admin123");
    // console.log(this.props)
    return (
      <form onSubmit={this.submiting}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.onChange}
            value={this.state.email}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.onChange}
            value={this.state.password}
          />
        </div>
        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
