import { TSortItem } from '@/shared/interfaces/sortPanel';

export const SORT_PANEL: Array<TSortItem> = [
	{
		label: '↑ По дате добавления',
		field: 'byDateAdded',
		options: [
			{
				option: 'сначала новые',
				sort: 'ASC',
			},
			{
				option: 'сначала старые',
				sort: 'DESC',
			},
		],
	},
	{
		label: '↓ По дате последней тренировки',
		field: 'byLastDate',
		options: [
			{
				option: 'сначала недавние',
				sort: 'ASC',
			},
			{
				option: 'сначала давние',
				sort: 'DESC',
			},
		],
	},
	{
		label: '↑ В алфавитном порядке',
		field: 'byAlphabet',
		options: [
			{
				option: 'от A до Z',
				sort: 'ASC',
			},
			{
				option: 'от Z до A',
				sort: 'DESC',
			},
		],
	},
	{
		label: '↓ По кол-ву переводов',
		field: 'byTranslateNumber',
		options: [
			{
				option: 'от большего',
				sort: 'ASC',
			},
			{
				option: 'от меньшего',
				sort: 'DESC',
			},
		],
	},
];
