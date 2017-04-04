import React, {Component} from "react";
import {
  TouchableHighlight, ActivityIndicator, AppRegistry, View, Text
} from "react-native";
import User from "./components/User";
import {instance as $http} from "./core/HttpRequest";
import UserModel from "./models/UserModel";

export default class UserFetch extends Component {
  constructor() {
    super();

    this.state = {
      user: new UserModel(),
      loading: true
    }
  }

  componentWillMount() {
    this.setNewUser();
  }

  render() {
    return (
      <View style={style.wrapper}>
        <ActivityIndicator animating={this.state.loading}/>
        <User user={this.state.user}/>

        <TouchableHighlight style={style.touch} onPress={this.setNewUser.bind(this)}>
          <Text style={style.touchText}>Update user</Text>
        </TouchableHighlight>
      </View>
    );
  }

  setNewUser() {
    this.setState({loading: true});
    this.setState({user: new UserModel});
    $http.get('https://randomuser.me/api').then(json => {
      this.setState({user: new UserModel(json.results[0])});
      this.setState({loading: false});
    });
  }
}

const style = {
  wrapper: {padding: 20, alignItems: 'center'},
  touch: {padding: 50, backgroundColor: '#3b71eb', marginTop: 20, borderRadius: 25},
  touchText: {fontSize: 23, color: '#fff'}
};

AppRegistry.registerComponent('test', () => UserFetch);
