import Cv from "../CV/Fernando_Espiritu_cv.pdf"
import { AiOutlineCloudDownload } from "react-icons/ai";


export const ButtonCv = () => {
  return (
    <>

<div className="flex justify-center w-[65%] mx-auto pb-5  ">
	<a 
		className="	mx-auto md:mx-0 border text-kanagawa-highlight rounded-2xl px-4
					bg-kanagawa-info inline-flex items-center gap-2 h-10 
					hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300 "
					
		href={Cv} 
		download
	>
		<AiOutlineCloudDownload className="text-xl" />
		<span>CV</span>
	</a>

	
</div>
	</>
  );
};