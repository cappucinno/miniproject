import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Card} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {COLORS} from '../Utils/Constant';

const AllReviewCard = props => {
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
          style={{
            width: moderateScale(50),
            height: moderateScale(50),
            borderRadius: moderateScale(50),
          }}
        />

        {/* card text */}
        <View style={styles.cardTextView}>
          {/* card rating */}
          <View style={styles.ratingView}>
            <MaterialCommunityIcons name="star" size={16} color="orange" />
            <Text>
              <Text style={styles.boldText}>{props.rating}</Text>/10
            </Text>
            <Text style={styles.boldText}>{props.headline}</Text>
          </View>
          {/* card reviewer */}
          <Card.FeaturedSubtitle style={styles.cardSubtitle}>
            Reviewer :{' '}
            <Card.Title style={styles.cardTitle}>{props.reviewer}</Card.Title>
          </Card.FeaturedSubtitle>
        </View>
      </View>
      {/* card review */}
      <Text style={{fontSize: moderateScale(12), marginTop: moderateScale(10)}}>
        {props.review}
      </Text>
    </Card>
  );
};

export default AllReviewCard;

const styles = StyleSheet.create({
  cardFlex: {
    flexDirection: 'row',
  },
  cardTextView: {
    alignItems: 'flex-start',
    paddingLeft: moderateScale(10),
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP(55),
    marginBottom: moderateScale(3),
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: 'black',
    marginBottom: moderateScale(2),
    fontSize: moderateScale(12),
    fontWeight: '400',
  },
  cardTitle: {
    color: 'black',
    marginBottom: moderateScale(0),
    fontWeight: 'bold',
  },
});
