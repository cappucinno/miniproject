import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';

//icon
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../Utils/Constant';

export default function GenreButton({title}) {
  return (
    <Button
      type="clear"
      containerStyle={styles.container}
      icon={
        <Feather
          name="tv"
          size={moderateScale(15)}
          color={COLORS.primaryBlack}
          style={styles.icon}
        />
      }
      title={title}
      titleStyle={styles.title}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.champagne,
    width: moderateScale(80),
    padding: moderateScale(3),
    borderRadius: moderateScale(10),
  },
  icon: {
    marginRight: moderateScale(5),
  },
  title: {
    fontSize: moderateScale(12),
    color: COLORS.primaryBlack,
  },
});
