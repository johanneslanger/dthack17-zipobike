webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-boostrap/app-boostrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBoostrapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppBoostrapModule = (function () {
    function AppBoostrapModule() {
    }
    return AppBoostrapModule;
}());
AppBoostrapModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalModule */]]
    })
], AppBoostrapModule);

//# sourceMappingURL=app-boostrap.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\"><img src=\"assets/img/logo.png\" class=\"logo\"></a>\n            <span class=\"navbar-brand\">Home</span>\n        </div>\n        <!--ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n            <li><a href=\"#\">Link</a></li>\n            <li dropdown>\n                <a dropdownToggle class=\"dropdown-toggle\" role=\"button\">Dropdown <span class=\"caret\"></span></a>\n                <ul *dropdownMenu class=\"dropdown-menu\">\n                    <li><a href=\"#\">Action</a></li>\n                    <li><a href=\"#\">Another action</a></li>\n                    <li><a href=\"#\">Something else here</a></li>\n                    <li role=\"separator\" class=\"divider\"></li>\n                    <li><a href=\"#\">Separated link</a></li>\n                    <li role=\"separator\" class=\"divider\"></li>\n                    <li><a href=\"#\">One more separated link</a></li>\n                </ul>\n            </li>\n        </ul-->\n    </div>\n</nav>\n\n<div class=\"container\">\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
    }
    AppComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [
            ".logo {\n      max-height: 30px;\n      padding-bottom: 5px;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_boostrap_app_boostrap_module__ = __webpack_require__("../../../../../src/app/app-boostrap/app-boostrap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bike_status_service__ = __webpack_require__("../../../../../src/app/bike-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bikeStatus_bikeStatus__ = __webpack_require__("../../../../../src/app/bikeStatus/bikeStatus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__("../../../../../src/app/login/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__findSpot_findSpot__ = __webpack_require__("../../../../../src/app/findSpot/findSpot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__bikeStatus_bikeStatus__["a" /* BikeStatus */], __WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* Login */], __WEBPACK_IMPORTED_MODULE_10__findSpot_findSpot__["a" /* FindSpot */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__app_boostrap_app_boostrap_module__["a" /* AppBoostrapModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routes */], {
                useHash: true
            })],
        providers: [__WEBPACK_IMPORTED_MODULE_6__bike_status_service__["a" /* BikeStatusService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bikeStatus_bikeStatus__ = __webpack_require__("../../../../../src/app/bikeStatus/bikeStatus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__findSpot_findSpot__ = __webpack_require__("../../../../../src/app/findSpot/findSpot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__("../../../../../src/app/login/login.ts");



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */] },
    { path: 'bikeStatus', component: __WEBPACK_IMPORTED_MODULE_0__bikeStatus_bikeStatus__["a" /* BikeStatus */] },
    { path: 'findSpot', component: __WEBPACK_IMPORTED_MODULE_1__findSpot_findSpot__["a" /* FindSpot */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */] },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/bike-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BikeStatusService = (function () {
    function BikeStatusService() {
        this.BIKESTATE_AVAILABLE = { name: "AVAILABLE", image: "assets/img/available.png", message: "Parking spot status at Telekom HQ" };
        this.BIKESTATE_UNLOCKED = { name: "UNLOCKED", image: "assets/img/unlocked.png", message: "Parking Spot 4 unlocked" };
        this.BIKESTATE_LOCKED_NOTIFICATION = { name: "BIKESTATE_LOCKED_NOTIFICATION", image: "assets/img/locked-notification.png", message: "" };
        this.BIKESTATE_LOCKED = { name: "AVAILABLE", image: "assets/img/locked.png", message: "Parking spot status at Telekom HQ!" };
        this.BIKESTATE_UNLOCKED_NOTIFICATION = { name: "BIKESTATE_UNLOCKED_NOTIFICATION", image: "assets/img/unlocked-notification.png", message: "" };
        this.state = this.BIKESTATE_AVAILABLE;
    }
    BikeStatusService.prototype.getBikeState = function () {
        if (this.state == this.BIKESTATE_AVAILABLE) {
            this.state = this.BIKESTATE_UNLOCKED;
        }
        else if (this.state == this.BIKESTATE_UNLOCKED) {
            this.state = this.BIKESTATE_LOCKED_NOTIFICATION;
        }
        else if (this.state == this.BIKESTATE_LOCKED_NOTIFICATION) {
            this.state = this.BIKESTATE_LOCKED;
        }
        else if (this.state == this.BIKESTATE_LOCKED) {
            this.state = this.BIKESTATE_UNLOCKED_NOTIFICATION;
        }
        else {
            this.state = this.BIKESTATE_AVAILABLE;
        }
        return this.state;
    };
    BikeStatusService.prototype.getDefault = function () {
        return this.BIKESTATE_AVAILABLE;
    };
    return BikeStatusService;
}());
BikeStatusService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BikeStatusService);

