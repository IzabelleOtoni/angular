import { Component, OnInit, Input } from '@angular/core';
import { MarvelService } from 'src/app/core/marvel/marvel.service';
import { Serie } from 'src/app/core/marvel/series.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(public marvelService: MarvelService) {}

  @Input()
  public popup: any;

  @Input()
  public superHeroId: number;

  @Input()
  public superHeroName: string;

  public superHeroSeries: Serie[];

  ngOnInit() {
    this.getDetails();
  }

  public getDetails(): void {
    this.marvelService.getSeries(this.superHeroId).subscribe((results: Serie[]) => {
      this.superHeroSeries = results;
      console.log(results);
    });
  }
}
