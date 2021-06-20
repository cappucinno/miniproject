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
import {
  deleteMyReview,
  getReviewData,
  putMyReviewData,
} from './Redux/Action/ActionReview';
import Poppins from '../../Component/Poppins';
import moment from 'moment';

const ReviewScreen = () => {
  const userData = useSelector(state => state.Login.data);

  useEffect(() => {
    dispatch(getReviewData(userData.data.id));
  }, [getReviewData]);
  // state untuk toggle overlay
  const [stateOverlay, setstateOverlay] = useState(false);
  // function overlay
  const toggleOverlay = () => setstateOverlay(!stateOverlay);

  const dispatch = useDispatch();

  const review = useSelector(state => state.Review.review);

  const [StarRating, setStar] = useState(0);
  const [Headline, setHeadline] = useState('');
  const [Review, setReview] = useState('');

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {userData === null && review === undefined ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.bottomStyle}>
            {/* card */}
            {review !== undefined ? (
              review.map((e, i) => {
                return (
                  <ReviewCard
                    key={i}
                    image={e.Movie.poster}
                    title={e.Movie.title}
                    years={moment(e.Movie.MovieInfo.releaseDate).format('YYYY')}
                    dateReviewed={moment(e.createdAt).format('LL')}
                    star={e.rating}
                    headline={e.headlineReview}
                    review={e.review}
                    toggle={toggleOverlay}
                    delete={() => dispatch(deleteMyReview(e.id))}
                  />
                );
              })
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
            {review !== undefined
              ? review.map((e, i) => (
                  <OverlayComp
                    key={i}
                    visible={stateOverlay}
                    toggle={toggleOverlay}
                    startEdit={e.rating}
                    setstar={setStar}
                    setheadline={setHeadline}
                    setreview={setReview}
                    defHead={e.headlineReview}
                    defRev={e.review}
                    rating={StarRating}
                    edit={() => {
                      dispatch(
                        putMyReviewData({
                          movieId: e.id,
                          headlineReview: Headline,
                          review: Review,
                          rating: StarRating,
                        }),
                      );
                      setstateOverlay(false);
                    }}
                  />
                ))
              : null}
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
