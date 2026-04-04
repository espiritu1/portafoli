import {  Bun, Css, GitHub, Html, Javascrip, Npm, React, Tailwind, TypeScript } from "../index"

export const Tecnologias = () => {
	return (
		<section aria-labelledby="tecnologias-title">
			<h2 
				id="tecnologias-title"
				className="text-2xl font-bold text-center mb-6"
			>
				Tecnologías
			</h2>

			<ul className="flex flex-row gap-4 justify-center items-center flex-wrap">
				
				<li>
					<figure className="flex flex-col items-center">
						<Html className="size-15" />
						<figcaption>HTML</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex flex-col items-center">
						<Css className=" size-15" />
						<figcaption>CSS</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex flex-col items-center">
						<Javascrip className="size-15" />
						<figcaption>JavaScript</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex flex-col items-center">
						<React className="size-15" />
						<figcaption>React</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex flex-col items-center">
						<Bun className="size-15" />
						<figcaption>Bun</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex flex-col items-center">
						<Tailwind className="size-15" />
						<figcaption>Tailwind</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex flex-col items-center">
						<TypeScript className="size-15" />
						<figcaption>TypeScript</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex flex-col items-center">
						<GitHub className="size-15" />
						<figcaption>GitHub</figcaption>
					</figure>
				</li>

				<li>
					<figure className="flex flex-col items-center">
						<Npm className="size-15" />
						<figcaption>NPM</figcaption>
					</figure>
				</li>

			</ul>
		</section>
	)
}