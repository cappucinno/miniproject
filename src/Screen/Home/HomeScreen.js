import React, {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import CardView from '../../Component/Card';
import GenreButton from '../../Component/GenreButton';
import Poppins from '../../Component/Poppins';
import {COLORS} from '../../Utils/Constant';
import {getMovieData, getMovieDetail} from './Redux/actionHome';

export default function HomeScreen(props) {
  const detail = id => dispatch(getMovieDetail(id));
  const allReview = () => props.navigation.navigate('AllReview');
  const movieCategory = ['Action', 'Thriller', 'Comedy', 'Horror'];

  const dispatch = useDispatch();

  const dataMovie = useSelector(state => {
    // console.log(
    //   state.Home.data[0].MovieCategories[0].Category.categoryName,
    //   '<===ini state',
    return state.Home.data;
  });
  // console.log(dataMovie, '<=====ini data movie');
  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  return (
    <SafeAreaView style={styles.fullscreen}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.bottomStyle}>
          <SearchBar
            placeholder="Search Movies"
            onChangeText={() => {}}
            platform="default"
            round
            containerStyle={styles.searchBar}
          />

          {/* Genre */}
          <View style={styles.genreContainer}>
            <View style={styles.genreTextContainer}>
              <Poppins
                title="Best Genre"
                color="white"
                type="Bold"
                size={moderateScale(26)}
              />
              {/* <Text style={styles.headText}>Best Genre</Text> */}
              <TouchableOpacity>
                <Text style={styles.moreBtn}>more &gt;&gt;&gt;</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.genreBtnContainer}>
              {movieCategory.map((val, index) => (
                <GenreButton title={val} key={index.toString()} />
              ))}
            </View>
          </View>

          {/* Movie List */}
          <View style={styles.movieContainer}>
            <View style={styles.headView}>
              <Text style={styles.headText}>Hot 'Category' Movies</Text>
            </View>
            {dataMovie.length > 0
              ? dataMovie.map((e, i) => {
                  return (
                    <CardView
                      detail={() => {
                        detail(e.id);
                      }}
                      allreview={allReview}
                      poster={e.poster}
                      synopsis={e.synopsis}
                      key={i.toString()}
                    />
                  );
                })
              : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: COLORS.imperialRed,
  },
  searchBar: {
    backgroundColor: 'transparent',
    // paddingHorizontal: widthPercentageToDP(0),
    borderBottomColor: COLORS.primaryBlack,
  },
  headText: {
    color: 'white',
    fontSize: moderateScale(26),
    fontWeight: 'bold',
  },
  headView: {
    paddingHorizontal: moderateScale(10),
  },
  moreBtn: {
    color: 'white',
    fontSize: moderateScale(16),
  },
  genreContainer: {
    justifyContent: 'space-between',
    height: heightPercentageToDP(13),
    paddingHorizontal: moderateScale(10),
  },
  genreTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genreBtnContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
    // width: widthPercentageToDP(92),
  },
  movieContainer: {
    marginTop: heightPercentageToDP(2),
  },
  bottomStyle: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
    borderBottomStartRadius: moderateScale(30),
    borderBottomEndRadius: moderateScale(30),
    paddingBottom: moderateScale(24),
    paddingHorizontal: widthPercentageToDP(3),
  },
});
