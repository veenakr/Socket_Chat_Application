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
      <div className="box">
        <h3 className="login">Chat Login</h3>
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
          <input className="input" type="text" name="uname" placeholder="Choose a UserName" />
        </form>
      </div>
    );
  }
}

export default UserForm;
