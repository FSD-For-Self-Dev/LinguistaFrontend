export enum ESortDirection {
	ASC = 'ASC',
	DESC = 'DESC',
}

export enum ESortDirectionSymbol {
	ASC = '↑',
	DESC = '↓',
}

export type TSortDirection = keyof typeof ESortDirection;

type TOption = {
	[key in TSortDirection]: string;
};

export type TSortItem = {
	label: string;
	field: string;
	direction?: TSortDirection;
	options: TOption;
};
