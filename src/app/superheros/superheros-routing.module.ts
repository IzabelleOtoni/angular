import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../core/security/auth.guard';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { NonAuthGuard } from '../core/security/non-auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NonAuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent, canActivate: [NonAuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'favorites', component: FavoritesComponent/*, canActivate: [AuthGuard] */},
  { path: 'report', component: ReportComponent /*, canActivate: [AuthGuard]*/},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperherosRoutingModule {}
