import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rating, Input, Button, Overlay} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../Utils/Constant';

const OverlayComp = props => {
  return (
    <Overlay
      key={props.index}
      overlayStyle={styles.overStyle}
      isVisible={props.visible}
      onBackdropPress={props.toggle}
      animationType="slide"
      statusBarTranslucent={true}
      onRequestClose={props.close}>
      {/* overlay view */}
      <View style={styles.overlayView}>
        <Text style={styles.boldText}>How Do You think about this movie?</Text>

        {/* overlay star rating */}
        <View
          style={{
            height: moderateScale(50),
            paddingTop: moderateScale(10),
          }}>
          <Rating
            ratingCount={10}
            imageSize={moderateScale(25)}
            type="custom"
            tintColor={COLORS.champagne}
            startingValue={props.start ? props.start : props.startEdit}
            onFinishRating={sta => props.setstar(sta)}
          />
        </View>

        <Text style={styles.boldText}>Your Rating: {props.rating}</Text>

        {/* overlay input review */}
        <Input
          defaultValue={props.defHead}
          placeholder="Write a headline for your review here"
          inputContainerStyle={styles.containerInput}
          inputStyle={styles.styleInput}
          onChangeText={i => props.setheadline(i)}
        />

        <Input
          defaultValue={props.defRev}
          placeholder="Write your review here"
          inputContainerStyle={styles.containerReview}
          inputStyle={styles.reviewInput}
          multiline={true}
          placeholderStyle={styles.reviewPlaceholder}
          onChangeText={i => props.setreview(i)}
        />
        {/* overlay button submit */}
        <Button
          title="Submit"
          buttonStyle={styles.styleButton}
          titleStyle={styles.titleButton}
          onPress={props.submit ? props.submit : props.edit}
        />
      </View>
    </Overlay>
  );
};

export default OverlayComp;

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
  overStyle: {
    backgroundColor: COLORS.champagne,
    // height: heightPercentageToDP(60),
    width: widthPercentageToDP(92),
    borderRadius: moderateScale(30),
    alignItems: 'center',
  },
  overlayView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(5),
    height: heightPercentageToDP(55),
  },
  containerInput: {
    width: widthPercentageToDP(70),
    borderWidth: moderateScale(1),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(0),
    height: heightPercentageToDP(4),
    borderRadius: moderateScale(5),
    backgroundColor: 'white',
    borderColor: 'white',
  },
  styleInput: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  containerReview: {
    width: widthPercentageToDP(70),
    borderWidth: moderateScale(1),
    height: heightPercentageToDP(15),
    borderRadius: moderateScale(5),
    backgroundColor: 'white',
    borderColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: moderateScale(0),
  },
  reviewInput: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    fontSize: moderateScale(12),
    paddingTop: moderateScale(0),
    textAlign: 'justify',
  },
  styleButton: {
    backgroundColor: COLORS.imperialRed,

    borderRadius: moderateScale(15),
    width: widthPercentageToDP(20),
    height: heightPercentageToDP(5),
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(0),
  },
  titleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: moderateScale(11),
  },
  reviewPlaceholder: {
    alignItems: 'flex-start',
  },
});
