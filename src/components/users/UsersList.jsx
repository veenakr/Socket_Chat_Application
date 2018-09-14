import React from 'react';

class UsersList extends React.Component {
  render() {
    return (
      <div className="users-list">
        <div className="well">
          <h3 className="user user1">
            Users(
            {this.props.users.length})
          </h3>
          <ul className="list-group">
            {this.props.users.map((user, i) => {
              return (
                <li className="list-group-item" user={user} key={i}>
                  {user.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default UsersList;
