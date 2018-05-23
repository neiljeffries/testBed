(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-material/app-material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-material/app-material.module.ts ***!
  \*****************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_frog_dashboard_frog_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/frog-dashboard/frog-dashboard.component */ "./src/app/frog-dashboard/frog-dashboard.component.ts");
/* harmony import */ var app_crewmembers_crewmembers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/crewmembers/crewmembers.component */ "./src/app/crewmembers/crewmembers.component.ts");
/* harmony import */ var app_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var app_hubx_dashboard_hubx_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/hubx-dashboard/hubx-dashboard.component */ "./src/app/hubx-dashboard/hubx-dashboard.component.ts");
/* harmony import */ var app_flights_table_flights_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/flights-table/flights-table.component */ "./src/app/flights-table/flights-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'frogs', component: app_frog_dashboard_frog_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["FrogDashboardComponent"] },
    { path: 'crew', component: app_crewmembers_crewmembers_component__WEBPACK_IMPORTED_MODULE_3__["CrewmembersComponent"] },
    { path: '', redirectTo: '/flights', pathMatch: 'full' },
    { path: 'profile', component: app_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'datatable', component: app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__["DataTableComponent"] },
    { path: 'hubx', component: app_hubx_dashboard_hubx_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["HubxDashboardComponent"] },
    { path: 'flights', component: app_flights_table_flights_table_component__WEBPACK_IMPORTED_MODULE_7__["FlightsTableComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenavContainer\">\n\n    <mat-sidenav #sidenav [mode]=\"'push'\">\n        <div style=\"width:320px\">\n            <p style=\"float:right\"><button mat-button (click)=\"sidenav.toggle()\" style=\"height:46px\"><i class=\"material-icons\">menu</i></button></p>\n            <app-left-slideout></app-left-slideout>\n        </div>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <app-navbar (notifyParent)=\"getNotification($event)\"></app-navbar>\n        <router-outlet></router-outlet>\n        <div style=\"margin-bottom:50px\">\n            <!-- bottom space -->\n        </div>\n        <mat-toolbar class=\"footer1\">\n\n            <span>Copyright &copy; 2018  United Parcel Service of America, Inc. All rights reserved</span>\n\n        </mat-toolbar>\n    </mat-sidenav-content>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'testBed1';
    }
    AppComponent.prototype.handleUserUpdated = function (user) {
        // Handle the event
        console.log('boom');
    };
    AppComponent.prototype.getNotification = function (evt) {
        this.sidenav.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _crewmembers_crewmembers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crewmembers/crewmembers.component */ "./src/app/crewmembers/crewmembers.component.ts");
/* harmony import */ var _crewmembers_crewmembers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crewmembers/crewmembers.service */ "./src/app/crewmembers/crewmembers.service.ts");
/* harmony import */ var _crewmember_search_crewmember_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crewmember-search/crewmember-search.component */ "./src/app/crewmember-search/crewmember-search.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _event_emitter_test_event_emitter_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event-emitter-test/event-emitter-test.component */ "./src/app/event-emitter-test/event-emitter-test.component.ts");
/* harmony import */ var _frog_dashboard_frog_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./frog-dashboard/frog-dashboard.component */ "./src/app/frog-dashboard/frog-dashboard.component.ts");
/* harmony import */ var app_frogs_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/frogs.service */ "./src/app/frogs.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _hubx_dashboard_hubx_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hubx-dashboard/hubx-dashboard.component */ "./src/app/hubx-dashboard/hubx-dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var app_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _flights_table_flights_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./flights-table/flights-table.component */ "./src/app/flights-table/flights-table.component.ts");
/* harmony import */ var app_flights_table_flights_table_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/flights-table/flights-table.service */ "./src/app/flights-table/flights-table.service.ts");
/* harmony import */ var _left_slideout_left_slideout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./left-slideout/left-slideout.component */ "./src/app/left-slideout/left-slideout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { HttpModule } from '@angular/http';





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _crewmembers_crewmembers_component__WEBPACK_IMPORTED_MODULE_7__["CrewmembersComponent"],
                _crewmember_search_crewmember_search_component__WEBPACK_IMPORTED_MODULE_9__["CrewmemberSearchComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _event_emitter_test_event_emitter_test_component__WEBPACK_IMPORTED_MODULE_11__["Zippy"],
                _frog_dashboard_frog_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["FrogDashboardComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_15__["DataTableComponent"],
                _hubx_dashboard_hubx_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["HubxDashboardComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DialogComponent"],
                _flights_table_flights_table_component__WEBPACK_IMPORTED_MODULE_21__["FlightsTableComponent"],
                _left_slideout_left_slideout_component__WEBPACK_IMPORTED_MODULE_23__["LeftSlideoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                //HttpModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["NgxDatatableModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                app_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_19__["AppMaterialModule"]
            ],
            entryComponents: [
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DialogComponent"]
            ],
            providers: [_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], _crewmembers_crewmembers_service__WEBPACK_IMPORTED_MODULE_8__["CrewmembersService"], app_frogs_service__WEBPACK_IMPORTED_MODULE_13__["FrogsService"], app_flights_table_flights_table_service__WEBPACK_IMPORTED_MODULE_22__["FlightsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/crewmember-search/crewmember-search.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/crewmember-search/crewmember-search.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/crewmember-search/crewmember-search.component.html":
/*!********************************************************************!*\
  !*** ./src/app/crewmember-search/crewmember-search.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<label>Search</label>\n<input (input)=\"searchCrewmembers($event)\" #searchCrewmembers id=\"searchCrewmembers\">\n</div>"

/***/ }),

/***/ "./src/app/crewmember-search/crewmember-search.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/crewmember-search/crewmember-search.component.ts ***!
  \******************************************************************/
/*! exports provided: CrewmemberSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewmemberSearchComponent", function() { return CrewmemberSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrewmemberSearchComponent = /** @class */ (function () {
    function CrewmemberSearchComponent() {
    }
    CrewmemberSearchComponent.prototype.searchCrewmembers = function (event) {
        //console.log(event)
    };
    CrewmemberSearchComponent.prototype.ngOnInit = function () {
    };
    CrewmemberSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crewmember-search',
            template: __webpack_require__(/*! ./crewmember-search.component.html */ "./src/app/crewmember-search/crewmember-search.component.html"),
            styles: [__webpack_require__(/*! ./crewmember-search.component.css */ "./src/app/crewmember-search/crewmember-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CrewmemberSearchComponent);
    return CrewmemberSearchComponent;
}());



/***/ }),

/***/ "./src/app/crewmembers/crewmembers.component.css":
/*!*******************************************************!*\
  !*** ./src/app/crewmembers/crewmembers.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*table {\n        width: 787px;\n    }\nthead, tbody, tr, td, th { display: block; }\ntr:after {\n    content: ' ';\n    display: block;\n    visibility: hidden;\n    clear: both;\n}\nthead th {\n    height: 40px;\n}\ntbody {\n    height: 400px;\n    overflow-y: auto;\n}\ntbody td, thead th {\n\n    float: left;\n}\ntbody td {\n\n}\n\n.c1{width:50px;}\n.c2{width:100px;}\n.c3{width:100px;}\n.c4{width:216px;}\n.c5{width:150px;}\n.c6{width:80px;}\n.c7{width:74px;}*/"

/***/ }),

