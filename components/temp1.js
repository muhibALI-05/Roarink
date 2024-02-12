// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
// import { colors } from './Colors';
// import { connect } from 'react-redux';
// import { getFirestore, collection, query, orderBy, getDocs } from 'firebase/firestore';
import Comment from './main/Comment';
// import { format } from 'date-fns';

// function Feed(props) {
//   console.log(props.navigation)
//   const [posts, setPosts] = useState([]);
//   const [showComments, setShowComments] = useState(false);
//   const [selectedPostId, setSelectedPostId] = useState(null);

//   const handleCommentClick = (postId) => {
//     setSelectedPostId(postId);
//     setShowComments(true);
//   };

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
//     return format(date, 'MMMM dd, yyyy HH:mm');
//   };

//   useEffect(() => {
//     const loadPosts = async () => {
//       try{
//         let loadedPosts = [];

//         if (props.usersLoaded === props.following.length) {
//           const firestore = getFirestore();

//           for (let i = 0; i < props.following.length; i++) {
//             const user = props.users.find((el) => el.uid === props.following[i]);

//             if (user !== undefined) {
//               const userPostsCollection = collection(firestore, 'posts', user.uid, 'userPosts');
//               const q = query(userPostsCollection, orderBy('creation', 'asc'));
//               const postsSnapshot = await getDocs(q);

//               const userPosts = postsSnapshot.docs.map((doc) => {
//                 const data = doc.data();
//                 const id = doc.id;
//                 return { id, ...data, user };
//               });

//               loadedPosts = [...loadedPosts, ...userPosts];
//             }
//           }

//           loadedPosts.sort((x, y) => x.creation - y.creation);
//           setPosts(loadedPosts);
//         }
//       }catch (error) {
//         console.error('Error loading posts:', error);
//       }
//     };

//     loadPosts();
//   }, [props.usersLoaded, props.following, props.users]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.containerGallery}>
//         <FlatList
//           numColumns={1}
//           horizontal={false}
//           data={posts}
//           renderItem={({ item }) => (
//             <View style={styles.postContainer}>
//             <View style={styles.headerWrapper}>
//             <View style={{flexDirection:'row'}}>
//               <Image style={styles.profileThumb} source={require('../assets/images/profilepic.png')} />
//               <View style={styles.middleContainer}>
//                 <Text >{item.user.name}</Text>
//                 <Text style={styles.subtitleText}>{formatTimestamp(item.creation)}</Text>
//               </View>
//               </View>
//               <Image  style={styles.icon}
//           source={require('../assets/feedPage/options.png')}
//         />
//             </View>
//             <Text style={styles.caption}>{item.caption}</Text>
//             <Image style={styles.postImage} source={{ uri: item.downloadURL }} />
//             <View style={styles.likesAndCommentsWrapper}>
//         <View style={styles.likescontainer}>
//           <Image
//             style={styles.likeicon}
//             source={require('../assets/feedPage/likes.png')}
//           />
//           <Text style={styles.likesTitle}>1,124 Likes</Text>
//         </View>
//         <Text>
//           <Text style={styles.likesTitle}>22.6k Comments</Text>
//         </Text>
//       </View>

//       <View style={styles.feedImageFooter}>
//         <View style={styles.feddimageFooterLeftWrapper}>
//           <Image
//             style={styles.icons}
//             source={require('../assets/feedPage/Heart.png')}
//           />

//           {/* comment Icon */}
//           <TouchableOpacity  onPress={() => props.navigation.navigate('Comment', { postId: item.id, uid: item.user.uid })}>
//           <Image
//             style={styles.icons}
//             source={require('../assets/feedPage/Chat.png')}
//           />
//           </TouchableOpacity>
//           <Image
//             style={styles.icons}
//             source={require('../assets/feedPage/Send.png')}
//           />
//         </View>
//         <Image
//           style={styles.icons}
//           source={require('../assets/feedPage/Bookmark.png')}
//         />
//       </View>
//       <View style={styles.underLineWRapper}>
//         <View style={styles.underLine} />
//       </View>

//           </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// };
////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
// import { colors } from './Colors';
// import { connect } from 'react-redux';
// import { getFirestore, collection, query, orderBy, getDocs } from 'firebase/firestore';
// import PostComments from './main/Comment';
// import { format } from 'date-fns';

// function Feed(props) {
//   console.log(props.navigation)
//   const [posts, setPosts] = useState([]);
//   const [selectedPostId, setSelectedPostId] = useState(null);

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp.seconds * 1000);
//     return format(date, 'MMMM dd, yyyy HH:mm');
//   };

//   useEffect(() => {
//     const loadPosts = async () => {
//       try {
//         let loadedPosts = [];

//         if (props.usersLoaded === props.following.length) {
//           const firestore = getFirestore();

//           for (let i = 0; i < props.following.length; i++) {
//             const user = props.users.find((el) => el.uid === props.following[i]);

//             if (user !== undefined) {
//               const userPostsCollection = collection(firestore, 'posts', user.uid, 'userPosts');
//               const q = query(userPostsCollection, orderBy('creation', 'asc'));
//               const postsSnapshot = await getDocs(q);

