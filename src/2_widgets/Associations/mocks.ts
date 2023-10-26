import image from '../../5_shared/assets/mock-for-card.png';

export interface IAssociationCard {
	img?: string;
	quote?: string;
	assonant?: string;
}

export const dataAssociation: Array<IAssociationCard> = [
	{
		img: image,
	},
	{
		quote: 'Learn the ropes',
	},
	{
		img: image,
		assonant: 'Лён',
	},
];
