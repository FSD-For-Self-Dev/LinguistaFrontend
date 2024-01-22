import { TPopularity } from '@shared/ui/Popularity/Popularity';

export type TTranslation = {
	id: number;
	text: string;
};

export interface ISynonym extends TTranslation {}

export interface IAntonym extends TTranslation {}

export interface IForm extends TTranslation {}

export interface ISimilar extends TTranslation {}

export type TExample = {
	id: number;
	text: string;
	translation?: string;
	created: string;
	modified: string;
};

export type TDefinition = {
	id: number;
	text: string;
	translation: string;
	author?: string;
	created: string;
	examples?: Array<string>;
	modified: string;
	popularity?: TPopularity;
};

export type TNote = {
	text: string;
};

export type TActivity = 'INACTIVE' | 'ACTIVE' | 'MASTERED';

export interface IWord {
	id: number;
	slug: string;
	language: string;
	text: string;
	translations: Array<TTranslation>;
	translations_count: number;
	examples_count: number;
	examples: Array<TExample>;
	definitions: Array<TDefinition>;
	types: Array<number>;
	tags: Array<number>;
	is_problematic: boolean;
	activity: TActivity;
	collections?: Array<number>;
	created: string;
	modified: string;
	synonyms: Array<ISynonym>;
	favorite: boolean;
	antonyms: Array<IAntonym>;
	forms: Array<IForm>;
	similars: Array<ISimilar>;
	notes: Array<TNote>;
}
