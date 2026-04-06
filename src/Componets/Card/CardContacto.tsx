import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineLinkedin
} from "react-icons/ai";

import { ContactoItem } from "./ContactoItem/ContactoItem";


export const CardContacto = () => {

	const email = "fere@espiritu.com";
	const telefono = "2288484335";
	
	return (
		<section id="contacto" className="my-20 mx-4">
		
			<div className=" max-w-md mx-auto border border-kanagawa-border rounded-2xl p-6 bg-kanagawa-bg ">
			
				<h2 className="text-2xl text-kanagawa-text-primary text-center mb-6">			
					Contacto
				</h2>
			
				<div className="space-y-6">

					<ContactoItem
						icon={<AiOutlineMail className="text-xl" />}
						text={email}
						tooltip="Copiar correo"
					/>

					<ContactoItem
						icon={<AiOutlineLinkedin className="text-xl" />}
						text="LinkedIn"
						href="https://www.linkedin.com/in/fernando-espiritu/"
						tooltip="Abrir en navegador"
					/>

					<div className="flex items-center gap-6">

						<ContactoItem
							icon={<AiOutlineWhatsApp className="text-xl" />}
							text="22 88 48 43 35"
							tooltip="copiar teléfono"/>
						<a
							href={`https://wa.me/52${telefono}`}
							target="_blank"
							rel="noopener noreferrer"
							className=" text-md border border-kanagawa-border px-3 py-1 rounded-md text-kanagawa-highlight bg-kanagawa-info hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300 inline-block
							"> Abrir en navegador
						</a>

					</div>
				</div>
			</div>
		</section>
  );
};











