import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/core/marvel/character.model';
import { FavoritesService } from 'src/app/core/favorites/favorites.service';
import { AuthService } from 'src/app/core/security/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input()
  public superHero: Character;

  public user: firebase.User;
  public itIsFavorite: boolean;

  constructor(private modalService: NgbModal, private favoritesService: FavoritesService, private authService: AuthService) {}

  public async ngOnInit(): Promise<void> {
    this.user = (await this.authService.userState.pipe(take(1)).toPromise()) as firebase.User;
  }

  public ngOnChanges() {
    this.checkFavorite();
  }

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

  public addToFavorites(): void {
    this.favoritesService.addFavorite(this.user.uid, this.superHero).then(() => {
      this.itIsFavorite = true;
      console.log(this.user);
    });
  }

  public removeFavorite(): void {
    this.favoritesService.removeFavorite(this.user.uid, this.superHero.id).then(() => {
      this.itIsFavorite = false;
      console.log(this.user);
    });
  }

  private checkFavorite(): void {
    if (this.superHero != null) {
      this.favoritesService.getFavorite(this.user.uid, this.superHero.id).subscribe(superHero => {
        this.itIsFavorite = superHero.exists;
      });
    }
  }
}
