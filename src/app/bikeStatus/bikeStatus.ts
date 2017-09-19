import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { BikeState } from '../bikeState';
import { BikeStatusService } from "../bike-status.service";

import 'rxjs/Rx';


const styles = require('./bikeStatus.css');
const template = require('./bikeStatus.html');



@Component({
  selector: 'bikeStatus',
  template: template,
  styles: [ styles ]
})

export class BikeStatus {

  bikeState: BikeState;

  BIKESTATE_AVAILABLE: BikeState  = { name: "AVAILABLE", image: "assets/img/available.png", message:"Parking spot status at Telekom HQ" };
  BIKESTATE_UNLOCKED: BikeState  = { name: "UNLOCKED", image: "assets/img/unlocked.png", message: "Parking Spot 4 unlocked" };
  BIKESTATE_LOCKED_NOTIFICATION: BikeState  = { name: "BIKESTATE_LOCKED_NOTIFICATION",image:  "assets/img/locked-notification.png", message: "" };
  BIKESTATE_LOCKED:  BikeState  = { name:"AVAILABLE", image: "assets/img/locked.png", message: "Parking spot status at Telekom HQ!" };
  BIKESTATE_UNLOCKED_NOTIFICATION: BikeState  = { name: "BIKESTATE_UNLOCKED_NOTIFICATION", image: "assets/img/unlocked-notification.png", message: "" };


//  bikeStateImg: string ='assets/img/unlocked.png';

  constructor(public router: Router, public http: Http, private bikeStatusService: BikeStatusService ) {

    var DEVICEID="7cdc1681-effa-4868-8472-183c90ec74b3"
    var TOKEN="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJlS1ZZVFV5dWNQcHg0OU1WSGhHb2RfR2wyV3YtNEFibEV2SXlWQTBiWDdvIn0.eyJqdGkiOiIyNTViMGQ2OC03ZjkyLTQ5ZWQtODBiOC1iMjhjNTgxN2RmNjAiLCJleHAiOjE1MDU4NTAzNDgsIm5iZiI6MCwiaWF0IjoxNTA1ODUwMDQ4LCJpc3MiOiJodHRwczovL2lkLmRldi51YmlyY2guY29tL2F1dGgvcmVhbG1zL3ViaXJjaCIsImF1ZCI6InViaXJjaC1hZG1pbi11aS1kZW1vIiwic3ViIjoiYzExOWE4ZDgtNjNmMC00ZTYzLWExN2YtYzU0NzhkNDdjYzhmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidWJpcmNoLWFkbWluLXVpLWRlbW8iLCJhdXRoX3RpbWUiOjE1MDU4NTAwNDcsInNlc3Npb25fc3RhdGUiOiI5ZmEwYjgwNy0wNTY2LTRmYzgtYmU3ZC1lMjMzNzQzNGI5MDMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vdWJpcmNoLmRlbW8udWJpcmNoLmNvbSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJuYW1lIjoiSG9yYXRpdSBFdWdlbiBWbGFkIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaHZsYWQiLCJnaXZlbl9uYW1lIjoiSG9yYXRpdSBFdWdlbiIsImZhbWlseV9uYW1lIjoiVmxhZCIsImVtYWlsIjoiaG9yYXRpdXZsYWRAeWFob28uY29tIn0.HsqVDF3VgY0w2DOl-xojcat4rwaf4c2qBB4liEuK3BLSW7o2Yr4prMnV7-OR4eR1VhqnOOise7ZmcwJWbYjgi5uN_XE3q_eveDhjweM71x5LxFH7vk8WJjYIy7keEOjOdFNQ0Gu--YtSUWxuy49mnFUKiIUnTnngMHE5DA2bgoodLf59LxCyrAeFEtseRrZNO1dfW92N7e84wS6Wi7QITnbcn8pLLBUeYAjODu2JKCxwdU1vL2xL3u6YH91yFpswI3nTkcAGfn2DHYh985oXalTq_Z-Z1QxwjzSTjS4XzrB48HJBhkN6OgJgXcbQ5fQO5seoizq2fL_kBYHXmWgvYQ"
    var HOST="https://api.ubirch.demo.ubirch.com"

    var url = HOST + "/api/avatarService/v1/device/"+DEVICEID+"/data/history/0/1"

    Observable.interval(2000)
    .switchMap(() => http.get(url)).map((data) => data.json())
        .subscribe((data) => {

           console.log("Found state:" + data[0].deviceMessage.state)

           if ("standby" == data[0].deviceMessage.state){
             this.bikeState = this.BIKESTATE_AVAILABLE;
           } else if ("unlocked" == data[0].deviceMessage.state)
           {
            this.bikeState = this.BIKESTATE_UNLOCKED;
           }
           else if ("locked" == data[0].deviceMessage.state)
           {
            this.bikeState = this.BIKESTATE_LOCKED_NOTIFICATION;
           }
        });


    this.bikeState =this.bikeStatusService.getDefault()
  }

  public changeState(event, item) {
    /*if (this.bikeState == this.BIKESTATE_AVAILABLE){
      this.bikeState=this.BIKESTATE_UNLOCKED;
    }
    else if (this.bikeState == this.BIKESTATE_UNLOCKED){
      this.bikeState=this.BIKESTATE_LOCKED_NOTIFICATION;
    }
    else
*/
    if (this.bikeState == this.BIKESTATE_LOCKED_NOTIFICATION){
      this.bikeState=this.BIKESTATE_LOCKED;
    }
    if (this.bikeState == this.BIKESTATE_UNLOCKED_NOTIFICATION){
      this.bikeState=this.BIKESTATE_AVAILABLE;
    }

    else if (this.bikeState == this.BIKESTATE_LOCKED){
      this.bikeState=this.BIKESTATE_UNLOCKED_NOTIFICATION;
    }
    else {
      this.bikeState=this.BIKESTATE_AVAILABLE;
    }

 }

   getDefault() : BikeState{
     return this.BIKESTATE_AVAILABLE
   }


}
