import { AuthContext } from "@/contexts/authContext";
import { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
	const { authenticate } = useContext(AuthContext);

	const [email, setEmail] = useState("");

	const onLoginButtonPress = () => {
		authenticate();
	};
	const onCreateAccountButtonPress = () => {};

	return (
		<View className='flex-1 bg-black justify-between p-12'>
			<Text className='text-center font-hurmit text-red-200 text-4xl'>
				CodeBerry
			</Text>
			<View>
				<View className='mb-6'>
					<Text className='text-2xl font-space text-white mb-2'>Sign In</Text>
					<Text className='text-gray-600 text-lg mb-4'>
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
			<Pressable
				onPressIn={onCreateAccountButtonPress}
				className='w-full h-14 rounded-lg mt-4 justify-center items-center'
			>
				<Text className='text-gray-600 text-lg'>No account? Create one!</Text>
			</Pressable>
		</View>
	);
}
