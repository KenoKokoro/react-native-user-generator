import React from "react";
import {AppRegistry, Image, View, Text} from "react-native";

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user
    }
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.user = nextProps.user;
  }

  render() {
    return (
      <View style={style.userWrapper}>
        <Image style={style.image} source={this.state.user.picture}/>
        <Text style={style.text}>{this.state.user.fullName}</Text>
      </View>
    );
  }
}

const style = {
  image: {width: 200, height: 200, borderRadius: 100, justifyContent: 'center'},
  text: {fontSize: 20, marginTop: 25, textAlign: 'center'},
  userWrapper: {height: 250}
};

AppRegistry.registerComponent('User', User);