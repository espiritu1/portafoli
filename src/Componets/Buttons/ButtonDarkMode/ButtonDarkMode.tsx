import React from "react";
import { useTheme } from "../../Hooks/useTheme";
/* import estusvacio from "../../../assets/img/estusvacio.png"
import estuslleno from "../../../assets/img/estuslleno.png"
import solaire from "../../../assets/img/solaire.png" */

export const ButtonDarkMode: React.FC = () => {
	const { theme, setTheme } = useTheme();

	const handleToggle = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return(
		<>
		{/*  idea para cambio de tema */}  
		{/*  <img src={theme === "dark" ? estuslleno : estusvacio} alt="" onClick={handleToggle} />  */} 

			<label className="relative inline-flex items-center cursor-pointer">
				
				<span className="sr-only">Cambiar modo oscuro</span>
				<input type="checkbox" checked={theme === "dark"} onChange={handleToggle} className="sr-only peer" />

					{/* Contenedor del switch */}
				<div className={`relative hover:bg-kanagawa-warning w-14 h-7 border border-black/25 rounded-full transition-colors  duration-500 ease-in-out ${theme === "dark" ? " bg-kanagawa-text-primary" : "bg-kanagawa-bg-lighter"}`}>
					{/* Bolita */}
				<div
					className={`absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5 
						${theme === "dark" ? "bg-kanagawa-bg-light" : "bg-kanagawa-text-primary"} 
						rounded-full shadow-md
						transition-transform duration-500 ease-in-out
						${theme === "dark" ? "translate-x-6.5 scale-110" : "translate-x-0 scale-100"}`}
/>
				</div> 
			</label>
		
		</>
	);
};


