export interface Translation {
  text: string;
}

export interface Example {
  text: string;
  translation?: string;
}

export interface Definition {
  text: string;
  translations?: string[];
}

export interface Synonym {
  text: string;
}

export interface Antonym {
  text: string;
}

export interface Forms {
  text: string;
}

export interface Similar {
  text: string;
}

export interface Note {
  text: string;
}

export type Activity = 'INACTIVE' | 'ACTIVE' | 'MASTERED';

export type ActivityFilter = 'INACTIVE' | 'ACTIVE' | 'MASTERED' | 'ALL';

// Интерфейс для создания нового слова на сервере.
// POST /api/vocabulary/
export interface NewWord {
  language: string;
  text: string;
  translations?: Translation[];
  examples?: Example[];
  definitions?: Definition[];
  types?: number[];
  tags?: number[];
  is_problematic?: boolean;
  activity?: Activity;
  collections?: string[];
  synonyms?: Synonym[];
  antonyms?: Antonym[];
  forms?: Forms[];
  similars?: Similar[];
  notes?: Note[];
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
  types?: string[];
}

export interface WordsState {
  words: Word[];
  filteringWords: Word[];
  filter: ActivityFilter;
}