/***/ "./src/app/crewmembers/crewmembers.component.html":
/*!********************************************************!*\
  !*** ./src/app/crewmembers/crewmembers.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Crewmembers</div>\n    <div class=\"panel-body\">\n\n      <div class=\"container-fluid\">\n\n        <div class=\"row\" style=\"margin-bottom:10px;\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-default\" (click)=\"loadCrewmembers()\">Load Crewmembers</button>\n          </div>\n        </div>\n      \n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n<div *ngIf=\"crewmembers; else elseBlock\">\n<!--<label>JSON</label>\n{{crewmembers | json}}-->\n\n<!--<table class=\"table table-striped\" style=\"width:787px;\">-->\n  <table class=\"table table-striped\" style=\"width:100%;\">\n  <thead>\n    <tr>\n    <th class=\"c1\">ID</th>\n    <th class=\"c2\">Fname</th>\n    <th class=\"c3\">Lname</th>\n    <th class=\"c4\">Email</th>\n    <th class=\"c5\">Phone</th>\n    <th class=\"c6\">Gemsid</th>\n    <th class=\"c7\">Slide</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let crewmember of crewmembers\">\n      <td class=\"c1\">{{crewmember.id}}</td>\n      <td class=\"c2\">{{crewmember.first_name}}</td>\n      <td class=\"c3\">{{crewmember.last_name}}</td>\n      <td class=\"c4\">{{crewmember.email}}</td>\n      <td class=\"c5\">{{crewmember.phone}}</td>\n      <td class=\"c6\">{{crewmember.gemsid}}</td>\n      <td class=\"c7\">{{crewmember.sliderequested}}</td>\n    </tr>\n  </tbody>\n</table>\n    <div class=\"form-group\">\n      <label for=\"comment\"><button (click)=\"toggleId()\" class=\"btn btn-default\">JSON</button></label>\n      <textarea *ngIf=\"showId\" class=\"form-control\" rows=\"5\" id=\"comment\">{{ crewmembers | json }}<</textarea>\n    </div>  \n</div>\n<ng-template #elseBlock>Click to test the crewmember service.</ng-template>\n  </div>\n</div>\n</div>\n\n \n\n     </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/crewmembers/crewmembers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/crewmembers/crewmembers.component.ts ***!
  \******************************************************/
/*! exports provided: CrewmembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewmembersComponent", function() { return CrewmembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _crewmembers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crewmembers.service */ "./src/app/crewmembers/crewmembers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrewmembersComponent = /** @class */ (function () {
    function CrewmembersComponent(crewmembersService) {
        this.crewmembersService = crewmembersService;
        this.showId = false;
    }
    CrewmembersComponent.prototype.loadCrewmembers = function () {
        var _this = this;
        this.crewmembersService.getCrewmembers()
            .subscribe(function (crewmembers) {
            _this.crewmembers = crewmembers;
            console.log('this.crewmembers=' + _this.crewmembers);
            console.log('this.crewmembers.length=' + _this.crewmembers.length);
            console.log('this.usercrewmembers[0].first_name=' + _this.crewmembers[0].first_name);
        }, //Bind to view
        function (//Bind to view
        err) {
            console.log(err);
        });
    };
    CrewmembersComponent.prototype.toggleId = function () {
        this.showId = !this.showId;
    };
    CrewmembersComponent.prototype.ngOnInit = function () {
    };
    CrewmembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crewmembers',
            template: __webpack_require__(/*! ./crewmembers.component.html */ "./src/app/crewmembers/crewmembers.component.html"),
            styles: [__webpack_require__(/*! ./crewmembers.component.css */ "./src/app/crewmembers/crewmembers.component.css")]
        }),
        __metadata("design:paramtypes", [_crewmembers_service__WEBPACK_IMPORTED_MODULE_1__["CrewmembersService"]])
    ], CrewmembersComponent);
    return CrewmembersComponent;
}());



/***/ }),

/***/ "./src/app/crewmembers/crewmembers.service.ts":
/*!****************************************************!*\
  !*** ./src/app/crewmembers/crewmembers.service.ts ***!
  \****************************************************/
/*! exports provided: CrewmembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewmembersService", function() { return CrewmembersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Observable } from 'rxjs/Observable';

//import { map, filter, scan } from 'rxjs/operators';
var CrewmembersService = /** @class */ (function () {
    function CrewmembersService(http) {
        this.http = http;
        this.crewmembersUrl = '../assets/MOCK_DATA.json';
    }
    CrewmembersService.prototype.getCrewmembers = function () {
        return this.http.get(this.crewmembersUrl)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error.json().error || 'Server error'); });
    };
    CrewmembersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CrewmembersService);
    return CrewmembersService;
}());



/***/ }),

/***/ "./src/app/data-table/data-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div>\n<ngx-datatable\n        class=\"bootstrap\"\n        [rows]=\"rows\"\n        [loadingIndicator]=\"loadingIndicator\"\n        [columns]=\"columns\"\n        [columnMode]=\"'force'\"\n        [headerHeight]=\"40\"\n        [footerHeight]=\"40\"\n        [limit]=\"10\"\n        [rowHeight]=\"'auto'\"\n        [reorderable]=\"reorderable\">\n      </ngx-datatable>\n    </div>"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        var _this = this;
        this.emittedData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { name: 'Name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
            _this.emittedData.emit(data);
            console.log('GOOD - emitting data now!');
            console.log(data);
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
    }
    DataTableComponent.prototype.ngOnInit = function () {
    };
    DataTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DataTableComponent.prototype, "emittedData", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/data-table/data-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{dialogId}}\n\n<div [hidden]=\"dialogId != 'favoriteAnimal'\">\n\n    <h1>hello! {{data.name}}</h1>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Favorite animal\" [(ngModel)]=\"data.animal\">\n    </mat-form-field>\n\n    <mat-dialog-actions>\n        <button mat-raised-button mat-dialog-close>Cancel</button>\n        <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n        <button mat-raised-button [mat-dialog-close]=\"data\">Save</button>\n    </mat-dialog-actions>\n\n</div>\n\n\n<div [hidden]=\"dialogId != 'test1'\">\n\n    <h1>test1</h1>\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogId = this.dialogRef.id.toString();
    }
    DialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        console.log(this.dialogRef.id);
        this.dialogRef.afterOpen().subscribe(function () {
            console.log('after open fired');
        });
        this.dialogRef.afterClosed().subscribe(function () {
            console.log('after closed fired');
        });
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/event-emitter-test/event-emitter-test.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/event-emitter-test/event-emitter-test.component.ts ***!
  \********************************************************************/
/*! exports provided: Zippy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zippy", function() { return Zippy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Zippy = /** @class */ (function () {
    function Zippy() {
        this.visible = true;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Zippy.prototype.toggle = function () {
        this.visible = !this.visible;
        if (this.visible) {
            this.open.emit(null);
            console.log(1);
        }
        else {
            this.close.emit(null);
            console.log(2);
        }
    };
    Zippy.prototype.handleUserUpdated = function (user) {
        // Handle the event
        console.log("boom");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Zippy.prototype, "open", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Zippy.prototype, "close", void 0);
    Zippy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'zippy',
            template: "\n  <div class=\"zippy\">\n    <button class=\"btn btn-default\" (click)=\"toggle()\">Toggle</button>\n    <div [hidden]=\"!visible\">\n      <ng-content></ng-content>\n    </div>\n </div>"
        })
    ], Zippy);
    return Zippy;
}());



