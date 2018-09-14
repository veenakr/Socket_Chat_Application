import React from 'react';

class MessageForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.emit('messageAdded', {
      timeStamp: Date.now(),
      text: this.refs.text.value.trim(),
      user: this.props.user.name
    });

    this.refs.text.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" className="form-control" ref="text" placeholder="Please type a message..." />
        </form>
      </div>
    );
  }
}

export default MessageForm;
