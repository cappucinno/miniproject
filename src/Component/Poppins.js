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
    textStyle1: {
      fontFamily: `Poppins-${props.type1 ? props.type1 : 'Regular'}`,
      fontSize: props.size1 ? props.size1 : 12,
      color: props.color1 ? props.color1 : COLORS.primaryBlack,
      ...props.style1,
    },
  });

  return (
    <Text
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      key={props.indextext}
      style={styles.textStyle}>
      {props.title}
      <Text key={props.i} style={styles.textStyle1}>
        {props.title1}
      </Text>
    </Text>
  );
}
