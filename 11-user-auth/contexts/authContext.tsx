import { createContext, useState } from "react";

export interface AuthType {
	isAuthenticated: boolean;
}

export const defaultAuthContext: AuthType = {
	isAuthenticated: false,
};

export const AuthContext = createContext(defaultAuthContext);

export function AuthContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: isAuthenticated,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
