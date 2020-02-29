import React, { Component } from 'react';
// import * as ROLES from '../../constants/roles';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
class AdminPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        users: [],
      };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.users().on('value', snapshot => {
          const usersObject = snapshot.val();
          const usersList = Object.keys(usersObject).map(key => ({
            ...usersObject[key],
            uid: key,
          }));
          this.setState({
            users: usersList,
            loading: false,
          });
        });
    }

    // to avoid memory leaks
    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;
        return (
          <div>
            <h1>Admin</h1>
            {loading && <div>Loading ...</div>}
            <UserList users={users} />
          </div>
        );
      }
    }
    const UserList = ({ users }) => (
      <ul>
        {users.map(user => (
          <li key={user.uid}>
            <span>
              <strong>Email: </strong> {user.email}
            </span>
            <span>
              <strong>firstName: </strong> {user.firstName}
            </span>
            <span>
              <strong>lastName:</strong> {user.lastName}
            </span>
          </li>
        ))}
      </ul>
    );

const condition = authUser =>
  authUser && authUser.email === 'kibuika1@gmail.com';
export default withAuthorization(condition)(withFirebase(AdminPage));
