import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button, Modal, Text, TextInput, StyleSheet, View } from 'react-native';

class UsernameModal extends Component {
  state = { text: "" };

  constructor(props) {
    super(props);
    this.handleSetUsername = this.handleSetUsername.bind(this);
  }

  handleSetUsername() {
    if (this.state.text !== "") {
      this.props.onDidSetUsername(this.state.text);
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        animationType="slide"
        onRequestClose={() => null}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.textField}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Enter your username"
          />
          <Button title="Save" onPress={this.handleSetUsername} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
    width: 250,
    height: 36,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderRadius: 4
  }
});

UsernameModal.propTypes = {
  onDidSetUsername: PropTypes.func.isRequired,
  visible: PropTypes.bool
};

export default UsernameModal;
