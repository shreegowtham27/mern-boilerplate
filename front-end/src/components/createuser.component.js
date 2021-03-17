import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeuserName = this.onChangeuserName.bind(this);
    this.onChangegivenName= this.onChangegivenName.bind(this);
    this.onChangepassword= this.onChangepassword.bind(this);
    this.onChangesurName= this.onChangesurName.bind(this);
    this.onChangedob= this.onChangedob.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userName: ''
    }
  }

  onChangeuserName(e) {
    this.setState({
      userName: e.target.value,
    })
  }

  onChangegivenName(e) {
    this.setState({
      givenName: e.target.value,
    })
  }

  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  onChangedob(e) {
    this.setState({
      dob: e.target.value,
    })
  }

  onChangesurName(e) {
    this.setState({
      surName: e.target.value,
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const user = {
        userName: this.state.userName,
        givenName: this.state.givenName,
        password: this.state.password,
        surName: this.state.surName,
        dob: this.state.dob
    }

    console.log(user);

    axios.post('http://localhost:5000/users/register', user)
      .then(res => console.log(res.data));

    this.setState({
        userName: '',
        givenName: '',
        password: '',
        surName: '',
        dob: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.userName}
                onChange={this.onChangeuserName}
            />
            <label>Sur Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.surName}
                onChange={this.onChangesurName}
            />
            <label>Given name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.givenName}
                onChange={this.onChangegivenName}
            />
            <label>password: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangepassword}
            />
            <label>Date Of Birth </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="dd/mm/yyyy"
                value={this.state.dob}
                onChange={this.onChangedob}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}