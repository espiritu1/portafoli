import { ButtonDarkMode } from "../Buttons/ButtonDarkMode"
import solaire from "../../assets/img/solaire.png"

export  const Navbar  = () => {

	return(
		<>

			<header className="pt-4 pb-4 w-[85%] mx-auto ">

				<nav className="border border-t-0 border-b-0 border-kanagawa-bg-lighter dark:border-kanagawa-text-primary p-5 flex justify-between rounded-full mx-auto backdrop-blur-sm transition-colors ">

					<div className="flex sm:hidden">
						<label>
							<div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
								<input className="hidden peer" type="checkbox" />
								<div className="w-[50%] h-0.5  bg-kanagawa-bg-lighter dark:bg-kanagawa-text-primary rounded-md transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:-rotate-45"></div>
								<div className="w-[50%] h-0.5  bg-kanagawa-bg-lighter dark:bg-kanagawa-text-primary rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
								<div className="w-[50%] h-0.5  bg-kanagawa-bg-lighter dark:bg-kanagawa-text-primary rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-45"></div>
							</div>
						</label>
					</div>

					<div className="flex items-center">
						<a href="/">
							<img src={solaire} alt="Logo" className="w-6 rounded-full " />
						</a>
					</div>

					<ul className="hidden items-center justify-end gap-3 whitespace-nowrap sm:flex">
					
						<li className="px-2 py-1 ">
							<a href="#about" 		className="border-b-3 border-transparent hover:border-kanagawa-accent transition-colors" >About</a>
						</li>

						<li className="px-2 py-1 ">
							<a href="#proyectos" 	className="border-b-3 border-transparent hover:border-kanagawa-accent transition-colors">Mis páginas</a>
						</li>

						<li className=" px-2 py-1 ">
							<a href="#tecnologias" 	className="border-b-3 border-transparent hover:border-kanagawa-accent transition-colors">Tecnologías</a>
						</li>

						<li className="px-2 py-1 ">
							<a href="#contact" 		className="border-b-3 border-transparent hover:border-kanagawa-accent transition-colors">Contact</a>
						</li>
					</ul>

					<ButtonDarkMode/>
				</nav>
			</header>
		
		</>
	)
}