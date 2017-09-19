import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';

import { BikeStatusService } from "./bike-status.service";
import { AppComponent } from './app.component';
import { BikeStatus } from './bikeStatus/bikeStatus';
import { Login } from './login/login';
import { FindSpot } from './findSpot/findSpot';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent,BikeStatus, Login, FindSpot ],
  imports: [BrowserModule, AppBoostrapModule, HttpModule, FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })],
  providers: [BikeStatusService],
  bootstrap: [AppComponent]
})
export class AppModule {}
