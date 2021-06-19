import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../Utils/Constant';
import Poppins from './Poppins';

const ReviewCard = props => {
  return (
    <Card
      key={props.index}
      containerStyle={{
        borderRadius: moderateScale(20),
        backgroundColor: COLORS.cream,
      }}>
      {/* card image */}
      <View style={styles.cardFlex}>
        <Card.Image
          source={{
            uri: props.image,
          }}
          style={{width: moderateScale(80), height: moderateScale(110)}}
        />

        {/* card text */}
        <View style={styles.overView}>
          <Poppins
            title={props.title}
            title1={` (${props.years})`}
            style={styles.titleCard}
            type="Bold"
          />

          <Poppins
            title="Reviewed "
            title1={props.dateReviewed}
            size={moderateScale(12)}
            size1={moderateScale(12)}
            style={styles.subtitleCard}
          />

          {/* card rating */}
          <View style={styles.ratingView}>
            <MaterialCommunityIcons
              name="star"
              size={moderateScale(16)}
              color="orange"
            />
            <Poppins
              title={props.star}
              type="Bold"
              title1="/10"
              size={moderateScale(14)}
              size1={moderateScale(14)}
            />
          </View>

          {/* card icon edit & delete */}
          <View style={styles.editView}>
            <TouchableOpacity onPress={props.toggle}>
              <MaterialCommunityIcons
                name="circle-edit-outline"
                size={moderateScale(18)}
                color="orange"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.delete}>
              <MaterialCommunityIcons
                name="delete-circle"
                size={moderateScale(18)}
                color="orange"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* bottom text */}
      <Poppins title={props.headline} type="Bold" style={styles.headlineText} />
      <Poppins title={props.review} size={moderateScale(12)} />
    </Card>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  cardFlex: {
    flexDirection: 'row',
  },
  headlineText: {
    marginVertical: moderateScale(5),
  },
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP(13),
    alignItems: 'flex-end',
    height: heightPercentageToDP(4),
    paddingTop: moderateScale(10),
  },
  boldText: {
    fontWeight: 'bold',
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP(13),
    alignItems: 'center',
  },
  subtitleCard: {
    marginBottom: moderateScale(2),
  },
  overView: {
    alignItems: 'flex-start',
    paddingLeft: moderateScale(10),
    width: widthPercentageToDP(68),
    height: heightPercentageToDP(18),
  },
  titleCard: {
    marginBottom: moderateScale(0),
  },
});
