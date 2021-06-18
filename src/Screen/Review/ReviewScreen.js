import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../Utils/Constant';

import ReviewCard from '../../Component/ReviewCard';
import OverlayComp from '../../Component/OverlayComp';
import {useDispatch, useSelector} from 'react-redux';
import {getReviewData} from './Redux/Action/ActionReview';
import Poppins from '../../Component/Poppins';

const ReviewScreen = () => {
  const userData = useSelector(state => state.Login.data);

  useEffect(() => {
    dispatch(getReviewData({id: userData.data.id, token: userData.token}));
  }, [userData]);
  // state untuk toggle overlay
  const [stateOverlay, setstateOverlay] = useState(false);
  // function overlay
  const toggleOverlay = () => setstateOverlay(!stateOverlay);

  const Submit = () => {};

  const dispatch = useDispatch();

  const review = useSelector(state => state.Review.review);

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {userData === null ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.bottomStyle}>
            {/* card */}
            {review !== undefined ? (
              review.map((e, i) => (
                <ReviewCard
                  index={i}
                  image="https://dummyimage.com/600x400/000/fff.png&text=asdasd"
                  title="Parasite"
                  years="2019"
                  dateReviewed={e.createdAt}
                  star={e.rating}
                  headline={e.headlineReview}
                  review={e.review}
                  toggle={toggleOverlay}
                />
              ))
            ) : (
              <View style={styles.empty}>
                <Poppins
                  title="Anda Belum Pernah Mereview Film Apapun"
                  size={moderateScale(14)}
                  type="Bold"
                  color={COLORS.champagne}
                />
              </View>
            )}
            {/* overlay */}
            <OverlayComp
              visible={stateOverlay}
              toggle={toggleOverlay}
              start={1}
              rating="9"
              submit={Submit}
            />
          </View>
        )}
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
    backgroundColor: COLORS.gold,
  },

  boldText: {
    fontWeight: 'bold',
  },
  bottomStyle: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
    borderBottomStartRadius: moderateScale(30),
    borderBottomEndRadius: moderateScale(30),
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
