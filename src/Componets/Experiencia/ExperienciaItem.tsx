interface ExperienciaItemProps {
  puesto: string;
  empresa: string;
  fecha: string;
  tecnologias: string;
   descripcion: React.ReactNode;
}

export const ExperienciaItem = ({ puesto, empresa, fecha, tecnologias, descripcion }: ExperienciaItemProps) => {
  return (
    <div className="border-l-2 border-kanagawa-bg-lighter dark:border-kanagawa-highlight pl-4 relative">
      
      {/* Punto timeline */}
      <div className="absolute w-3 h-3 bg-kanagawa-bg-lighter rounded-full dark:bg-kanagawa-highlight -left-1.75 top-1" />

      <h3 className="text-lg font-semibold text-kanagawa-primary">
        {puesto}
      </h3>

      <p className="text-sm text-kanagawa-text-muted">
        {empresa} • {fecha}
      </p>

      <p className="mt-2 text-kanagawa-fg">
        {descripcion}
      </p>
	  
      <p className="mt-4 text-kanagawa-fg italic text-sm">
        { tecnologias}
      </p>
    </div>
  );
};