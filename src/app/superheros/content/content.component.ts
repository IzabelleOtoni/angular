import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/marvel/marvel.service';
import { of, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { stringify } from '@angular/core/src/render3/util';
import { Character } from 'src/app/core/marvel/marvel.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  public superHeros: any;

  constructor(private marvelService: MarvelService) {}

  ngOnInit() {
    this.marvelService.getCharacters('Spider').subscribe(results => {
      this.superHeros = results;
      console.log(results);
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.marvelService.getCharacters(term))
    );

  format = (character: Character) => {
    console.log(event);
    return character.name;
  };
}
