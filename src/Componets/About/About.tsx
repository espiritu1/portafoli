import { Avatar } from "../About/Avatar"
import { Descripcion } from "../Descripcion/Descripcion"
import { Disponible } from "../Disponible/Disponible"

export const About = () => {
	return (
		<>
		<section id="about" className="mt-10 pb-5 w-[85%] mx-auto">
			<div className="max-w-6xl mx-auto px-6">

				<header className=" flex flex-row justify-center items-center gap-6">
					<div>
						<h1 className="text-4xl md:text-5xl font-bold">
							Fernando Espíritu
						</h1>
						<p className="text-3xl max-w-2xl ">
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