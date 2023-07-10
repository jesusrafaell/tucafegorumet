import cubano from '@/images/cupsSVG/cubano_1.png';
import cubano_2 from '@/images/cupsSVG/cubano_2.png';

import cafe_negro from '@/images/cupsSVG/cafe_negro_1.png';
import cafe_negro_2 from '@/images/cupsSVG/cafe_negro_2.png';

import cortadito from '@/images/cupsSVG/cortadito_1.png';
import cortadito_2 from '@/images/cupsSVG/cortadito_2.png';

import cafe_milk from '@/images/cupsSVG/cafe_leche_1.png';
import cafe_milk_2 from '@/images/cupsSVG/cafe_leche_2.png';
import { StaticImageData } from 'next/image';

export interface CupItem {
	id: number;
	title: string;
	info: string;
	imagen: StaticImageData;
	imagen2: StaticImageData;
}

const CupItems: CupItem[] = [
	{
		id: 1,
		imagen: cubano,
		imagen2: cubano_2,
		title: 'Cuban Style, Espresso',
		info: `Cuban-style coffee, also known as cafecito or Cuban espresso, is a strong, sweet coffee that originated in Cuba. The tradition of drinking coffee in Cuba dates back to the 18th century, when coffee was introduced to the island by French colonists. The unique flavor of Cuban coffee comes from the use of dark roasted coffee beans, which are finely ground and brewed using a stovetop espresso maker or Moka pot. The coffee is then mixed with sugar to create a sweet and flavorful drink.`,
	},
	{
		id: 2,
		imagen: cafe_milk,
		imagen2: cafe_milk_2,
		title: 'Cafe con Leche',
		info: `Café con leche, which translates to "coffee with milk" in Spanish, is a popular coffee drink in many Spanish-speaking countries, including Spain, Cuba, and Mexico. The drink is made by combining equal parts strong brewed coffee and steamed milk, and is often served with sugar. The exact origin of café con leche is unclear, but it is believed to have originated in Spain in the 1800s.`,
	},
	{
		id: 3,
		imagen: cafe_negro,
		imagen2: cafe_negro_2,
		title: 'Americano',
		info: `The Americano is a popular coffee drink that is believed to have originated during World War II. At the time, American soldiers stationed in Italy found the local espresso to be too strong for their taste, so they began diluting it with hot water to create a milder version. The resulting drink became known as the Americano, and it remains a popular coffee drink around the world today.`,
	},
	{
		id: 4,
		imagen: cortadito,
		imagen2: cortadito_2,
		title: 'Cortadito',
		info: `Cortadito is a Cuban coffee drink that is similar to a café con leche, but with a stronger coffee flavor. The drink is made by combining a shot of Cuban-style espresso with steamed milk and sugar. The exact origin of the cortadito is unclear, but it is believed to have originated in Cuba in the 19th century, and it remains a popular coffee drink in Cuban communities around the world today.`,
	},
];

export default CupItems;
