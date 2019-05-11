export interface Marvel {
  data: MarvelData;
}

export interface MarvelData {
  results: any[];
}

export interface Character {
  name: string;
  data: MarvelData;
}

export interface CharacterlData {
  results: any[];
}
