import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/core/marvel/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  public superHero: Character;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  public openDetails(detail: any): void {
    this.modalService.open(detail, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
      result => {
        console.log(result);
      },
      reason => {
        console.log(reason);
      }
    );
  }

  public addToFavorites(): void {}

  public removeFavorite(): void {}
}
