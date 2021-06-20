import React, {Component} from 'react';
import {View, Image} from 'react-native';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('LoginScreen');
    }, 3000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../Assets/Images/logo.png')}
          style={{width: 100, height: 150}}
        />
      </View>
    );
  }
}

export default LoadingScreen;
