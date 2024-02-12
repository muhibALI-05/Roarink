import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {colors} from './Colors';
import Feed from '../components/Feed';
import Stories from '../components/Stories';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
export class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.storiesWrapper}>
          <Stories />
        </View>

        <ScrollView style={styles.feedContainer}>
          <Feed />
        </ScrollView>
        <View style={styles.footer}>
          <Icon color={colors.black} size={25} name="home" />
          <Icon color={colors.gray} size={25} name="search" />
          <Icon color={colors.gray} size={25} name="plus-square" />
          <Icon color={colors.gray} size={25} name="heart" />
          <Icon color={colors.gray} size={25} name="user" />

        </View>
        
      </View>
    );
  }
}

export default FeedScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    position: 'relative',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute', // Fixed position
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
    width: '100%', // Occupy full width
    backgroundColor: 'white',
  },
  feedContainer: {
    display: 'flex',
  },
  icon: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 150,
    height: '100%',
  },
  headerRightWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  storiesWrapper: {
    backgroundColor: colors.gray1,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
});