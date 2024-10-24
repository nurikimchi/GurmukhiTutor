import { useRouter, useSegments } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";
import { GlobalStyles } from "./GlobalStyles";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword () {
    const auth = getAuth();
    const router = useRouter();

    const handleCorrectEmail = async (email, password) => {
        router.navigate('/emailsent');
    }
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");


    const [errorExists, setErrorExists] = useState(false);
    const [errorMessageUI, setErrorMessageUI] = useState('');

    function handlePasswordReset(auth, email) {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setErrorExists(false)
            handleCorrectEmail(auth, email)
        })
        .catch((error) => {
            setErrorExists(true)
            if (error.message) {
                setErrorMessageUI(error.message)
                if (error.message=='Firebase: Error (auth/user-not-found).') {
                    setErrorMessageUI("This email is not registered")
                }
            }
        });
    }
    return (
        <View style={GlobalStyles.signInContainer}>
            <View style={GlobalStyles.signInInnerContainer}>
                {/* <Image
                    source={{ uri: '' }}
                    style={GlobalStyles.signInLogo}
                    resizeMode="contain"
                /> */}
                <Text style={GlobalStyles.signInHeading}>Forgot Password?</Text>
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
                    {errorExists&&<Text style={{ color: '#F00' }}>{errorMessageUI}</Text>}
                </View>
                <Pressable style={GlobalStyles.signInSubmitButton} onPress={() => {handlePasswordReset(auth, email)}}>
                    <Text style={{ color: '#FFFFFF' }}>Recover Password</Text>
                </Pressable>
            </View>
            </View>
        </View>
    )
}