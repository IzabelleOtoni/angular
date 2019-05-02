import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/marvel/marvel.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Character } from 'src/app/core/marvel/marvel.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
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
