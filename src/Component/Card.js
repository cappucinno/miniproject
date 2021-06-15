import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-vector-icons/Foundation';

export default function CardView(props) {
  const detail = () => props.navigation.navigate('HomeDetails');
  const allReview = () => props.navigation.navigate('AllReview');
  return (
    <>
      <Card containerStyle={styles.cardContiner}>
        <View style={styles.image} />
        <Text style={styles.textDesc}>
          teks percobaan untuk card view ini buat nyoba nyoba aja dulu nanti aja
          buat benerannya
        </Text>
        <Card.Divider />
        {/* tombol review */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={props.allreview}>
            <Icon
              name="star-box-outline"
              size={moderateScale(25)}
              color="#1b1717"
            />
            <Text>123</Text>
          </TouchableOpacity>

          {/* tombol load more */}
          <TouchableOpacity>
            <Text style={styles.loadBtn} onPress={props.detail}>
              load more
            </Text>
          </TouchableOpacity>

          {/* tombol share */}
          <TouchableOpacity>
            <Share name="share" size={moderateScale(25)} color="#1b1717" />
          </TouchableOpacity>
        </View>
      </Card>
    </>
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
  loadBtn: {
    color: '#0C5D7B',
  },
});
