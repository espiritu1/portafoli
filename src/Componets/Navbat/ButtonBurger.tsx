interface Props {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

export default function ButtonBurger({ isOpen, setIsOpen }: Props) {

	return (
		<button 
			className="flex sm:hidden"
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
				
				<div className={`w-[50%] h-0.5 bg-kanagawa-bg-lighter dark:bg-kanagawa-text-primary rounded-md   origin-left translate-y-[0.45rem]  "-rotate-45"`}></div>

				<div className={`w-[50%] h-0.5 bg-kanagawa-bg-lighter dark:bg-kanagawa-text-primary rounded-md   `}></div>

				<div className={`w-[50%] h-0.5 bg-kanagawa-bg-lighter dark:bg-kanagawa-text-primary rounded-md   origin-left -translate-y-[0.45rem]  "rotate-45"`}></div>

			</div>
		</button>
	)
}