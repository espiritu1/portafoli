/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import { About } from './Componets/About/About'
import { Navbar } from './Componets/Navbat'
import { Tecnologias } from './Componets/Tecologias/iconos/Tecnologias'



function App() {
	return (
		<>
			<Navbar/>

			<main>

				<About/>
				<Tecnologias/>
			</main>



		</>
				
		
			
		
	)
}

export default App
