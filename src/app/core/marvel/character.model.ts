import { Thumbnail, MarvelData } from './marvel.model';

export interface Character {
  id: number;
  name: string;
  thumbnail: Thumbnail;
  description: string;
}
