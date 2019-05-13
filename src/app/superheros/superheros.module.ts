import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperherosRoutingModule } from './superheros-routing.module';
import { ContentComponent } from './content/content.component';
import { MarvelService } from '../core/marvel/marvel.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CardComponent, ContentComponent, DetailsComponent, HomeComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, SuperherosRoutingModule, SharedModule, NgbModule],
  providers: [MarvelService, NgbModal],
})
export class SuperherosModule {}
