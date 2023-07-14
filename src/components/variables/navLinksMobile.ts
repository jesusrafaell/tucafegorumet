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
		name: 'Products',
		to: 'shop',
		scroll: false,
	},
	{
		name: 'Services',
		to: 'services',
		scroll: false,
	},
	{
		name: 'Make a Reservation',
		to: 'booking',
		scroll: false,
	},
];

export default navLinksMobile;
