import React from 'react';
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from 'react-native';

const Message = ({ username, text, alignRight }) =>
  <View style={[styles.container, alignRight ? { alignItems: "flex-end" } : null]}>
    <Text style={styles.usernameLabel}>from {username}</Text>
    <Text style={styles.textLabel}>{text}</Text>
  </View>

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 2,
    backgroundColor: "white"
  },
  usernameLabel: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.54)"
  },
  textLabel: {
    fontSize: 16
  }
});

Message.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Message;
