export interface interfaceLink {
	name: string;
	to: string;
	scroll: boolean;
}

const navLinks = [
	{
		name: 'Know Us',
		to: 'info',
		scroll: true,
	},
	{
		name: 'Our Story',
		to: 'about',
		scroll: true,
	},
	{
		name: 'Shop',
		to: 'shop',
		scroll: false,
	},
	{
		name: 'Reserve',
		to: 'reserve',
		scroll: false,
	},
	// {
	// 	name: 'Events',
	// 	to: 'events',
	// 	scroll: false,
	// },
];

export default navLinks;
