import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassDashboardComponent } from './pass-dashboard/pass-dashboard.component';
import { PassCardComponent } from './pass-card/pass-card.component';
import { PassCountComponent } from './pass-count/pass-count.component';
//import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    PassDashboardComponent,
    PassCardComponent,
    PassCountComponent
  ],
  imports: [
    CommonModule,   
    //MatButtonModule
  ],
  exports :[
    PassDashboardComponent
  ]
})
export class PassengersModule { }
