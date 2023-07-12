export interface interfaceLink {
	name: string;
	to: string;
	scroll: boolean;
}

const navLinks = [
	{
		name: 'Shop',
		to: 'shop',
		scroll: false,
	},
	// {
	// 	name: 'Coffe Time',
	// 	to: 'coffeTime',
	// 	scroll: true,
	// },
	{
		name: 'Our Story',
		to: 'about',
		scroll: true,
	},
	{
		name: 'Reserve',
		to: 'reserve',
		scroll: false,
	},
	{
		name: 'Events',
		to: 'events',
		scroll: false,
	},
];

export default navLinks;
