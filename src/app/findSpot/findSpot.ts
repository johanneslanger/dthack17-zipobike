import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

const styles = require('./findSpot.css');
const template = require('./findSpot.html');

@Component({
  selector: 'findSpot',
  template: template,
  styles: [ styles ]
})
export class FindSpot {


  constructor(public router: Router, public http: Http, ) {

  }

}
