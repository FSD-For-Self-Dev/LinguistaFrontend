export type TWordStatus = 'Активное' | 'Неактивное' | 'Усвоенное';
export type TWordLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type TWordType =
	| 'существительное'
	| 'глагол'
	| 'прилагательное'
	| 'наречие'
	| 'фраза'
	| 'пословица';

export interface IWordCard {
	word: string;
	status: TWordStatus;
	level: TWordLevel;
	type: TWordType;
	favorite?: boolean;
	img?: Array<string>;
	translate?: Array<string>;
}

// Необходимо уточнить, какие будут типы данных на бэкенде и в зависимости от этого скорректировать данные типы
