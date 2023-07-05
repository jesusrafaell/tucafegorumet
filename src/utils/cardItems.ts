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
		info: 'Cuban coffee (also known as Cuban espresso, colada, cafecito, Cuban jerk, or Cuban shot) is a type of espresso that originated in Cuba. Specifically, it refers to a shot of sweetened espresso (traditionally with natural brown sugar that has been whipped with the first, strongest drops of espresso).',
	},
	{
		id: 2,
		imagen: cafe_negro,
		imagen2: cafe_negro_2,
		title: 'Americano',
		info: 'American coffee or American coffee is a type of preparation of American origin, in which espresso coffee is diluted in hot water, thus reducing the intensity of its flavor.',
	},
	{
		id: 3,
		imagen: cortadito,
		imagen2: cortadito_2,
		title: 'Cortadito',
		info: 'A cortadito is an espresso coffee, generally to which anywhere from a few drops of milk to approximately 50% milk and 50% coffee is added to bring out the bitterness of coffee in a cup .',
	},
	{
		id: 4,
		imagen: cafe_milk,
		imagen2: cafe_milk_2,
		title: 'Cafe con Leche',
		info: 'What does coffee with milk mean?  Lattes are made using filtered coffee and steamed milk, and the usual ratio is one part coffee to one part steamed milk, with no foam or cream on top (although some coffee shops do add it) .',
	},
];

export default CupItems;
