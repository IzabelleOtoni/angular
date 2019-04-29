import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperherosRoutingModule } from './superheros-routing.module';
import { ContentComponent } from './content/content.component';
import { MarvelService } from '../core/marvel/marvel.service';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    SuperherosRoutingModule
  ],
  providers: [MarvelService]
})
export class SuperherosModule { }
