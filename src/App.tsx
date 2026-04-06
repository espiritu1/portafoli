/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import { About } from './Componets/About/About'
import { ButtonCv } from './Componets/Buttons/ButtonCv'
import { CardContacto } from './Componets/Card/CardContacto'
import { Experiencia } from './Componets/Experiencia/Experiencia'
import { Navbar } from './Componets/Navbat'
import { Tecnologias } from './Componets/Tecologias/Tecnologias'



function App() {
	return (
		<>
			<Navbar/>

			<main>
				<About/>
				<ButtonCv/>
				<Experiencia/>
				<Tecnologias/>
				<CardContacto/>
			</main>

		</>
				
		
			
		
	)
}

export default App
