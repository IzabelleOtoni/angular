import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/marvel/character.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public myReport = [
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
  constructor() { }

  ngOnInit() {
  }

}
