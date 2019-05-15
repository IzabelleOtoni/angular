import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [];

export const rootRouterConfig: Routes = [{ path: '', loadChildren: './superheros/superheros.module#SuperherosModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
