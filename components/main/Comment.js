import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';

import { getFirestore, collection, doc, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, currentUser } from 'firebase/auth';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsersData } from '../../redux/actions/index';

function Comment(props) {
    // console.log(props.navigation)
    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useState("");
    const [text, setText] = useState("");
    const [showReplies, setShowReplies] = useState(false);
    const [selectedCommentId, setSelectedCommentId] = useState(null);
    const [replyText, setReplyText] = useState("");

    const firestore = getFirestore();
    const auth = getAuth();

    useEffect(() => {
        
        function matchUserToComment(comments) {
            for (let i = 0; i < comments.length; i++) {
                if (comments[i].hasOwnProperty('user')) {
                    continue;
                }

                const user = props.users.find(x => x.uid === comments[i].creator)
                if (user == undefined) {
                    props.fetchUsersData(comments[i].creator, false)
                } else {
                    comments[i].user = user
                }
            }
            setComments(comments)
        }

        const fetchData = async () => {
            const snapshot = await getDocs(
              collection(
                getFirestore(),
                'posts',
                props.route.params.uid,
                'userPosts',
                props.route.params.postId,
                'comments'
              )
            );

            let comments = snapshot.docs.map((doc) => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data };
              });
        
              matchUserToComment(comments);
            };

        if (props.route.params.postId !== postId) {
            fetchData();
            setPostId(props.route.params.postId);
        } else {
            matchUserToComment(comments)
        }
    }, [props.route?.params?.postId, props.users]);

    const onCommentSend = async () => {
        const auth = getAuth();
        await addDoc(
        collection(
            getFirestore(),
            'posts',
            props.route.params.uid,
            'userPosts',
            props.route.params.postId,
            'comments'
        ),
        {
            creator: auth.currentUser.uid,
            text,
        }
        );
    };
    const onReplySend = async (commentId) => {
        await addDoc(
          collection(
            firestore,
            'posts',
            props.route.params.uid,
            'userPosts',
            props.route.params.postId,
            'comments',
            commentId,
            'replies'
          ),
          {
            creator: auth.currentUser.uid,
            text: replyText,
            timestamp: serverTimestamp(),
          }
        );
    
        // Clear the reply text after sending
        setReplyText("");
    
        // Refresh comments to show the new reply
        const refreshedComments = await refreshComments();
        setComments(refreshedComments);
      };
    
      const refreshComments = async () => {
        const snapshot = await getDocs(
          collection(
            firestore,
            'posts',
            props.route.params.uid,
            'userPosts',
            props.route.params.postId,
            'comments'
          )
        );
        return snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
        };
      
        const handleReplyClick = (commentId) => {
          setShowReplies(true);
          setSelectedCommentId(commentId);
        };

    return (
        <View>
            <FlatList
                numColumns={1}
                horizontal={false}
                data={comments}
                renderItem={({ item }) => (
                    <View>
                        {item.user !== undefined ?
                            <Text>
                                {item.user.name}
                            </Text>
                            : null}
                        <Text>{item.text}</Text>
                        <TouchableOpacity onPress={() => handleReplyClick(item.id)}>
              
            </TouchableOpacity>

            {showReplies && selectedCommentId === item.id &&
              <FlatList
                numColumns={1}
                horizontal={false}
                data={item.replies || []}
                renderItem={({ item: reply }) => (
                  <View>
                    {reply.user !== undefined ?
                      <Text>
                        {reply.user.name}
                      </Text>
                      : null}
                    <Text>{reply.text}</Text>
                  </View>
                )}
              />
            }
            <View>
              <TextInput
                placeholder='Reply...'
                onChangeText={(text) => setReplyText(text)}
              />
              <Button
                onPress={() => onReplySend(item.id)}
                title="Send Reply"
              />
              </View>
                    </View>
                )}
            />

            <View>
                <TextInput placeholder="comment.." onChangeText={(text) => setText(text)} />
                <Button onPress={() => onCommentSend()}
                    title="Send" />
            </View>
        </View>
    );
}


const mapStateToProps = (store) => ({
    users: store.usersState.users
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUsersData }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Comment);