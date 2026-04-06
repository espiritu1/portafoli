import { BsPersonWorkspace } from "react-icons/bs"
import { ContactoItem } from "../Card/ContactoItem/ContactoItem"
import { AiOutlineMail } from "react-icons/ai"

export const Disponible = () => {
	return(
		<div className="flex flex-col md:flex-row justify-center items-center mt-5">
		  <div className="border border-kanagawa-highlight justify-center text-kanagawa-bg rounded-2xl m-4 px-4 bg-kanagawa-accent inline-flex items-center gap-2">
			<BsPersonWorkspace className="text-xl" />
			<span>Disponible para trabajar</span>
		  </div>
		
		  <ContactoItem
			icon={<AiOutlineMail className="text-xl" />}
			text="fere.espiritu@gmail.com"
			tooltip="Copiar correo"
		  />
		</div>
	)
}