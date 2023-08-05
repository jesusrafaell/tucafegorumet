export interface interfaceLink {
	name: string;
	to: string;
	scroll: boolean;
}

const navLinks = [
	{
		name: 'About',
		to: '/about',
		scroll: true,
	},
	{
		name: 'Our Story',
		to: '/ourStory',
		scroll: false,
	},
	{
		name: 'Products',
		to: '/products',
		scroll: false,
	},
	{
		name: 'Services',
		to: '/services',
		scroll: false,
	},
	{
		name: 'Request a Coffe Station',
		to: '/book',
		scroll: false,
	},
];

export default navLinks;
