import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from './TextStyles';

export default class AppText extends Component{
  render(){
    const {type= ''} = this.props;
    return(
      <Text style={[
        styles.base,
        styles[type]
      ]}>
        {this.props.children}
      </Text>
    )
  }
}

