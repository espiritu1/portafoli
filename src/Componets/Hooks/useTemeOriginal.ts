/* import { useEffect, useState } from "react"; 
 // The solo ocupara dos valores claro o oscuro 
 export type Theme = "light" | "dark"; 
 export function useThemeOriginal() { const [theme, setTheme] = useState<Theme>("light"); 
	// se inicia el tema en claro  
	const applyTheme = (newTheme: Theme) => { setTheme(newTheme); 
		document.documentElement.classList.toggle("dark", newTheme === "dark"); 
		localStorage.setItem("color-scheme", newTheme); // guarda en localStarage 
	 }; 
		
		useEffect(() => { 
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)"); 
			const handleSystemChange = (e: MediaQueryListEvent) => { 
				const newTheme = e.matches ? "dark" : "light"; applyTheme(newTheme); 

			}; 
			const saved = localStorage.getItem("color-scheme") as Theme | null; if (saved) { 
				applyTheme(saved); 

			} else { applyTheme(mediaQuery.matches ? "dark" : "light"); 

			} mediaQuery.addEventListener("change", handleSystemChange); 
			return () => { mediaQuery.removeEventListener("change", handleSystemChange); 

			}; }, []); return { theme, setTheme: applyTheme }; } */