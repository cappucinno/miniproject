import React, {useCallback, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
  Alert,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

//icon
import Star from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-vector-icons/Foundation';

//component
import {Card} from 'react-native-elements';
import OverlayComp from '../../Component/OverlayComp';
import {COLORS} from '../../Utils/Constant';
import {useDispatch, useSelector} from 'react-redux';
import {getReviewAllMovie} from '../Review/Redux/Action/ActionAllReview';
import {postNewReview} from '../Review/Redux/Action/ActionReview';
import Poppins from '../../Component/Poppins';
import FastImage from 'react-native-fast-image';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function HomeDetails() {
  // state untuk toggle overlay
  const [stateOverlay, setstateOverlay] = useState(false);
  // function overlay
  const toggleOverlay = () => setstateOverlay(!stateOverlay);

  const dispatch = useDispatch();

  const detail = useSelector(state => state.Home.detail.data);
  const category = useSelector(state => state.Home.detail.data.category);
  const user = useSelector(state => state.Login.data);

  const [StarRating, setStar] = useState(0);
  const [Headline, setHeadline] = useState('');
  const [Review, setReview] = useState('');
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('Video has finished playing!');
    }
  }, []);

  const videoId = detail.movie.trailer;
  console.log(videoId);
  const res = videoId.slice(32);
  console.log(res);

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.fullscreen}>
        {detail === undefined ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.bottomStyle}>
            <Card containerStyle={styles.cardContainer}>
              {/* TRAILER */}

              <YoutubePlayer
                height={180}
                // width={{flex: 1}}
                videoId={res}
                play={playing}
                onChangeState={onStateChange}
              />

              {/* <FastImage
                style={styles.imageVideo}
                source={{
                  uri: detail.movie.poster,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              /> */}

              {/* title container */}
              <View style={styles.titleContainer}>
                {/* TITLE */}
                <Poppins
                  title={detail.movie.title}
                  size={moderateScale(22)}
                  type="Bold"
                  style={styles.movieTitle}
                />
                {/* YEAR AND GENRE */}
                <Text style={styles.movieYear}>
                  {detail.movie.MovieInfo.releaseDate} |{' '}
                  {category.length > 0
                    ? category.map((e, i) => {
                        return (
                          <Text style={styles.movieYear} key={i.toString()}>
                            {e.categoryName + ' '}
                          </Text>
                        );
                      })
                    : null}
                </Text>
              </View>
              <Card.Divider width={2} color={COLORS.imperialRed} />

              {/* description container */}
              <View style={styles.descContainer}>
                <View>
                  <FastImage
                    style={styles.poster}
                    source={{
                      uri: detail.movie.poster,
                      priority: FastImage.priority.high,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </View>

                <View style={styles.ratingDescContainer}>
                  {/* rating and description container */}
                  <View style={styles.ratingIconContainer}>
                    {/* RATING */}
                    <View style={styles.ratingIcon}>
                      <Star
                        name="star"
                        size={moderateScale(20)}
                        color={COLORS.imperialRed}
                      />
                      <Poppins title={Math.floor(detail.rating) + '/10'} />
                    </View>
                    <TouchableOpacity
                      style={styles.ratingIcon}
                      onPress={toggleOverlay}>
                      <Star name="star" size={moderateScale(20)} color="grey" />
                      <Poppins title="Rate this" />
                    </TouchableOpacity>
                  </View>
                  {/* SYNOPSIS */}
                  <Poppins
                    title={detail.movie.synopsis}
                    style={styles.descText}
                  />
                </View>
              </View>
              <Card.Divider width={2} color={COLORS.imperialRed} />

              <View style={styles.iconContainer}>
                {/* tombol review */}
                <TouchableOpacity
                  style={styles.reviewBtn}
                  onPress={() =>
                    dispatch(getReviewAllMovie({id: detail.movie.id, page: 0}))
                  }>
                  <Icon
                    name="chatbubble-outline"
                    size={moderateScale(25)}
                    color={COLORS.imperialRed}
                    style={styles.reviewIcon}
                  />
                  <Poppins title="123" color={COLORS.imperialRed} />
                </TouchableOpacity>

                {/* tombol share */}
                <TouchableOpacity>
                  <Share
                    name="share"
                    size={moderateScale(25)}
                    color={COLORS.imperialRed}
                  />
                </TouchableOpacity>
              </View>
            </Card>
            <OverlayComp
              visible={stateOverlay}
              toggle={toggleOverlay}
              start={0}
              rating={StarRating}
              submit={() => {
                dispatch(
                  postNewReview({
                    userId: user.data.id,
                    movieId: detail.movie.id,
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
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  fullscreen: {
    flexGrow: 1,
    backgroundColor: COLORS.imperialRed,
  },
  bottomStyle: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
    borderBottomStartRadius: moderateScale(30),
    borderBottomEndRadius: moderateScale(30),
    paddingBottom: moderateScale(16),
  },
  cardContainer: {
    borderRadius: moderateScale(20),
    alignContent: 'center',
    backgroundColor: COLORS.champagne,
    borderColor: COLORS.champagne,
  },
  imageVideo: {
    flex: 1,
    height: moderateScale(180),
    backgroundColor: 'darkslateblue',
  },
  titleContainer: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(5),
  },
  movieTitle: {
    textAlign: 'justify',
  },
  movieYear: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: COLORS.russianViolet,
    fontFamily: 'Poppins',
  },
  descContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: moderateScale(5),
  },
  poster: {
    width: moderateScale(100),
    height: moderateScale(140),
    backgroundColor: 'darkslateblue',
    marginRight: moderateScale(10),
  },
  ratingDescContainer: {
    flex: 1,
  },
  ratingIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    width: moderateScale(100),
    paddingBottom: moderateScale(8),
  },
  ratingIcon: {
    alignItems: 'center',
  },
  descText: {
    textAlign: 'justify',
    flexWrap: 'wrap',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewIcon: {
    transform: [{rotateY: '180deg'}],
    marginRight: moderateScale(5),
  },
});
