import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperherosRoutingModule } from './superheros-routing.module';
import { SearchComponent } from './search/search.component';
import { MarvelService } from '../core/marvel/marvel.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './shared/card/card.component';
import { DetailsComponent } from './shared/details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout/logout.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReportComponent } from './report/report.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    CardComponent,
    SearchComponent,
    DetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    FavoritesComponent,
    ReportComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, SuperherosRoutingModule, SharedModule, NgbModule],
  providers: [MarvelService, NgbModal],
})
export class SuperherosModule {}
