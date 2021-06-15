import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

//icon
import Star from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-vector-icons/Foundation';

//component
import {Card} from 'react-native-elements';
import OverlayComp from '../../Component/OverlayComp';

export default function HomeDetails(props) {
  // state untuk toggle overlay
  const [stateOverlay, setstateOverlay] = useState(false);
  // function overlay
  const toggleOverlay = () => setstateOverlay(!stateOverlay);

  return (
    <View>
      <Card containerStyle={styles.cardContainer}>
        <Image style={styles.imageVideo} />

        {/* title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.movieTitle}>MovieTitle</Text>
          <Text style={styles.movieYear}>Year and Genre</Text>
        </View>
        <Card.Divider width={2} />

        {/* description container */}
        <View style={styles.descContainer}>
          <View>
            <Image style={styles.poster} />
          </View>

          {/* rating and description container */}
          <View style={styles.ratingDescContainer}>
            <View style={styles.ratingIconContainer}>
              <View style={styles.ratingIcon}>
                <Star name="star" size={moderateScale(20)} color="#EFBF7F" />
                <Text>9/10</Text>
              </View>

              <TouchableOpacity
                style={styles.ratingIcon}
                onPress={toggleOverlay}>
                <Star name="star" size={moderateScale(20)} color="grey" />
                <Text>Rate this</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.descText}>
                Movie description goes right here and on and on, Movie
                description goes right here and on and on, Movie description
                goes right here and on and on, Movie description goes right here
                and on and on, Movie description goes right here and on and on,
                Movie description goes right here and on and on,
              </Text>
            </View>
          </View>
        </View>

        <Card.Divider width={2} />
        <View style={styles.iconContainer}>
          {/* tombol review */}
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="star-box-outline"
              size={moderateScale(25)}
              color="#1b1717"
            />
            <Text>123</Text>
          </TouchableOpacity>

          {/* tombol share */}
          <TouchableOpacity>
            <Share name="share" size={moderateScale(25)} color="#1b1717" />
          </TouchableOpacity>
        </View>
      </Card>
      <OverlayComp
        visible={stateOverlay}
        toggle={toggleOverlay}
        start={1}
        rating="9"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: moderateScale(20),
    alignContent: 'center',
  },
  imageVideo: {
    width: moderateScale(321),
    height: moderateScale(180),
    backgroundColor: 'darkslateblue',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(5),
  },
  movieTitle: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
  },
  movieYear: {
    fontSize: moderateScale(16),
    fontWeight: '700',
  },
  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'grey',
    width: moderateScale(321),
    marginBottom: moderateScale(5),
  },
  poster: {
    width: moderateScale(100),
    height: moderateScale(140),
    backgroundColor: 'darkslateblue',
    marginRight: moderateScale(10),
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
    // backgroundColor: 'green',
  },
  ratingIcon: {
    alignItems: 'center',
  },
  descText: {
    flexWrap: 'wrap',
    // backgroundColor: 'yellow',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
