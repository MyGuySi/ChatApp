import React, { Component } from "react";
import { Alert, StyleSheet, KeyboardAvoidingView } from "react-native";
import UsernameModal from "./components/UsernameModal";
import MessageList from "./components/MessageList";
import InputToolbar from "./components/InputToolbar";

var SocketClient = require("socket.io-client");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      messages: []
    };

    this.socket = SocketClient("https://your-url.ngrok.io"); // Replace with your ngrok url
    this.socket.on("connect", () => {
      console.log("Connected to websocket!");
    });
    this.socket.on("message", message => {
      console.log("Received message", message);
      this.handleReceiveMessage(message);
    });

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
    this.socket.emit("message", message);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UsernameModal
          visible={this.state.username === ""}
          onDidSetUsername={username => this.setState({ username })}
        />
        <MessageList
          messages={this.state.messages}
          username={this.state.username}
        />
        <InputToolbar onSend={this.handleSendMessage} />
      </KeyboardAvoidingView>
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