/***/ }),

/***/ "./src/app/flights-table/flights-table.component.css":
/*!***********************************************************!*\
  !*** ./src/app/flights-table/flights-table.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * angular2-data-table v\"11.2.0\" (https://github.com/swimlane/angular2-data-table)\n * Copyright 2016\n * Licensed under MIT\n */\n\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n    background-color: whitesmoke !important;\n    color: #000 !important;\n}\n\n.ngx-datatable.material.single-selection .datatable-body-row.active,\n.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group,\n.ngx-datatable.material.multi-selection .datatable-body-row.active,\n.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group,\n.ngx-datatable.material.multi-click-selection .datatable-body-row.active,\n.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n    background-color: whitesmoke !important;\n    color: #000 !important;\n}\n\n.ngx-datatable {\n    display: block;\n    overflow: hidden;\n    justify-content: center;\n    position: relative;\n    -webkit-transform: translate3d(0, 0, 0);\n    /**\n   * Vertical Scrolling Adjustments\n   */\n    /**\n   * Horizontal Scrolling Adjustments\n   */\n    /**\n   * Fixed Header Height Adjustments\n   */\n    /**\n   * Fixed row height adjustments\n   */\n    /**\n   * Shared Styles\n   */\n    /**\n   * Header Styles\n   */\n    /**\n   * Body Styles\n   */\n    /**\n   * Footer Styles\n   */\n}\n\n.ngx-datatable [hidden] {\n    display: none !important;\n}\n\n.ngx-datatable *,\n.ngx-datatable *:before,\n.ngx-datatable *:after {\n    box-sizing: border-box;\n}\n\n.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto;\n}\n\n.ngx-datatable.scroll-vertical .datatable-body .datatable-row-wrapper {\n    position: absolute;\n}\n\n.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap;\n}\n\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap;\n}\n\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n    white-space: nowrap;\n}\n\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.ngx-datatable .datatable-body-row,\n.ngx-datatable .datatable-row-center,\n.ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row;\n}\n\n.ngx-datatable .datatable-body-cell,\n.ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625;\n}\n\n.ngx-datatable .datatable-body-cell:focus,\n.ngx-datatable .datatable-header-cell:focus {\n    outline: none;\n}\n\n.ngx-datatable .datatable-row-left,\n.ngx-datatable .datatable-row-right {\n    z-index: 9;\n}\n\n.ngx-datatable .datatable-row-left,\n.ngx-datatable .datatable-row-center,\n.ngx-datatable .datatable-row-group,\n.ngx-datatable .datatable-row-right {\n    position: relative;\n}\n\n.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden;\n}\n\n.ngx-datatable .datatable-header .datatable-header-inner {\n    align-items: stretch;\n    -webkit-align-items: stretch;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell {\n    position: relative;\n    display: inline-block;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n    cursor: pointer;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n    cursor: move;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n    line-height: 100%;\n    vertical-align: middle;\n    display: inline-block;\n    cursor: pointer;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 5px;\n    padding: 0 4px;\n    visibility: hidden;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n    cursor: ew-resize;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n    visibility: visible;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n    visibility: visible;\n}\n\n.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n    height: inherit;\n}\n\n.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block;\n}\n\n.ngx-datatable .datatable-body .datatable-scroll {\n    display: inline-block;\n}\n\n.ngx-datatable .datatable-body .datatable-row-detail {\n    overflow-y: hidden;\n}\n\n.ngx-datatable .datatable-body .datatable-row-wrapper {\n    display: flex;\n    flex-direction: column;\n}\n\n.ngx-datatable .datatable-body .datatable-body-row {\n    outline: none;\n    cursor: pointer;\n}\n\n.ngx-datatable .datatable-body .datatable-body-row>div {\n    display: flex;\n}\n\n.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n}\n\n.ngx-datatable .datatable-footer .datatable-footer-inner {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.ngx-datatable .datatable-footer .selected-count .page-count {\n    flex: 1 1 40%;\n}\n\n.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n    flex: 1 1 60%;\n}\n\n.ngx-datatable .datatable-footer .page-count {\n    flex: 1 1 20%;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager {\n    flex: 1 1 80%;\n    text-align: right;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager .pager,\n.ngx-datatable .datatable-footer .datatable-pager .pager li {\n    padding: 0;\n    margin: 0;\n    display: inline-block;\n    list-style: none;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager .pager li,\n.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n    outline: none;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n    cursor: pointer;\n    display: inline-block;\n}\n\n.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n    cursor: not-allowed;\n}\n\n/*# sourceMappingURL=index.map*/\n\n.ngx-datatable,\n.info {\n    text-align: left;\n    width: 75%;\n    margin: 0 auto;\n}\n\n.ngx-datatable .info {\n    box-sizing: border-box;\n    padding: 0 1em;\n    border: solid 1px #ccc;\n    background: white;\n    font-size: .8em;\n    margin-bottom: 1em;\n}\n\n.ngx-datatable.scroll-vertical {\n    height: 70vh;\n}\n\n.ngx-datatable .selected-column {\n    background: #FFF;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);\n}\n\n.ngx-datatable .group {\n    position: relative;\n    margin-bottom: 45px;\n}\n\n.ngx-datatable input[type=text] {\n    font-size: 14px;\n    display: block;\n    background: transparent;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #5264AE;\n}\n\n.ngx-datatable textarea {\n    font-size: 14px;\n    font-family: sans-serif;\n    display: block;\n    background: transparent;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #5264AE;\n    resize: vertical;\n}\n\n.ngx-datatable input:focus {\n    outline: none;\n}\n\n.ngx-datatable a {\n    color: grey;\n    text-decoration: none;\n}\n\n.ngx-datatable .expander-btn {\n    margin-top: 8px;\n    display: block;\n}\n\n.ngx-datatable h3 {\n    background: #1f89ff;\n    margin: 0 0 30px 0;\n    color: #FFF;\n    text-align: left;\n    padding: 10px;\n    overflow: hidden;\n    height: 32px;\n}\n\n.ngx-datatable h3 a {\n    color: #ccc;\n}\n\n.ngx-datatable h3 small {\n    margin-left: 10px;\n    font-size: .8rem;\n}\n\n.ngx-datatable .fullscreen {\n    position: absolute !important;\n    height: auto !important;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n.ngx-datatable .selection-cell .datatable-body-cell.active {\n    background: #0829e0 !important;\n    color: #FFF !important;\n}\n\n.ngx-datatable .selected-column {\n    float: right;\n    width: 20%;\n    margin-right: 20px;\n    text-align: left;\n}\n\n.ngx-datatable .selected-column h4 {\n    text-align: center;\n    margin: 10px 0 0 0;\n    padding: 0;\n}\n\n.ngx-datatable ul,\n.ngx-datatable li {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n\n.ngx-datatable ul {\n    margin: 10px;\n}\n\n.ngx-datatable li {\n    padding: 3px 5px;\n}\n\n.ngx-datatable nav {\n    background: #FFF;\n    z-index: 99;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 200px;\n    position: absolute;\n    min-height: 1900px;\n    font-size: 14px;\n    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, .2), 0 13px 19px 2px rgba(0, 0, 0, .14), 0 5px 24px 4px rgba(0, 0, 0, .12);\n}\n\n.ngx-datatable nav ul {\n    margin: 0 8px !important;\n}\n\n.ngx-datatable nav li {\n    padding: 0;\n}\n\n.ngx-datatable nav h3 {\n    font-size: 14px;\n    margin: 0 0 10px 0;\n}\n\n.ngx-datatable nav h4 {\n    margin: 7px 0 0 0;\n}\n\n.ngx-datatable nav h4 a {\n    color: #000;\n}\n\n.ngx-datatable content {\n    margin-left: 200px;\n    min-height: 100vh;\n    display: block;\n    position: relative;\n    padding-bottom: 20px;\n}\n\n.ngx-datatable content h3 {\n    padding-left: 35px;\n}\n\n.ngx-datatable .main-ul {\n    margin-left: 15px !important;\n    display: block;\n}\n\n.ngx-datatable .github-button-wrap {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.ngx-datatable nav h3 small {\n    font-size: .7rem;\n    display: inline-block;\n    margin-left: 0;\n}\n\n.ngx-datatable select {\n    width: 100%;\n    height: 30px;\n    margin: 5px 0;\n}\n\n.ngx-datatable .age-is-ten {\n    background: #ffc91f;\n}\n\n.ngx-datatable .is-gender {\n    background: blue;\n    color: white;\n}\n\n.ngx-datatable .is-female {\n    background: pink;\n}\n\n.ngx-datatable .dark {\n    background: #181B24;\n}\n\n.ngx-datatable .dark nav {\n    background: #232837;\n}\n\n.ngx-datatable .dark nav a {\n    color: #fff;\n}\n\n.ngx-datatable .dark nav h4 {\n    color: #72809b;\n}\n\n.ngx-datatable .expectedpayment+label:before {\n    border: 1px solid #7f83a2;\n    content: \"\\00a0\";\n    display: inline-block;\n    font: 16px/1em sans-serif;\n    height: 16px;\n    margin: 0 .25em 0 0;\n    padding: 0;\n    vertical-align: top;\n    width: 16px;\n}\n\n.ngx-datatable .expectedpayment2+label:before {\n    border: 1px solid #7f83a2;\n    content: \"\\00a0\";\n    display: inline-block;\n    font: 16px/1em sans-serif;\n    height: 16px;\n    margin: 0 .25em 0 0;\n    padding: 0;\n    vertical-align: top;\n    width: 16px;\n}\n\n.ngx-datatable .expectedpayment3+label:before {\n    border: 1px solid #7f83a2;\n    content: \"\\00a0\";\n    display: inline-block;\n    font: 16px/1em sans-serif;\n    height: 16px;\n    margin: 0 .25em 0 0;\n    padding: 0;\n    vertical-align: top;\n    width: 16px;\n}\n\n.ngx-datatable .expectedpayment:checked+label:before {\n    color: #EEE;\n    content: \"\\2713\";\n    text-align: center;\n    font-weight: bold;\n    background-color: #66bb6a;\n}\n\n.ngx-datatable .expectedpayment2:checked+label:before {\n    color: #EEE;\n    content: \"\\2716\";\n    text-align: center;\n    font-weight: bold;\n    background-color: #ff1744;\n}\n\n.ngx-datatable .expectedpayment3:checked+label:before {\n    color: #EEE;\n    content: \"\\003F\";\n    text-align: center;\n    font-weight: bold;\n    background-color: #ffeb3b;\n}"

