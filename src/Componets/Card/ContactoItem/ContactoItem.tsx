import { useState } from "react";
import { Tooltip } from "../ToolTip/ToolTip";

interface ContactoItemProps {
  icon: React.ReactNode;
  text: string;
  copyText?: string;
  href?: string;
  tooltip?: string;
}

export const ContactoItem = ({ icon, text, href, tooltip}: ContactoItemProps) => {

  const [copiado, setCopiado] = useState(false);

  const copiar = () => {
    if (!text) return;

    navigator.clipboard.writeText(text);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 1000);
  };

  const Component = href ? "a" : "button";

  return (
    <div className="relative w-fit group">
		<Component
			{...(href ? { href, target: "_blank", rel: "noopener noreferrer"}: { onClick: copiar})}
        	className=" flex items-center gap-3 text-kanagawa-text-primary hover:text-kanagawa-highlight dark:hover:text-kanagawa-highlight  transition-colors text-left">
				{icon}
				<span >{text}</span>
				
		</Component>
		
		{tooltip && ( 
			<Tooltip > {tooltip} </Tooltip>
		)}
		
		{copiado && (
        <Tooltip position="top-strong" >
          Copiado
        </Tooltip>
      )}

    </div>
  );
};