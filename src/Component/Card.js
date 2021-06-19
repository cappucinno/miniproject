import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-vector-icons/Foundation';
import {COLORS} from '../Utils/Constant';
import Poppins from './Poppins';

export default function CardView(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.detail}>
      <Card containerStyle={styles.cardContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{uri: props.poster}}
        />
        <Poppins
          title={props.synopsis}
          size={moderateScale(16)}
          style={styles.textDesc}
          numberOfLines={3}
          ellipsizeMode="tail"
        />
        {/* <Text style={styles.textDesc} numberOfLines={4} ellipsizeMode="tail">
          {props.synopsis}
        </Text> */}

        <Card.Divider width={2} color={COLORS.imperialRed} />

        {/* tombol review */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.reviewBtn} onPress={props.allreview}>
            <Ionicons
              name="chatbubble-outline"
              size={moderateScale(25)}
              color={COLORS.primaryBlack}
              style={styles.reviewIcon}
            />
            <Text>123</Text>
          </TouchableOpacity>

          {/* tombol share */}
          <TouchableOpacity>
            <Share
              name="share"
              size={moderateScale(25)}
              color={COLORS.primaryBlack}
            />
          </TouchableOpacity>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: moderateScale(20),
    backgroundColor: COLORS.cream,
  },
  image: {
    flex: 1,
    // width: moderateScale(290),
    height: moderateScale(180),
    backgroundColor: 'black',
    marginBottom: moderateScale(15),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDesc: {
    marginBottom: moderateScale(15),
    // fontSize: moderateScale(16),
    textAlign: 'justify',
  },
  reviewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewIcon: {
    transform: [{rotateY: '180deg'}],
    marginRight: moderateScale(5),
  },
});
