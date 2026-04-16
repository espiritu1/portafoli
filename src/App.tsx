/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import { About } from './Componets/About/About'
import { ButtonCv } from './Componets/Buttons/ButtonCv'
import { CardContacto } from './Componets/Card/CardContacto'
import Estudios from './Componets/Estudios/Estudios'
import { Experiencia } from './Componets/Experiencia/Experiencia'
import { Footer } from './Componets/Footer/Footer'
import { Navbar } from './Componets/Navbat'
import { Proyectos } from './Componets/Proyectos/Proyectos'
import { Tecnologias } from './Componets/Tecologias/Tecnologias'




function App() {
	return (
		<>
			<Navbar/>

			<main>
				<About/>
				<ButtonCv/>
				<Experiencia/>
				<Proyectos/>
				<Estudios/>
				<Tecnologias/>
				<CardContacto/>
			</main>

			

			<Footer/>

		</>
				
		
			
		
	)
}

export default App
