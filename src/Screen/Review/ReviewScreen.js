import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../Utils/Constant';
import {Card, Button, Overlay, Rating, Input} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const ReviewScreen = () => {
  // state untuk toggle overlay
  const [stateOverlay, setstateOverlay] = useState(false);
  // function overlay
  const toggleOverlay = () => setstateOverlay(!stateOverlay);

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* card */}
        <Card
          containerStyle={{
            borderRadius: moderateScale(20),
          }}>
          {/* card image */}
          <View style={styles.cardFlex}>
            <Card.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
              }}
              style={{width: moderateScale(80), height: moderateScale(110)}}
            />

            {/* card text */}
            <View style={styles.overView}>
              <Card.Title style={styles.titleCard}>Parasite (2019)</Card.Title>
              <Card.FeaturedSubtitle style={styles.subtitleCard}>
                Reviewed February 24, 2020
              </Card.FeaturedSubtitle>

              {/* card rating */}
              <View style={styles.ratingView}>
                <MaterialCommunityIcons name="star" size={16} color="orange" />
                <Text>
                  <Text style={styles.boldText}>9</Text>/10
                </Text>
              </View>

              {/* card icon edit & delete */}
              <View style={styles.editView}>
                <TouchableOpacity onPress={toggleOverlay}>
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
          <Text style={styles.headlineText}>GREAT!!!</Text>
          <Text style={{fontSize: moderateScale(12)}}>
            asndkankjdwnkanwkjjdawdhjabs diabwidb abwd jabwd jb awjhdb ajshdb
            jhawbd jhabwd jkh
          </Text>
        </Card>

        {/* overlay */}
        <Overlay
          overlayStyle={styles.overStyle}
          isVisible={stateOverlay}
          onBackdropPress={toggleOverlay}>
          {/* overlay view */}
          <View style={styles.overlayView}>
            <View style={{paddingTop: moderateScale(10)}}>
              <Text style={styles.boldText}>
                How Do You think about this movie?
              </Text>
            </View>
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
                tintColor={COLORS.cream}
              />
            </View>

            <Text style={styles.boldText}>Your Rating: 10</Text>

            {/* overlay input review */}
            <Input
              placeholder="Write a headline for your review here"
              inputContainerStyle={styles.containerInput}
              inputStyle={styles.styleInput}
            />

            <Input
              placeholder="Write your review here"
              inputContainerStyle={styles.containerReview}
              inputStyle={styles.reviewInput}
              multiline={true}
              placeholderStyle={styles.reviewPlaceholder}
            />
            {/* overlay button submit */}
            <Button
              title="Submit"
              buttonStyle={styles.styleButton}
              titleStyle={styles.titleButton}
            />
          </View>
        </Overlay>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: moderateScale(10),
    backgroundColor: COLORS.primaryBlack,
  },
  cardFlex: {
    flexDirection: 'row',
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
  subtitleCard: {
    color: 'black',
    marginBottom: moderateScale(2),
    fontSize: moderateScale(12),
    fontWeight: '400',
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP(13),
    marginBottom: moderateScale(10),
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP(13),
    alignItems: 'flex-end',
    height: heightPercentageToDP(6),
    paddingTop: moderateScale(10),
  },
  headlineText: {
    fontWeight: 'bold',
    marginVertical: moderateScale(5),
  },
  overStyle: {
    backgroundColor: COLORS.cream,
    height: heightPercentageToDP(50),
    width: widthPercentageToDP(100),
    borderRadius: moderateScale(30),
    alignItems: 'center',
  },
  overlayView: {
    alignItems: 'center',
    height: heightPercentageToDP(48),
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
    backgroundColor: COLORS.primaryBlack,

    borderRadius: moderateScale(8),
    width: widthPercentageToDP(20),
    height: heightPercentageToDP(3),
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
