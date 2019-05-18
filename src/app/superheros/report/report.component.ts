import { Component, OnInit } from '@angular/core';
import { FirebaseUserModel } from 'src/app/core/user/user.model';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public myReport = [
    {
      image: '',
      name: 'cindy',
      provider: '',
    },
    {
      image: '',
      name: 'iza',
      provider: '',
    },
    {
      image: '',
      name: 'alice',
      provider: '',
    },
 
  ] as FirebaseUserModel[];
  constructor() { }

  ngOnInit() {
  }

}
