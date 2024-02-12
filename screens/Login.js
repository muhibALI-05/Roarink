import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        {/* <Image
          
          style={styles.logo}
          resizeMode="contain"
        /> */}
      </View>

      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Login</Text>
      </View>

      {/* Subheading */}
      <View style={styles.subheadingContainer}>
        <Text style={styles.subheadingText}>Please login to continue with the app</Text>
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email address or Phone number"
          keyboardType="email-address"
          autoCompleteType="email"
        />
        {/* <Image
          source={require('./path-to-email-icon.png')}
          style={styles.inputIcon}
          resizeMode="contain"
        /> */}
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCompleteType="password"
        />
        {/* <Image
          source={require('./path-to-password-icon.png')}
          style={styles.inputIcon}
          resizeMode="contain"
        /> */}
      </View>

      {/* Forgot Password Link */}
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View>
        <Text>or</Text>
      </View>

      {/* Social Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
      <Text>Don't have an account? <Text style={styles.signUpText}>Sign up</Text></Text>
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
  logoContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '40%',
    height: '20%',
  },
  headingContainer: {
    flex: 0.09,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subheadingContainer: {
    flex: 0.09,
    justifyContent: 'center',
    marginBottom:20
  },
  subheadingText: {
    fontSize: 16,
    color: '#A49797',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius:10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 50,
    padding: 15,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    marginRight:'5%'
  },
  forgotPasswordText: {
    color: '#4A7AFF',
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#0BCC9E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  socialButton: {
    backgroundColor: 'white',
    height:50,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    flex: 0.48,
    alignItems: 'center',
    marginVertical:5
  },
  socialButtonText: {
    color: 'black',
    fontSize:14
  },
  signUpContainer: {
    position: 'absolute',
    bottom: 20,
  },
  signUpText: {
    color: '#4A7AFF',
  },
});

export default LoginPage;
