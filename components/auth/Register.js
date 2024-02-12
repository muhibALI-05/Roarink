import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            phoneNumber: '',
            dob: '',
            error: null,
            isPasswordVisible: false,
            isConfirmPasswordVisible: false,
        };

        this.onSignUp = this.onSignUp.bind(this);

    }

    onSignUp() {
        const { email, password, confirmPassword, name, phoneNumber, dob } = this.state;

        if (!name || !email || !password || !confirmPassword || !phoneNumber || !dob) {
            this.setState({ error: 'All fields are required.' });
            return;
        }

        if (password !== confirmPassword) {
            this.setState({ error: 'Passwords do not match.' });
            return;
        }

        const auth = getAuth();
        const db = getFirestore();

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
              const userId = auth.currentUser?.uid;
              if (userId) {
                setDoc(doc(db, 'users', auth.currentUser.uid), {
                    name,
                    email,
                    phoneNumber,
                    dob,
                    password
                });
                
                console.log(result);
                this.props.navigation.navigate('Login');
              }else {
                console.error('Error during sign up: User ID is null');
                this.setState({ error: 'Error during sign up. Please check the console for details.' });
            }
            })
            .catch((error) => {
              console.error('Error during sign up:', error.code, error.message);
                this.setState({ error: error.message });
            });
    }

    togglePasswordVisibility = () => {
      this.setState((prevState) => ({ isPasswordVisible: !prevState.isPasswordVisible }));
    };
  
    toggleConfirmPasswordVisibility = () => {
      this.setState((prevState) => ({ isConfirmPasswordVisible: !prevState.isConfirmPasswordVisible }));
    };

    onSignInLinkPress = () => {
      this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.error && <Text style={{ color: 'red' }}>{this.state.error}</Text>}
                 {/* Background Image with Add Image Button */}
      <View style={styles.backgroundContainer}>
      <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headingText}>Sign Up</Text>
        <TouchableOpacity style={styles.addImageButton}>
          {/* You can use an icon or text as per your requirement */}
          <Text style={styles.addImageButtonText}>Add Image</Text>
        </TouchableOpacity>
      </View>

      {/* Circular Profile Image */}
      <View style={styles.profileImageContainer}>
      <Image
          source={require('../../assets/signupPage/User.png')}
          style={styles.profileImage}
        />
      </View>
      <Image
          source={require('../../assets/signupPage/profileadd.png')}
          style={styles.profileadd}
        />
                {/* Input Fields */}
      <View style={styles.inputContainer}>
       <Image
            source={require('../../assets/loginpage/Profile.png')}
          style={styles.inputIcon}
          resizeMode="cover"
        />
      <TextInput style={styles.input} placeholder="Full Name"  onChangeText={(name) => this.setState({ name })}/>
      </View>
      <View style={styles.inputContainer}>
      <Image
            source={require('../../assets/signupPage/Message.png')}
          style={styles.inputIcon}
          resizeMode="cover"
        />
        <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address"  onChangeText={(email) => this.setState({ email })}/>
        </View>
        <View style={styles.inputContainer}>
        <Image
            source={require('../../assets/signupPage/Call.png')}
          style={styles.inputIcon}
          resizeMode="cover"
        />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" onChangeText={(phoneNumber) => this.setState({ phoneNumber })} />
        </View>
        <View style={styles.inputContainer}>
        <Image
            source={require('../../assets/signupPage/Calendar.png')}
          style={styles.inputIcon}
          resizeMode="cover"
        />
        <TextInput style={styles.input} placeholder="DOB" keyboardType="numeric"  onChangeText={(dob) => this.setState({ dob })} />
        </View>
        <View style={styles.inputContainer}>
        <Image
            source={require('../../assets/signupPage/lock.png')}
          style={styles.inputIcon}
          resizeMode="cover"
        />
        <TextInput style={styles.input} placeholder="Password"  secureTextEntry={!this.state.isPasswordVisible} onChangeText={(password) => this.setState({ password })} />
        <TouchableOpacity onPress={this.togglePasswordVisibility}>
            <Ionicons
              name={this.state.isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#A49797"
              style={styles.visibilityIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
        <Image
            source={require('../../assets/signupPage/lock.png')}
          style={styles.inputIcon}
          resizeMode="cover"
        />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={!this.state.isConfirmPasswordVisible} onChangeText={(confirmPassword) => this.setState({ confirmPassword })} />
        <TouchableOpacity onPress={this.toggleConfirmPasswordVisibility}>
            <Ionicons
              name={this.state.isConfirmPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#A49797"
              style={styles.visibilityIcon}
            />
          </TouchableOpacity>
        </View>
                  {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton}  onPress={() => this.onSignUp()} title="Sign Up">
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

       {/* Sign In Link */}
       <TouchableOpacity
          style={styles.signInContainer}
          onPress={this.onSignInLinkPress}
        >
      <Text style={{color:'#A49797'}}>Already have an account? <Text style={styles.signInText}>Sign in</Text></Text>
      </TouchableOpacity>
   </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      backgroundColor:'white'
    },
   
    addImageButton: {
      position: 'absolute',
      top: 108,
      right: 10,
      backgroundColor:'#0BCC9E',
      padding: 2,
      paddingLeft:15,
      paddingRight:15,
      borderRadius:10,
      marginRight:10
    },
    addImageButtonText:{
      fontSize:10,
      color:'white',
      
    },
    backgroundContainer: {
      height: '17%',
      width:'100%',
      overflow: 'hidden',
      backgroundColor:'#E1FFFD',
      paddingTop:30
    },
    backButton:{
      marginLeft:20,
      marginTop:10
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    headingText:{
        fontSize:14,
        fontWeight:'bold',
        alignSelf:'center',
        bottom:17
    },
    profileImageContainer: {
      alignItems: 'center',
      marginVertical: '-13%', // Adjust the margin as needed
    },
    profileImage: {
      width: 105, // Set a default width
      height: 105, // Set a default height
      borderRadius: 75, // Half of the width and height for a perfect circle
      marginBottom:40
    },
    profileadd:{
      width: 30, // Set a default width
      height: 30, // Set a default height
      bottom:30,
      left:36

    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
      borderWidth: 1,
      borderColor: '#E3E3E3',
      borderRadius:10,
      marginVertical:6,
    },
    input: {
      flex: 1,
      height: 50,
      padding: 15,
      fontSize:14
    },
    inputIcon:{
      width: 20,
      height: 20,
      marginLeft:10,
      color: '#927474',
    },
    signupButton: {
      width: '90%',
      backgroundColor: '#0BCC9E',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop:70
    },
    signupButtonText: {
      color: 'white',
      fontSize: 14,
    },
    signInContainer: {
      top:20
    },
    signInText: {
      color: '#4A7AFF',
    },
    visibilityIcon: {
      marginRight: 10,
    },
  });
  
export default Register;
