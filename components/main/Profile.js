import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Button } from 'react-native';
import Myposts from '../Myposts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, collection, query, orderBy, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function Profile (props)  {
  const navigation = useNavigation();
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    // const { currentUser, posts } = props;
    const fetchData = async () => {
      console.log("Received props in Profile: ", props);

      if (props.route.params.uid === getAuth().currentUser.uid) {
        setUser(props.currentUser);
        setUserPosts(props.posts);
      } else {
        try {
        const userDoc = await getDoc(doc(getFirestore(), 'users', props.route.params.uid));
        const postsQuery = query(
          collection(getFirestore(), 'posts', props.route.params.uid, 'userPosts'),
          orderBy('creation', 'asc')
        );

        const postsSnapshot = await getDocs(postsQuery);

        setUser(userDoc.data());

        const posts = postsSnapshot.docs.map(doc => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });

        setUserPosts(posts);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    if (props.following.indexOf(props.route.params.uid) > -1) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }

  };

  fetchData();
  },[props.route.params.uid, props.following ,props.currentUser, props.posts])

  const onFollow = async () => {
    const followingDocRef = doc(getFirestore(), 'following', getAuth().currentUser.uid, 'userFollowing', props.route.params.uid);
    await setDoc(followingDocRef, {});
  };

  const onUnfollow = async () => {
    const followingDocRef = doc(getFirestore(), 'following', getAuth().currentUser.uid, 'userFollowing', props.route.params.uid);
    await deleteDoc(followingDocRef);
  };

  const onLogout = () => {
    signOut(getAuth());
  };

  if (user === null) {
    return <View />;
  }

  

  return (
    <ScrollView style={styles.container}>
      {/* Background Photo */}
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../assets/images/profilebg.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>
      {/* Search and Three Horizontal Icons */}
      
      <View style={styles.headerIcons}>
        {/* Add your search icon here */}
        <Image
          source={require('../../assets/images/Search.png')}
          style={styles.search}
        />
        {/* Three Horizontal Icons */}
        <TouchableOpacity style={styles.info}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Circular Profile Photo */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../../assets/images/profilepic.png')}
          style={styles.profileImage}
        />
      </View>

      {/* Name and Email */}
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{user.name}</Text>
        <Text style={styles.emailText}>{user.email}</Text>
      </View>
        
      <View>
      {props.route.params.uid !== getAuth().currentUser.uid ? (
        <View>
          {following ? (
            <TouchableOpacity style={styles.button} onPress={() => onUnfollow()}>
              <Text style={styles.buttonText}>Following</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={() => onFollow()}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => onLogout()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>150</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1400</Text>
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
      {/* tabs Line */}
      <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={styles.tab}>
             <Image
          source={require('../../assets/images/menu.png')}
          style={styles.tabicon}
        />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}>
           <Image
          source={require('../../assets/images/movie.png')}
          style={styles.tabicon}
        />
          </TouchableOpacity>
        </View>
         {/* Horizontal Line */}
      <View style={styles.horizontalLine} />
      
      {/* Posts */}
      <View style={styles.postsContainer}>
        {/* <Myposts posts={posts} userName={currentUser.name} /> */}
        <Myposts posts={userPosts} userName={user.name} />
      </View>
      <View style={styles.blankview}>
        <Text>Hello</Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    overflow: 'hidden',
    padding: 10,
  },
  containerGallery: {
    flex: 1,
  },
  containerImage: {
    flex: 1 ,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  backgroundContainer: {
    height: '10%',
    width: '100%',
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  headerIcons: {
    marginLeft:'80%',
    flexDirection: 'row',
 
  },
  icon:{
    left:90,
   },
  button:{
    width: 100,
    height:40,
    alignSelf:'center',
    backgroundColor: '#0BCC9E',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft:10,
    marginBottom:10
  },
  buttonText:{
   color:'white',
   fontSize:14,
   paddingHorizontal:10
  },
  search: {
    top:12,
    height:20,
    width:20,
    padding:5,
    tintColor:'black'
  },
  info: {
    borderRadius: 10,
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: '-20%', // Adjust the margin as needed
  },
  profileImage: {
    width: 85, // Set a default width
    height: 85, // Set a default height
    borderRadius: 75, // Half of the width and height for a perfect circle
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: '23%',
    marginBottom:15,
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 10,
    color: 'grey',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  statNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 2,
  },
  statLabel: {
    fontSize: 10,
    color: 'grey',
    paddingLeft: 2,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginVertical: 10,
    marginLeft: '5%',
    marginRight: '5%',
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
    fontSize: 12,
  },
  tabsContainer:{
  flexDirection:'row',
  justifyContent:'space-around',

},
  postsContainer: {
    padding: 10,
  },
  profileicon:{
    height:24,
    width:24
  },
  blankview:{
    paddingBottom:230
  }
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts,
  following: store.userState.following,
});

export default connect(mapStateToProps, null)(Profile);