//# sourceMappingURL=bike-status.service.js.map

/***/ }),

/***/ "../../../../../src/app/bikeStatus/bikeStatus.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n  display: block;\n  margin: auto;\n}\n\n\n.small-map {\n  width:80%;\n}\n\n.mainText {\n  padding-bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bikeStatus/bikeStatus.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n    <div class=\"col-12 mainText\"><h2>{{bikeState.message}}</h2></div>\n</div>\n<div class=\"row hidden-xs\">\n    <div class=\"col-12\">\n      <a [routerLink]=\"['/bikeStatus']\">\n        <img [src]=\"bikeState.image\" (click)=\"changeState($event, item)\"  class=\"center\"/>\n      </a>\n    </div>\n</div>\n\n<div class=\"row visible-xs\">\n    <div class=\"col-12\">\n      <a [routerLink]=\"['/bikeStatus']\">\n        <img [src]=\"bikeState.image\" (click)=\"changeState($event, item)\" class=\"center small-map\"/>\n      </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bikeStatus/bikeStatus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bike_status_service__ = __webpack_require__("../../../../../src/app/bike-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var styles = __webpack_require__("../../../../../src/app/bikeStatus/bikeStatus.css");
var template = __webpack_require__("../../../../../src/app/bikeStatus/bikeStatus.html");
var BikeStatus = (function () {
    //  bikeStateImg: string ='assets/img/unlocked.png';
    function BikeStatus(router, http, bikeStatusService) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.bikeStatusService = bikeStatusService;
        this.BIKESTATE_AVAILABLE = { name: "AVAILABLE", image: "assets/img/available.png", message: "Parking spot status at Telekom HQ" };
        this.BIKESTATE_UNLOCKED = { name: "UNLOCKED", image: "assets/img/unlocked.png", message: "Parking Spot 4 unlocked" };
        this.BIKESTATE_LOCKED_NOTIFICATION = { name: "BIKESTATE_LOCKED_NOTIFICATION", image: "assets/img/locked-notification.png", message: "" };
        this.BIKESTATE_LOCKED = { name: "AVAILABLE", image: "assets/img/locked.png", message: "Parking spot status at Telekom HQ!" };
        this.BIKESTATE_UNLOCKED_NOTIFICATION = { name: "BIKESTATE_UNLOCKED_NOTIFICATION", image: "assets/img/unlocked-notification.png", message: "" };
        var DEVICEID = "7cdc1681-effa-4868-8472-183c90ec74b3";
        var TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJlS1ZZVFV5dWNQcHg0OU1WSGhHb2RfR2wyV3YtNEFibEV2SXlWQTBiWDdvIn0.eyJqdGkiOiIyNTViMGQ2OC03ZjkyLTQ5ZWQtODBiOC1iMjhjNTgxN2RmNjAiLCJleHAiOjE1MDU4NTAzNDgsIm5iZiI6MCwiaWF0IjoxNTA1ODUwMDQ4LCJpc3MiOiJodHRwczovL2lkLmRldi51YmlyY2guY29tL2F1dGgvcmVhbG1zL3ViaXJjaCIsImF1ZCI6InViaXJjaC1hZG1pbi11aS1kZW1vIiwic3ViIjoiYzExOWE4ZDgtNjNmMC00ZTYzLWExN2YtYzU0NzhkNDdjYzhmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidWJpcmNoLWFkbWluLXVpLWRlbW8iLCJhdXRoX3RpbWUiOjE1MDU4NTAwNDcsInNlc3Npb25fc3RhdGUiOiI5ZmEwYjgwNy0wNTY2LTRmYzgtYmU3ZC1lMjMzNzQzNGI5MDMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vdWJpcmNoLmRlbW8udWJpcmNoLmNvbSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJuYW1lIjoiSG9yYXRpdSBFdWdlbiBWbGFkIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaHZsYWQiLCJnaXZlbl9uYW1lIjoiSG9yYXRpdSBFdWdlbiIsImZhbWlseV9uYW1lIjoiVmxhZCIsImVtYWlsIjoiaG9yYXRpdXZsYWRAeWFob28uY29tIn0.HsqVDF3VgY0w2DOl-xojcat4rwaf4c2qBB4liEuK3BLSW7o2Yr4prMnV7-OR4eR1VhqnOOise7ZmcwJWbYjgi5uN_XE3q_eveDhjweM71x5LxFH7vk8WJjYIy7keEOjOdFNQ0Gu--YtSUWxuy49mnFUKiIUnTnngMHE5DA2bgoodLf59LxCyrAeFEtseRrZNO1dfW92N7e84wS6Wi7QITnbcn8pLLBUeYAjODu2JKCxwdU1vL2xL3u6YH91yFpswI3nTkcAGfn2DHYh985oXalTq_Z-Z1QxwjzSTjS4XzrB48HJBhkN6OgJgXcbQ5fQO5seoizq2fL_kBYHXmWgvYQ";
        var HOST = "https://api.ubirch.demo.ubirch.com";
        var url = HOST + "/api/avatarService/v1/device/" + DEVICEID + "/data/history/0/1";
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(2000)
            .switchMap(function () { return http.get(url); }).map(function (data) { return data.json(); })
            .subscribe(function (data) {
            console.log("Found state:" + data[0].deviceMessage.state);
            if ("standby" == data[0].deviceMessage.state) {
                _this.bikeState = _this.BIKESTATE_AVAILABLE;
            }
            else if ("unlocked" == data[0].deviceMessage.state) {
                _this.bikeState = _this.BIKESTATE_UNLOCKED;
            }
            else if ("locked" == data[0].deviceMessage.state) {
                _this.bikeState = _this.BIKESTATE_LOCKED_NOTIFICATION;
            }
        });
        this.bikeState = this.bikeStatusService.getDefault();
    }
    BikeStatus.prototype.changeState = function (event, item) {
        /*if (this.bikeState == this.BIKESTATE_AVAILABLE){
          this.bikeState=this.BIKESTATE_UNLOCKED;
        }
        else if (this.bikeState == this.BIKESTATE_UNLOCKED){
          this.bikeState=this.BIKESTATE_LOCKED_NOTIFICATION;
        }
        else
    */
        if (this.bikeState == this.BIKESTATE_LOCKED_NOTIFICATION) {
            this.bikeState = this.BIKESTATE_LOCKED;
        }
        if (this.bikeState == this.BIKESTATE_UNLOCKED_NOTIFICATION) {
            this.bikeState = this.BIKESTATE_AVAILABLE;
        }
        else if (this.bikeState == this.BIKESTATE_LOCKED) {
            this.bikeState = this.BIKESTATE_UNLOCKED_NOTIFICATION;
        }
        else {
            this.bikeState = this.BIKESTATE_AVAILABLE;
        }
    };
    BikeStatus.prototype.getDefault = function () {
        return this.BIKESTATE_AVAILABLE;
    };
    return BikeStatus;
}());
BikeStatus = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'bikeStatus',
        template: template,
        styles: [styles]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__bike_status_service__["a" /* BikeStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__bike_status_service__["a" /* BikeStatusService */]) === "function" && _c || Object])
], BikeStatus);

