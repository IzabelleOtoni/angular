import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Character } from '../marvel/character.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(public afStorage: AngularFirestore) { }

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

  public getFavorites(userId: string): Observable<Character[]> {
    return this.afStorage
      .collection(`users/${userId.toString()}/favorites`)
      .get()
      .pipe(
        map((snapShot: QuerySnapshot<Character>) => {
          return snapShot.docs.map((doc: QueryDocumentSnapshot<Character>) => doc.data());
        }));
  }
}
