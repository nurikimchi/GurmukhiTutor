import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { GlobalStyles } from "./GlobalStyles";
import { useRouter, useSegments } from "expo-router";

import { auth_signup_password } from "../db_utils/auth_signup_password";
import { getAuth, updateProfile } from "firebase/auth";
import { addDoc, collection, setDoc, doc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebaseConfig";


export default function SignUp() {
	const auth = getAuth();

	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

    const [emailErrorExists, setEmailErrorExists] = useState(false);
	const [userErrorExists, setUserErrorExists] = useState(false);
	const [passErrorExists, setPassErrorExists] = useState(false);
    const [errorMessageUI, setErrorMessageUI] = useState('');
    
	const handleSignUp = async (email, password, username) => {
		try {
			const user = await auth_signup_password(email, password, username);
			if (user.errorCode) {
				console.log("Error:", user.errorCode, user.errorMessage);

                switch(user.errorCode) {
                    case 'auth/invalid-email':
						setEmailErrorExists(true);
                        setErrorMessageUI('Invalid email');
                        break;
					case 'auth/invalid-display-name':
						setUserErrorExists(true);
						setErrorMessageUI('Invalid username');
						break;
					case 'auth/weak-password':
						setPassErrorExists(true);
						setErrorMessageUI('Password too short');
						break;
                    case 'auth/email-already-in-use':
                        setErrorMessageUI('Email is already in use');
                        break;
                    default:
                        setErrorMessageUI('Something went wrong');
                }

			} else {
				var colors= ['cadetblue', 'coral', 'cornflowerblue', 'darksalmon', 'darkkhaki', 'deepskyblue', ];
				let avatarColor = colors[Math.floor(Math.random() * colors.length)];

                try {
                    await setDoc(doc(db, "users", user.uid), {
                        email: email,
                        username: username,
                        uid: user.uid,
                        exp: 0,
                        completedLevels: [
							{ੳ: false},
							{ਅ: false},
							{ੲ: false},
							{ਸ: false},
							{ਹ: false},
							{ਕ: false},
							{ਖ: false},
							{ਗ: false},
							{ਘ: false},
							{ਙ: false},
							{ਚ: false},
							{ਛ: false},
							{ਜ: false},
							{ਝ: false},
							{ਞ: false},
							{ਟ: false},
							{ਠ: false},
							{ਡ: false},
							{ਢ: false},
							{ਣ: false},
							{ਤ: false},
							{ਥ: false},
							{ਦ: false},
							{ਧ: false},
							{ਨ: false},
							{ਪ: false},
							{ਫ: false},
							{ਬ: false},
							{ਭ: false},
							{ਮ: false},
							{ਯ: false},
							{ਰ: false},
							{ਲ: false},
							{ਵ: false},
							{ੜ: false},
						],
						ranking: null,
						avatarColor: avatarColor,
                        timestamp: serverTimestamp(),
                    });
                    console.log('User document created for user:', user.uid);

                    router.navigate('/');
                    
                } catch (error) {
                    console.log(error)
                }
            }  
        } catch {

        }
    }

	return (
		<View style={GlobalStyles.signInContainer}>
			<View style={GlobalStyles.signInInnerContainer}>
				{/* Display error message if exists */}
				{errorMessageUI ? (
						<Text style={{ color: 'red', marginBottom: 10 }}>
							{errorMessageUI}
						</Text>
					) : null}
				{/* <Image
                source={{ uri: '' }}
                style={GlobalStyles.signInLogo}
                resizeMode="contain"
            /> */}

				{emailErrorExists ? (
					<Text style={{ borderColor: '#c30010' }}>
						{/*email box*/}
					</Text>
				) :
				<Text style={{ borderColor: '#D1D5DB' }}>
						{/*email box*/}
					</Text>
				}

				<Text style={GlobalStyles.signInHeading}>
					Create your account
				</Text>
			</View>

			<View style={GlobalStyles.signInInnerContainer}>
				<View style={GlobalStyles.signInForm}>
					<View style={GlobalStyles.signInFormField}>
						<Text style={GlobalStyles.signInLabel}>
							Email address
						</Text>
						<TextInput
							style={!emailErrorExists? GlobalStyles.signInInput : GlobalStyles.signInInputError}
							value = {email}
							placeholder="Email address"
							inputMode="email-address"
							autoCapitalize="none"
							autoCompleteType="email"
							onChangeText={(text) => setEmail(text)}
						/>

					</View>
					<View style={GlobalStyles.signInFormField}>
						<Text style={GlobalStyles.signInLabel}>
							Username
						</Text>
						<TextInput
							style={!userErrorExists? GlobalStyles.signInInput : GlobalStyles.signInInputError}
							value = {username}
							placeholder="Username"
							inputMode="ascii-capable"
							autoCapitalize="none"
							autoCompleteType="username"
							onChangeText={(text) => setUsername(text)}
						/>
					</View>

					<View style={GlobalStyles.signInFormField}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Text style={GlobalStyles.signInLabel}>
								Password
							</Text>
						</View>
						<TextInput
							style={!passErrorExists? GlobalStyles.signInInput : GlobalStyles.signInInputError}
							value = {password}
							placeholder="Password"
							secureTextEntry
							autoCapitalize="none"
							autoCompleteType="password"
							onChangeText={(text) => setPassword(text)}
						/>
					</View>

					<Pressable
						style={GlobalStyles.signInSubmitButton}
						onPress={() => {
							handleSignUp(email, password, username);
						}}
					>
						<Text style={{ color: "#FFFFFF" }}>Sign in</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}