var _a, _b, _c;
//# sourceMappingURL=bikeStatus.js.map

/***/ }),

/***/ "../../../../../src/app/findSpot/findSpot.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n  display: block;\n  margin: auto;\n}\n\n\n.small-map {\n  width:80%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/findSpot/findSpot.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n    <div class=\"col-12\"><h2>Find your free parking spot</h2></div>\n</div>\n<div class=\"row hidden-xs\">\n    <div class=\"col-12\">\n      <a [routerLink]=\"['/bikeStatus']\">\n        <img src=\"assets/img/MAPBONN.png\" class=\"center\"/>\n      </a>\n    </div>\n</div>\n\n<div class=\"row visible-xs\">\n    <div class=\"col-12\">\n      <a [routerLink]=\"['/bikeStatus']\">\n        <img src=\"assets/img/MAPBONN.png\" class=\"center small-map\"/>\n      </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/findSpot/findSpot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindSpot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var styles = __webpack_require__("../../../../../src/app/findSpot/findSpot.css");
var template = __webpack_require__("../../../../../src/app/findSpot/findSpot.html");
var FindSpot = (function () {
    function FindSpot(router, http) {
        this.router = router;
        this.http = http;
    }
    return FindSpot;
}());
FindSpot = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'findSpot',
        template: template,
        styles: [styles]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object])
], FindSpot);

var _a, _b;
//# sourceMappingURL=findSpot.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.brand {\n    vertical-align: middle;\n    display: block;\n    display: block;\n    margin: auto;\n}\n\nimg.brand-small {\n    vertical-align: middle;\n    display: block;\n    margin: auto;\n    width: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row hidden-sm hidden-xs\">\n  <div class=\"col-sm-12 col-md-4 col-md-offset-3\"><img src=\"assets/img/logo.png\" class=\"brand\"/></div>\n</div>\n<div class=\"row visible-sm visible-xs\">\n  <div class=\"col-sm-12\"><img src=\"assets/img/logo.png\" class=\"brand-small\"></div>\n</div>\n<div>\n  <h1>Login</h1>\n</div>\n<div>\n  <form role=\"form\" (submit)=\"login($event, username.value, password.value)\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var styles = __webpack_require__("../../../../../src/app/login/login.css");
var template = __webpack_require__("../../../../../src/app/login/login.html");
var Login = (function () {
    function Login(router, http) {
        this.router = router;
        this.http = http;
    }
    Login.prototype.login = function (event, username, password) {
        this.router.navigate(['findSpot']);
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: template,
        styles: [styles]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
], Login);

var _a, _b;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map