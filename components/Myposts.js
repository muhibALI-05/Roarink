import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { colors } from './Colors';
import { format } from 'date-fns';

const Feed = ({posts, userName}) => {
  console.log("Posts in Feed component: ", posts);
  const reversedPosts = [...posts].reverse();
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
    return format(date, 'MMMM dd, yyyy HH:mm');
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={reversedPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.headerWrapper}>
            <View style={{flexDirection:'row'}}>
              <Image style={styles.profileThumb} source={require('../assets/images/profilepic.png')} />
              <View style={styles.middleContainer}>
                <Text >{userName}</Text>
                <Text style={styles.subtitleText}>{formatTimestamp(item.creation)}</Text>
              </View>
              </View>
              <Image  style={styles.icon}
          source={require('../assets/feedPage/options.png')}
        />
            </View>
            <Text style={styles.caption}>{item.caption}</Text>
            <Image style={styles.postImage} source={{ uri: item.downloadURL }} />
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
        )} // You can adjust the number of columns as needed
      />
    </View>
    // <View style={styles.container}>
    //   <View style={styles.headerWrapper}>
    //     <View style={styles.headerLeftWrapper}>
    //       <Image
    //         style={styles.profileThumb}
    //         source={require('../assets/images/profilepic.png')}
    //       />
    //       <View style={styles.middleContainer}>
    //         <Text style={styles.headerTitle}> name </Text>
    //         <Text style={styles.subtitleText}>12 August 2023</Text>
    //       </View>
    //     </View>
    //     <Image
    //       style={styles.icon}
    //       source={require('../assets/feedPage/options.png')}
    //     />
    //   </View>
    //   <View styles={styles.feedimgcontainer}>
    //     <Text style={styles.caption}>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor eget neque lacinia dictum. Donec placerat sed sem vel hendrerit.
    //     </Text>
        
    //   </View>


    
    // </View>
  );
};

export default Feed;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  postContainer: {
    flex: 1,
    margin: 5,
  },
  postImage: {
    flex: 1,
    aspectRatio: 1 / 1,
    borderRadius: 10,
    marginTop: 5,
  },
  caption: {
    fontSize: 12,
    marginTop: 5,
  },
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
  feedimgcontainer: {

  },
  subtitleText: {
    fontSize: 11,
    color: '#888',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40
  },
  icons: {
    width: 20,
    height: 20,
    opacity: 0.6,
    marginRight: 15
  },
  headerLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  caption: {
    padding: 5,
    fontSize: 12,
  },
  feedImage: {
    width: '100%',
    zIndex: 1,
    borderRadius: 10,
    padding: 5
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
});