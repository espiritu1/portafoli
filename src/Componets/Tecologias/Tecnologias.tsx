import {  Bun, Css, GitHub, Html, Javascrip, Npm, React, Tailwind, TypeScript } from "./index"

export const Tecnologias = () => {
	return (
		<>
			<section id="tecnologias" aria-labelledby="tecnologias-title" className=" max-w-6xl w-[85%] mx-auto">
				<h2  id="tecnologias-title"
					className="text-2xl font-bold text-left  mb-8 ml-20">
					Tecnologías
				</h2>

				<ul className="flex flex-row gap-4 justify-center items-center flex-wrap">

					<li>
						<figure className="flex flex-col">
							<Html className="size-15  dark:drop-shadow-[0_4px_20px_#e34f268f] " />
							<figcaption>HTML</figcaption>
						</figure>
					</li>

					<li>
						<figure className="flex flex-col ">
							<Css className=" size-15 dark:drop-shadow-[0_4px_20px_#264de48f]" />
							<figcaption>CSS</figcaption>
						</figure>
					</li>

					<li>
						<figure className="flex flex-col ">
							<Javascrip className="size-15 dark:drop-shadow-[0_4px_20px_#efdb508f]" />
							<figcaption>JavaScript</figcaption>
						</figure>
					</li>

					<li>
						<figure className="flex flex-col ">
							<React className="size-15 filter dark:drop-shadow-[0_4px_20px_#58c4dc8f]" />
							<figcaption>React</figcaption>
						</figure>
					</li>

					<li>
						<figure className="flex flex-col ">
							<Bun className="size-15 filter dark:drop-shadow-[0_4px_20px_#fbf0df8f]" />
							<figcaption>Bun</figcaption>
						</figure>
					</li> 

					<li>
						<figure className="flex flex-col ">
							<Tailwind className="size-15 dark:drop-shadow-[0_4px_20px_#38bdf88f]" />
							<figcaption>Tailwind</figcaption>
						</figure>
					</li>

					<li>
						<figure className="flex flex-col ">
							<TypeScript className="size-15 dark:drop-shadow-[0_4px_20px_#3178c68f]" />
							<figcaption>TypeScript</figcaption>
						</figure>
					</li>

					<li>
						<figure className="flex flex-col ">
							<GitHub className="size-15 dark:drop-shadow-[0_4px_20px_#ffffff8f]"  />
							<figcaption>GitHub</figcaption>
						</figure>
					</li>

					<li>
						<figure className="flex flex-col ">
							<Npm className="size-15 dark:drop-shadow-[0_4px_20px_#cc000075]" />
							<figcaption>NPM</figcaption>
						</figure>
					</li>

				</ul>
			</section>
		</>
	)
}