import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, FAB} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../Utils/Constant';

const AllReview = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* card all review */}
        <Card
          containerStyle={{
            borderRadius: moderateScale(20),
          }}>
          {/* card image */}
          <View style={styles.cardFlex}>
            <Card.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
              }}
              style={{
                width: moderateScale(50),
                height: moderateScale(50),
                borderRadius: moderateScale(50),
              }}
            />

            {/* card text */}
            <View style={styles.cardTextView}>
              {/* card rating */}
              <View style={styles.ratingView}>
                <MaterialCommunityIcons name="star" size={16} color="orange" />
                <Text>
                  <Text style={styles.boldText}>9</Text>/10
                </Text>
                <Text style={styles.boldText}>GREAT!!!</Text>
              </View>
              {/* card reviewer */}
              <Card.FeaturedSubtitle style={styles.cardSubtitle}>
                Reviewer :{' '}
                <Card.Title style={styles.cardTitle}>aiko.d.aurora</Card.Title>
              </Card.FeaturedSubtitle>
            </View>
          </View>
          {/* card review */}
          <Text
            style={{fontSize: moderateScale(12), marginTop: moderateScale(10)}}>
            asndkankjdwnkanwkjjdawdhjabs diabwidb abwd jabwd jb awjhdb ajshdb
            jhawbd jhabwd jkh
          </Text>
        </Card>

        {/* floating action button */}
        <FAB
          placement="right"
          size="large"
          icon={
            <Ionicons
              name="add"
              size={moderateScale(20)}
              color={COLORS.cream}
            />
          }
          color={COLORS.redOld}
          style={{
            borderRadius: moderateScale(10),
            width: moderateScale(50),
            height: moderateScale(50),
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllReview;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: COLORS.primaryBlack,
  },
  cardFlex: {
    flexDirection: 'row',
  },
  cardTextView: {
    alignItems: 'flex-start',
    paddingLeft: moderateScale(10),
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP(28),
    marginBottom: moderateScale(3),
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: 'black',
    marginBottom: moderateScale(2),
    fontSize: moderateScale(12),
    fontWeight: '400',
  },
  cardTitle: {
    color: 'black',
    marginBottom: moderateScale(0),
    fontWeight: 'bold',
  },
});
