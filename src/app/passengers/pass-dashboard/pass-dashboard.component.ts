import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger.interface';
import { PassengersService } from 'src/app/shared/services/passengers.service';

@Component({
  selector: 'app-pass-dashboard',
  templateUrl: './pass-dashboard.component.html',
  styleUrls: ['./pass-dashboard.component.scss']
})
export class PassDashboardComponent implements OnInit {

  passArr!: Array<Ipassenger>
  checkInCount !: number;
  constructor(
    private _passService : PassengersService
  ) { }

  ngOnInit(): void {
    this.passArr = this._passService.fetchAllPassengers();
    this.getcheckIncount();
  }
  getcheckIncount(){
    this.checkInCount = this.passArr.filter(pass => pass.checkedIn).length
    return this.checkInCount
  }

}
