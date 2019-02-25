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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/web */ "./src/app/router/web.ts");
/* harmony import */ var _router_java__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router/java */ "./src/app/router/java.ts");
/* harmony import */ var _router_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router/database */ "./src/app/router/database.ts");
/* harmony import */ var _bulu_middle_troops_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bulu/middle.troops/carousel/carousel.component */ "./src/app/bulu/middle.troops/carousel/carousel.component.ts");







var routes = _router_web__WEBPACK_IMPORTED_MODULE_3__["webRoute"].concat(_router_java__WEBPACK_IMPORTED_MODULE_4__["javaRoue"], _router_database__WEBPACK_IMPORTED_MODULE_5__["databaseRoute"], [{ path: 'body/homepage', component: _bulu_middle_troops_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"] }]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n\n  <app-header></app-header>\n\n  <app-bodyer></app-bodyer>\n\n  <app-footer></app-footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chevysky';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bulu_rear_guard_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bulu/rear.guard/footer/footer.component */ "./src/app/bulu/rear.guard/footer/footer.component.ts");
/* harmony import */ var _bulu_spearhead_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bulu/spearhead/header/header.component */ "./src/app/bulu/spearhead/header/header.component.ts");
/* harmony import */ var _bulu_middle_troops_bodyer_bodyer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bulu/middle.troops/bodyer/bodyer.component */ "./src/app/bulu/middle.troops/bodyer/bodyer.component.ts");
/* harmony import */ var _bulu_middle_troops_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bulu/middle.troops/carousel/carousel.component */ "./src/app/bulu/middle.troops/carousel/carousel.component.ts");
/* harmony import */ var _bulu_middle_troops_web_angular_ngbase_ngbase_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bulu/middle.troops/web/angular/ngbase/ngbase.component */ "./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.ts");
/* harmony import */ var _bulu_middle_troops_web_angular_nglib_nglib_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bulu/middle.troops/web/angular/nglib/nglib.component */ "./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.ts");
/* harmony import */ var _bulu_middle_troops_web_vue_vuelib_vuelib_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bulu/middle.troops/web/vue/vuelib/vuelib.component */ "./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.ts");
/* harmony import */ var _bulu_middle_troops_web_vue_vuebase_vuebase_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bulu/middle.troops/web/vue/vuebase/vuebase.component */ "./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.ts");
/* harmony import */ var _bulu_middle_troops_web_angular_basicuse_basicuse_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bulu/middle.troops/web/angular/basicuse/basicuse.component */ "./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.ts");
/* harmony import */ var _bulu_middle_troops_web_angular_leadin_leadin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bulu/middle.troops/web/angular/leadin/leadin.component */ "./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.ts");
/* harmony import */ var _bulu_middle_troops_web_vue_vueroute_vueroute_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bulu/middle.troops/web/vue/vueroute/vueroute.component */ "./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.ts");
/* harmony import */ var _bulu_middle_troops_web_vue_vueaxios_vueaxios_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bulu/middle.troops/web/vue/vueaxios/vueaxios.component */ "./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.ts");
/* harmony import */ var _bulu_middle_troops_java_springboot_splib_splib_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bulu/middle.troops/java/springboot/splib/splib.component */ "./src/app/bulu/middle.troops/java/springboot/splib/splib.component.ts");
/* harmony import */ var _bulu_middle_troops_java_springboot_spdetail_spdetail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bulu/middle.troops/java/springboot/spdetail/spdetail.component */ "./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.ts");
/* harmony import */ var _bulu_middle_troops_database_oracle_oracle_lib_oracle_lib_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component */ "./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.ts");
/* harmony import */ var _bulu_middle_troops_database_oracle_oracle_detail_oracle_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component */ "./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.ts");
/* harmony import */ var _bulu_middle_troops_java_distributed_distributed_distributed_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bulu/middle.troops/java/distributed/distributed/distributed.component */ "./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _bulu_rear_guard_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _bulu_spearhead_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _bulu_middle_troops_bodyer_bodyer_component__WEBPACK_IMPORTED_MODULE_10__["BodyerComponent"],
                _bulu_middle_troops_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
                _bulu_middle_troops_web_angular_ngbase_ngbase_component__WEBPACK_IMPORTED_MODULE_12__["NgbaseComponent"],
                _bulu_middle_troops_web_angular_nglib_nglib_component__WEBPACK_IMPORTED_MODULE_13__["NglibComponent"],
                _bulu_middle_troops_web_vue_vuelib_vuelib_component__WEBPACK_IMPORTED_MODULE_14__["VuelibComponent"],
                _bulu_middle_troops_web_vue_vuebase_vuebase_component__WEBPACK_IMPORTED_MODULE_15__["VuebaseComponent"],
                _bulu_middle_troops_web_angular_basicuse_basicuse_component__WEBPACK_IMPORTED_MODULE_16__["BasicuseComponent"],
                _bulu_middle_troops_web_angular_leadin_leadin_component__WEBPACK_IMPORTED_MODULE_17__["LeadinComponent"],
                _bulu_middle_troops_web_vue_vueroute_vueroute_component__WEBPACK_IMPORTED_MODULE_18__["VuerouteComponent"],
                _bulu_middle_troops_web_vue_vueaxios_vueaxios_component__WEBPACK_IMPORTED_MODULE_19__["VueaxiosComponent"],
                _bulu_middle_troops_java_springboot_splib_splib_component__WEBPACK_IMPORTED_MODULE_20__["SplibComponent"],
                _bulu_middle_troops_java_springboot_spdetail_spdetail_component__WEBPACK_IMPORTED_MODULE_21__["SpdetailComponent"],
                _bulu_middle_troops_database_oracle_oracle_lib_oracle_lib_component__WEBPACK_IMPORTED_MODULE_22__["OracleComponent"],
                _bulu_middle_troops_database_oracle_oracle_detail_oracle_detail_component__WEBPACK_IMPORTED_MODULE_23__["OracleDetailComponent"],
                _bulu_middle_troops_java_distributed_distributed_distributed_component__WEBPACK_IMPORTED_MODULE_24__["DistributedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"].forRoot(),
            ],
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselConfig"], useValue: { interval: 2000, noPause: true, showIndicators: true } }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/bodyer/bodyer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/bulu/middle.troops/bodyer/bodyer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row setrow\"></div>\n<div class=\"row setbg\">\n  <div class=\"col-md-9\">\n    <!-- 显示目录的部分 -->\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"col-sm-3 libheight\">\n    <br>\n        <accordion [closeOthers]=\"true\">\n            <accordion-group heading=\"前端\">\n              <a routerLink = \"angular/nglib\">Angular | ngx-bootstrap</a><br>\n              <a routerLink = \"vue/lib\">Vue | ElementUI</a><br>\n            </accordion-group>\n            <accordion-group heading=\"后端\">\n             <a routerLink = \"java/lib\">SpringBoot</a><br>\n             <a routerLink = \"distributed\">Distributed</a>\n            </accordion-group>\n            <accordion-group heading=\"数据库\">\n                <p>暂无内容</p>\n              <!-- <a routerLink = \"oracle\">Relational database</a><br>\n              <a routerLink = \"\">non relational database</a> -->\n            </accordion-group>\n            <accordion-group heading=\"随笔\">\n              <p>暂无内容</p>\n            </accordion-group>\n          </accordion>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bulu/middle.troops/bodyer/bodyer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/bulu/middle.troops/bodyer/bodyer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".setbg {\n  background-image: url('bodybg.jpg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n\n.setrow {\n  background-color: #ebcb17;\n  height: 10px; }\n\n.libheight {\n  position: fixed;\n  right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVsdS9taWRkbGUudHJvb3BzL2JvZHllci9FOlxcdnNjb2RlUHJvamVjdFxcY2hldnlza3kvc3JjXFxhcHBcXGJ1bHVcXG1pZGRsZS50cm9vcHNcXGJvZHllclxcYm9keWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsbUNBQTJEO0VBQzNELDRCQUE0QjtFQUM1QiwwQkFBMEIsRUFBQTs7QUFHMUI7RUFDSSx5QkFBbUM7RUFDbkMsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFBQyxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9idWx1L21pZGRsZS50cm9vcHMvYm9keWVyL2JvZHllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXRiZ3tcclxuLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAyMTEsIDcxKTtcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvYnVsdS9ib2R5YmcuanBnJyk7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uc2V0cm93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjAzLCAyMyk7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5saWJoZWlnaHR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7cmlnaHQ6IDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/bodyer/bodyer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/bulu/middle.troops/bodyer/bodyer.component.ts ***!
  \***************************************************************/
/*! exports provided: BodyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyerComponent", function() { return BodyerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BodyerComponent = /** @class */ (function () {
    function BodyerComponent(router) {
        this.router = router;
    }
    BodyerComponent.prototype.ngOnInit = function () {
        this.router.navigate(['body/homepage']);
    };
    BodyerComponent.prototype.goDirectory = function (dirName) {
        this.router.navigate(['directory'], {
            queryParams: {
                dirName: dirName
            }
        });
    };
    BodyerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bodyer',
            template: __webpack_require__(/*! ./bodyer.component.html */ "./src/app/bulu/middle.troops/bodyer/bodyer.component.html"),
            styles: [__webpack_require__(/*! ./bodyer.component.scss */ "./src/app/bulu/middle.troops/bodyer/bodyer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BodyerComponent);
    return BodyerComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/carousel/carousel.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/bulu/middle.troops/carousel/carousel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10 offset-md-1\">\n      <carousel class=\"finger\">\n          <slide (click) = \"goDetail('angular/nglib')\">\n            <img src=\"../../../../assets/bulu/database.jpg\" alt=\"first slide\" class=\"setpic\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h3>Angular basic introduction</h3>\n              <p>介绍angular项目的搭建，及ngx-bootstrap的使用</p>\n            </div>\n          </slide>\n          <slide (click) = \"goDetail('vue/lib')\">\n            <img src=\"../../../../assets/bulu/second.jpg\" alt=\"second slide\" class=\"setpic\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h3>Vue basic introduction</h3>\n              <p>介绍Vue项目的搭建，及ElementUI的使用</p>\n            </div>\n          </slide>\n          <slide>\n            <img src=\"../../../../assets/bulu/third.jpg\" alt=\"third slide\" class=\"setpic\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h3>空白页</h3>\n              <p>暂无内容</p>\n            </div>\n          </slide>\n        </carousel>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bulu/middle.troops/carousel/carousel.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/bulu/middle.troops/carousel/carousel.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".setpic {\n  display: block;\n  width: 1100px;\n  height: 400px; }\n\n.finger {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVsdS9taWRkbGUudHJvb3BzL2Nhcm91c2VsL0U6XFx2c2NvZGVQcm9qZWN0XFxjaGV2eXNreS9zcmNcXGFwcFxcYnVsdVxcbWlkZGxlLnRyb29wc1xcY2Fyb3VzZWxcXGNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnVsdS9taWRkbGUudHJvb3BzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHBpY3tcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uZmluZ2Vye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/carousel/carousel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/bulu/middle.troops/carousel/carousel.component.ts ***!
  \*******************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(router) {
        this.router = router;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent.prototype.goDetail = function (path) {
        this.router.navigateByUrl(path);
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/bulu/middle.troops/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/bulu/middle.troops/carousel/carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  oracle.detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy9kYXRhYmFzZS9vcmFjbGUvb3JhY2xlLmRldGFpbC9vcmFjbGUuZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OracleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OracleDetailComponent", function() { return OracleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OracleDetailComponent = /** @class */ (function () {
    function OracleDetailComponent() {
    }
    OracleDetailComponent.prototype.ngOnInit = function () {
    };
    OracleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oracle.detail',
            template: __webpack_require__(/*! ./oracle.detail.component.html */ "./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.html"),
            styles: [__webpack_require__(/*! ./oracle.detail.component.scss */ "./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OracleDetailComponent);
    return OracleDetailComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3 detail-lib\">\n        <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-outline-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-outline-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-outline-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-outline-light\">Light</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\">Dark</button>\n      <a href=\"javascrip:0\" (click)=\"goDeatil('config')\">DataSource Config</a><br>\n    </div>\n    <div class=\"col-md-9 detail-font\">\n      <div [innerHTML] = 'showData'></div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy9kYXRhYmFzZS9vcmFjbGUvb3JhY2xlLmxpYi9vcmFjbGUubGliLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OracleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OracleComponent", function() { return OracleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OracleComponent = /** @class */ (function () {
    function OracleComponent() {
    }
    OracleComponent.prototype.ngOnInit = function () {
    };
    OracleComponent.prototype.goDetail = function (name) {
        switch (name) {
            case 'goDeatil': this.showData = '';
        }
    };
    OracleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oracle.lib',
            template: __webpack_require__(/*! ./oracle.lib.component.html */ "./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.html"),
            styles: [__webpack_require__(/*! ./oracle.lib.component.scss */ "./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OracleComponent);
    return OracleComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 detail-lib\">\n    <br>\n      <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\" (click)=\"goDetail('dubbo')\">dubbo + zookeeper</button>\n  </div>\n  <div class=\"col-md-9 detail-font\">\n    <div [innerHTML] = 'showData'></div>\n    <span *ngIf = \"dubboShow\">\n      第六步：<a href=\"javascripts:0\" (click)=\"goOtherLib('java/lib','domain')\">跨域配置</a><br>\n      第七步：前端调用，如在地址栏输入http://localhost:8023/user/info\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy9qYXZhL2Rpc3RyaWJ1dGVkL2Rpc3RyaWJ1dGVkL2Rpc3RyaWJ1dGVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DistributedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributedComponent", function() { return DistributedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dubbo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dubbo */ "./src/app/bulu/middle.troops/java/distributed/dubbo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DistributedComponent = /** @class */ (function () {
    function DistributedComponent(route) {
        this.route = route;
        this.showData = _dubbo__WEBPACK_IMPORTED_MODULE_2__["dubbo"]; //赋初始值显示dubbo + zookeeper分布式架构内容
        this.dubboShow = true;
    }
    DistributedComponent.prototype.ngOnInit = function () {
    };
    DistributedComponent.prototype.goDetail = function (name) {
        this.controlShow();
        switch (name) {
            case 'dubbo':
                this.showData = _dubbo__WEBPACK_IMPORTED_MODULE_2__["dubbo"];
                this.dubboShow = true;
                break;
        }
    };
    DistributedComponent.prototype.goOtherLib = function (path, name) {
        this.route.navigate([path], {
            queryParams: {
                opName: name
            }
        });
    };
    //所有ngIf控制的内容全部隐藏全部隐藏
    DistributedComponent.prototype.controlShow = function () {
        this.dubboShow = false;
    };
    DistributedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributed',
            template: __webpack_require__(/*! ./distributed.component.html */ "./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.html"),
            styles: [__webpack_require__(/*! ./distributed.component.scss */ "./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DistributedComponent);
    return DistributedComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/java/distributed/dubbo.ts":
/*!**************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/distributed/dubbo.ts ***!
  \**************************************************************/
/*! exports provided: dubbo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dubbo", function() { return dubbo; });
var dubbo = '<h4 class="title-font">简单的dubbo + zookeeper分布式架构搭建</h4>' +
    '<a href="https://github.com/chevysky/tiny-dubbo">github代码所在地</a><br>' +
    '第一步：<a href="javascripts:0">下载安装zookeeper</a><br>' +
    '第二步：<a href="javascripts:0">下载安装dubbo-admin</a><br>' +
    '第三部：编写一个公共的API包，内容为传递数据的实体类和接口定义，用于消费端consumer的调用和提供端provider去实现。注：传递的实体类需要序列化，所以需要在实体类中实现java.io.Serializable<br>' +
    '编写完成，maven打包，并将其添加到maven仓库：<br>' +
    'mvn install:install-file -Dfile=C:\\Users\\Administrator\\.m2\\commom-0.0.1-SNAPSHOT.jar -DgroupId=com.dobbo -DartifactId=commom -Dversion=0.0.1-SNAPSHOT -Dpackaging=jar<br>' +
    '第四部：搭建springboot项目，编辑提供者provider<br>' +
    '<div class="condent">' +
    '在application.properties中做配置：<br>' +
    '#服务端口<br>' +
    'server.port=8022<br>' +
    '#数据库连接<br>' +
    'spring.datasource.driver-class-name=com.mysql.jdbc.Driver<br>' +
    'spring.datasource.username=****<br>' +
    'spring.datasource.password=****<br>' +
    'spring.datasource.url=jdbc:mysql://localhost:3306/****?characterEncoding=utf-8<br>' +
    'spring.datasource.type=com.alibaba.druid.pool.DruidDataSource<br>' +
    '#dubbo服务端口，我们无需知道dubbo服务运行在哪个端口，故将其设为随机端口<br>' +
    'dubbo.protocol.port= -1<br>' +
    '#dubbo服务名称<br>' +
    'dubbo.application.name=provider<br>' +
    '#dubbo服务所在包路径<br>' +
    'dubbo.scan.base-packages=com.dubbo.provider.service<br>' +
    '#注册中心地址<br>' +
    'dubbo.registry.address=zookeeper://127.0.0.1:2181<br>' +
    '#设置服务的日志输出级别为debug级<br>' +
    'logging.level.com.dubbo.provider=debug<br>' +
    '</div>' +
    '<div class="word">' +
    '将加入mvan本地库的公共API jar包引入到provider中：<br>' +
    '&lt;dependency>&lt;!--存放公共服务接口--><br>' +
    '&lt;groupId>com.dobbo&lt;/groupId><br>' +
    '&lt;artifactId>commom&lt;/artifactId><br>' +
    '&lt;version>0.0.1-SNAPSHOT&lt;/version><br>' +
    '&lt;/dependency><br>' +
    '</div>' +
    '<div class="code">' +
    '编写公共服务接口的实现类：<br>' +
    'package com.dubbo.provider.service;<br>' +
    'import com.alibaba.dubbo.config.annotation.Service;<br>' +
    'import com.dobbo.commom.UserService;<br>' +
    'import com.dobbo.commom.UserEntity;<br>' +
    '@Service<br>' +
    'public class UserServiceImpl implements UserService {<br>' +
    '@Override{<br>' +
    'public UserEntity getUserInfo() {<br>' +
    '&nbsp;&nbsp;UserEntity user = new UserEntity();<br>' +
    '&nbsp;&nbsp;具体的业务操作...<br>' +
    '&nbsp;&nbsp;return user;<br>' +
    '&nbsp;}<br>' +
    '}<br>' +
    '<div class="remark">备注：在项目启动类上加dubbo的注解@EnableDubbo目的在于识别dubbo的Service注解</div>' +
    '</div>' +
    '第五部：搭建springboot项目，编辑消费端consumer：<br>' +
    '<div class="content">' +
    '将加入mvan本地库的公共API jar包引入到consumer中<br>' +
    'application.properpies文件配置：<br>' +
    '#服务端口<br>' +
    'server.port=8023<br>' +
    '#数据库连接<br>' +
    'spring.datasource.driver-class-name=com.mysql.jdbc.Driver<br>' +
    'spring.datasource.username=****<br>' +
    'spring.datasource.password=****<br>' +
    'spring.datasource.url=jdbc:mysql://localhost:3306/****?characterEncoding=utf-8<br>' +
    'spring.datasource.type=com.alibaba.druid.pool.DruidDataSource<br>' +
    '#消费者名称<br>' +
    'dubbo.application.name=consumer<br>' +
    '#需要使用到提供者服务的包路径<br>' +
    'dubbo.scan.base-packages=com.dubbo.consumer.controller<br>' +
    '#注册中心地址<br>' +
    'dubbo.registry.address=zookeeper://127.0.0.1:2181<br>' +
    '#DUBBO 2.5.8重构了telnet端口与DUBBO协议的端口是不同的端口，默认为22222，这里可以手动修改避免端口被占用<br>' +
    'dubbo.application.qos-enable=true<br>' +
    'dubbo.application.qos-port=33333<br>' +
    '#拒绝远端主机发出的命令，只允许服务本机执行,true有可能带来安全风险<br>' +
    'dubbo.application.qos-accept-foreign-ip=false<br>' +
    '</div>' +
    '<div class="word">编辑消费端的controller调取服务接口：<br><br>' +
    'package com.dubbo.consumer.controller;<br>' +
    'import com.alibaba.dubbo.config.annotation.Reference;<br>' +
    'import com.dobbo.commom.UserEntity;<br>' +
    'import com.dobbo.commom.UserService;<br>' +
    'import org.springframework.web.bind.annotation.RequestMapping;<br>' +
    'import org.springframework.web.bind.annotation.RestController;<br>' +
    '@RestController<br>' +
    '@RequestMapping("/user")<br>' +
    'public class UserController {<br>' +
    '@Reference<br>' +
    'private UserService userService;<br>' +
    '@RequestMapping(value = "/info")<br>' +
    'public UserEntity getUserInfo()throws Exception{<br>' +
    'UserEntity user = userService.getUserInfo();<br>' +
    'System.out.println(user);<br>' +
    'return user;<br>' +
    '}<br>' +
    '}<br>' +
    '</div>';


/***/ }),

/***/ "./src/app/bulu/middle.troops/java/springboot/domain.ts":
/*!**************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/springboot/domain.ts ***!
  \**************************************************************/
/*! exports provided: domain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domain", function() { return domain; });
var domain = '<h4 class="title-font">跨域配置</h4>' +
    'CrossOriginConfig.java<br>' +
    'package cn.bulu.config;<br>' +
    'import org.springframework.context.annotation.Bean;<br>' +
    'import org.springframework.context.annotation.Configuration;<br>' +
    'import org.springframework.web.cors.CorsConfiguration;<br>' +
    'import org.springframework.web.cors.UrlBasedCorsConfigurationSource;<br>' +
    'import org.springframework.web.filter.CorsFilter;<br>' +
    '@Configuration<br>' +
    'public class CrossOriginConfig{<br><br>' +
    'private CorsConfiguration buildConfig() {<br>' +
    'CorsConfiguration corsConfiguration = new CorsConfiguration();<br>' +
    '//允许所有的域名<br>' +
    'corsConfiguration.addAllowedOrigin("*");<br>' +
    '//允许任何头<br>' +
    'corsConfiguration.addAllowedHeader("*");<br>' +
    '//允许任何方法post/get等<br>' +
    'corsConfiguration.addAllowedMethod("*");<br>' +
    'return corsConfiguration;<br>' +
    '}<br><br>' +
    '@Bean<br>' +
    'public CorsFilter corsFilter() {<br>' +
    'UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();<br>' +
    'source.registerCorsConfiguration("/**", buildConfig());<br>' +
    'return new CorsFilter(source);<br>' +
    '}<br><br>' +
    '}';


/***/ }),

/***/ "./src/app/bulu/middle.troops/java/springboot/interceptor.ts":
/*!*******************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/springboot/interceptor.ts ***!
  \*******************************************************************/
/*! exports provided: interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptor", function() { return interceptor; });
var interceptor = '<h4 class="title-font">拦截器配置</h4>' +
    'import com.scxd.beans.extendbeans.Authority;<br>' +
    'import org.springframework.stereotype.Component;<br>' +
    'import org.springframework.web.servlet.HandlerInterceptor;<br>' +
    'import org.springframework.web.servlet.ModelAndView;<br>' +
    'import javax.servlet.http.HttpServletRequest;<br>' +
    'import javax.servlet.http.HttpServletResponse;<br>' +
    'import javax.servlet.http.HttpSession;<br>' +
    'import java.io.IOException;<br>' +
    '用户登录拦截器，拦截之后的具体操作<br>' +
    '@Component<br>' +
    'public class LoginInterceptor implements HandlerInterceptor {<br><br>' +
    '@Override<br>' +
    'public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o){<br><br>' +
    'try{<br>' +
    '从session中获取登录后存入的用户信息，判断当前是否有用户登录<br>' +
    'HttpSession session = httpServletRequest.getSession();<br>' +
    'Authority authority = (Authority)session.getAttribute("authority");<br>' +
    'String type = httpServletRequest.getHeader("X-Requested-With");// XMLHttpRequest<br>' +
    'String basePath = httpServletRequest.getScheme() + "://" + httpServletRequest.getServerName() + ":" +<br>' +
    'httpServletRequest.getServerPort() + httpServletRequest.getContextPath() + "/static/pages/backside/login.html";<br><br>' +
    'if(authority!=null){<br>' +
    'return true;<br>' +
    '}<br>' +
    'else{由于AJAX不支持重定向所以这里给其返回一个标记也就是TIMEOUT让前端自己跳到login.html页面<br>' +
    'if (type.equals("XMLHttpRequest")){<br>' +
    'httpServletResponse.setHeader("SESSIONSTATUS","TIMEOUT");<br>' +
    'httpServletResponse.setHeader("CONTEXTPATH",basePath);<br>' +
    'httpServletResponse.setStatus(HttpServletResponse.SC_FORBIDDEN);<br>' +
    'return false;<br>' +
    '}else{<br>' +
    'httpServletResponse.sendRedirect(basePath);<br>' +
    'return false;<br>' +
    '}<br>' +
    '}<br>' +
    '}catch(IllegalStateException e){<br>' +
    'e.printStackTrace();<br>' +
    'return false;<br>' +
    '}catch (IOException e){<br>' +
    'e.printStackTrace();<br>' +
    'return false;<br>' +
    '}<br>' +
    '}<br>' +
    '访问controller时的操作<br>' +
    '@Override<br>' +
    'public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o,ModelAndView modelAndView)throws Exception{<br>' +
    '//System.out.println("$$$$$$$$$$");<br>' +
    '}<br>' +
    '访问结束时做的操作<br>' +
    '@Override<br>' +
    'public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {<br>' +
    '//System.out.println("$$$$$$$$$$");<br>' +
    '}<br>' +
    '}<br><br>' +
    '拦截器配置文件<br>' +
    'import org.springframework.context.annotation.Configuration;<br>' +
    'import org.springframework.util.ResourceUtils;<br>' +
    'import org.springframework.web.servlet.config.annotation.*;<br>' +
    'import java.util.ArrayList;<br>' +
    'import java.util.List;<br><br>' +
    '@Configuration<br>' +
    '//@EnableWebMvc<br>' +
    'public class IntereceptorConfig implements WebMvcConfigurer {<br><br>' +
    '@Override<br>' +
    'public void addInterceptors(InterceptorRegistry registry) {<br>' +
    '此处的集合装的是一系列不应该被拦截的地址<br>' +
    'List&lt;String> pathPatterns = new ArrayList<>();<br>' +
    'pathPatterns.add("/path1/path2");<br>' +
    'pathPatterns.add("/path1/path2");<br>' +
    'pathPatterns.add("/path1/path2");<br>' +
    '//这里的LoginInterceptor对应上面的拦截器具体操作类<br>' +
    'InterceptorRegistration registration = registry.addInterceptor(new LoginInterceptor());<br>' +
    'registration.addPathPatterns("/**");<br>' +
    'registration.excludePathPatterns(pathPatterns);<br>' +
    '}<br><br>' +
    '}';


/***/ }),

/***/ "./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML] = 'showData'></div>\n"

/***/ }),

/***/ "./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy9qYXZhL3NwcmluZ2Jvb3Qvc3BkZXRhaWwvc3BkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SpdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpdetailComponent", function() { return SpdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// import { domain } from '../domain'
// import { interceptor } from '../interceptor'
var SpdetailComponent = /** @class */ (function () {
    function SpdetailComponent(routeinfo) {
        this.routeinfo = routeinfo;
    }
    SpdetailComponent.prototype.ngOnInit = function () {
        // this.routeinfo.queryParams.subscribe(queryParams =>{
        //   this.opName = queryParams.opName;
        // })
        // this.setShowData();
    };
    SpdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spdetail',
            template: __webpack_require__(/*! ./spdetail.component.html */ "./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.html"),
            styles: [__webpack_require__(/*! ./spdetail.component.scss */ "./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SpdetailComponent);
    return SpdetailComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/java/springboot/splib/splib.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/springboot/splib/splib.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 detail-lib\">\n    <br>\n      <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" \n      (click)=\"goDeatil('domain')\">Cross domain config</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\" \n      (click)=\"goDeatil('interceptor')\">interceptor</button>\n  </div>\n  <div class=\"col-md-9 detail-font\">\n    <div [innerHTML] = 'showData'></div>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bulu/middle.troops/java/springboot/splib/splib.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/springboot/splib/splib.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy9qYXZhL3NwcmluZ2Jvb3Qvc3BsaWIvc3BsaWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/java/springboot/splib/splib.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/java/springboot/splib/splib.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SplibComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplibComponent", function() { return SplibComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain */ "./src/app/bulu/middle.troops/java/springboot/domain.ts");
/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interceptor */ "./src/app/bulu/middle.troops/java/springboot/interceptor.ts");





var SplibComponent = /** @class */ (function () {
    function SplibComponent(route, routerinfo) {
        this.route = route;
        this.routerinfo = routerinfo;
    }
    SplibComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerinfo.queryParams.subscribe(function (queryParams) {
            _this.goDeatil(queryParams.opName);
        });
    };
    SplibComponent.prototype.goDeatil = function (name) {
        switch (name) {
            case 'domain':
                this.showData = _domain__WEBPACK_IMPORTED_MODULE_3__["domain"];
                break;
            case 'interceptor':
                this.showData = _interceptor__WEBPACK_IMPORTED_MODULE_4__["interceptor"];
                break;
            default:
                this.showData = _domain__WEBPACK_IMPORTED_MODULE_3__["domain"];
        }
    };
    SplibComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splib',
            template: __webpack_require__(/*! ./splib.component.html */ "./src/app/bulu/middle.troops/java/springboot/splib/splib.component.html"),
            styles: [__webpack_require__(/*! ./splib.component.scss */ "./src/app/bulu/middle.troops/java/springboot/splib/splib.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SplibComponent);
    return SplibComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <b>循环ngFor</b><br>\n  *ngFor = \"let name of objectName\" 页面中循环的使用<br>\n  <b>条件判断ngIf</b><br>\n  *ngIf = \"variable\" 页面中使用ngIf,variable 为Boolean值时 false隐藏 true显示,\n  当为其它变量时,变量不为undefind显示;<br>\n  <b>绑定点击事件</b><br>\n  (click) = \"incident()\" 绑定点击事件<br>\n  <b>从组件接收主组件传递的数据</b><br>\n   {{textTransmitValueInComponent}}<br>\n   从组件的ts中定义变量用@Input装饰：<br>\n   @Input() hero : variableType;<br>\n   @Input() isClicked : boolean;<br>\n  <b>文本格式化</b><br>\n  {{textFormat}}<br>\n  <b>数据双向绑定</b><br>\n  {{textNgModel}}<br>"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy93ZWIvYW5ndWxhci9iYXNpY3VzZS9iYXNpY3VzZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicuseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicuseComponent", function() { return BasicuseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicuseComponent = /** @class */ (function () {
    function BasicuseComponent() {
        //组件传值
        this.textTransmitValueInComponent = '<app-hero-detail [hero] = "selectHero" [isClicked] = "isClicked"></app-hero-detail>';
        //数据双向绑定
        this.textNgModel = '<input [(ngModel)]="hero.name" placeholder="name">在组件的class中直接写变量名，不需什么$scope操作使用数据双向绑定要在app.module.ts中导入import { FormsModule } from "@angular/forms";并将FormsModule 加入到imports数组中每一个组件都必须申明在app.module.ts的@Ng-Module中';
        //文本格式化
        this.textFormat = '{{hero | uppercase}} 将变量hero的值全部大写';
    }
    BasicuseComponent.prototype.ngOnInit = function () {
    };
    BasicuseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basicuse',
            template: __webpack_require__(/*! ./basicuse.component.html */ "./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.html"),
            styles: [__webpack_require__(/*! ./basicuse.component.scss */ "./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicuseComponent);
    return BasicuseComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b>ngx-bootstranp</b><br>\n首先下载ngx-bootstrap：npm install ngx-bootstrap --save<br>\n下载后，在module.ts中导入ngx-bootstrap/modal类<br>\n{{textNgxbtImport}}<br>\n{{textNgxbtImports}}<br>\n<b>引入bootstrap样式</b><br>\n方法一：在style.scss或style.css根样式中引入：@import url(\"../node_modules/bootstrap/dist/css/bootstrap.min.css\")<br>\n方法二：在package.json或angular.json中引入：在styles数组中添加\"./node_modules/bootstrap/dist/css/bootstrap.min.css\"<br>\n<div style=\"height: 170px\"></div>\n"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy93ZWIvYW5ndWxhci9sZWFkaW4vbGVhZGluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.ts ***!
  \***************************************************************************/
/*! exports provided: LeadinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadinComponent", function() { return LeadinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeadinComponent = /** @class */ (function () {
    function LeadinComponent() {
        //引入ngx-bootstrap
        this.textNgxbtImport = "import { ModalModule } from 'ngx-bootstrap'";
        this.textNgbtImports = "imports: [...,ModelModule,ModalModule.forRoot()]";
    }
    LeadinComponent.prototype.ngOnInit = function () {
    };
    LeadinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leadin',
            template: __webpack_require__(/*! ./leadin.component.html */ "./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.html"),
            styles: [__webpack_require__(/*! ./leadin.component.scss */ "./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeadinComponent);
    return LeadinComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <span>采用angular-cli创建项目，首先需要的工具nodejs中的npm(npm建议采用最新版本)</span>\n  <h3>angular-cli</h3>\n  <span>npm install angular/cli 全局安装</span><br>\n  <span>ng -v 查看版本</span><br>\n  <span>npm install -g @angular/cli@1.7.4 安装版本为1.7.4</span><br>\n  <span>npm install -g @angular/cli@latest 安装最新版本</span><br>\n  <b>angular项目升级</b><br>\n  <span>npm uninstall -g @angular/cli; 1、全局卸载</span><br>\n  <span>npm cache verify; 2、清理</span><br>\n  <span>npm uninstall --save-dev @angular/cli; 3、在项目路径下卸载</span><br>\n  <span>npm install --save-dev @angular/cli@1.7.4; 4、在项目路径下安装指定版本</span><br>\n  <span>npm install 或 yarn install; 5、项目路径下安装模块</span>\n  <h3>angular project</h3>\n  <span>ng new projectName 创建项目</span><br>\n  <span>ng serve --open / npm start / ng serve 启动项目</span><br>\n  <span>ng generate component componentName 创建组件</span><br>\n  <span>ng generate service serviceName 创建服务</span><br>\n  <b>create router</b><br>\n  <span>ng generate module routeName --flat --module=app --flat把这个文件放在了src/app中，而不是单独的目录下；\n    --module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。\n    典型的 Angular 路由（Route）有两个属性：path：一个用于匹配浏览器地址栏中 URL 的字符串。\n    component：当导航到此路由时，路由器应该创建哪个组件。</span><br>\n   <b>安装内存WEB API</b> <br>\n   <span>npm install angular-in-memory-web-api --save</span><br>\n   <span>若出现500服务器内部错误，则降低版本试试0.5+的版本:npm install angular-in-memory-web-api@0.5.4 --save</span><br>\n   ng build --prod 编译工程，编译到dist目录，将其变为可用js5.0代码和相关html、css等文件<br>\n</div>\n"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy93ZWIvYW5ndWxhci9uZ2Jhc2UvbmdiYXNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.ts ***!
  \***************************************************************************/
/*! exports provided: NgbaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbaseComponent", function() { return NgbaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgbaseComponent = /** @class */ (function () {
    function NgbaseComponent() {
    }
    NgbaseComponent.prototype.ngOnInit = function () {
    };
    NgbaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngbase',
            template: __webpack_require__(/*! ./ngbase.component.html */ "./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.html"),
            styles: [__webpack_require__(/*! ./ngbase.component.scss */ "./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgbaseComponent);
    return NgbaseComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 detail-lib\">\n    <br> \n      <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\" \n      routerLink = \"angular/ngbase\">Basic Introduction</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\"\n      routerLink = \"angular/basicuse\">Basic Use</button>\n      <button type=\"button\" class=\"btn btn-outline-success btn-lg btn-block\"\n      routerLink = \"angular/leadin\">Bootstrap</button>\n  </div>\n  <div class=\"col-md-9 detail-font\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy93ZWIvYW5ndWxhci9uZ2xpYi9uZ2xpYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.ts ***!
  \*************************************************************************/
/*! exports provided: NglibComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NglibComponent", function() { return NglibComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NglibComponent = /** @class */ (function () {
    function NglibComponent(router) {
        this.router = router;
    }
    NglibComponent.prototype.ngOnInit = function () {
        this.router.navigate(['angular/nglib/angular/ngbase']);
    };
    NglibComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nglib',
            template: __webpack_require__(/*! ./nglib.component.html */ "./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.html"),
            styles: [__webpack_require__(/*! ./nglib.component.scss */ "./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NglibComponent);
    return NglibComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>VUE用AXIOS实现与JAVA后端调用</h4>\n安装AXIOS npm install axios<br>\n在main.js中引入axios：import axios from 'axios'<br>\n由于axios不能直接使用Vue.use()，所以可以在引入axios后修改原型链，或者结合Vuex封装一个action;<br>\n<h4>修改原型链</h4>\nVue.prototype.$ajax = axios<br>\n<h4>axios 配置</h4>\naxios.defaults.timeout = 5000;<br>\n//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';<br>\naxios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';<br>\n// axios.defaults.headers.post['Content-Type'] = 'json';<br>\n// axios.defaults.baseURL = 'http://localhost:8080/项目名/';<br>\naxios.defaults.baseURL = 'http://localhost:8080/';<br>\n<h4>向后端发送请求</h4>\nmethods:{{text_1}}<br>\n  sendAjax(){{text_1}}<br>\n      this.$ajax.post('/user/vue',{{text_1}}<br>\n          name:'chevysky',<br>\n          sex:'man',<br>\n          age:16<br>\n      }).then(function(res){{text_1}}<br>\n          console.log(res);<br>\n          console.log(res.data);<br>\n          alert(res.data);<br>\n      })<br>\n  },<br>\n  sendNoParams(){{text_1}}<br>\n      this.$ajax.post('/user/vues').then(function(res){{text_1}}<br>\n          alert('请求成功');<br>\n      })<br>\n  }<br>\n}<br>\n<a href=\"javascript:0\" (click) = \"goOtherPage('/java/lib','domain')\">这个时候会出现跨域访问的问题，参考SpringBoot的跨域配置。</a>"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy93ZWIvdnVlL3Z1ZWF4aW9zL3Z1ZWF4aW9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.ts ***!
  \***************************************************************************/
/*! exports provided: VueaxiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueaxiosComponent", function() { return VueaxiosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var VueaxiosComponent = /** @class */ (function () {
    function VueaxiosComponent(router) {
        this.router = router;
        this.text_1 = "{";
    }
    VueaxiosComponent.prototype.ngOnInit = function () {
    };
    VueaxiosComponent.prototype.goOtherPage = function (path, name) {
        this.router.navigate([path], {
            queryParams: {
                opName: name
            }
        });
    };
    VueaxiosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vueaxios',
            template: __webpack_require__(/*! ./vueaxios.component.html */ "./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.html"),
            styles: [__webpack_require__(/*! ./vueaxios.component.scss */ "./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VueaxiosComponent);
    return VueaxiosComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML] = \"showData\"></div>"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy93ZWIvdnVlL3Z1ZWJhc2UvdnVlYmFzZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.ts ***!
  \*************************************************************************/
/*! exports provided: VuebaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VuebaseComponent", function() { return VuebaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var VuebaseComponent = /** @class */ (function () {
    function VuebaseComponent(routeinfo) {
        this.routeinfo = routeinfo;
        this.opName = "";
        this.intro = "<h4>VUE 项目的安装和启动</h4>" +
            "npm 安装vue-cli脚手架 : npm install -g vue-cli<br>" +
            "查看版本: vue -V<br><br>" +
            "使用脚手架安装项目： vue init webpack demo 项目是基于webpack的<br>" +
            "Project name（工程名）:回车<br>" +
            "Project description（工程介绍）：回车<br>" +
            "Author：作者名<br>" +
            "Vue build（是否安装编译器）:回车<br>" +
            "Install vue-router（是否安装Vue路由）：回车<br>" +
            "Use ESLint to lint your code（是否使用ESLint检查js代码）：n<br>" +
            "Set up unit tests（安装单元测试工具）：n<br>" +
            "Setup e2e tests with Nightwatch（是否安装端到端测试工具）：n<br>" +
            "Should we run npm install for you after the project has been created? (recommended)：回车。<br><br>" +
            "进入项目目录：cd demo<br>" +
            "安装项目所需要的依赖：npm install<br>" +
            "启动项目：npm run dev<br>" +
            "<h4>启动项目遇到的问题</h4>" +
            "You may use special comments to disable some warnings.<br>" +
            "Use // eslint-disable-next-line to ignore the next line.<br>" +
            "Use /* eslint-disable */ to ignore all warnings in a file.<br>" +
            "<b>解决方法</b><br>" +
            "注释build/webpack.base.conf.js文件module->rules中有关eslint的规则<br>" +
            "...(config.dev.useEslint ? [createLintingRule()] : [])," +
            "<h4>ElementUI引入</h4>" +
            "npm install element-ui  -save<br>" +
            "在main.js中添加代码<br>" +
            "import ElementUI from 'element-ui'<br>" +
            "Vue.use(ElementUI)";
    }
    VuebaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeinfo.queryParams.subscribe(function (queryParams) {
            _this.opName = queryParams.opName;
            _this.getShowData();
        }); //接收路由传的参数
    };
    VuebaseComponent.prototype.getShowData = function () {
        switch (this.opName) {
            case "intro":
                this.showData = this.intro;
                break;
            default: this.showData = "";
        }
    };
    VuebaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vuebase',
            template: __webpack_require__(/*! ./vuebase.component.html */ "./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.html"),
            styles: [__webpack_require__(/*! ./vuebase.component.scss */ "./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VuebaseComponent);
    return VuebaseComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 detail-lib\">\n    <br>\n      <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\"\n      (click)=\"goDeatil('intro')\">Basic introduction</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\"\n      routerLink = \"routeuse\">Basic use of router</button>\n      <button type=\"button\" class=\"btn btn-outline-success btn-lg btn-block\"\n      routerLink = \"axios\">Call the background</button>\n  </div>\n  <div class=\"col-md-9 detail-font\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bHUvbWlkZGxlLnRyb29wcy93ZWIvdnVlL3Z1ZWxpYi92dWVsaWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.ts ***!
  \***********************************************************************/
/*! exports provided: VuelibComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VuelibComponent", function() { return VuelibComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var VuelibComponent = /** @class */ (function () {
    function VuelibComponent(router) {
        this.router = router;
    }
    VuelibComponent.prototype.ngOnInit = function () {
        this.goDeatil('intro');
    };
    VuelibComponent.prototype.goDeatil = function (name) {
        this.router.navigate(['vue/lib/vue/base'], {
            queryParams: {
                opName: name
            }
        });
    };
    VuelibComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vuelib',
            template: __webpack_require__(/*! ./vuelib.component.html */ "./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.html"),
            styles: [__webpack_require__(/*! ./vuelib.component.scss */ "./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VuelibComponent);
    return VuelibComponent;
}());



/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>VUE路由</h4>\nmain.js中引入路由 import router from './router'<br>\n{{text_zero}}<br>\n {{text_ze}}<br>\n  router,<br>\n  {{text_first}}<br>\n  {{test_second}}<br>\n在src/router/index.js中给各个组件配置路由<br><br>\n{{text_third}}<br>\n{{text_fourth}}<br>\n{{text_five}}<br><br>\n{{text_six}}<br>\n{{text_seven}}<br><br>\n页面布局可以参考AngularJS的router<br>\n一个页面的head/body/foot 对应vue里路由的视图命名。<br>\ntext_1<br>\n      path:'/body',<br>\n      name:'bodyer',<br>\n      {{text_se}}<br>\n        head:headhtml,<br>\n        body:bodyhtml,<br>\n        foot:foothtml<br>\n      }<br>\n    }<br>\n    <span class=\"fcolor\">{{text_eight}}</span><br>"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fcolor {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVsdS9taWRkbGUudHJvb3BzL3dlYi92dWUvdnVlcm91dGUvRTpcXHZzY29kZVByb2plY3RcXGNoZXZ5c2t5L3NyY1xcYXBwXFxidWx1XFxtaWRkbGUudHJvb3BzXFx3ZWJcXHZ1ZVxcdnVlcm91dGVcXHZ1ZXJvdXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnVsdS9taWRkbGUudHJvb3BzL3dlYi92dWUvdnVlcm91dGUvdnVlcm91dGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmNvbG9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.ts ***!
  \***************************************************************************/
/*! exports provided: VuerouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VuerouteComponent", function() { return VuerouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VuerouteComponent = /** @class */ (function () {
    function VuerouteComponent() {
        this.text_1 = "{";
        this.text_zero = "new Vue({";
        this.text_ze = " el: '#app',";
        this.text_first = "  components: { App },";
        this.test_second = " template: '<App/>'})";
        this.text_third = "<template>中路由跳转：<router-link to='/path'></router-link>";
        this.text_fourth = "默认渲染成带有正确链接的 <a> 标签，可以通过配置 tag 属性生成别的标签.";
        this.text_five = "<router-link to='/path' tag='li'></router-link>";
        this.text_six = "<script>中路由跳转：this.$router.push('/path');";
        this.text_seven = "路由跳转组件显示的位置 <router-view></router-view>";
        this.text_se = "components:{";
        this.text_eight = "备注说明：例如在App.vue中有路由<router-view name='head'>/<router-view name='body'>而在App.vue中又引入了其它模块，那么在其它模块中的路由调用是可以影响到App.vue中的路由显示的。";
    }
    VuerouteComponent.prototype.ngOnInit = function () {
    };
    VuerouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vueroute',
            template: __webpack_require__(/*! ./vueroute.component.html */ "./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.html"),
            styles: [__webpack_require__(/*! ./vueroute.component.scss */ "./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VuerouteComponent);
    return VuerouteComponent;
}());



/***/ }),

/***/ "./src/app/bulu/rear.guard/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/bulu/rear.guard/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bgset\">\n  <div class=\"col-md-12 fontset\">\n    <span>微微草色恸，何处觅相知</span>\n    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\n    <span>version : 0.0.1</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bulu/rear.guard/footer/footer.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/bulu/rear.guard/footer/footer.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgset {\n  background-color: black;\n  height: 50px; }\n\n.fontset {\n  line-height: 50px;\n  font-size: 5px;\n  color: darkviolet;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVsdS9yZWFyLmd1YXJkL2Zvb3Rlci9FOlxcdnNjb2RlUHJvamVjdFxcY2hldnlza3kvc3JjXFxhcHBcXGJ1bHVcXHJlYXIuZ3VhcmRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J1bHUvcmVhci5ndWFyZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnc2V0ey8v6IOM5pmv6K6+572uXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmZvbnRzZXR7Ly/lrZfkvZPorr7nva5cclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiA1cHg7XHJcbiAgICBjb2xvcjogZGFya3Zpb2xldDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/bulu/rear.guard/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/bulu/rear.guard/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/bulu/rear.guard/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/bulu/rear.guard/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/bulu/spearhead/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/bulu/spearhead/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bgimg\">\n  <div class=\"col-md-8 offset-md-1 welfont\">BULU小窝欢迎小伙伴们微踩</div>\n  <div class=\"col-md-3 userfont\">\n      <span (click) = 'goHomePage()'>首页&nbsp;&nbsp;</span>\n    |&nbsp;&nbsp;\n    <span>provider&nbsp;:&nbsp;chevysky</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bulu/spearhead/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/bulu/spearhead/header/header.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgimg {\n  background-image: url('header.jpg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  height: 150px; }\n\n.welfont {\n  line-height: 100px;\n  font-size: 40px;\n  font-weight: bold;\n  color: darkorange;\n  font-family: 'Courier New', Courier, monospace; }\n\n.userfont {\n  line-height: 50px;\n  font-size: 16px;\n  color: white;\n  cursor: pointer;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVsdS9zcGVhcmhlYWQvaGVhZGVyL0U6XFx2c2NvZGVQcm9qZWN0XFxjaGV2eXNreS9zcmNcXGFwcFxcYnVsdVxcc3BlYXJoZWFkXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUEyRDtFQUMzRCw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsOENBQThDLEVBQUE7O0FBR2xEO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnVsdS9zcGVhcmhlYWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2ltZ3svL+iDjOaZr+WbvlxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvYnVsdS9oZWFkZXIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4ud2VsZm9udHsvL+asoui/juivjeWtl+S9k+iuvue9rlxyXG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi51c2VyZm9udHsvL+eUqOaIt+Wtl+S9k+iuvue9rlxyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bulu/spearhead/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/bulu/spearhead/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.goHomePage = function () {
        this.router.navigateByUrl('body/homepage');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/bulu/spearhead/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/bulu/spearhead/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/router/database.ts":
/*!************************************!*\
  !*** ./src/app/router/database.ts ***!
  \************************************/
/*! exports provided: databaseRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "databaseRoute", function() { return databaseRoute; });
/* harmony import */ var _bulu_middle_troops_database_oracle_oracle_lib_oracle_lib_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component */ "./src/app/bulu/middle.troops/database/oracle/oracle.lib/oracle.lib.component.ts");
/* harmony import */ var _bulu_middle_troops_database_oracle_oracle_detail_oracle_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component */ "./src/app/bulu/middle.troops/database/oracle/oracle.detail/oracle.detail.component.ts");


var databaseRoute = [
    {
        path: 'oracle',
        component: _bulu_middle_troops_database_oracle_oracle_lib_oracle_lib_component__WEBPACK_IMPORTED_MODULE_0__["OracleComponent"],
        children: [
            { path: 'detail', component: _bulu_middle_troops_database_oracle_oracle_detail_oracle_detail_component__WEBPACK_IMPORTED_MODULE_1__["OracleDetailComponent"] }
        ]
    }
];


/***/ }),

/***/ "./src/app/router/java.ts":
/*!********************************!*\
  !*** ./src/app/router/java.ts ***!
  \********************************/
/*! exports provided: javaRoue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "javaRoue", function() { return javaRoue; });
/* harmony import */ var _bulu_middle_troops_java_springboot_splib_splib_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bulu/middle.troops/java/springboot/splib/splib.component */ "./src/app/bulu/middle.troops/java/springboot/splib/splib.component.ts");
/* harmony import */ var _bulu_middle_troops_java_springboot_spdetail_spdetail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bulu/middle.troops/java/springboot/spdetail/spdetail.component */ "./src/app/bulu/middle.troops/java/springboot/spdetail/spdetail.component.ts");
/* harmony import */ var _bulu_middle_troops_java_distributed_distributed_distributed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bulu/middle.troops/java/distributed/distributed/distributed.component */ "./src/app/bulu/middle.troops/java/distributed/distributed/distributed.component.ts");



var javaRoue = [
    {
        path: 'java/lib',
        component: _bulu_middle_troops_java_springboot_splib_splib_component__WEBPACK_IMPORTED_MODULE_0__["SplibComponent"],
        children: [
            { path: 'detail', component: _bulu_middle_troops_java_springboot_spdetail_spdetail_component__WEBPACK_IMPORTED_MODULE_1__["SpdetailComponent"] }
        ]
    },
    {
        path: 'distributed',
        component: _bulu_middle_troops_java_distributed_distributed_distributed_component__WEBPACK_IMPORTED_MODULE_2__["DistributedComponent"]
    }
];


/***/ }),

/***/ "./src/app/router/web.ts":
/*!*******************************!*\
  !*** ./src/app/router/web.ts ***!
  \*******************************/
/*! exports provided: webRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webRoute", function() { return webRoute; });
/* harmony import */ var _bulu_middle_troops_web_angular_nglib_nglib_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bulu/middle.troops/web/angular/nglib/nglib.component */ "./src/app/bulu/middle.troops/web/angular/nglib/nglib.component.ts");
/* harmony import */ var _bulu_middle_troops_web_angular_ngbase_ngbase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bulu/middle.troops/web/angular/ngbase/ngbase.component */ "./src/app/bulu/middle.troops/web/angular/ngbase/ngbase.component.ts");
/* harmony import */ var _bulu_middle_troops_web_angular_basicuse_basicuse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bulu/middle.troops/web/angular/basicuse/basicuse.component */ "./src/app/bulu/middle.troops/web/angular/basicuse/basicuse.component.ts");
/* harmony import */ var _bulu_middle_troops_web_angular_leadin_leadin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bulu/middle.troops/web/angular/leadin/leadin.component */ "./src/app/bulu/middle.troops/web/angular/leadin/leadin.component.ts");
/* harmony import */ var _bulu_middle_troops_web_vue_vuelib_vuelib_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bulu/middle.troops/web/vue/vuelib/vuelib.component */ "./src/app/bulu/middle.troops/web/vue/vuelib/vuelib.component.ts");
/* harmony import */ var _bulu_middle_troops_web_vue_vuebase_vuebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bulu/middle.troops/web/vue/vuebase/vuebase.component */ "./src/app/bulu/middle.troops/web/vue/vuebase/vuebase.component.ts");
/* harmony import */ var _bulu_middle_troops_web_vue_vueroute_vueroute_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bulu/middle.troops/web/vue/vueroute/vueroute.component */ "./src/app/bulu/middle.troops/web/vue/vueroute/vueroute.component.ts");
/* harmony import */ var _bulu_middle_troops_web_vue_vueaxios_vueaxios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bulu/middle.troops/web/vue/vueaxios/vueaxios.component */ "./src/app/bulu/middle.troops/web/vue/vueaxios/vueaxios.component.ts");








var webRoute = [
    {
        path: 'angular/nglib',
        component: _bulu_middle_troops_web_angular_nglib_nglib_component__WEBPACK_IMPORTED_MODULE_0__["NglibComponent"],
        children: [
            { path: 'angular/ngbase', component: _bulu_middle_troops_web_angular_ngbase_ngbase_component__WEBPACK_IMPORTED_MODULE_1__["NgbaseComponent"] },
            { path: 'angular/basicuse', component: _bulu_middle_troops_web_angular_basicuse_basicuse_component__WEBPACK_IMPORTED_MODULE_2__["BasicuseComponent"] },
            { path: 'angular/leadin', component: _bulu_middle_troops_web_angular_leadin_leadin_component__WEBPACK_IMPORTED_MODULE_3__["LeadinComponent"] },
        ]
    },
    {
        path: 'vue/lib',
        component: _bulu_middle_troops_web_vue_vuelib_vuelib_component__WEBPACK_IMPORTED_MODULE_4__["VuelibComponent"],
        children: [
            { path: 'vue/base', component: _bulu_middle_troops_web_vue_vuebase_vuebase_component__WEBPACK_IMPORTED_MODULE_5__["VuebaseComponent"] },
            { path: 'routeuse', component: _bulu_middle_troops_web_vue_vueroute_vueroute_component__WEBPACK_IMPORTED_MODULE_6__["VuerouteComponent"] },
            { path: 'axios', component: _bulu_middle_troops_web_vue_vueaxios_vueaxios_component__WEBPACK_IMPORTED_MODULE_7__["VueaxiosComponent"] }
        ]
    }
];


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\vscodeProject\chevysky\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map