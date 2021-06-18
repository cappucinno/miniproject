import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {FAB} from 'react-native-elements';

import {moderateScale} from 'react-native-size-matters';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../Utils/Constant';
import AllReviewCard from '../../Component/AllReviewCard';
import {useSelector} from 'react-redux';

const AllReviewScreen = ({navigation}) => {
  const allReview = useSelector(state => state.AllReview.data);
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* card all review */}
        {allReview !== undefined ? (
          allReview.Reviews.data.map((e, i) => (
            <AllReviewCard
              image="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              rating="9"
              headline="AWESOMEEE"
              reviewer="Uchiha Sasuke"
              review="kjsndkwhkahdbkjahwkdjhawjddvjhawdvdjhabwdjhwabvdjhajw"
            />
          ))
        ) : (
          <ActivityIndicator />
        )}

        {/* floating action button */}
        <FAB
          placement="right"
          size="large"
          icon={
            <Ionicons
              name="add"
              size={moderateScale(20)}
              color={COLORS.cream}
            />
          }
          color={COLORS.redOld}
          style={{
            borderRadius: moderateScale(10),
            width: moderateScale(50),
            height: moderateScale(50),
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllReviewScreen;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: COLORS.primaryBlack,
  },
});
