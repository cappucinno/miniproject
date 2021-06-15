import React from 'react';
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
import CardView from '../../Component/Card';
import GenreButton from '../../Component/GenreButton';

export default function HomeScreen({navigation}) {
  const movieCategory = ['action', 'thriller', 'comedy', 'syfy'];
  return (
    <SafeAreaView style={styles.fullscreen}>
      <ScrollView>
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
            <Text style={styles.headText}>Best Genre</Text>
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
          <Text style={styles.headText}>Hot 'Category' Movies</Text>
          <CardView navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(4),
  },
  searchBar: {
    backgroundColor: 'transparent',
    paddingHorizontal: widthPercentageToDP(0),
    borderBottomColor: '#1b1717',
  },
  headText: {
    color: 'white',
    fontSize: moderateScale(26),
    fontWeight: 'bold',
  },
  moreBtn: {
    color: 'white',
    fontSize: moderateScale(16),
  },
  genreContainer: {
    justifyContent: 'space-between',
    height: heightPercentageToDP(13),
  },
  genreTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genreBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: widthPercentageToDP(92),
  },
  movieContainer: {
    marginTop: heightPercentageToDP(2),
  },
});
