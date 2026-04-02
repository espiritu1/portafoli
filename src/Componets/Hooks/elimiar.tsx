import React, { createContext,type ReactNode } from "react";
import { useTheme, type Theme } from "./useTheme";

interface ThemeContextType {
	setTheme: (theme: Theme) => void;
	theme: Theme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const themeHook = useTheme();

	return (
		<ThemeContext.Provider value={{ theme: themeHook.theme, setTheme: themeHook.setTheme }}>
			<div className="min-h-screen transition-colors duration-700 bg-kanagawa-bg-light text-blue-950 dark:bg-kanagawa-bg dark:text-kanagawa-text-primary">
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {

	const context = React.useContext(ThemeContext);
	
	if (!context) {
		throw new Error("useThemeContext debe usarse dentro de ThemeProvider");
	}
	return context;
};


