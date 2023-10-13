export enum ESortDirection {
	ASC,
	DESC,
}

export type TSortDirection = keyof typeof ESortDirection;

type TOption = {
	option: string;
	sort: TSortDirection;
};

export type TSortItem = {
	label: string;
	field: string;
	options: Array<TOption>;
};
