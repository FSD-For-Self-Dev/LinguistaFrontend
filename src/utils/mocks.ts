import { IWordCard } from '@/shared/interfaces/IWordCard';
import image from '@assets/mock-for-card.png';

export const data: Array<IWordCard> = [
	{
		word: 'Learn',
		status: 'Активное',
		level: 'C1',
		type: 'глагол',
		favorite: true,
		img: [image, image, image, image, image],
		translate: ['понимать', 'осознать', 'узнать', 'уяснить'],
	},
	{
		word: 'apple',
		status: 'Активное',
		level: 'A1',
		type: 'существительное',
		img: [image],
		translate: ['яблоко'],
	},
	{
		word: 'I like freedom',
		status: 'Активное',
		level: 'A1',
		type: 'существительное',
		img: [image, image, image],
	},
	{
		word: "Don't worry, be happy",
		status: 'Неактивное',
		level: 'A2',
		type: 'глагол',
		favorite: true,
	},
	{ word: 'carrot', status: 'Неактивное', level: 'B1', type: 'прилагательное' },
	{ word: 'banana', status: 'Активное', level: 'C1', type: 'глагол' },
	{ word: 'carrot', status: 'Активное', level: 'B1', type: 'прилагательное' },
	{
		word: 'understand',
		status: 'Неактивное',
		level: 'B2',
		type: 'наречие',
		translate: ['понимать', 'осознать', 'узнать', 'уяснить'],
	},
];
