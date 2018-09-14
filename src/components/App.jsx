import React from 'react';
import MessageList from './messages/MessageList.jsx';
import MessageForm from './messages/MessageForm.jsx';
import UsersList from './users/UsersList.jsx';
import UsersForm from './users/UsersForm.jsx';
import io from 'socket.io-client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'disconnected',
      messages: [
        {
          timeStamp: Date.now(),
          text: 'Welcome to SockChat'
        }
      ],
      users: [],
      user: ''
    };
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect.bind(this));
    this.socket.on('disconnect', this.disconnect.bind(this));
    this.socket.on('messageAdded', this.onMessageAdded.bind(this));
    this.socket.on('userJoined', this.onUserJoined.bind(this));
  }

  connect() {
    this.setState({ status: 'connected' });
    console.log('Connected: ' + this.socket.id);
  }

  onMessageAdded(message) {
    this.setState(() => ({
      messages: this.state.messages.concat(message)
    }));
  }

  onUserJoined(users) {
    this.setState({ users });
  }

  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
  }

  disconnect(users) {
    console.log('disConnected: ' + this.socket.id);
    this.setState({ users });
    this.setState({ status: 'disconnected' });
  }

  setUser(user) {
    this.setState({ user });
  }

  render() {
    if (this.state.user == '') {
      return <UsersForm emit={this.emit.bind(this)} setUser={this.setUser.bind(this)} />;
    } else {
      return (
        <div className="row">
          <div className="col-md-4">
            <UsersList {...this.state} />
          </div>
          <div className="col-md-8">
            <MessageList {...this.state} />
            <MessageForm {...this.state} emit={this.emit.bind(this)} />
          </div>
        </div>
      );
    }
  }
}

export default App;
