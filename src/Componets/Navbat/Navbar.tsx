import { useState, useRef, useEffect } from "react"
import { ButtonDarkMode } from "../Buttons/ButtonDarkMode"
import solaire from "../../assets/img/solaire.png"
import ButtonBurger from "./ButtonBurger"
import { NavLinks } from "./NavbarLink"


export const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false)
	const sidebarRef = useRef<HTMLDivElement>(null)

	// cerrar al hacer click fuera
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside)
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [isOpen])

	

	return(
		<>
			<header className="pt-4 pb-4 w-[85%] mx-auto ">

				<nav className="border border-t-0 border-b-0 border-kanagawa-bg-lighter dark:border-kanagawa-text-primary p-3 flex justify-between rounded-full mx-auto backdrop-blur-sm transition-colors ">

					<ButtonBurger 
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>

					<div className="flex items-center">
						<a href="/">
							<img src={solaire} alt="Logo" className="w-6 rounded-full " />
						</a>
					</div>

					<NavLinks />

					<ButtonDarkMode/>
					
					
				</nav>

			</header>

			{/* Overlay */}
			{isOpen && (
				<div className="fixed inset-0 bg-black/40 z-40 sm:hidden"></div>
			)}

			{/* Sidebar */}
			<div
				ref={sidebarRef}
				className={`
					bg-kanagawa-bg
					text-kanagawa-text-secondary
					fixed top-0 left-0 h-full w-64
					shadow-lg
					transform transition-transform duration-300
					sm:hidden
					z-50
					${isOpen ? "translate-x-0" : "-translate-x-full"}
				`}
			>

				{/* Botón cerrar */}
				<div className="flex justify-end p-4">
					<button 
						onClick={() => setIsOpen(false)}
						className="text-2xl"
					>
						✕
					</button>
				</div>

				<div className="p-6">
					<NavLinks 
						direction="col"
						onClick={() => setIsOpen(false)}
					/>
				</div>
	

			</div>
			
		

		</>
	)
}