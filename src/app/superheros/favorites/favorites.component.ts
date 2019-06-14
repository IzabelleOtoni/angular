import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/marvel/character.model';
import { FavoritesService } from 'src/app/core/favorites/favorites.service';
import { AuthService } from 'src/app/core/security/auth.service';
import { take, first } from 'rxjs/operators';
import { QuerySnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  public myFavorites = [] as Character[];
  public user: firebase.User;

  constructor(private favoritesService: FavoritesService,
    private authService: AuthService) {

  }

  async ngOnInit() {
    this.user = (await this.authService.userState.pipe(first()).toPromise()) as firebase.User;

    this.favoritesService.getFavorites(this.user.uid).subscribe((character: Character[]) => {
      this.myFavorites = character;
    })
  }
}
