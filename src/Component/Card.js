import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-vector-icons/Foundation';
import {COLORS} from '../Utils/Constant';

export default function CardView(props) {
  const dummyData = [
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
    <TouchableOpacity activeOpacity={0.8} onPress={props.detail}>
      {dummyData.map((e, i) => {
        return (
          <View key={i.toString()}>
            <Card containerStyle={styles.cardContainer}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{uri: e.link}}
              />
              <Text
                style={styles.textDesc}
                numberOfLines={4}
                ellipsizeMode="tail">
                {e.desc}
              </Text>
              <Card.Divider width={2} />
              {/* tombol review */}
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.reviewBtn}
                  onPress={props.allreview}>
                  <Ionicons
                    name="chatbubble-outline"
                    size={moderateScale(25)}
                    color={COLORS.primaryBlack}
                    style={styles.reviewIcon}
                  />
                  <Text>123</Text>
                </TouchableOpacity>

                {/* tombol share */}
                <TouchableOpacity>
                  <Share
                    name="share"
                    size={moderateScale(25)}
                    color={COLORS.primaryBlack}
                  />
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        );
      })}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: moderateScale(20),
    backgroundColor: COLORS.cream,
  },
  image: {
    flex: 1,
    // width: moderateScale(290),
    height: moderateScale(180),
    backgroundColor: 'black',
    marginBottom: moderateScale(15),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDesc: {
    marginBottom: moderateScale(15),
    fontSize: moderateScale(16),
    textAlign: 'justify',
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
