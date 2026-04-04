import { Avatar } from "../About/Avatar"


export const About = () => {
	return (
		<section id="about" className="py-10 w-[85%] mx-auto">
			<div className="max-w-6xl mx-auto px-6">

				<header className="text-center flex flex-row justify-center items-center gap-6">
					<div>
						<h1 className="text-4xl md:text-5xl font-bold">
							Fernando Espiritu
						</h1>
						<p className="text-3xl max-w-2xl mx-auto">
							Desarrollador Frontend
						</p>
					</div>

					<div className="md:hidden  ">
						<Avatar 
						
							size="sm"
						/>
					</div>

				</header>

				<article className="grid md:grid-cols-2 gap-12 items-center pt-10">

					<div className="hidden md:flex">
						<Avatar 
						
							size="lg"
						/>
					</div>

					<div>
						<h2 className="text-2xl font-semibold">
							Hola 👋 Soy Fernando
						</h2>

						<p className="leading-relaxed mb-4">
							Soy programador apasionado por el desarrollo frontend...
						</p>

						<p className="leading-relaxed mb-6">
							Actualmente estoy aprendiendo arquitectura...
						</p>
					</div>

				</article>
			</div>
		</section>
	)
}