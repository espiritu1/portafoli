import { CiLinkedin } from "react-icons/ci";
import CV from "../CV/Fernando_Espiritu_CV.docx";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";

export const ButtonCv = () => {
  return (
    <div className="flex justify-center gap-6 w-[65%] mx-auto pb-5">
      
      {/* Botón de descarga de CV */}
      <a 
        className="mx-auto md:mx-0 border text-shadow-kanagawa-text-primary rounded-md px-4
                   bg-kanagawa-success inline-flex items-center gap-2 h-10 
                   hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300"
        href={CV}
        download="Fernando_Espiritu_CV.docx"
      >
        <AiOutlineCloudDownload className="text-xl" />
        <span>CV</span>
      </a>

      {/* Botón de GitHub */}
      <a 
        className="mx-auto md:mx-0 border text-shadow-kanagawa-text-primary rounded-md px-4
                   bg-kanagawa-success inline-flex items-center gap-2 h-10 
                   hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300"
        href="https://github.com/espiritu1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub className="text-xl" />
        <span>GitHub</span>
      </a>

      {/* Botón de LinkedIn */}
      <a 
        className="mx-auto md:mx-0 border text-shadow-kanagawa-text-primary rounded-md px-4
                   bg-kanagawa-success inline-flex items-center gap-2 h-10 
                   hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300"
        href="https://www.linkedin.com/in/fernando-espiritu-372539248/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiLinkedin className="text-xl" />
        <span>LinkedIn</span>
      </a>

    </div>
  );
};