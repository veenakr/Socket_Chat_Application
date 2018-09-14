import React from 'react';

class UserForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    var name = e.target.elements.uname.value.trim();

    this.props.setUser({ name });
    this.props.emit('userJoined', { name });

    e.target.elements.uname.value = '';
  }

  render() {
    return (
      <div>
        <h3>Chat Login</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" className="form-control" name="uname" placeholder="Choose a UserName" />
        </form>
      </div>
    );
  }
}

export default UserForm;
