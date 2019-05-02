import { Component, OnInit, Input } from '@angular/core';
import { MarvelService } from 'src/app/core/marvel/marvel.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(public marvelService: MarvelService) {}

  @Input()
  popup: any;

  @Input()
  superHeroId: number;

  @Input()
  superHeroName: string;

  ngOnInit() {
    this.getDetails();
    console.log(this.popup);
  }

  public getDetails(): void {
    this.marvelService.getSeries(this.superHeroId).subscribe((results: any[]) => {
      console.log(results);
    });
  }
}
