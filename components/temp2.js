// PostComments.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
// import { addDoc, collection, getDocs, getFirestore, serverTimestamp } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchUsersData } from '../../redux/actions/index';

// function PostComments({ postId, uid, users }) {
//   const [comments, setComments] = useState([]);
//   const [showReplies, setShowReplies] = useState(false);
//   const [selectedCommentId, setSelectedCommentId] = useState(null);
//   const [text, setText] = useState("");
//   const [replyText, setReplyText] = useState("");

//   const firestore = getFirestore();
//   const auth = getAuth();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const snapshot = await getDocs(
//           collection(
//             firestore,
//             'posts',
//             uid,
//             'userPosts',
//             postId,
//             'comments'
//           )
//         );

//         let comments = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           const id = doc.id;
//           return { id, ...data };
//         });

//         matchUserToComment(comments);
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     };

//     fetchData();
//   }, [postId, uid, firestore]);

//   // Function to match user to comments
//   function matchUserToComment(comments) {
//     for (let i = 0; i < comments.length; i++) {
//       if (comments[i].hasOwnProperty('user')) {
//         continue;
//       }

//       const user = users.find(x => x.uid === comments[i].creator)
//       if (user == undefined) {
//         // Fetch user data if not available
//         fetchUsersData(comments[i].creator, false)
//       } else {
//         comments[i].user = user
//       }
//     }
//     setComments(comments)
//   }

//   // Function to handle reply click
//   const handleReplyClick = (commentId) => {
//     setShowReplies(true);
//     setSelectedCommentId(commentId);
//   };

//   // Function to send a reply
//   const onReplySend = async (commentId) => {
//     await addDoc(
//       collection(
//         firestore,
//         'posts',
//         uid,
//         'userPosts',
//         postId,
//         'comments',
//         commentId,
//         'replies'
//       ),
//       {
//         creator: auth.currentUser.uid,
//         text: replyText,
//         timestamp: serverTimestamp(),
//       }
//     );

//     // Clear the reply text after sending
//     setReplyText("");

//     // Refresh comments to show the new reply
//     const refreshedComments = await refreshComments();
//     matchUserToComment(refreshedComments);
//     setComments(refreshedComments);
//   };

//   // Function to send a comment
//   const onCommentSend = async () => {
//     await addDoc(
//       collection(
//         firestore,
//         'posts',
//         uid,
//         'userPosts',
//         postId,
//         'comments'
//       ),
//       {
//         creator: auth.currentUser.uid,
//         text: text,
//         timestamp: serverTimestamp(),
//       }
//     );

//     // Clear the comment text after sending
//     setText("");

//     // Refresh comments to show the new comment
//     const refreshedComments = await refreshComments();
//     matchUserToComment(refreshedComments);
//     setComments(refreshedComments);
//   };

//   // Function to refresh comments
//   const refreshComments = async () => {
//     const snapshot = await getDocs(
//       collection(
//         firestore,
//         'posts',
//         uid,
//         'userPosts',
//         postId,
//         'comments'
//       )
//     );

//     return snapshot.docs.map(doc => {
//       const data = doc.data();
//       const id = doc.id;
//       return { id, ...data };
//     });
//   };

//   return (
//     <View>
//       <FlatList
//         numColumns={1}
//         horizontal={false}
//         data={comments}
//         renderItem={({ item }) => (
//           <View>
//             {item.user !== undefined ?
//               <Text>
//                 {item.user.name}
//               </Text>
//               : null}
//             <Text>{item.text}</Text>
//             <TouchableOpacity onPress={() => handleReplyClick(item.id)}>
//               {/* Your reply icon or button */}
//             </TouchableOpacity>

//             {showReplies && selectedCommentId === item.id &&
//               <FlatList
//                 numColumns={1}
//                 horizontal={false}
//                 data={item.replies || []}
//                 renderItem={({ item: reply }) => (
//                   <View>
//                     {reply.user !== undefined ?
//                       <Text>
//                         {reply.user.name}
//                       </Text>
//                       : null}
//                     <Text>{reply.text}</Text>
//                   </View>
//                 )}
//               />
//             }
//             <View>
//               <TextInput
//                 placeholder='Reply...'
//                 onChangeText={(text) => setReplyText(text)}
//               />
//               <Button
//                 onPress={() => onReplySend(item.id)}
//                 title="Send Reply"
//               />
//             </View>
//           </View>
//         )}
//       />

//       <View>
//         <TextInput
//           placeholder="comment.."
//           onChangeText={(text) => setText(text)}
//         />
//         <Button
//           onPress={() => onCommentSend()}
//           title="Send"
//         />
//       </View>
//     </View>
//   );
// }

// const mapStateToProps = (store) => ({
//   users: store.usersState.users
// });

// const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUsersData }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
