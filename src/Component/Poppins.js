import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../Utils/Constant';

export default function Poppins(props) {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: `Poppins-${props.type ? props.type : 'Regular'}`,
      fontSize: props.size ? props.size : 16,
      color: props.color ? props.color : COLORS.primaryBlack,
      ...props.style,
    },
  });

  return <Text style={styles.textStyle}>{props.title}</Text>;
}
