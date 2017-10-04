import React, { Component } from 'react';
import PropTypes from "prop-types";
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Message from "./Message";

class MessageList extends Component {
  renderMessages() {
    return this.props.messages.map((message, i) =>
      <Message {...message} received={message.username !== this.props.username} key={i} />
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderMessages()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7"
  }
});

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string
};

export default MessageList;
