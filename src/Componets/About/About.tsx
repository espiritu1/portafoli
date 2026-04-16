import { Avatar } from "../About/Avatar"
import { Descripcion } from "../Descripcion/Descripcion"
import { Disponible } from "../Disponible/Disponible"

export const About = () => {
	return (
		<>
		<section id="sobreMi" className="mt-10 pb-5 w-[85%] mx-auto">
			<div className="max-w-6xl mx-auto px-6">

				<header className=" flex flex-row justify-center items-center gap-6">
					<div>
						<h1 className="	text-4xl md:text-5xl font-bold 
										bg-linear-to-r 
										from-kanagawa-bg-lighter to-kanagawa-primary 
										dark:from-kanagawa-primary dark:to-kanagawa-secondary 
										bg-clip-text text-transparent">
						  Fernando Espíritu
						</h1>

						<p className="text-xl md:text-2xl lg:text-3xl font-medium max-w-2xl 
										bg-linear-to-r 
										from-kanagawa-bg-dark to-kanagawa-secondary
										dark:from-kanagawa-secondary dark:to-kanagawa-pink 
										bg-clip-text text-transparent">
						  Desarrollador Frontend
						</p>
</div>

					<div className="md:hidden  ">
						<Avatar size="sm"/>
					</div>

				</header>

				<Disponible/>

				<Descripcion/>
				
			</div>
			
		</section>
	</>
	)
}