import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

class InputToolbar extends Component {
  state = { text: "" }

  constructor(props) {
    super(props);
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend() {
    this.props.onSend(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textField} onChangeText={text => this.setState({ text })} value={this.state.text} placeholder="Enter a message..." />
        <Button title="Send" onPress={this.handleSend} />
      </View>
    );
  }
}

const Button = ({ title, onPress }) =>
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonTitle}>{title}</Text>
  </TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16
  },
  textField: {
    flex: 1,
    height: 36,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderRadius: 4,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "green",
    borderRadius: 4
  },
  buttonTitle: {
    fontSize: 16,
    color: "white"
  }
});

InputToolbar.propTypes = {
  onSend: PropTypes.func.isRequired
};

export default InputToolbar;
