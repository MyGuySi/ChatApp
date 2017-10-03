import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import UsernameModal from "./components/UsernameModal";
import MessageList from "./components/MessageList";
import InputToolbar from "./components/InputToolbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Joe",
      messages: [
        { text: "First message", username: "Allan" },
        { text: "Second message", username: "Harry" },
      ]
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleReceiveMessage(message) {
    this.setState(previousState => {
      return { message: previousState.messages.push(message) };
    });
  }

  handleSendMessage(text) {
    const message = { text, username: this.state.username };
    this.handleReceiveMessage(message);
  }

  render() {
    return (
      <View style={styles.container}>
        <UsernameModal
          visible={this.state.username === ""}
          onDidSetUsername={username => this.setState({ username })}
        />
        <MessageList messages={this.state.messages} username={this.state.username} />
        <InputToolbar onSend={this.handleSendMessage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

export default App;
