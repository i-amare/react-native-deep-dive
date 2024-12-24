import { AuthContext } from "@/contexts/AuthContext";
import { Link, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
	const { authenticate, isAuthenticated } = useContext(AuthContext);
	const router = useRouter();

	const [email, setEmail] = useState("");

	useEffect(() => {
		if (isAuthenticated) router.navigate("/(home)");
	}, [isAuthenticated]);

	const onLoginButtonPress = () => {
		authenticate();
	};

	return (
		<SafeAreaView className='flex-1 bg-black justify-between p-12'>
			<Text className='text-center font-hurmit text-white text-4xl'>
				CodeBerry
			</Text>
			<View>
				<View className='mb-6'>
					<Text className='text-2xl font-space text-white'>Sign In</Text>
					<Text className='text-gray-600 text-lg'>
						Please enter email address below
					</Text>
				</View>
				<View>
					<TextInput
						className='bg-white h-14 text-lg text-black font-hurmit rounded-lg p-2'
						placeholder='Please enter your e-mail'
						placeholderTextColor='#aaa'
						onChangeText={(text) => setEmail(text)}
						value={email}
					/>
					<Pressable
						onPressIn={onLoginButtonPress}
						className='w-full h-14 bg-gray-900 rounded-lg mt-4 justify-center items-center'
					>
						<Text className='text-center text-white font-hurmit text-xl'>
							Continue
						</Text>
					</Pressable>
				</View>
			</View>
			<Link
				href='/signup'
				className='w-full h-14 rounded-lg flex justify-center items-center'
			>
				<Text className='text-gray-600 text-center text-lg'>
					No account? Create one!
				</Text>
			</Link>
		</SafeAreaView>
	);
}
