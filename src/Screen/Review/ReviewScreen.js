import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../Utils/Constant';

import ReviewCard from '../../Component/ReviewCard';
import OverlayComp from '../../Component/OverlayComp';
import {useDispatch, useSelector} from 'react-redux';
import {getReviewData} from './Redux/Action/ActionReview';

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

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.bottomStyle}>
          {/* card */}
          <ReviewCard
            image="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Parasite"
            years="2019"
            dateReviewed="February 24, 2019"
            star="9"
            headline="GREATTTT"
            review="ksjbdkbwakdbawkjdbkwabkdbakwdba wdkawdkakwd akwj awd awjdasnbdjbhw adbjhawbdkjagwudgajk"
            toggle={toggleOverlay}
          />
          {/* overlay */}
          <OverlayComp
            visible={stateOverlay}
            toggle={toggleOverlay}
            start={1}
            rating="9"
            submit={Submit}
          />
        </View>
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
});
