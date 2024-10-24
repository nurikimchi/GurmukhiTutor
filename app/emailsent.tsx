import { View, Text, Pressable } from "react-native";
import { GlobalStyles } from "./GlobalStyles";
import { useRouter, useSegments } from "expo-router";


export default function EmailSent() {
  const router = useRouter();
  const handleLoginRedirect = async () => {
    router.navigate('/signin');
  }
  return (
    <View style={GlobalStyles.signInContainer}>
			<View style={GlobalStyles.signInInnerContainer}>
        <Text style={GlobalStyles.confirmationText}>Your request was processed!</Text>
        <Text style={GlobalStyles.signInLabel}>You should recieve an email shortly with a link to reset your password.</Text>
        <br></br>
        <Pressable style={GlobalStyles.signInSubmitButton} onPress={() => {handleLoginRedirect()}}>
          <Text style={{ color: '#FFFFFF' }}>Back to Login</Text>
        </Pressable>
      </View>
    </View>
  )
}