import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/core/marvel/marvel.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  public superHero: Character;

  constructor() {}

  ngOnInit() {}
}
