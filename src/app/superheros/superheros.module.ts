import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperherosRoutingModule } from './superheros-routing.module';
import { ContentComponent } from './content/content.component';
import { MarvelService } from '../core/marvel/marvel.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ContentComponent, CardComponent, DetailsComponent],
  imports: [CommonModule, SuperherosRoutingModule, NgbModule],
  providers: [MarvelService, NgbModal],
})
export class SuperherosModule {}
