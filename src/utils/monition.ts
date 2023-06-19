export const textContainer = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

export const textVariant = (duraction: number, direction: number) => ({
	hidden: {
		opacity: 0,
		y: direction,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeIn',
			duration: duraction,
		},
	},
});

export const barSkill = (duraction: number, direction: number) => ({
	hidden: {
		width: 0,
	},
	show: {
		opacity: 1,
		width: `${direction}%`,
		transition: {
			ease: 'easeIn',
			duration: duraction,
		},
	},
});

export const bgContainer = {
	hidden: {
		opacity: 1,
		x: '90%',
	},
	show: {
		opacity: 1,
		x: '0',
		transition: {
			ease: 'easeIn',
		},
	},
};

export const imgSkills = (dir: number) => ({
	hidden: {
		opacity: 0,
		x: dir ? '-20%' : '20%', //1 arriba 0 abajo
		transition: {
			ease: 'easeIn',
			duration: 1, // Aumenta la duración de la animación de salida
		},
	},
	show: {
		x: '0',
		opacity: 1,
		transition: {
			ease: 'easeIn',
			duration: 1,
		},
	},
});
