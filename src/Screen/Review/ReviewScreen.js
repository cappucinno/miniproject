import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../Utils/Constant';

import ReviewCard from '../../Component/ReviewCard';
import OverlayComp from '../../Component/OverlayComp';

const ReviewScreen = () => {
  // state untuk toggle overlay
  const [stateOverlay, setstateOverlay] = useState(false);
  // function overlay
  const toggleOverlay = () => setstateOverlay(!stateOverlay);

  const Submit = () => {};

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* card */}
        <ReviewCard
          image="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Parasite"
          years="2019"
          dateReviewed="24 February 2019"
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

  boldText: {
    fontWeight: 'bold',
  },
});
