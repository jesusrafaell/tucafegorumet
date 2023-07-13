export interface interfaceLink {
	name: string;
	to: string;
	scroll: boolean;
}

const navLinksMobile = [
	{
		name: 'Home',
		to: 'home',
		scroll: true,
	},
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
		name: 'Shop',
		to: 'shop',
		scroll: false,
	},
	{
		name: 'Make a Reservation',
		to: 'reserve',
		scroll: false,
	},
];

export default navLinksMobile;
