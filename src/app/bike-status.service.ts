import { Injectable } from '@angular/core';
import { BikeState } from './bikeState';




@Injectable()
export class BikeStatusService {

  constructor() { }

  BIKESTATE_AVAILABLE: BikeState  = { name: "AVAILABLE", image: "assets/img/available.png", message:"Parking spot status at Telekom HQ" };
  BIKESTATE_UNLOCKED: BikeState  = { name: "UNLOCKED", image: "assets/img/unlocked.png", message: "Parking Spot 4 unlocked" };
  BIKESTATE_LOCKED_NOTIFICATION: BikeState  = { name: "BIKESTATE_LOCKED_NOTIFICATION",image:  "assets/img/locked-notification.png", message: "" };
  BIKESTATE_LOCKED:  BikeState  = { name:"AVAILABLE", image: "assets/img/locked.png", message: "Parking spot status at Telekom HQ!" };
  BIKESTATE_UNLOCKED_NOTIFICATION: BikeState  = { name: "BIKESTATE_UNLOCKED_NOTIFICATION", image: "assets/img/unlocked-notification.png", message: "" };



  state: BikeState=this.BIKESTATE_AVAILABLE;



  getBikeState() : BikeState{

    

        if (this.state == this.BIKESTATE_AVAILABLE){
          this.state=this.BIKESTATE_UNLOCKED;
        }
        else if (this.state == this.BIKESTATE_UNLOCKED){
          this.state=this.BIKESTATE_LOCKED_NOTIFICATION;
        }
        else if (this.state == this.BIKESTATE_LOCKED_NOTIFICATION){
          this.state=this.BIKESTATE_LOCKED;
        }
        else if (this.state == this.BIKESTATE_LOCKED){
          this.state=this.BIKESTATE_UNLOCKED_NOTIFICATION;
        }
        else {
          this.state=this.BIKESTATE_AVAILABLE;
        }


    return this.state;
  }

  getDefault() : BikeState{
    return this.BIKESTATE_AVAILABLE
  }

}
