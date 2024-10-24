import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { GlobalStyles } from './GlobalStyles';
import { useRouter, useSegments } from "expo-router";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { auth_signin_password } from '../db_utils/auth_signin_password'

import { auth, db } from '../firebaseConfig'

export default function SignIn() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorExists, setErrorExists] = useState(false);
    const [errorMessageUI, setErrorMessageUI] = useState('');
    
    const handleSignIn = async (email, password) => {
        try {
          const user = await auth_signin_password(email, password);
          if (user.errorCode) {
            console.log("Error:", user.errorCode, user.errorMessage);

            setErrorExists(true);
            switch(user.errorCode) {
                case 'auth/invalid-credential':
                    setErrorMessageUI('These credentials don\'t match our records.');
                    break;
                default:
                    setErrorMessageUI('Something went wrong');
            }
            
          } else {
            console.log("Signed in user:", user);

            router.navigate('/');
          }
        } catch (error) {
          console.error("Unexpected error:", error);
        }
      };

    const handleRedirectSignUp = async (email, password) => {
        router.navigate('/signup');
    }
    const handleRedirectForgotPassword = async (email, password) => {
        router.navigate('/forgotpassword');
    }
    return (

        <View style={GlobalStyles.signInContainer}>
        <View style={GlobalStyles.signInInnerContainer}>
            {/* <Image
                source={{ uri: '' }}
                style={GlobalStyles.signInLogo}
                resizeMode="contain"
            /> */}
            <Text style={GlobalStyles.signInHeading}>Sign in to your account</Text>
        </View>

        <View style={GlobalStyles.signInInnerContainer}>
            <View style={GlobalStyles.signInForm}>
            <View style={GlobalStyles.signInFormField}>
                <Text style={GlobalStyles.signInLabel}>Email address</Text>
                <TextInput
                    style={!errorExists? GlobalStyles.signInInput : GlobalStyles.signInInputError}
                    placeholder="Email address"
                    inputMode="email-address"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View style={GlobalStyles.signInFormField}> 
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={GlobalStyles.signInLabel}>Password</Text>
                    <Pressable onPress={handleRedirectForgotPassword}>
                        <Text style={GlobalStyles.signInForgotPasswordLink}>Forgot password?</Text>
                    </Pressable>
                </View>
                <TextInput
                    style={!errorExists? GlobalStyles.signInInput : GlobalStyles.signInInputError}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCompleteType="password"
                    onChangeText={text => setPassword(text)}
                />
                <Text style={GlobalStyles.signInErrorMessage}>
                    {`${errorMessageUI}`}
                </Text>
            </View>


            <Pressable style={GlobalStyles.signInSubmitButton} onPress={() => {handleSignIn(email, password)}}>
                <Text style={{ color: '#FFFFFF' }}>Sign in</Text>
            </Pressable>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <Text style={GlobalStyles.signInNoAccount}>
                    Don't have an account?{' '}
                </Text>
                <Pressable onPress={handleRedirectSignUp}>
                    <Text style={GlobalStyles.signInNoAccountLink}>Sign up</Text>
                </Pressable>
            </View>
            </View>
        </View>
        </View>
    )
  }
  