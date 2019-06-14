import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Character } from '../core/marvel/character.model';
import { map } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SuperherosService {

  constructor(private afStorage: AngularFirestore) { }

  public getReport(): Observable<any> {
    return this.afStorage.collection(`testes`).get().pipe((map((data) => {
      console.log(data);
    })))
  }
}
