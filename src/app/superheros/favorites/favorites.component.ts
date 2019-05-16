import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/marvel/character.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  public myFavorites = [
    {
      id: 1,
      description: 'Some description',
      name: 'dsafa',
      thumbnail: {},
    },
    {
      id: 1,
      description: 'Some description',
      name: 'dsafa',
      thumbnail: {},
    },
    {
      id: 1,
      description: 'Some description',
      name: 'dsafa',
      thumbnail: {},
    },
    {
      id: 1,
      description: 'Some description',
      name: 'dsafa',
      thumbnail: {},
    },
    {
      id: 1,
      description: 'Some description',
      name: 'dsafa',
      thumbnail: {},
    },
  ] as Character[];

  constructor() {}

  ngOnInit() {}
}
