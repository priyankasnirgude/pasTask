import { Component, Input, OnInit, inject } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger.interface';
import { PassengersService } from 'src/app/shared/services/passengers.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {

  @Input() passObj!: Ipassenger;
  isinEditMode : boolean = false;
  
  constructor(private _passService : PassengersService) { }

  ngOnInit(): void {
  }

  onEditMode(){
    this.isinEditMode = !this.isinEditMode;
  }

  onDoneMode(fullname : string){
    this.isinEditMode = !this.isinEditMode;
    //console.log(this.passObj);
    
    let updatedObj = {
      ...this.passObj,
      fullname : fullname
    }

    console.log(updatedObj);
    
    this._passService.updatePass(updatedObj)

  }

  onDelete(){
    this._passService.removePass(this.passObj.id);
  }
}
