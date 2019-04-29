import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/marvel/marvel.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public superHeros: any;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getCharacters('thor').subscribe(results => {
      this.superHeros = results;
    });
  }

}
