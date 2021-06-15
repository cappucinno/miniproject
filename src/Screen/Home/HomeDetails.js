import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

  const Submit = () => {};

  const dummyDataDetail = [
    {
      id: 337404,
      link: 'https://image.tmdb.org/t/p/original/8ChCpCYxh9YXusmHwcE9YzP0TSG.jpg',
      desc: 'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
      title: 'Cruella',
      year: '2021-05-26',
    },
    {
      id: 423108,
      link: 'https://image.tmdb.org/t/p/original/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg',
      desc: "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
      title: 'The Conjuring: The Devil Made Me Do It',
      year: '2021-05-25',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.fullscreen}>
      {dummyDataDetail.map((e, i) => {
        return (
          <View key={i.toString()}>
            <Card containerStyle={styles.cardContainer}>
              <Image
                style={styles.imageVideo}
                source={{uri: e.link}}
                resizeMode="cover"
              />

              {/* title container */}
              <View style={styles.titleContainer}>
                <Text style={styles.movieTitle}>{e.title}</Text>
                <Text style={styles.movieYear}>{e.year}</Text>
              </View>
              <Card.Divider width={2} />

              {/* description container */}
              <View style={styles.descContainer}>
                <View>
                  <Image
                    style={styles.poster}
                    source={{uri: e.link}}
                    resizeMode="cover"
                  />
                </View>

                {/* rating and description container */}
                <View style={styles.ratingDescContainer}>
                  <View style={styles.ratingIconContainer}>
                    <View style={styles.ratingIcon}>
                      <Star
                        name="star"
                        size={moderateScale(20)}
                        color="#EFBF7F"
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

                  <View>
                    <Text style={styles.descText}>{e.desc}</Text>
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
                  <Share
                    name="share"
                    size={moderateScale(25)}
                    color="#1b1717"
                  />
                </TouchableOpacity>
              </View>
            </Card>
            <OverlayComp
              visible={stateOverlay}
              toggle={toggleOverlay}
              start={1}
              rating="9"
              submit={Submit}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flexGrow: 1,
    paddingVertical: moderateScale(5),
  },
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
    // alignItems: 'center',
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
