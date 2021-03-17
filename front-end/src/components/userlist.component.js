import React, { Component } from 'react';
import axios from 'axios';

const UsersList = props => (
  <tr>
    <td>{props.users.userName}</td>
    <td>{props.users.givenName}</td>
    <td>{props.users.surName}</td>
    <td>{props.users.dob}</td>
  </tr>
)

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  UsersList() {
    return this.state.users.map(currentUsers => {
      return <UsersList users={currentUsers} key={currentUsers._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3 className="py-5 text-center">Logged Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Given Name</th>
              <th>Sur Name</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            { this.UsersList() }
          </tbody>
        </table>
      </div>
    )
  }
}