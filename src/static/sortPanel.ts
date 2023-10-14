import { ESortDirection, TSortItem } from '@/shared/interfaces/sortPanel';

export const DEFAULT_SORT_PARAMS = {
	sortBy: 'byDateAdded',
	dir: ESortDirection.ASC,
};

export const SORT_PANEL: Array<TSortItem> = [
	{
		label: 'По дате добавления',
		field: 'byDateAdded',
		options: {
			ASC: 'сначала новые',
			DESC: 'сначала старые',
		},
	},
	{
		label: 'По дате последней тренировки',
		field: 'byLastDate',
		options: {
			ASC: 'сначала недавние',
			DESC: 'сначала давние',
		},
	},
	{
		label: 'В алфавитном порядке',
		field: 'byAlphabet',
		options: {
			ASC: 'от A до Z',
			DESC: 'от Z до A',
		},
	},
	{
		label: 'По кол-ву переводов',
		field: 'byTranslateNumber',
		options: {
			ASC: 'от меньшего',
			DESC: 'от большего',
		},
	},
];
