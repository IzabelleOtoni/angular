import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperherosRoutingModule } from './superheros-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    SuperherosRoutingModule
  ]
})
export class SuperherosModule { }
