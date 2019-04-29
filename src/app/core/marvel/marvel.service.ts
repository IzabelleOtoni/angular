import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Marvel, Character } from './marvel.model';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  public getCharacters(characterName: string): Observable<Character[]> {
    return this.http
      .get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${characterName}&apikey=bedaac8ca11a2e92783b248c11588ac0`)
      .pipe(
        map((result: Marvel) => {
          console.log('', result);
          return result.data.results;
        })
      );
  }
}