/***/ }),

/***/ "./src/app/flights-table/flights-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/flights-table/flights-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"padding:0;margin:auto; text-align:center; width:400px; background-color:papayawhip;\" *ngIf=\"showAlert\" [@flyInOut]>\n\n\n    <!-- <button mat-button (click)=\"flightsTable.rowDetail.expandAllRows()\">Expand All</button>\n            <button mat-button (click)=\"flightsTable.rowDetail.collapseAllRows()\">Collapse All</button> -->\n    <!-- <button mat-mini-fab mat-button color=\"primary\" (click)=\"rowLimit = 15\">+Row</button> -->\n\n    <section>\n        Alert Message about flight delay!\n    </section>\n\n\n</mat-card>\n\n<div style=\"padding-bottom: 0px;\">\n\n\n    <div style=\"margin:auto; height:45px; margin-right: 30px;\">\n        <!-- <button mat-mini-fab color=\"primary\" (click)=\"toggleTableOptions()\"><mat-icon aria-label=\"\">settings</mat-icon></button> -->\n        <!-- <input type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...' (keyup)='updateFilter($event)' /> -->\n        <!-- <button mat-raised-button (click)=\"openBottomSheet()\">Open Bottom</button> -->\n\n\n\n        <div style=\"float:right; margin:0; margin-left: 30px;\" matTooltip=\"Options\">\n            <button mat-icon-button color=\"primary\" (click)=\"toggleTableOptions()\">\n                <mat-icon>settings</mat-icon>\n            </button>\n        </div>\n\n\n        <div style=\"padding:0; margin:0; float:right; height: 45px;\" *ngIf=\"showTableOptions\" [@flyInOut]>\n            <div>\n\n                <!-- <button mat-button (click)=\"flightsTable.rowDetail.expandAllRows()\">Expand All</button>\n            <button mat-button (click)=\"flightsTable.rowDetail.collapseAllRows()\">Collapse All</button> -->\n                <!-- <button mat-mini-fab mat-button color=\"primary\" (click)=\"rowLimit = 15\">+Row</button> -->\n\n                <section class=\"example-section\">\n                    <mat-form-field class=\"example-form-field\" style=\"margin-right:18px; width: 260px;\">\n                        <input matInput type=\"text\" placeholder=\"Search: Flight | Gateway\" #searchInput maxlength=\"256\" [(ngModel)]=\"filterInputValue\" (keyup)='updateFilter($event)' />\n                        <button mat-button *ngIf=\"filterInputValue\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"filterInputValue=''; updateFilter(null)\">\n                        <mat-icon>close</mat-icon>\n                    </button>\n                        <!-- <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint> -->\n                        <!-- <mat-hint align=\"end\">{{searchInput.value.length}} / 256</mat-hint> -->\n                    </mat-form-field>\n\n                    <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"showIndex\">Index</mat-checkbox>\n                    <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"showExpanded\">Expanded</mat-checkbox>\n                    <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"showName\">Name</mat-checkbox>\n                    <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"showGender\">Gender</mat-checkbox>\n                    <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"showAge\">Age</mat-checkbox>\n                    <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"showLoad\">Load</mat-checkbox>\n                    <button mat-button (click)=\"toggleRows()\">{{expandCollapseRowsText}} Rows</button>\n                </section>\n            </div>\n        </div>\n\n    </div>\n\n    <!-- <mat-tab-group>\n        <mat-tab label=\"Inbound Flights\"> -->\n\n\n\n    <ngx-datatable style=\"margin-bottom:25px\" #flightsTable class='material fullscreen' style=\"top: 2px; width:100%; \" [columnMode]=\"'force'\" [limit]=\"rowLimit\" [footerHeight]=\"40\" [headerHeight]=\"40\" [rowHeight]=\"40\" [rows]='flights' [selectionType]=\"'single'\"\n        (select)='onSelect($event)' (page)=\"onPage($event)\">\n\n        <!-- <ngx-datatable #flightsTable class=\"material fullscreen\" style=\"top: 52px; width:100%;\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"flights\" [selectionType]=\"'single'\"\n        (select)='onSelect($event)'> -->\n\n        <!-- Detail Row Template -->\n        <ngx-datatable-row-detail [rowHeight]=\"100\">\n            <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\n                <div style=\"margin:auto; text-align:center;\">\n                    <div><strong>Address</strong></div>\n                    <div>{{row.address.city}}, {{row.address.state}}</div>\n                    <button mat-raised-button (click)=\"openDialog('favoriteAnimal')\">View</button>\n                </div>\n\n            </ng-template>\n        </ngx-datatable-row-detail>\n\n        <!-- Arrow Column  -->\n        <ngx-datatable-column [width]=\"50\" [resizeable]=\"false\" [sortable]=\"false\" [draggable]=\"false\" [canAutoResize]=\"false\">\n            <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n                <span [class.datatable-icon-right]=\"!expanded\" [class.datatable-icon-down]=\"expanded\" title=\"Expand/Collapse Row\"></span>\n            </ng-template>\n        </ngx-datatable-column>\n\n        <!-- Index Column  -->\n        <ngx-datatable-column name=\"Index\" [width]=\"70\" [sortable]=\"false\" *ngIf=\"showIndex == true\">\n            <ng-template let-rowIndex=\"rowIndex\" let-row=\"row\" ngx-datatable-cell-template>\n                <strong>{{rowIndex}}</strong>\n            </ng-template>\n        </ngx-datatable-column>\n\n        <!-- Expanded Status Column  -->\n        <ngx-datatable-column name=\"Expanded\" [width]=\"70\" [sortable]=\"false\" *ngIf=\"showExpanded == true\">\n            <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n                <strong>{{expanded}}</strong>\n            </ng-template>\n        </ngx-datatable-column>\n\n        <!-- Name Column  -->\n        <ngx-datatable-column name=\"Name\" [width]=\"180\" *ngIf=\"showName == true\">\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                <strong>{{value}}</strong>\n            </ng-template>\n        </ngx-datatable-column>\n\n        <!-- Gender Column  -->\n        <ngx-datatable-column name=\"Gender\" [width]=\"225\" *ngIf=\"showGender == true\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <i [innerHTML]=\"row['name']\"></i> and <i>{{value}}</i>\n            </ng-template>\n        </ngx-datatable-column>\n\n        <!-- Age Column  -->\n        <ngx-datatable-column name=\"Age\" *ngIf=\"showAge == true\"></ngx-datatable-column>\n\n        <!-- loading progress -->\n        <ngx-datatable-column name=\"Load%\" [prop]=\"'age'\" *ngIf=\"showLoad == true\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <div>{{value}}%</div>\n\n                <mat-progress-bar class=\"example-margin\" [color]=\"'primary'\" [mode]=\"'determinate'\" [value]=\"value\" [bufferValue]=\"75\">\n\n                </mat-progress-bar>\n\n            </ng-template>\n\n        </ngx-datatable-column>\n\n    </ngx-datatable>\n\n    <!-- </mat-tab>\n        <mat-tab label=\"Outbound Flights\">Content 2</mat-tab>\n    </mat-tab-group> -->\n\n</div>\n\n\n<div class=\"myProgressSpinner\" *ngIf=\"flights === null\">\n    <mat-progress-spinner [color]=\"progressSpinnerColor\" [mode]=\"progressSpinnerMode\" [value]=\"progressSpinnerValue\">\n    </mat-progress-spinner>\n</div>"

