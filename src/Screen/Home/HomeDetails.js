import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
// import {getReviewData} from '../Review/Redux/ActionReview';

export default function HomeDetails(props) {
  // state untuk toggle overlay
  const [stateOverlay, setstateOverlay] = useState(false);
  // function overlay
  const toggleOverlay = () => setstateOverlay(!stateOverlay);

  const dispatch = useDispatch();

  const Submit = () => {};

  const allReview = () => {
    // dispatch(getReviewData());
    props.navigation.navigate('AllReview');
  };

  const detail = useSelector(state => state.Home.detail);
  const user = useSelector(state => state.Login.data);

  const [StarRating, setStar] = useState(0);
  const [Headline, setHeadline] = useState('');
  const [Review, setReview] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.fullscreen}>
      <View style={styles.bottomStyle}>
        <Card containerStyle={styles.cardContainer}>
          <Image
            style={styles.imageVideo}
            source={{uri: detail.poster}}
            resizeMode="cover"
          />

          {/* title container */}
          <View style={styles.titleContainer}>
            <Text style={styles.movieTitle}>{detail.title}</Text>
            <Text style={styles.movieYear}>
              {detail.MovieInfo.releaseDate}
              {/* {dummyDataDetail[1].genre[0]}/{dummyDataDetail[1].genre[1]} |{' '}
              {dummyDataDetail[1].year} */}
            </Text>
          </View>
          <Card.Divider width={2} color={COLORS.imperialRed} />

          {/* description container */}
          <View style={styles.descContainer}>
            <View>
              <ImageBackground
                style={styles.poster}
                source={{uri: detail.poster}}
                resizeMode="cover"
              />
            </View>

            <View style={styles.ratingDescContainer}>
              {/* rating and description container */}
              <View style={styles.ratingIconContainer}>
                <View style={styles.ratingIcon}>
                  <Star
                    name="star"
                    size={moderateScale(20)}
                    color={COLORS.imperialRed}
                  />
                  <Text>9/10</Text>
                </View>

                <TouchableOpacity
                  style={styles.ratingIcon}
                  onPress={toggleOverlay}>
                  <Star name="star" size={moderateScale(20)} color="grey" />
                  <Text>Rate this</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.descText}>{detail.synopsis}</Text>
            </View>
          </View>

          <Card.Divider width={2} color={COLORS.imperialRed} />
          <View style={styles.iconContainer}>
            {/* tombol review */}
            <TouchableOpacity
              style={styles.reviewBtn}
              onPress={() => dispatch(getReviewAllMovie(detail.id))}>
              <Icon
                name="chatbubble-outline"
                size={moderateScale(25)}
                color={COLORS.imperialRed}
                style={styles.reviewIcon}
              />
              <Text style={{color: COLORS.imperialRed}}>123</Text>
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
          submit={() =>
            dispatch(
              postNewReview({
                userId: user.data.id,
                token: user.token,
                movieId: detail.id,
                headlineReview: Headline,
                review: Review,
                rating: StarRating,
              }),
            )
          }
          setstar={setStar}
          setheadline={setHeadline}
          setreview={setReview}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flexGrow: 1,
    // paddingVertical: moderateScale(5),
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
    // width: moderateScale(321),
    height: moderateScale(180),
    backgroundColor: 'darkslateblue',
  },
  titleContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(5),
  },
  movieTitle: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  movieYear: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: COLORS.russianViolet,
  },
  descContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'grey',
    // width: moderateScale(321),
    marginBottom: moderateScale(5),
  },
  poster: {
    width: moderateScale(100),
    height: moderateScale(140),
    backgroundColor: 'darkslateblue',
    marginRight: moderateScale(10),
    // transform: [{translateX: -10}],
  },
  ratingDescContainer: {
    // width: moderateScale(212),
    flex: 1,
    // backgroundColor: 'red',
  },
  ratingIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    width: moderateScale(100),
    paddingBottom: moderateScale(8),
    // backgroundColor: 'green',
  },
  ratingIcon: {
    alignItems: 'center',
  },
  descText: {
    textAlign: 'justify',
    flexWrap: 'wrap',
    // backgroundColor: 'yellow',
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
