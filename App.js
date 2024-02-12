import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import { thunk } from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main';
import AddScreen from './components/main/Add';
import SaveScreen from './components/main/Save';
import ProfileScreen from './components/main/Profile';
import ChatPage from './components/main/Chat';
import NotificationsPage from './screens/Notifications';
import ConversationsScreen from './screens/Conversations';
import SearchScreen from './components/main/Search';
import CommentScreen from './components/main/Comment';
import FeedScreen from './components/main/Feed';
import feed from './components/Feed';

const firebaseConfig = {
  apiKey: "AIzaSyBgQjsUZfIoCdEJZYzjiNhiG8Ux6wi03L4",
  authDomain: "roarlink-7dc9b.firebaseapp.com",
  projectId: "roarlink-7dc9b",
  storageBucket: "roarlink-7dc9b.appspot.com",
  messagingSenderId: "874887559794",
  appId: "1:874887559794:web:93f489a8a36a1a9f0360eb",
  measurementId: "G-7JGWXZBW25"
};

const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// const initializeFirebase = async () => {
//   const app = await initializeApp(firebaseConfig);
//   const firestore = getFirestore(app); // Initialize Firestore
//   // ... Any other Firebase initialization code
//   return { app, firestore };
// };

// Initialize Firebase
// let firebaseApp;
// let firestoreInstance;
// initializeFirebase().then(({ app, firestore }) => {
//   firebaseApp = app;
//   firestoreInstance = firestore;
// });

const Stack = createStackNavigator();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk],
// });

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
    this.auth = getAuth(app);
  }

  componentDidMount() {
    onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Notification" component={NotificationsPage} options={{ headerShown: false }}/>
              <Stack.Screen name="Add" component={AddScreen} />
              <Stack.Screen name="Save" component={SaveScreen}  navigation={this.props.navigation} />
              <Stack.Screen name="Feed" component={FeedScreen}  navigation={this.props.navigation} />
              <Stack.Screen name="feed" component={feed}  navigation={this.props.navigation} />
              <Stack.Screen name="Comment" component={CommentScreen}  navigation={this.props.navigation} />
              <Stack.Screen name="Conversations" component={ConversationsScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ChatPage" component={ChatPage}  options={{ headerShown: false }} />
              <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
}

export default App