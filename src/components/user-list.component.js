import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function User(props) {
  return (
    <tr>
      <td>
        <Link to = {`/user/${props.user._id}`}>
          {props.user.userName}
        </Link>
      </td>
    </tr>
  );
}

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('https://workout-scheduling.herokuapp.com/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  userList() {
    return this.state.users.map(currentUser => {
      return (
        <User user = {currentUser} />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
        <table className = 'table'>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
    );
  }
}
