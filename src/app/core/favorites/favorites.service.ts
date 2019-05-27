import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Character } from '../marvel/character.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(public afStorage: AngularFirestore) {}

  public addFavorite(userId: string, superHero: Character) {
    return this.afStorage
      .collection(`users/${userId.toString()}/favorites`)
      .doc(superHero.id.toString())
      .set(superHero);
  }

  public removeFavorite(userId: string, superHeroId: number) {
    return this.afStorage
      .collection(`users/${userId.toString()}/favorites`)
      .doc(superHeroId.toString())
      .delete();
  }

  public getFavorite(userId: string, superHeroId: number) {
    return this.afStorage
      .collection(`users/${userId.toString()}/favorites`)
      .doc(superHeroId.toString())
      .get();
  }
}
