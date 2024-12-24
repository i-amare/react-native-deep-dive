import { AuthContext } from "@/contexts/AuthContext";
import { Link, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

interface FormInput {
	title: string;
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
}

function FormInput({ title, placeholder, value, onChangeText }: FormInput) {
	return (
		<View>
			<Text className='text-lg font-hurmit text-gray-300 mb-1'>{title}</Text>
			<TextInput
				className='bg-white h-14 mb-4 text-lg text-black font-hurmit rounded-lg p-2'
				placeholder={placeholder}
				placeholderTextColor='#aaa'
				onChangeText={onChangeText}
				value={value}
			/>
		</View>
	);
}

export default function LoginScreen() {
	const { authenticate, isAuthenticated } = useContext(AuthContext);
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (isAuthenticated) router.navigate("/(home)");
	}, [isAuthenticated]);

	const onLoginButtonPress = () => {
		authenticate();
	};

	return (
		<SafeAreaView className='flex-1 bg-black justify-between m-12'>
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
					<FormInput
						placeholder='Please enter your e-mail'
						onChangeText={setEmail}
						title='E-mail'
						value={email}
					/>
					<FormInput
						placeholder='Password'
						onChangeText={setPassword}
						title='Password'
						value={password}
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
