
import { ProyectItem } from "./ProyectItem"; 
import solaire from "../../assets/img/solaire.png"
import p from "../../assets/img/verciones.jpg"


export const Proyectos = () => {
  return (
	<>
		<section  id="proyectos" className="max-w-6xl  w-[85%]  m-5 mx-auto">
			
			<h2 id="tecnologias-title"
					className="	text-2xl font-bold text-left 

								 mb-8 ml-20">
					Proyectos
			</h2>

			<div className="flex flex-wrap justify-center gap-6 border-amber-200">

	<ProyectItem
		nombre="video manager React"
		imagen={p}
		descripcion="Panel de administración de videos que permite subir, organizar, buscar y gestionar contenido desde una interfaz moderna y responsive. Incluye vista previa, miniaturas y un diseño adaptable para dispositivos móviles y escritorio, facilitando la gestión de videos."
		tecnologias={[
			"React",
			"TypeScript",
			"Tailwind"
		]}
		github="https://github.com/espiritu1/video-manager-react"
	/> 
	
</div>


  		</section>


</>
  );
};


// Ejemplo de uso

/*
import solaire from "../assets/solaire.jpg"

<Proyectos 
  id={1}
  nombre="Mi Proyecto"
  imagen={solaire}
  descripcion="Texto de ejemplo"
/>
*/
