import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupPage = () => {
  return (
    <View style={styles.container}>
      {/* Background Image with Add Image Button */}
      <View style={styles.backgroundContainer}>
        {/* Background Image */}
        {/* <Image
          source={require('./path-to-background-image.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        /> */}

        {/* Add Image Button */}
        <TouchableOpacity style={styles.addImageButton}>
          {/* You can use an icon or text as per your requirement */}
          <Text style={styles.addImageButtonText}>Add Image</Text>
        </TouchableOpacity>
      </View>

      {/* Circular Profile Image */}
      <View style={styles.profileImageContainer}>
        <TouchableOpacity style={styles.profileImageButton}>
          {/* You can use an icon or text as per your requirement */}
          <Text style={styles.profileImageButtonText}>Add Image</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="DOB" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton} >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

       {/* Sign In Link */}
       <View style={styles.signInContainer}>
      <Text>Already have an account? <Text style={styles.signInText}>Sign in</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    position: 'relative',
    width: '100%',
    height: '20%', // Adjust the height percentage as needed
  },
  backgroundImage: {
    flex: 0.5,
    width: '100%',
    height: '40%',
  },
  addImageButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  addImageButtonText: {
    color: 'black',
  },
  profileImageContainer: {
    marginTop: -15,
  },
  profileImageButton: {
    zIndex:3,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 50,
    borderColor:'black'
  },
  profileImageButtonText: {
    color: 'black',
  },
  inputContainer: {
    width: '90%',
    marginTop: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    marginBottom: 10,
    padding:15,
    borderRadius: 10,
  },
  signupButton: {
    width: '90%',
    backgroundColor: '#0BCC9E',
    padding: 15
    ,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:50
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signInContainer: {
    position: 'absolute',
    bottom: 20,
  },
  signInText: {
    color: '#4A7AFF',
  },
});

export default SignupPage;
