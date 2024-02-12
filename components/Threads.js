import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ThreadPost from './ThreadPost';

const Threads = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleBackPress = () => {
    navigation.navigate('Feed'); // Navigate back
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress} >
          <Ionicons name="arrow-back" size={24} color="black"  />
        </TouchableOpacity>
        <Image
          source={require('../assets/images/roarinklogo.png')}
          style={styles.centreicon}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Image
          source={require('../assets/images/Search.png')}
          style={styles.Searchicon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <ThreadPost />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#E1FFFD',
    padding: 10,
    paddingTop: 45,
  },
  centreicon: {
    height: 40,
    width: 100,
    tintColor: 'black',
    marginLeft: '27%',
  },
  backButton: {
    padding: 5,
  },
  HeaderText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  messageadd: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  Searchicon: {
    position: 'absolute',
    height: 15,
    width: 15,
    top: 17,
    marginLeft: 10,
  },
  searchBarContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  searchInput: {
    paddingLeft: 30,
    borderWidth: 1,
    fontSize: 11,
    borderColor: '#E3E3E3',
    padding: 10,
    borderRadius: 10,
  },
});

export default Threads;
