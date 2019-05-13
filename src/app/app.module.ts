import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SuperherosModule } from './superheros/superheros.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, SuperherosModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
