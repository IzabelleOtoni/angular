import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) {
  }

  public getCharacters(characterName: string): Observable<any> {
    return this.http.get(`https://gateway.marvel.com/v1/public/characters?name=${characterName}&apikey=bedaac8ca11a2e92783b248c11588ac0`);
  }
}