/***/ }),

/***/ "./src/app/flights-table/flights-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/flights-table/flights-table.component.ts ***!
  \**********************************************************/
/*! exports provided: FlightsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsTableComponent", function() { return FlightsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var app_flights_table_flights_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/flights-table/flights-table.service */ "./src/app/flights-table/flights-table.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
1. Install ngx-datatable: "npm i @swimlane/ngx-datatable --save"
2. Declare DataTableDetailComponent in your app.module!
3. Add DataTableDetailService to providers in your app.module!
*/




//import { MatTabsModule } from 'app/app-material/app-material.module'

//import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// animations: [
//   trigger('shrinkOut', [
//     state('in', style({height: '*'})),
//     transition('* => void', [
//       style({height: '*'}),
//       animate(250, style({height: 0}))
//     ])
//   ])
// ]
var FlightsTableComponent = /** @class */ (function () {
    function FlightsTableComponent(
    // private bottomSheet: MatBottomSheet,
    flightsService, dialog) {
        var _this = this;
        this.flightsService = flightsService;
        this.dialog = dialog;
        this.temp = [];
        this.temp2 = [];
        this.flights = null;
        this.flights_original = null;
        this.selectedRow = [];
        this.progressSpinnerColor = 'primary';
        this.progressSpinnerMode = 'indeterminate';
        this.rowLimit = 15;
        this.progressSpinnerValue = 50;
        this.filterInputValue = '';
        this.rowsExpanded = false;
        this.showName = true;
        this.showGender = true;
        this.showAge = true;
        this.showLoad = true;
        this.showExpanded = true;
        this.showIndex = true;
        this.showTableOptions = false;
        this.showAlert = false;
        this.expandCollapseRowsText = 'Expand';
        this.flightsService.getFlights().subscribe(function (flights) {
            _this.flights = flights;
            _this.flights_original = flights;
            _this.temp = flights.slice();
        }, function (error) {
            _this.errorMessage = error;
            console.log(_this.errorMessage);
        });
        // Observable.interval(10000)
        //   .subscribe(data => {
        //     this.showAlert = !this.showAlert;
        //   });
    }
    FlightsTableComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    FlightsTableComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.flightsTable.rowDetail.collapseAllRows(); // close all detail rows
        this.flightsTable.rowDetail.toggleExpandRow(selected[0]); // expand selected detail row
        console.log(selected);
        if (JSON.stringify(selected) === JSON.stringify(this.selectedRow)) {
            this.flightsTable.rowDetail.collapseAllRows(); // collapse detail
            this.selectedRow = null; // reset selectedRow variable
        }
        else {
            this.selectedRow = selected; // they clicked a new row
        }
    };
    FlightsTableComponent.prototype.openDialog = function (dialogId) {
        var _this = this;
        console.log(this.selectedRow);
        var dialogRef = this.dialog.open(app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], {
            width: '250px',
            data: { name: this.selectedRow[0].name, animal: this.selectedRow[0].gender },
            id: dialogId
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result) {
                _this.selectedRow = result.selectedRow;
            }
        });
    };
    FlightsTableComponent.prototype.toggleRows = function () {
        if (this.rowsExpanded) {
            this.flightsTable.rowDetail.collapseAllRows();
            this.expandCollapseRowsText = 'Expand';
        }
        else {
            this.flightsTable.rowDetail.expandAllRows();
            this.expandCollapseRowsText = 'Collapse';
        }
        this.rowsExpanded = !this.rowsExpanded;
    };
    FlightsTableComponent.prototype.toggleTableOptions = function () {
        this.showTableOptions = !this.showTableOptions;
    };
    // Flight table search filter
    FlightsTableComponent.prototype.updateFilter = function (event) {
        var val;
        //console.log(event.target.value);
        if (event == null || (event !== null && event.target.value == '')) {
            val = '';
        }
        else {
            val = event.target.value.toLowerCase();
        }
        // Name Filter Array
        var temp = this.temp.filter(function (x) {
            return x.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // Age Filter Array
        var temp2 = this.temp.filter(function (d) {
            return d.age.toString().toLowerCase().indexOf(val) !== -1 || !val;
        });
        if (event == null || (event !== null && event.target.value == '')) {
            this.flights = this.flights_original;
        }
        else {
            // updates the rows
            this.flights = temp;
            this.flights = this.flights.concat(temp2);
        }
        // Whenever the filter changes, always go back to the first page
        this.flightsTable.offset = 0;
    };
    FlightsTableComponent.prototype.getSettingsClickNotification = function (event) {
        //perform settings click here!
        //toggleTableOptions();
        console.log("settings icon clicked and detected in flights-table.component");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('flightsTable'),
        __metadata("design:type", Object)
    ], FlightsTableComponent.prototype, "flightsTable", void 0);
    FlightsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table-detail',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))
                    ])
                ])
            ],
            template: __webpack_require__(/*! ./flights-table.component.html */ "./src/app/flights-table/flights-table.component.html"),
            styles: [__webpack_require__(/*! ./flights-table.component.css */ "./src/app/flights-table/flights-table.component.css"), __webpack_require__(/*! ../../../node_modules/@swimlane/ngx-datatable/release/assets/icons.css */ "./node_modules/@swimlane/ngx-datatable/release/assets/icons.css"), __webpack_require__(/*! ../../../node_modules/@swimlane/ngx-datatable/release/themes/material.css */ "./node_modules/@swimlane/ngx-datatable/release/themes/material.css"), __webpack_require__(/*! ../../../node_modules/@swimlane/ngx-datatable/release/themes/bootstrap.css */ "./node_modules/@swimlane/ngx-datatable/release/themes/bootstrap.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [app_flights_table_flights_table_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], FlightsTableComponent);
    return FlightsTableComponent;
}());



