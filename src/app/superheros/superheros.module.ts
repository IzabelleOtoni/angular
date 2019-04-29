import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperherosRoutingModule } from './superheros-routing.module';
import { ContentComponent } from './content/content.component';
import { MarvelService } from '../core/marvel/marvel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, SuperherosRoutingModule, NgbModule],
  providers: [MarvelService],
})
export class SuperherosModule {}
