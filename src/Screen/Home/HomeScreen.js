import React, {useEffect, useState} from 'react';
import {
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
import {getReviewAllMovie} from '../Review/Redux/Action/ActionAllReview';
import {
  getMovieByCategory,
  getMovieData,
  getMovieDetail,
  getSearchedMovie,
} from './Redux/actionHome';

export default function HomeScreen(props) {
  const dispatch = useDispatch();

  // SEMUA DATA MOVIE
  const dataMovie = useSelector(state => {
    return state.Home.data;
  });

  useEffect(() => {
    dispatch(getMovieData());
  }, [dispatch]);

  //SHEARCH MOVIE BY CATEGORY
  const [search, setSearch] = useState('');
  const searched = useSelector(state => state.Home.data);
  // console.log(searched, 'search');

  const searchMovieByTitle = title => dispatch(getSearchedMovie(title));

  const searchMovie = e => {
    // console.log(e.nativeEvent.text, 'ini text');
    const text = e.nativeEvent.text;
    if (text.length <= 0) {
      dispatch(getMovieData());
    } else {
      searchMovieByTitle(text);
    }
  };

  //SHOW MOVIE BY CATEGORY
  const dummy = ['Action', 'Thriller', 'Drama', 'Romance'];
  const movieCategory = useSelector(state => state.Home.category);
  console.log(movieCategory, 'category');

  const showMovieByCategory = id => dispatch(getMovieByCategory(id));

  return (
    <SafeAreaView style={styles.fullscreen}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.bottomStyle}>
          <SearchBar
            onSubmitEditing={searchMovie}
            onClear={() => dispatch(getMovieData())}
            placeholder="Search Movies"
            onChangeText={text => setSearch(text)}
            value={search}
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
                size={moderateScale(24)}
                // style={styles.headText}
              />
              {/* <Text style={styles.headText}>Best Genre</Text> */}
              <TouchableOpacity>
                <Poppins
                  title="more &gt;&gt;&gt;"
                  color="white"
                  fontSize={moderateScale(16)}
                  // style={styles.moreBtn}
                />
                {/* <Text style={styles.moreBtn}>more &gt;&gt;&gt;</Text> */}
              </TouchableOpacity>
            </View>

            <View style={styles.genreBtnContainer}>
              {/* <ScrollView horizontal> */}
              {dummy.map((e, i) => {
                return <GenreButton title={e} key={i.toString()} />;
              })}
              {/* {movieCategory.length > 0
                  ? movieCategory.map((e, i) => (
                      <GenreButton
                        // showCategory={showMovieByCategory}
                        title={e}
                        key={i.toString()}
                      />
                    ))
                  : null} */}
              {/* </ScrollView> */}
            </View>
          </View>

          {/* Movie List */}
          <View style={styles.movieContainer}>
            <View style={styles.headView}>
              <Poppins
                title="Hot 'Catergory' Movies"
                color="white"
                size={moderateScale(24)}
                type="Bold"
                // style={styles.headText}
              />
              {/* <Text style={styles.headText}>Hot 'Category' Movies</Text> */}
            </View>
            {dataMovie.length > 0
              ? dataMovie.map((e, i) => {
                  return (
                    <CardView
                      detail={() => dispatch(getMovieDetail(e.id))}
                      allreview={() =>
                        dispatch(getReviewAllMovie({id: e.id, page: 0}))
                      }
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
    backgroundColor: COLORS.primaryBlack,
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
