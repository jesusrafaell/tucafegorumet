export interface interfaceLink {
	name: string;
	to: string;
	scroll: boolean;
}

const navLinks = [
	{
		name: 'About',
		to: 'about',
		scroll: true,
	},
	{
		name: 'Our Story',
		to: 'ourstory',
		scroll: true,
	},
	{
		name: 'Products',
		to: 'products',
		scroll: false,
	},
	{
		name: 'Services',
		to: 'services',
		scroll: false,
	},
];

export default navLinks;
