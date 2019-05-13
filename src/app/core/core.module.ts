import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// FireBase Libraries
import { AuthGuard } from './security/auth.guard';
import { AuthService } from './security/auth.service';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  exports: [LayoutComponent],
})
export class CoreModule {}
