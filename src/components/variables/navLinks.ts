export interface interfaceLink {
	name: string;
	to: string;
	scroll: boolean;
}

const navLinks = [
	{
		name: 'About',
		to: 'info',
		scroll: true,
	},
	{
		name: 'Our Story',
		to: 'about',
		scroll: true,
	},
	{
		name: 'Products',
		to: 'shop',
		scroll: false,
	},
];

export default navLinks;
