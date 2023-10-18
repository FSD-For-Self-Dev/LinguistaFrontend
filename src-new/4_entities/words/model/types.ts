export type Translation = {
	text: string;
};

export type Example = {
	text: string;
	translation?: string;
};

export type Definition = {
	text: string;
	translations?: Array<string>;
};

export type Synonym = {
	text: string;
};

export type Antonym = {
	text: string;
};

export type Forms = {
	text: string;
};

export type Similar = {
	text: string;
};

export type Note = {
	text: string;
};

export type Activity = 'INACTIVE' | 'ACTIVE' | 'MASTERED';

export type ActivityFilter = 'INACTIVE' | 'ACTIVE' | 'MASTERED' | 'ALL';

// Интерфейс для создания нового слова на сервере.
// POST /api/vocabulary/
export interface NewWord {
	language: string;
	text: string;
	translations?: Array<Translation>;
	examples?: Array<Example>;
	definitions?: Array<Definition>;
	types?: Array<number>;
	tags?: Array<number>;
	is_problematic?: boolean;
	activity?: Activity;
	collections: Array<number>;
	synonyms?: Array<Synonym>;
	antonyms?: Array<Antonym>;
	forms?: Array<Forms>;
	similars?: Array<Similar>;
	notes?: Array<Note>;
}

// Интерфейса слова, который находится в result при получении запроса с сервера
// GET /api/vocabulary/
export interface Word extends Omit<NewWord, 'types'> {
	id: number;
	slug: string;
	created: string;
	modified: string;
	translations_count: number;
	favorite: boolean;
	types?: Array<string>;
}

export interface WordsState {
	words: Array<Word>;
	filteringWords: Array<Word>;
	filter: ActivityFilter;
}
