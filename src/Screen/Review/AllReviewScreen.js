import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {FAB} from 'react-native-elements';

import {moderateScale} from 'react-native-size-matters';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../Utils/Constant';
import AllReviewCard from '../../Component/AllReviewCard';
import {useDispatch, useSelector} from 'react-redux';

import Poppins from '../../Component/Poppins';
import {postNewReview} from './Redux/Action/ActionReview';
import OverlayComp from '../../Component/OverlayComp';

const AllReviewScreen = () => {
  const [stateOverlay, setstateOverlay] = useState(false);
  // function overlay
  const toggleOverlay = () => setstateOverlay(!stateOverlay);
  const dispatch = useDispatch();
  const allReview = useSelector(state => state.AllReview);

  const user = useSelector(state => state.Login.data);

  const [StarRating, setStar] = useState(0);
  const [Headline, setHeadline] = useState('');
  const [Review, setReview] = useState('');

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* card all review */}
        {allReview.data.Reviews.data.length !== 0 ? (
          allReview.data.Reviews.data.map((e, i) => (
            <AllReviewCard
              key={i}
              image={
                e.User.profilePicture === null
                  ? 'https://placeimg.com/640/480/people'
                  : e.User.profilePicture
              }
              rating={e.rating}
              headline={e.headlineReview}
              reviewer={e.User.userName}
              review={e.review}
            />
          ))
        ) : (
          <View style={styles.empty}>
            <Poppins
              title="Belum Ada Review Untuk Film Ini"
              style={styles.emptyText}
              color={COLORS.champagne}
            />
          </View>
        )}

        {/* floating action button */}
        <FAB
          onPress={toggleOverlay}
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
        <OverlayComp
          visible={stateOverlay}
          toggle={toggleOverlay}
          start={0}
          rating={StarRating}
          submit={() => {
            dispatch(
              postNewReview({
                userId: user.data.id,
                movieId: allReview.movieId,
                headlineReview: Headline,
                review: Review,
                rating: StarRating,
              }),
            );
            setstateOverlay(false);
          }}
          setstar={setStar}
          setheadline={setHeadline}
          setreview={setReview}
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
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyText: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
});
