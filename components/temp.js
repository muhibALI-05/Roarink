import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Image, StyleSheet} from 'react-native'; 

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, fetchUserPosts } from '../redux/actions/index'

import FeedScreen from './main/Feed'
import ProfileScreen from './main/Profile'
import Conversations from '../screens/Conversations'
import Chat from './main/Chat'
import NotificationsPage from '../screens/Notifications';

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
    return (null)
}

const FeedIcon = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/images/home.png')} // Adjust the path accordingly
        style={{ width: 26, height: 26 }} // Set the desired width and height
      />
    </View>
  );

  const NotiIcon = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/images/Notification.png')} // Adjust the path accordingly
        style={{ width: 26, height: 26 }} // Set the desired width and height
      />
    </View>
  );

  const PlusIcon = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/images/add.png')} // Adjust the path accordingly
        style={styles.addicon} // Set the desired width and height
      />
    </View>
  );

  const ChatIcon = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/images/Chat.png')} // Adjust the path accordingly
        style={{ width: 26, height: 26 }} // Set the desired width and height
      />
    </View>
  );

  const ProfIcon = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/images/profile.png')} // Adjust the path accordingly
        style={{ width: 26, height: 26 }} // Set the desired width and height
      />
    </View>
  );

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchUserPosts();
    }
    render() {
        return (
            <Tab.Navigator initialRouteName="Feed" labeled={false}>
                <Tab.Screen name="Feed" component={FeedScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FeedIcon />
                        ),
                    }} />
                <Tab.Screen name="Notification" component={NotificationsPage}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <NotiIcon />
                        ),
                    }} />
                <Tab.Screen name="AddContainer" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            < PlusIcon />
                        ),
                    }} />
                <Tab.Screen name="Conversations" component={Conversations}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            < ChatIcon />
                        ),
                    }} />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            < ProfIcon />
                        ),
                    }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchUserPosts }, dispatch);


const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
  },
  addicon:{
    height:60,
    width:60,
    position:'relative',
    bottom:20
  }
});

export default connect(mapStateToProps, mapDispatchProps)(Main);