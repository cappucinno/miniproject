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
  getMovieCategory,
  getMovieData,
  getMovieDetail,
  getSearchedMovie,
  currentCategory,
} from './Redux/actionHome';

export default function HomeScreen(props) {
  const dispatch = useDispatch();

  // SEMUA DATA MOVIE
  const dataMovie = useSelector(state => {
    return state.Home.data;
  });

  useEffect(() => {
    dispatch(getMovieCategory());
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

  //SHOW MOVIE CATEGORY
  const category = useSelector(state => state.Home.category);
  console.log(category, 'category');

  //SHOW MOVIE BY CATEGORY
  const movieCategory = useSelector(state => state.Home.data);
  const current = useSelector(state => state.Home.currentCategory);

  const showMovieByCategory = (id, name) => {
    if (name === current) {
      dispatch(getMovieData());
      dispatch(currentCategory(''));
    } else {
      dispatch(getMovieByCategory(id));
    }
  };

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
              />
              <TouchableOpacity>
                <Poppins
                  title="more &gt;&gt;&gt;"
                  color="white"
                  fontSize={moderateScale(16)}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.genreBtnContainer}>
              <ScrollView horizontal>
                {category.length > 0
                  ? category.map((e, i) => (
                      <GenreButton
                        select={() => showMovieByCategory(e.id, e.categoryName)}
                        title={e.categoryName}
                        key={i.toString()}
                      />
                    ))
                  : null}
              </ScrollView>
            </View>
          </View>

          {/* Movie List */}
          <View style={styles.movieContainer}>
            <View style={styles.headView}>
              <Poppins
                title={`Hot ${current === '' ? '' : current} Movies`}
                color="white"
                size={moderateScale(24)}
                type="Bold"
              />
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

    borderBottomColor: COLORS.primaryBlack,
  },

  headView: {
    paddingHorizontal: moderateScale(10),
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

    justifyContent: 'space-between',
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
