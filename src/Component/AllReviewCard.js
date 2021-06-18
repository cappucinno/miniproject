import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Card} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {COLORS} from '../Utils/Constant';
import Poppins from './Poppins';

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
            <View style={styles.topContain}>
              <MaterialCommunityIcons
                name="star"
                size={moderateScale(18)}
                color="orange"
              />
            </View>
            <View style={styles.topContain}>
              <Poppins
                title={props.rating}
                title1="/10"
                size={moderateScale(12)}
                size1={moderateScale(12)}
              />
            </View>

            <View style={styles.topContain}>
              <Poppins
                title={props.headline}
                type="Bold"
                size={moderateScale(14)}
              />
            </View>
          </View>
          {/* card reviewer */}
          <Poppins
            title="Reviewer : "
            title1={props.reviewer}
            type1="Bold"
            size={moderateScale(12)}
            size1={moderateScale(12)}
            style={styles.cardSubtitle}
            style1={styles.cardTitle}
          />
        </View>
      </View>
      {/* card review */}
      <Poppins
        index={props.keyIndex}
        title={props.review}
        size={moderateScale(12)}
        style={{marginTop: moderateScale(10)}}
      />
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
    justifyContent: 'flex-start',
    width: widthPercentageToDP(62),
    marginBottom: moderateScale(3),
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  cardSubtitle: {
    marginBottom: moderateScale(2),
  },
  cardTitle: {
    marginBottom: moderateScale(0),
  },
  topContain: {
    paddingLeft: moderateScale(2),
    alignItems: 'center',
  },
});
