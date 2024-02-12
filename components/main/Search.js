import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Footer from '../Footer'

const Search = (props) => {
  const [users, setUsers] = useState([]);

  const handleMoreOptions = (interest) => {
    // Implement logic for handling more options button click
    console.log(`More options for ${interest}`);
  };

  const fetchUsers = async (search) => {
    // console.log('Search value:', search);
    const db = getFirestore();
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('name', '>=', search));

    try {
      const snapshot = await getDocs(q);

      let users = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      console.log('Fetched users:', users);
      // setUsers([]);
      setUsers(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Find Your Interest</Text>
      </View>

      <View style={styles.searchbaritems}>
      <View style={styles.searchBar}>
      <Image source={require('../../assets/images/Search.png')} style={styles.searchicon} />
        <TextInput style={styles.searchInput} placeholder="Search..." onChangeText={(search) => fetchUsers(search)}/>
        </View>
        <FlatList
  numColumns={1}
  horizontal={false}
  data={users}
  renderItem={({ item }) => (
    <View style={styles.listItemContainer}>
       <TouchableOpacity  onPress={() => {
        console.log(`Clicked on user name: ${item.name}`);
        props.navigation.navigate('Profile', { uid: item.id })}}style={styles.listitems}>
        <Text>{item.name}</Text>
         {/* Horizontal Line */}
      </TouchableOpacity>
       </View>
  )}
/>

      </View>

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImageClick('Interest 1')} style={styles.imageCard}>
          <Image source={require('../../assets/images/bjp.png')} style={styles.image} />
          <TouchableOpacity onPress={() => handleMoreOptions('Interest 1')} style={styles.moreOptions}>
            <Icon name="ellipsis-h" style={styles.moreOptionsIcon} />
          </TouchableOpacity>
          <Text style={styles.imageText}>Interest 1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Interest 2')} style={styles.imageCard}>
          <Image source={require('../../assets/images/bjp.png')} style={styles.image} />
          <TouchableOpacity onPress={() => handleMoreOptions('Interest 2')} style={styles.moreOptions}>
            <Icon name="ellipsis-h" style={styles.moreOptionsIcon} />
          </TouchableOpacity>
          <Text style={styles.imageText}>Interest 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Interest 2')} style={styles.imageCard}>
          <Image source={require('../../assets/images/bjp.png')} style={styles.image} />
          <TouchableOpacity onPress={() => handleMoreOptions('Interest 2')} style={styles.moreOptions}>
            <Icon name="ellipsis-h" style={styles.moreOptionsIcon} />
          </TouchableOpacity>
          <Text style={styles.imageText}>Interest 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Interest 2')} style={styles.imageCard}>
          <Image source={require('../../assets/images/bjp.png')} style={styles.image} />
          <TouchableOpacity onPress={() => handleMoreOptions('Interest 2')} style={styles.moreOptions}>
            <Icon name="ellipsis-h" style={styles.moreOptionsIcon} />
          </TouchableOpacity>
          <Text style={styles.imageText}>Interest 2</Text>
        </TouchableOpacity>

        

        {/* Add more image cards as needed */}
      </View>
      
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E1FFFD',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius:20,
   borderBottomLeftRadius:20,
   paddingTop:40
  },
  listItemContainer: {
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical:5,
    paddingLeft:10,
   borderBottomColor:'lightgrey',
   borderBottomWidth:1,
   marginHorizontal:'5%'
  },
  listitems:{
   
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  searchicon:{
   height:18,
   width:18,
   left:25
  },
  searchBar: {
    margin:20,
    marginLeft:0,
    width:'95%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton:{
   right:100
  },
  searchIcon: {
    fontSize: 20,
    position:'absolute',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    paddingLeft:30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 5,
    marginTop:-10
  },
  imageCard: {
    margin: 10,
    alignItems: 'center',
    position: 'relative', // Make the position relative for absolute positioning of moreOptions
  },
  image: {
    width: 160,
    height: 180,
    borderRadius: 10,
  },
  moreOptions: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  moreOptionsIcon: {
    fontSize: 20,
    color: 'black',
  },
  imageText: {
    position:'absolute',
    top:'80%',
    textAlign: 'center',
  },
});

export default Search;
