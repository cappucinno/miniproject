import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ReviewCard = props => {
  return (
    <Card
      containerStyle={{
        borderRadius: moderateScale(20),
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
          <Card.Title style={styles.titleCard}>
            {props.title} ({props.years})
          </Card.Title>
          <Card.FeaturedSubtitle style={styles.subtitleCard}>
            Reviewed {props.dateReviewed}
          </Card.FeaturedSubtitle>

          {/* card rating */}
          <View style={styles.ratingView}>
            <MaterialCommunityIcons name="star" size={16} color="orange" />
            <Text>
              <Text style={styles.boldText}>{props.star}</Text>/10
            </Text>
          </View>

          {/* card icon edit & delete */}
          <View style={styles.editView}>
            <TouchableOpacity onPress={props.toggle}>
              <MaterialCommunityIcons
                name="circle-edit-outline"
                size={18}
                color="orange"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="delete-circle"
                size={18}
                color="orange"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* bottom text */}
      <Text style={styles.headlineText}>{props.headline}</Text>
      <Text style={{fontSize: moderateScale(12)}}>{props.review}</Text>
    </Card>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  cardFlex: {
    flexDirection: 'row',
  },
  headlineText: {
    fontWeight: 'bold',
    marginVertical: moderateScale(5),
  },
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP(13),
    alignItems: 'flex-end',
    height: heightPercentageToDP(6),
    paddingTop: moderateScale(10),
  },
  boldText: {
    fontWeight: 'bold',
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP(13),
    marginBottom: moderateScale(10),
    alignItems: 'center',
  },
  subtitleCard: {
    color: 'black',
    marginBottom: moderateScale(2),
    fontSize: moderateScale(12),
    fontWeight: '400',
  },
  overView: {
    alignItems: 'flex-start',
    paddingLeft: moderateScale(10),
  },
  titleCard: {
    color: 'black',
    marginBottom: moderateScale(0),
    fontWeight: 'bold',
  },
});