//               const userPosts = postsSnapshot.docs.map((doc) => {
//                 const data = doc.data();
//                 const id = doc.id;
//                 return { id, ...data, user };
//               });

//               loadedPosts = [...loadedPosts, ...userPosts];
//             }
//           }

//           loadedPosts.sort((x, y) => x.creation - y.creation);
//           setPosts(loadedPosts);
//         }
//       } catch (error) {
//         console.error('Error loading posts:', error);
//       }
//     };

//     loadPosts();
//   }, [props.usersLoaded, props.following, props.users]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.containerGallery}>
//         <FlatList
//           numColumns={1}
//           horizontal={false}
//           data={posts}
//           renderItem={({ item }) => (
//             <View style={styles.postContainer}>
//               <View style={styles.headerWrapper}>
//                 <View style={{ flexDirection: 'row' }}>
//                   <Image style={styles.profileThumb} source={require('../assets/images/profilepic.png')} />
//                   <View style={styles.middleContainer}>
//                     <Text>{item.user.name}</Text>
//                     <Text style={styles.subtitleText}>{formatTimestamp(item.creation)}</Text>
//                   </View>
//                 </View>
//                 <Image style={styles.icon}
//                   source={require('../assets/feedPage/options.png')}
//                 />
//               </View>
//               <Text style={styles.caption}>{item.caption}</Text>
//               <Image style={styles.postImage} source={{ uri: item.downloadURL }} />
//               <View style={styles.likesAndCommentsWrapper}>
//                 <View style={styles.likescontainer}>
//                   <Image
//                     style={styles.likeicon}
//                     source={require('../assets/feedPage/likes.png')}
//                   />
//                   <Text style={styles.likesTitle}>1,124 Likes</Text>
//                 </View>
//                 <Text>
//                   <Text style={styles.likesTitle}>22.6k Comments</Text>
//                 </Text>
//               </View>

//               <View style={styles.feedImageFooter}>
//                 <View style={styles.feddimageFooterLeftWrapper}>
//                   <Image
//                     style={styles.icons}
//                     source={require('../assets/feedPage/Heart.png')}
//                   />

//                   {/* Comment Icon */}
//                   <TouchableOpacity onPress={() => setSelectedPostId(item.id)}>
//                     <Image
//                       style={styles.icons}
//                       source={require('../assets/feedPage/Chat.png')}
//                     />
//                   </TouchableOpacity>
//                   <Image
//                     style={styles.icons}
//                     source={require('../assets/feedPage/Send.png')}
//                   />
//                 </View>
//                 <Image
//                   style={styles.icons}
//                   source={require('../assets/feedPage/Bookmark.png')}
//                 />
//               </View>
//               <View style={styles.underLineWRapper}>
//                 <View style={styles.underLine} />
//               </View>

//               {/* Display comments */}
//               {selectedPostId === item.id && (
//                 <PostComments postId={item.id} uid={item.user.uid} />
//               )}
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   postContainer: {
//     flex: 1,
//     margin: 5,
//   },
//   postImage: {
//     flex: 1,
//     aspectRatio: 1 / 1,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   caption: {
//     fontSize: 12,
//     marginTop: 5,
//   },
//   container: {
//     display: 'flex',
//   },
//   profileThumb: {
//     width: 40,
//     height: 40,
//     borderRadius: 50,
//   },
//   middleContainer: {
//     marginLeft: 20
//   },
//   feedimgcontainer: {

//   },
//   subtitleText: {
//     fontSize: 11,
//     color: '#888',
//   },
//   headerWrapper: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent:'space-between',
//     padding: 10,
//   },
//   icon: {
//     width: 40,
//     height: 40
//   },
//   icons: {
//     width: 20,
//     height: 20,
//     opacity: 0.6,
//     marginRight: 15
//   },
//   headerLeftWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   caption: {
//     padding: 5,
//     fontSize: 12,
//   },
//   feedImage: {
//     width: '100%',
//     zIndex: 1,
//     borderRadius: 10,
//     padding: 5
//   },
//   feedImageFooter: {
//     paddingBottom: 10,
//     paddingLeft: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   feddimageFooterLeftWrapper: {
//     flexDirection: 'row',
//     marginLeft: '3%',
//   },

//   underLine: {
//     height: 1,
//     backgroundColor: colors.gray1,
//   },
//   underLineWRapper: {
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   likesImage: {
//     width: 25,
//     height: 25,
//   },
//   likesAndCommentsWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//   },
//   likescontainer: {
//     flexDirection: 'row'
//   },
//   likeicon: {
//     height: 20,
//     width: 20
//   },
//   likesTitle: {
//     fontSize: 11,
//     color: '#A49797',
//   },
// });

// const mapStateToProps = (store) => ({
//   currentUser: store.userState.currentUser,
//   following: store.userState.following,
//   users: store.usersState.users,
//   usersLoaded: store.usersState.usersLoaded,
// });

// export default connect(mapStateToProps, null)(Feed);