/***/ }),

/***/ "./src/app/flights-table/flights-table.service.ts":
/*!********************************************************!*\
  !*** ./src/app/flights-table/flights-table.service.ts ***!
  \********************************************************/
/*! exports provided: FlightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsService", function() { return FlightsService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
1. Install ngx-datatable: "npm i @swimlane/ngx-datatable --save"
2. Declare FlightsTableComponent in your app.module!
3. Add DataTableDetailService to providers in your app.module!
*/

//import { Observable } from "rxjs";




var FlightsService = /** @class */ (function () {
    function FlightsService(http) {
        this.http = http;
        this.url = "assets/data/100k.json";
    }
    FlightsService.prototype.getFlights = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    FlightsService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    FlightsService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.message || error);
    };
    FlightsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], FlightsService);
    return FlightsService;
}());



/***/ }),

/***/ "./src/app/frog-dashboard/frog-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/frog-dashboard/frog-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-events {\n    width: 400px;\n    height: 200px;\n    border: 1px solid #555;\n    overflow: auto;\n}\n\n.mat-accordian-headers-align .mat-expansion-panel-header-title,\n.mat-accordian-headers-align .mat-expansion-panel-header-description {\n    flex-basis: 0;\n}\n\n.mat-accordian-headers-align .mat-expansion-panel-header-description {\n    justify-content: space-between;\n    align-items: center;\n}\n\nmat-chip {\n    max-width: 200px;\n}"

/***/ }),

/***/ "./src/app/frog-dashboard/frog-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/frog-dashboard/frog-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"result\">\n    <mat-card-content>\n        <h2 class=\"example-h2\">Result</h2><i class=\"fa fa-spinner fa-pulse\"></i>\n\n        <section class=\"example-section\">\n            <mat-slide-toggle class=\"example-margin\" (change)=\"slideChanged($event)\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">\n                Slide me!\n            </mat-slide-toggle>\n        </section>\n    </mat-card-content>\n</mat-card>\n\n\n<mat-card>\n    <div class=\"example-container\">\n        <mat-form-field>\n            <input matInput placeholder=\"Monkeys\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <textarea matInput placeholder=\"Textarea\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field>\n            <mat-select placeholder=\"Select\">\n                <mat-option value=\"option\">Option</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n</mat-card>\n\n\n<mat-card>\n    <mat-form-field>\n        <mat-select [(value)]=\"selected\">\n            <mat-option>None</mat-option>\n            <mat-option value=\"option1\">Option 1</mat-option>\n            <mat-option value=\"option2\">Option 2</mat-option>\n            <mat-option value=\"option3\">Option 3</mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <p>You selected: {{selected}}</p>\n</mat-card>\n\n<mat-card>\n    <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <div class=\"example-events\">\n        <div *ngFor=\"let e of events\">{{e}}</div>\n    </div>\n</mat-card>\n\n<mat-card>\n    <span matTooltip=\"Tooltip!\">I have a tooltip</span>\n</mat-card>\n\n<mat-card>\n    <ol>\n        <li>\n            <mat-form-field>\n                <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n            </mat-form-field>\n        </li>\n        <li>\n            <button mat-raised-button (click)=\"openDialog('favoriteAnimal')\">Pick one</button>\n        </li>\n        <li *ngIf=\"animal\">\n            You chose: <i>{{animal}}</i>\n        </li>\n        <li>\n            <button mat-raised-button (click)=\"openDialog('test1')\">test1</button>\n        </li>\n    </ol>\n</mat-card>\n\n<mat-card>\n\n    <mat-accordion class=\"mat-accordian-headers-align\">\n\n        <mat-expansion-panel>\n\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Personal data\n                </mat-panel-title>\n                <mat-panel-description>\n                    Type your name and age\n                    <mat-icon>account_circle</mat-icon>\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <mat-form-field>\n                <input matInput placeholder=\"First name\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Age\">\n            </mat-form-field>\n\n        </mat-expansion-panel>\n\n        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Self aware panel\n                </mat-panel-title>\n                <mat-panel-description>\n                    Currently I am {{panelOpenState ? 'open' : 'closed'}}\n                    <mat-icon>date_range</mat-icon>\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <p>I'm visible because I am open</p>\n\n        </mat-expansion-panel>\n\n    </mat-accordion>\n\n</mat-card>\n<mat-card>\n    <button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n</mat-card>\n\n\n<mat-chip-list class=\"mat-chip-list-stacked\">\n    <mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\">\n        {{chip.name}}\n    </mat-chip>\n</mat-chip-list>"

/***/ }),

