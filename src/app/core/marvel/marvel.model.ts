export interface Marvel {
  data: MarvelData;
}

export interface MarvelData {
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
}
