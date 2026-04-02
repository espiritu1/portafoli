import solaire from "../../assets/img/solaire.png"

export const About=()=>{
	 return(

	<>
		<section id="about" className="py-20 bg-gray-50 dark:bg-gray-900  ">
			<div className="max-w-6xl mx-auto px-6 ">
        

		
				<header className="text-center mb-14">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
						Fernando Espiritu
					</h2>
					<p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Desarrollador Frontend
					</p>
				</header>

				<article className="grid md:grid-cols-2 gap-12 items-center">
 
					<figure className="flex justify-center">
					    <img 
					        src={solaire} 
					        alt="Foto de Fernando Espíritu"
					        className="w-72 h-72 object-cover rounded-full shadow-xl"
					    />
					</figure>

          
					<div>
						<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
							Hola 👋 Soy Fernando
						</h3>
        
						<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
							Soy programador apasionado por el desarrollo frontend. Me gusta construir
							aplicaciones web modernas usando tecnologías como React, TypeScript
							y Tailwind CSS.
						</p>

						<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
							Actualmente estoy aprendiendo arquitectura de software, optimización
							de rendimiento y mejores prácticas para crear experiencias de usuario
							profesionales.
						</p>

						<aside>
							<h4 className="font-semibold text-gray-800 dark:text-white mb-3">
								Tecnologías principales
							</h4>
							<ul className="flex flex-wrap gap-3">
								<li className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm">React</li>
								<li className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm">TypeScript</li>
								<li className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm">Tailwind</li>
								<li className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm">Node</li>
							</ul>
						</aside>

						<footer className="mt-8">
							<a 
								href="#contact"
								className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition">
								Contactarme</a>
						</footer>
					</div>
				</article>
			</div>
		</section>
	</>
)}