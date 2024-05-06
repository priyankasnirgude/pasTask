import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassDashboardComponent } from './passengers/pass-dashboard/pass-dashboard.component';
import { PassCardComponent } from './passengers/pass-card/pass-card.component';
import { PassCountComponent } from './passengers/pass-count/pass-count.component';
import { PassengersModule } from './passengers/passengers.module';
//import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PassengersModule,
    //MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