/***/ "./src/app/frog-dashboard/frog-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/frog-dashboard/frog-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: FrogDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrogDashboardComponent", function() { return FrogDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_frogs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/frogs.service */ "./src/app/frogs.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FrogDashboardComponent = /** @class */ (function () {
    function FrogDashboardComponent(frogsService, dialog, snackBar) {
        this.frogsService = frogsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        // @ViewChild(MatAccordion) accordion: MatAccordion;
        this.panelOpenState = false;
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.selected = 'option2';
        this.events = [];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    FrogDashboardComponent.prototype.openSnackBar = function () {
        // this.snackBar.openFromComponent(ProfileComponent, {
        //   duration: 5000,
        //   data: { name: this.name, animal: this.animal },
        // });
        var snackBarRef = this.snackBar.open('Message archived', 'Undo', {
            duration: 30000
        });
        snackBarRef.afterDismissed().subscribe(function () {
            console.log('The snack-bar was dismissed');
        });
        snackBarRef.onAction().subscribe(function () {
            console.log('The snack-bar action was triggered!');
        });
        // snackBarRef.dismiss();
    };
    FrogDashboardComponent.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
        console.log(type + ": " + event.value);
    };
    FrogDashboardComponent.prototype.openDialog = function (dialogId) {
        var _this = this;
        var dialogRef = this.dialog.open(app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            width: '250px',
            data: { name: this.name, animal: this.animal },
            id: dialogId
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result) {
                _this.animal = result.animal;
            }
        });
    };
    FrogDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.frogsService.activeProject.subscribe(function (res) {
            return _this.project = res;
        });
    };
    FrogDashboardComponent.prototype.load = function () {
        this.frogsService.load();
    };
    FrogDashboardComponent.prototype.slideChanged = function (e) {
        console.log(e.checked ? 'on' : 'off');
    };
    FrogDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frogs',
            styles: [__webpack_require__(/*! ./frog-dashboard.component.css */ "./src/app/frog-dashboard/frog-dashboard.component.css")],
            template: __webpack_require__(/*! ./frog-dashboard.component.html */ "./src/app/frog-dashboard/frog-dashboard.component.html")
        }),
        __metadata("design:paramtypes", [app_frogs_service__WEBPACK_IMPORTED_MODULE_1__["FrogsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], FrogDashboardComponent);
    return FrogDashboardComponent;
}());



/***/ }),

/***/ "./src/app/frogs.service.ts":
/*!**********************************!*\
  !*** ./src/app/frogs.service.ts ***!
  \**********************************/
/*! exports provided: FrogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrogsService", function() { return FrogsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FrogsService = /** @class */ (function () {
    function FrogsService(http) {
        this.http = http;
        this.activeProject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.activeFrog = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
    }
    FrogsService.prototype.load = function () {
        var _this = this;
        this.http.get('http://time.jsontest.com/').subscribe(function (res) { return _this.activeProject.next(res.json()); });
        var request = this.http.get('http://time.jsontest.com/')
            .map(function (res) {
            res = res.json();
            console.log(res);
        }).catch(function (res) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(res.json()); });
    };
    FrogsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FrogsService);
    return FrogsService;
}());



/***/ }),

/***/ "./src/app/hubx-dashboard/hubx-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/hubx-dashboard/hubx-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar{\n    height:550px;\n}"

/***/ }),

/***/ "./src/app/hubx-dashboard/hubx-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/hubx-dashboard/hubx-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row row-offcanvas row-offcanvas-right\">\n        <div class=\"col-6 col-md-3 sidebar-offcanvas\" id=\"sidebar\">\n            <!-- <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item active\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n        <a href=\"#\" class=\"list-group-item\">Link</a>\n      </div> -->\n\n            <div>\n                <ngx-datatable class=\"bootstrap\" [rows]=\"rows\" [loadingIndicator]=\"loadingIndicator\" [columns]=\"columns\" [scrollbarV]=\"false\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"70\" [rowHeight]=\"40\" [limit]=\"10\" [reorderable]=\"reorderable\">\n                </ngx-datatable>\n            </div>\n\n        </div>\n        <!--/span-->\n        <div class=\"col-12 col-md-9\">\n\n            <div class=\"page-header\">\n                <h1>Information I care about here</h1>\n            </div>\n            <div class=\"page-header text-center\">\n                <div id=\"showdate\"></div>\"{{func}}\"\n                <div id=\"datepicker\" style=\"margin-left: auto; margin-right: auto; width: 477px;\"></div>\n            </div>\n            <div class=\"row\">\n                <app-data-table (emittedData)=\"haveEmittedData($event)\"></app-data-table>\n            </div>\n            <!--/row-->\n        </div>\n        <!--/span-->\n\n\n    </div>\n    <!--/row-->\n\n    <hr>\n\n\n\n</div>\n<!--/.container-->"

/***/ }),

/***/ "./src/app/hubx-dashboard/hubx-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/hubx-dashboard/hubx-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: HubxDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubxDashboardComponent", function() { return HubxDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HubxDashboardComponent = /** @class */ (function () {
    function HubxDashboardComponent() {
        // $(function () {
        this.showDate = 'smile :)';
        this.rows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' }
        ];
        //   $("#datepicker").datepicker({
        //     numberOfMonths: 2,
        //     onSelect: function (selectedDate) {
        //       console.log(selectedDate);
        //       $('#showdate').text(selectedDate)
        //       this.showDate = selectedDate;
        //     }
        //   });
        // });
        /*
            $(function () {
              $("#datepicker").datepicker({
                numberOfMonths: 2,
                onSelect: function (selectedDate) {
        
                  console.log(selectedDate);
                  $('#showdate').text(selectedDate)
                  
        
                  // var date = $(this).datepicker('getDate');
                  // var day = date.getUTCDay();
                  // if (day == '6') {
                  //     alert('its a saturday');
        
                  // }
        
                }
              });
            });
            */
    }
    HubxDashboardComponent.prototype.ngOnInit = function () {
    };
    HubxDashboardComponent.prototype.haveEmittedData = function (event) {
        var _this = this;
        this.rows = event;
        setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        console.log('----GOOD NEWS - haveEmittedData fired in the hubxdashboard!----');
        console.log("------------this.rows-------------");
        console.log(this.rows);
        console.log("------------event-----------------");
        console.log(event);
        console.log("------------finished-----------------");
    };
    HubxDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hubx-dashboard',
            template: __webpack_require__(/*! ./hubx-dashboard.component.html */ "./src/app/hubx-dashboard/hubx-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./hubx-dashboard.component.css */ "./src/app/hubx-dashboard/hubx-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HubxDashboardComponent);
    return HubxDashboardComponent;
}());



/***/ }),

