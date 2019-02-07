import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {
  MatButtonModule, MatExpansionModule, MatFormFieldModule,
  MatInputModule, MatSlideToggleModule, MatCardModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { IpAddressAlertComponent } from './shared/ip-address-alert/ip-address-alert.component';
import { ToastrModule } from 'ngx-toastr';
import { TemperatureConverterPipe } from './shared/temperatureConverter/temperatureConverter';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SettingsComponent,
    IpAddressAlertComponent,
    TemperatureConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [IpAddressAlertComponent]
})
export class AppModule {
  constructor() { }
}



