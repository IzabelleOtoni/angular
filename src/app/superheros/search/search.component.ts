import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/marvel/marvel.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Character } from 'src/app/core/marvel/character.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public superHeros: any;
  public selectedSuperHero: Character;

  constructor(private marvelService: MarvelService) {}

  ngOnInit() {}

  search = (text: Observable<string>) =>
    text.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.marvelService.getCharacters(term))
    );

  public format(character: Character): string {
    return character.name;
  }

  public inputFormatter(character: Character): string {
    return character.name;
  }

  public onSelectedCharacter(event: any): void {
    this.selectedSuperHero = event.item;
    console.log(this.selectedSuperHero);
  }
}