/***/ "./src/app/left-slideout/left-slideout.component.css":
/*!***********************************************************!*\
  !*** ./src/app/left-slideout/left-slideout.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/left-slideout/left-slideout.component.html":
/*!************************************************************!*\
  !*** ./src/app/left-slideout/left-slideout.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field style=\"margin:20px\">\n    <mat-select [(value)]=\"rowLimit\" placeholder=\"Rows\">\n        <mat-option value=\"0\">None</mat-option>\n        <mat-option value=\"5\">5</mat-option>\n        <mat-option value=\"10\">10</mat-option>\n        <mat-option value=\"15\">15</mat-option>\n        <mat-option value=\"20\">20</mat-option>\n        <mat-option value=\"25\">25</mat-option>\n        <mat-option value=\"30\">30</mat-option>\n        <mat-option value=\"35\">35</mat-option>\n        <mat-option value=\"35\">50</mat-option>\n        <mat-option value=\"35\">75</mat-option>\n        <mat-option value=\"35\">100</mat-option>\n        <mat-option value=\"35\">200</mat-option>\n        <mat-option value=\"35\">300</mat-option>\n    </mat-select>\n</mat-form-field>"

/***/ }),

/***/ "./src/app/left-slideout/left-slideout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/left-slideout/left-slideout.component.ts ***!
  \**********************************************************/
/*! exports provided: LeftSlideoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSlideoutComponent", function() { return LeftSlideoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftSlideoutComponent = /** @class */ (function () {
    function LeftSlideoutComponent() {
    }
    LeftSlideoutComponent.prototype.ngOnInit = function () {
    };
    LeftSlideoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-slideout',
            template: __webpack_require__(/*! ./left-slideout.component.html */ "./src/app/left-slideout/left-slideout.component.html"),
            styles: [__webpack_require__(/*! ./left-slideout.component.css */ "./src/app/left-slideout/left-slideout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftSlideoutComponent);
    return LeftSlideoutComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Profile</div>\n    <div class=\"panel-body\">\n\n<div class=\"container-fluid\">\n\n<div class=\"row\" style=\"margin-bottom:10px;\">\n  <div class=\"col-xs-12\">\n    <div class=\"form-group\">\n    <input #termsearch type=\"text\" class=\"form-control\" id=\"termsearch\" style=\"width:125px; float:left\"><button class=\"btn btn-primary\" (click)=\"loadUser(termsearch.value)\">Load profile</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div *ngIf=\"profile; else elseBlock\">\n    <!--<label>JSON</label>\n    {{ profile | json }}<br>-->\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n        <th>Name</th>\n        <th>Bio</th>\n        <th>Following</th>\n        <th>Image</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{profile.username}}</td>\n          <td>{{profile.bio}}</td>\n          <td>{{profile.following}}</td>\n          <td><img class=\"img-thumbnail\" src=\"{{profile.image}}\" width=\"60\" height=\"60\"></td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"form-group\">\n      <label for=\"comment\"><button (click)=\"toggleId()\" class=\"btn btn-default\">JSON</button></label>\n      <textarea *ngIf=\"showId\" class=\"form-control\" rows=\"5\" id=\"comment\">{{ profile | json }}</textarea>\n    </div>    \n    </div>\n    <ng-template #elseBlock>Click to test the profile service.</ng-template>\n  </div>\n</div>\n\n</div>\n \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService) {
        this.profileService = profileService;
        this.showId = false;
        this.termsearch = '';
    }
    ProfileComponent.prototype.loadUser = function (searchVal) {
        var _this = this;
        this.profileService.nameterm = searchVal;
        console.log(this.profileService.nameterm);
        this.profileService.getProfile()
            .subscribe(function (profile) {
            _this.profile = _this.profileService.jsonObjToProfileObj(profile);
            //this.profile = new Profile;
            _this.profile.username = profile.username;
            console.log(_this.profile);
            console.log('this.profile.username=' + _this.profile.username);
        }, //Bind to view
        function (//Bind to view
        err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.toggleId = function () {
        this.showId = !this.showId;
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile */ "./src/app/profile/profile.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileUrl = 'https://conduit.productionready.io/api/profiles/';
        this.nameterm = '';
    }
    ProfileService.prototype.getProfile = function () {
        return this.http.get(this.profileUrl + this.nameterm)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ProfileService.prototype.jsonObjToProfileObj = function (data) {
        this.profile = new _profile__WEBPACK_IMPORTED_MODULE_3__["Profile"](data.profile.username, data.profile.bio, data.profile.following, data.profile.image, data.profile.role, data.profile.gemsid);
        return this.profile;
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profile/profile.ts":
/*!************************************!*\
  !*** ./src/app/profile/profile.ts ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile(username, bio, following, image, role, gemsid) {
        this.username = username;
        this.bio = bio;
        this.following = following;
        this.image = image;
        this.role = role;
        this.gemsid = gemsid;
        this.username = username;
        this.bio = bio;
        this.following = following;
        this.image = image;
        this.role = role;
        this.gemsid = gemsid;
    }
    return Profile;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/hubx\">FIDS</a>\n        </div>\n        <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/datatable\">Dashboard</a></li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Airline<span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                    <li><a routerLink=\"/crew\" class=\"active\">crew</a></li>\n                    <li><a routerLink=\"/frogs\">alerts</a></li>\n                    <li><a routerLink=\"/profile\">profile</a></li>\n                    <li><a routerLink=\"/flights\">flights</a></li>\n                </ul>\n            </li>\n            <li><a href=\"#\">Page 2</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up for alerts</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        </ul>\n    </div>\n</nav> -->\n\n\n<mat-toolbar class=\"ups-top-navigation navbar-fixed-top\">\n\n    <button mat-button (click)=\"openSideMenu($event)\" class=\"navBarSlideOverButton\"><i class=\"material-icons\">menu</i></button>\n\n    <div>\n        <span class=\"headerInset\">\n            <div class=\"zone zone-header\">\n                <a id=\"brandLink\" class=\"navbar-brand\" href=\"javascript:void(0);\">\n                    <img alt=\"Ups-Logo\" class=\"img-responsive ups_logo\" src=\"assets/images/UPS_Logo.png\">\n                </a>\n            </div>\n        </span>\n        <span class=\"headerInset2\">\n        </span>\n        <span class=\"headerInset3\">\n        </span>\n        <span class=\"brandingContainer\">\n            <span class=\"brandingText\">FIDS </span>\n        </span>\n\n\n\n    </div>\n\n\n\n    <!-- <span class=\"leftSideMenuArea\" style=\"padding-left: 90px;\">FIDS</span> -->\n\n    <span class=\"example-fill-remaining-space\">\n        <!-- This fills the remaining space of the current row -->\n    </span>\n\n    <span class=\"rightSideMenuArea\">\n    <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n     <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item><span class=\"glyphicon glyphicon-log-in\"></span> &nbsp; Login</button>\n    <button mat-menu-item routerLink=\"/profile\"><span class=\"glyphicon glyphicon-user\"></span> &nbsp; Profile</button>\n    <button mat-menu-item>Preferences</button>\n    <button mat-menu-item routerLink=\"/flights\">Flights</button>\n    <button mat-menu-item routerLink=\"/frogs\">Alerts</button>\n    <button mat-menu-item routerLink=\"/crew\">Test1</button>\n    <button mat-menu-item routerLink=\"/hubx\">Test2</button>\n    </mat-menu>\n    </span>\n\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.openSideMenu = function () {
        this.notifyParent.emit(null);
    };
    NavbarComponent.prototype.clickedSlideMenu = function (event) {
        // emit event
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NavbarComponent.prototype, "notifyParent", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/neil/Desktop/workspace/testBed/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map