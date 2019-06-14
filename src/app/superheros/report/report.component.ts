import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/marvel/character.model';
import { SuperherosService } from '../superheros.service';

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
  constructor(private superherosService: SuperherosService) { }

  ngOnInit() {
    this.superherosService.getReport().subscribe();
  }
}
