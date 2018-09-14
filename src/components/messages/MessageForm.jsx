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
      <div className="message-list">
        <form className="form-message" onSubmit={this.onSubmit.bind(this)}>
          <div className="box-input">
            <input type="text" className="form-control" ref="text" placeholder="Please type a message..." />
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;
