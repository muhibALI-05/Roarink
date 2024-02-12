
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure to install the appropriate library for icons
import { useNavigation } from '@react-navigation/native';
import Search from './main/Search'

const Header = () => {
  const navigation = useNavigation();
  const handleSearchIconPress = () => {
    // Navigate to the 'Search' screen
    navigation.navigate('Search');
  };
  return (
    <View style={styles.header}>
      {/* Left Side: Circular Image */}
      <View style={styles.leftContainer}>
        <Image
          source={require('../assets/images/profilepic.png')}
          style={styles.profileImage}
        />
      </View>

      {/* Middle: Greeting and Subtitle */}
      <View style={styles.middleContainer}>
        <Text style={styles.greetingText}>Hi John,</Text>
        <Text style={styles.subtitleText}>Good Morning!</Text>
      </View>

      {/* Right Side: Search and People Icons */}
      <View style={styles.rightContainer}>
      <TouchableOpacity onPress={handleSearchIconPress}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/feedPage/Search.png')}
          style={styles.icons}
        />
        </View>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
        <Image
          source={require('../assets/feedPage/users.png')}
          style={styles.icons}
        />
        </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop:40,
    paddingBottom:55,
    backgroundColor: '#E1FFFD', // Set your desired background color
  },
  leftContainer: {
    marginLeft:'2%',
    flex: 1,
  },
  middleContainer: {
    flex: 3,
    alignItems: 'flex-start',
    marginLeft: -30,
    },
    greetingText: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    subtitleText: {
      fontSize: 11,
      color: '#888',
    },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Half of the width and height for a circular image
  },
  iconContainer:{
   flexDirection:'row',
   justifyContent:'space-around',
   padding:7,
   borderRadius:10,
   backgroundColor:'white',
   margin:5
  },
 icons:{
  width: 20,
  height:20,
  backgroundColor:'white',
 }
});

export default Header;
