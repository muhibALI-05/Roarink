import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';


const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Background Photo */}
      <View style={styles.backgroundContainer}>
         <Image
         source={require('../assets/images/profilebg.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        /> 
      </View>

      {/* Circular Profile Photo */}
      <View style={styles.profileImageContainer}>
        <Image
           source={require('../assets/images/profilepic.png')}
          style={styles.profileImage}
        /> 
      </View>

      {/* Name and Email */}
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.emailText}>john.doe@example.com</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
        <Text style={styles.statNumber}>150</Text>
        <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1200</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>800</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Horizontal Line */}
      <View style={styles.horizontalLine} />

      {/* Bio */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioHeading}>Bio</Text>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </Text>
      </View>

      {/* Horizontal Line */}
      <View style={styles.horizontalLine} />

      {/* Posts */}
      <View style={styles.postsContainer}>
        {/* Replace with a map function to render individual post cards */}
        <View style={styles.postCard}>
          {/* <Image
            source={require('./path-to-post-image.jpg')}
            style={styles.postImage}
            resizeMode="cover"
          /> */}
        </View>
        <View style={styles.postCard}>
          {/* <Image
            source={require('./path-to-post-image.jpg')}
            style={styles.postImage}
            resizeMode="cover"
          /> */}
        </View>
        {/* Add more post cards as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundContainer: {
    height: '25%',
    width:'100%',
    overflow: 'hidden',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: '-10%', // Adjust the margin as needed
  },
  profileImage: {
    width: 85, // Set a default width
    height: 85, // Set a default height
    borderRadius: 75, // Half of the width and height for a perfect circle
  },
  nameContainer: {
    alignItems: 'center',
    margin:'10%',
    marginTop:'12%',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 14,
    color: 'grey',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  statItem:{
    flexDirection: 'row',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'grey',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginVertical: 10,
    marginLeft:'5%',
    marginRight:'5%',
  },
  bioContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  bioHeading: {
    fontSize: 14,
    color: 'grey',
  },
  bioText: {
    fontSize: 15,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  postCard: {
    width: '32%', // Adjust the width as needed
    aspectRatio: 1, // Maintain aspect ratio
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
});

export default ProfilePage;
