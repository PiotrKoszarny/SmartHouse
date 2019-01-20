import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'twojdom', pathMatch: 'full'
  },
  {
    path: 'twojdom', component: HomeComponent
  },
  {
    path: 'ustawienia', component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


