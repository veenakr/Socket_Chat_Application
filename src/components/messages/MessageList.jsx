import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  render() {
    return (
      <div>
        <div className="message-list">
          <div className="well">
            <h3 className="user">Messages</h3>
            <div className="head">Welcome to SockChat!</div>
          </div>
        </div>
        <div className="message-box">
          {this.props.messages.map((message, i) => {
            if (i != 0) {
              return (
                <div className="white">
                  <Message message={message} key={i} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default MessageList;
