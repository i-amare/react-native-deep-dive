import { createContext, useEffect, useState } from "react";

export interface AuthType {
	isAuthenticated: boolean;
	setIsAuthenticated: (val: boolean) => void;
	authenticate: () => void;
}

export const defaultAuthContext: AuthType = {
	isAuthenticated: false,
	setIsAuthenticated: () => {},
	authenticate: () => {},
};

export const AuthContext = createContext(defaultAuthContext);

export function AuthContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isAuthenticated, setIsAuthenticated] = useState(true);

	useEffect(() => {
		console.log(`Auth State has changed to: ${isAuthenticated}`);
	}, [isAuthenticated]);

	const authenticate = () => {
		setIsAuthenticated(true);
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: isAuthenticated,
				setIsAuthenticated,
				authenticate,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
