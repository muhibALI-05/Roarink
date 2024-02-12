import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from './Colors';

const ThreadPost= () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <Image
            style={styles.profileThumb}
            source={require('../assets/images/profilepic.png')}
          />
          <View style={styles.middleContainer}>
            <Text style={styles.headerTitle}> Catherine</Text>
            <Text style={styles.subtitleText}>12 August 2023</Text>
          </View>
        </View>
        {/* Login Button */}
        <Image
          style={styles.iconOption}
          source={require('../assets/feedPage/options.png')}
        />
      </View>
      <View style={styles.feedingcontainer}>
  {/* Lorem Ipsum Text */}
  <View style={styles.captionContainer}>
    <Text style={styles.caption}>
      Lorem ipsum dolor, consectetur adipiscing elit. Proin tempor eget neque lacinia dictum. Donec placerat sed sem vel hendrerit.
    </Text>
  </View>

  {/* Feed Image */}
  <View style={styles.feedImageContainer}>
    <Image
      style={styles.feedImage}
      source={require('../assets/images/feedImage.jpg')}
    />
  </View>
</View>


      <View style={styles.likesAndCommentsWrapper}>
        <View style={styles.likescontainer}>
          <Image
            style={styles.likeicon}
            source={require('../assets/feedPage/likes.png')}
          />
          <Text style={styles.likesTitle}>1,124 Likes</Text>
        </View>
        <Text>
          <Text style={styles.likesTitle}>22.6k Comments</Text>
        </Text>
      </View>

      <View style={styles.feedImageFooter}>
        <View style={styles.feddimageFooterLeftWrapper}>
          <Image
            style={styles.icons}
            source={require('../assets/feedPage/Heart.png')}
          />
          <Image
            style={styles.icons}
            source={require('../assets/feedPage/Chat.png')}
          />
          <Image
            style={styles.icons}
            source={require('../assets/feedPage/Send.png')}
          />
          <Image
            style={styles.icons}
            source={require('../assets/feedPage/repeat.png')}
          />
        </View>
        <Image
          style={styles.icons}
          source={require('../assets/feedPage/Bookmark.png')}
        />
      </View>
      <View style={styles.underLineWRapper}>
        <View style={styles.underLine} />
      </View>

    </View>
  );
};

export default ThreadPost;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  profileThumb: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  middleContainer: {
    marginLeft: 20
  },
  caption: {
    padding: 10,
    fontSize: 12,
  },
  subtitleText: {
    fontSize: 11,
    color: '#888',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  iconOption: {
    width: 40,
    height:40,
    marginRight:10
  },
  icons: {
    width: 20,
    height: 20,
    opacity: 0.6,
    marginRight: 15,
    color: '#927474',
  },
  headerLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  feedingcontainer:{
   flexDirection:'row',
   justifyContent:'space-between'
  },
  feedImage:{
    height:'100%',
    width:'100%',
    borderRadius:10
  },
  feedImageFooter: {
    paddingBottom: 10,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feddimageFooterLeftWrapper: {
    flexDirection: 'row',
    marginLeft: '3%',
  },

  underLine: {
    height: 1,
    backgroundColor: colors.gray1,
  },
  underLineWRapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  likesImage: {
    width: 25,
    height: 25,
  },
  likesAndCommentsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  likescontainer: {
    flexDirection: 'row'
  },
  likeicon: {
    height: 20,
    width: 20
  },
  likesTitle: {
    fontSize: 11,
    color: '#A49797',
  },
  captionContainer: {
    width: '70%', // Adjust the width based on your layout requirements
    paddingRight: 10, // Add some padding between the text and the image
  },
  feedImageContainer: {
    width:90, // Adjust the width based on your layout requirements
    height:90,
    marginRight:20
  },
});