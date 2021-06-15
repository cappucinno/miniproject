import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-vector-icons/Foundation';

export default function CardView({navigation}) {
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
    <TouchableOpacity onPress={() => navigation.navigate('HomeDetails')}>
      {dummyData.map((e, i) => {
        return (
          <View key={i.toString()}>
            <Card containerStyle={styles.cardContiner}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{uri: e.link}}
              />
              <Text
                style={styles.textDesc}
                numberOfLines={4}
                ellipsizeMode="tail">
                {e.desc}
              </Text>
              <Card.Divider />
              {/* tombol review */}
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="star-box-outline"
                    size={moderateScale(25)}
                    color="#1b1717"
                  />
                  <Text>123</Text>
                </TouchableOpacity>

                {/* tombol load more */}
                {/* <TouchableOpacity>
            <Text
              style={styles.loadBtn}
              onPress={() => navigation.navigate('HomeDetails')}>
              load more
            </Text>
          </TouchableOpacity> */}

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
          </View>
        );
      })}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContiner: {
    borderRadius: moderateScale(20),
  },
  image: {
    width: moderateScale(290),
    height: moderateScale(150),
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
  },
});
