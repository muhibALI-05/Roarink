import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const MessageItem = ({ isSender, message, time, read }) => (
    <View style={isSender ? styles.senderMessageContainer : styles.receiverMessageContainer}>
      <View style={styles.messageContentContainer}>
        <View style={isSender ? styles.senderTriangle : styles.receiverTriangle} />
        <View style={isSender ? styles.senderMessage : styles.receiverMessage}>
          <Text style={[styles.messageText, { color: isSender ? '#FFFFFF' : '#686A79' }]}>{message}</Text>
        </View>
      </View>
      <View style={styles.messageInfoContainer}>
        {isSender && (
          <>
            <Text style={styles.readStatus}>{read ? 'Read' : 'Unread'}</Text>
            <View style={styles.statusDot} />
          </>
        )}
        <Text style={isSender ? styles.senderMessageTime : styles.receiverMessageTime}>{time= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
      </View>
    </View>
  );

const ChatPage = () => {
    const [isSender, setIsSender] = useState(true);
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');

    const sendMessage = () => {
        if (messageText.trim()) {
            const newMessage = {
                isSender,
                message: messageText,
                time: new Date().toLocaleTimeString(),
                read: false,
            };
            setMessages([...messages, newMessage]);
            setMessageText('');
            // Toggle the sender for the next message
            setIsSender(!isSender);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} >
                    <Ionicons name="arrow-back" size={24} color="black" onP />
                </TouchableOpacity>
                <View style={styles.userInfoContainer}>
                    <View style={styles.userInfo}>
                        <Image source={require('../../assets/images/profilepic.png')} style={styles.profilePicture} />
                        <View>
                            <Text style={styles.userName}>John Smith</Text>
                            <View style={styles.statusContainer}>
                                
                                <Image style={styles.dot} source={require('../../assets/images/dot.png')}/>
                                <Text style={styles.userStatus}>Online</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.menuButton}>
                    <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <MessageItem
                        isSender={item.isSender}
                        message={item.message}
                        time={item.time}
                        read={item.read}
                    />
                )}
                keyExtractor={(item) => item.time}
            />
            <View style={styles.inputContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type your message..."
                        onChangeText={(text) => setMessageText(text)}
                        value={messageText}
                    />
                    <TouchableOpacity style={styles.iconButton} >
                        <Image source={require('../../assets/images/emoji.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Image source={require('../../assets/images/attach.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                        <Image source={require('../../assets/images/send.png')} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#E1FFFD',
        padding: 10,
        paddingTop: 40,
    },
    dot:{
        right:3
    },
    backButton: {
        padding: 5,
        marginLeft: '2%',
    },
    userInfoContainer: {
        flexDirection: 'row',
        flex: 3,
        paddingLeft: 10
    },
    userInfo: {
        flexDirection: 'row',
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userName: {
        fontSize: 14,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    statusContainer: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusDot: {
        width: 7,
        height: 7,
        borderRadius: 5,
        backgroundColor:'#0BCC9E',
        alignItems: 'center',
    },
    userStatus: {
        fontSize: 11,
        color: '#A49797',
    },
    menuButton: {
        padding: 5,
    },
    messageContentContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 5,
        maxWidth: '70%',
        margin: 15,
        flexWrap: 'wrap',
      },
    
    senderMessageContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'column', // Use flexDirection to align time to the right
        alignItems: 'flex-end', // Align time to the bottom of the sender's message
        marginVertical: 5,
        maxWidth: '70%',
        margin: 15,
        flexWrap: 'wrap',
    },
    receiverMessageContainer: {
        alignSelf: 'flex-start',
        flexDirection: 'column', // Use flexDirection to align time to the left
        alignItems: 'flex-start', // Align time to the bottom of the receiver's message
        marginVertical: 5,
        maxWidth: '70%',
        margin: 15,
        flexWrap: 'wrap',
    },
    senderTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        position: 'absolute',
        bottom: 0,
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 20.8, 
        borderRightColor: 'transparent',
        borderBottomColor: '#0BCC93',
        right: 0,
        marginRight: -7,
    },
    
      receiverTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        position: 'absolute',
        bottom: 0,
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 20.8, 
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#EDEDED',
        left: -7,
      },

    senderMessage: {
        backgroundColor: '#0BCC93',
        borderRadius: 5,
        padding: 10,
    },
    receiverMessage: {
        backgroundColor: '#EDEDED',
        borderRadius: 5,
        padding: 10,
    },
    messageText: {
        fontSize: 16,
    },
    statusDot: {
        width: 4,
        height: 4,
        borderRadius: 5,
        backgroundColor: '#BDBECC',
        left:3,
        top:7
    },
    senderMessageTime: {
        fontSize: 12,
        color: '#ccc',
        marginLeft: 5, // Add margin to separate time from the message
        marginRight: 5, // Adjusted margin for sender's message
        paddingLeft:5,
    },
    receiverMessageTime: {
        fontSize: 12,
        color: '#ccc',
        marginLeft: 5, // Add margin to separate time from the message
        marginRight: 5, // Adjusted margin for receiver's message
    },
    readStatus: {
        fontSize: 12,
        color: '#ccc',
        marginLeft: 5, // Add margin to separate read status from the message
        paddingRight:5
    },
    messageInfoContainer: {
        flexDirection: 'row',
        //alignItems: 'center',
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#ededed',
        borderRadius: 15,
        margin: 10,
    },
    textInput: {
        flex: 1,
        height: 40,
        //borderColor: 'gray',
        //borderWidth: 1,
        //borderRadius: 20,
        paddingHorizontal: 10,
        //marginRight: 10,

    },
    sendButton: {
        padding: 5,
    },
    iconButton: {
        padding: 5,
    },
    textInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ChatPage;
