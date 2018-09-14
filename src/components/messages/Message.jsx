import React from 'react';

class Message extends React.Component {
  formatTime(timeStamp) {
    const dt = new Date(timeStamp * 1000);
    var hours = dt.getHours();
    var mins = dt.getMinutes();
    var sec = dt.getSeconds();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (mins < 10) {
      mins = '0' + mins;
    }

    if (sec < 10) {
      sec = '0' + sec;
    }

    return hours + ':' + mins + ':' + sec;
  }
  render() {
    const { message } = this.props;
    var formattedTime = this.formatTime(message.timeStamp);
    return (
      <div className="message">
        <strong>{message.user}</strong> {formattedTime} - {message.text}
      </div>
    );
  }
}

export default Message;
