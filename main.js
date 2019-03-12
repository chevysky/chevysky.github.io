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
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _database_database_database_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database/database/database.component */ "./src/app/database/database/database.component.ts");
/* harmony import */ var _essays_essays_essays_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./essays/essays/essays.component */ "./src/app/essays/essays/essays.component.ts");
/* harmony import */ var _router_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router/backend */ "./src/app/router/backend.ts");
/* harmony import */ var _router_frontend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router/frontend */ "./src/app/router/frontend.ts");








var routes = _router_backend__WEBPACK_IMPORTED_MODULE_6__["backendRouter"].concat(_router_frontend__WEBPACK_IMPORTED_MODULE_7__["frontendRouter"], [{ path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    {
        path: 'database',
        component: _database_database_database_component__WEBPACK_IMPORTED_MODULE_4__["DatabaseComponent"],
        children: []
    },
    {
        path: 'essays',
        component: _essays_essays_essays_component__WEBPACK_IMPORTED_MODULE_5__["EssaysComponent"],
        children: []
    }]);
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

module.exports = "<div class='container-fluid'>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['homepage']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _toolkit_safePipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolkit/safePipe */ "./src/app/toolkit/safePipe.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _backend_backend_backend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./backend/backend/backend.component */ "./src/app/backend/backend/backend.component.ts");
/* harmony import */ var _frontend_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./frontend/frontend/frontend.component */ "./src/app/frontend/frontend/frontend.component.ts");
/* harmony import */ var _database_database_database_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./database/database/database.component */ "./src/app/database/database/database.component.ts");
/* harmony import */ var _essays_essays_essays_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./essays/essays/essays.component */ "./src/app/essays/essays/essays.component.ts");
/* harmony import */ var _backend_basic_configuration_domain_domain_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./backend/basic.configuration/domain/domain.component */ "./src/app/backend/basic.configuration/domain/domain.component.ts");
/* harmony import */ var _backend_basic_configuration_interceptor_interceptor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./backend/basic.configuration/interceptor/interceptor.component */ "./src/app/backend/basic.configuration/interceptor/interceptor.component.ts");
/* harmony import */ var _backend_basic_configuration_exception_exception_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./backend/basic.configuration/exception/exception.component */ "./src/app/backend/basic.configuration/exception/exception.component.ts");
/* harmony import */ var _backend_plug_ehcache_ehcache_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./backend/plug/ehcache/ehcache.component */ "./src/app/backend/plug/ehcache/ehcache.component.ts");
/* harmony import */ var _backend_plug_shiro_shiro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./backend/plug/shiro/shiro.component */ "./src/app/backend/plug/shiro/shiro.component.ts");
/* harmony import */ var _backend_plug_dubbo_dubbo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./backend/plug/dubbo/dubbo.component */ "./src/app/backend/plug/dubbo/dubbo.component.ts");
/* harmony import */ var _backend_plug_rabbitmq_rabbitmq_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./backend/plug/rabbitmq/rabbitmq.component */ "./src/app/backend/plug/rabbitmq/rabbitmq.component.ts");
/* harmony import */ var _frontend_ngcreate_ngcreate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./frontend/ngcreate/ngcreate.component */ "./src/app/frontend/ngcreate/ngcreate.component.ts");
/* harmony import */ var _frontend_nguse_nguse_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./frontend/nguse/nguse.component */ "./src/app/frontend/nguse/nguse.component.ts");
/* harmony import */ var _frontend_vuecreate_vuecreate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./frontend/vuecreate/vuecreate.component */ "./src/app/frontend/vuecreate/vuecreate.component.ts");
/* harmony import */ var _frontend_vueuse_vueuse_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./frontend/vueuse/vueuse.component */ "./src/app/frontend/vueuse/vueuse.component.ts");
/* harmony import */ var _backend_code_source_map_string_map_string_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./backend/code.source/map.string/map.string.component */ "./src/app/backend/code.source/map.string/map.string.component.ts");
/* harmony import */ var _backend_development_kit_idea_idea_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./backend/development.kit/idea/idea.component */ "./src/app/backend/development.kit/idea/idea.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                _backend_backend_backend_component__WEBPACK_IMPORTED_MODULE_9__["BackendComponent"],
                _frontend_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_10__["FrontendComponent"],
                _database_database_database_component__WEBPACK_IMPORTED_MODULE_11__["DatabaseComponent"],
                _essays_essays_essays_component__WEBPACK_IMPORTED_MODULE_12__["EssaysComponent"],
                _toolkit_safePipe__WEBPACK_IMPORTED_MODULE_5__["safePipe"],
                _backend_basic_configuration_domain_domain_component__WEBPACK_IMPORTED_MODULE_13__["DomainComponent"],
                _backend_basic_configuration_interceptor_interceptor_component__WEBPACK_IMPORTED_MODULE_14__["InterceptorComponent"],
                _backend_basic_configuration_exception_exception_component__WEBPACK_IMPORTED_MODULE_15__["ExceptionComponent"],
                _backend_plug_ehcache_ehcache_component__WEBPACK_IMPORTED_MODULE_16__["EhcacheComponent"],
                _backend_plug_shiro_shiro_component__WEBPACK_IMPORTED_MODULE_17__["ShiroComponent"],
                _backend_plug_dubbo_dubbo_component__WEBPACK_IMPORTED_MODULE_18__["DubboComponent"],
                _backend_plug_rabbitmq_rabbitmq_component__WEBPACK_IMPORTED_MODULE_19__["RabbitmqComponent"],
                _frontend_ngcreate_ngcreate_component__WEBPACK_IMPORTED_MODULE_20__["NgcreateComponent"],
                _frontend_nguse_nguse_component__WEBPACK_IMPORTED_MODULE_21__["NguseComponent"],
                _frontend_vuecreate_vuecreate_component__WEBPACK_IMPORTED_MODULE_22__["VuecreateComponent"],
                _frontend_vueuse_vueuse_component__WEBPACK_IMPORTED_MODULE_23__["VueuseComponent"],
                _backend_code_source_map_string_map_string_component__WEBPACK_IMPORTED_MODULE_24__["MapStringComponent"],
                _backend_development_kit_idea_idea_component__WEBPACK_IMPORTED_MODULE_25__["IdeaComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backend/backend/backend.component.html":
/*!********************************************************!*\
  !*** ./src/app/backend/backend/backend.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 head-background\">\n    {{nowTime}}&nbsp;&nbsp;\n    <img src='../../../assets/homepage/wechat.png' class=\"wechat\">\n    &nbsp;chevysky\n    &nbsp;&nbsp;&nbsp;&nbsp;\n  </div>\n</div>\n<div class=\"row interval-box\"></div>\n<div class=\"row\">\n\n  <div class=\"col-md-3 left-bg\">\n\n    <div class=\"go-home\">\n      <img src = \"../../../assets/backend/duck.gif\" width=\"20%\">\n      &nbsp;&nbsp;<a routerLink = \"/homepage\">返回首页</a>\n    </div>\n\n      <accordion [closeOthers] = 'true' class=\"menus\">\n        <div *ngFor = \"let menu of menus\">\n          <div *ngIf = \"menu.parentId == 1\">\n            <accordion-group [isOpen] = \"menu.id == 5 ? true : false\">\n              <button class=\"btn btn-link btn-block clearfix menu-head\" accordion-heading>\n                <i class=\"iconfont iconjava1 icons\"></i>&nbsp;&nbsp;\n                <span>{{menu.menuName}}</span>\n              </button>\n              <div *ngFor = \"let item of menus\">\n                <div *ngIf = \"item.parentId == menu.id\" class=\"menu\">\n                  <i class=\"iconfont iconcode icon\"></i>&nbsp;&nbsp;\n                  <span (click) = \"selectContent(item.path)\">{{item.menuName}}</span>\n                </div>\n              </div>\n            </accordion-group>\n          </div>\n        </div>\n      </accordion>\n  </div>\n\n  <div class=\"col-md-9 body-background\">\n    <div class=\"text-content\">\n      <img *ngIf = \"defimg\" src=\"../../../assets/backend/defimg.jpg\" width=\"94%\">\n      <router-outlet></router-outlet>\n    </div>    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/backend/backend/backend.component.scss":
/*!********************************************************!*\
  !*** ./src/app/backend/backend/backend.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-background {\n  background: linear-gradient(to right top, #0a0000, #292013);\n  height: 30px;\n  color: azure;\n  text-align: right; }\n\n.interval-box {\n  background: linear-gradient(to right, rgba(0, 0, 255, 0.863), #92b6d8, rgba(0, 0, 255, 0.863), #92b6d8);\n  height: 4px; }\n\n.body-background {\n  background: linear-gradient(to right top, #0e0101, #47473c);\n  height: 577px; }\n\n.go-home {\n  font-size: 20px;\n  color: white;\n  font-weight: bold;\n  margin: 20px 0px 20px 20px; }\n\n.menu-head {\n  background-color: #0b010f;\n  text-align: left; }\n\n.menus {\n  opacity: 0.7; }\n\n.menu {\n  color: darkolivegreen;\n  cursor: pointer;\n  background-color: #0b010f;\n  opacity: 1; }\n\n.menu:hover {\n  color: #f12a07; }\n\n.icons {\n  margin-left: 30px; }\n\n.icon {\n  margin-left: 60px; }\n\n.left-bg {\n  background-image: url('menu.jpg');\n  background-size: 97% 100%; }\n\n.text-content {\n  margin-top: 10px;\n  margin-left: 35px;\n  width: 98%;\n  height: 560px;\n  color: azure;\n  overflow: auto; }\n\n.wechat {\n  width: 2%;\n  height: 22px;\n  margin-top: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja2VuZC9iYWNrZW5kL0Q6XFxnaXRcXGNoZXZ5c2t5L3NyY1xcYXBwXFxiYWNrZW5kXFxiYWNrZW5kXFxiYWNrZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQXVFO0VBQ3ZFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksdUdBQXlIO0VBQ3pILFdBQVcsRUFBQTs7QUFHZjtFQUNJLDJEQUF1RTtFQUN2RSxhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0kseUJBQWdDO0VBQ2hDLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDRyxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHlCQUFnQztFQUNoQyxVQUFVLEVBQUE7O0FBR2I7RUFDSSxjQUFxQixFQUFBOztBQUd6QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlDQUF5RDtFQUN6RCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWEsRUFBQTs7QUFHakI7RUFDSSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvYmFja2VuZC9iYWNrZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AscmdiKDEwLCAwLCAwKSxyZ2IoNDEsIDMyLCAxOSkpO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IGF6dXJlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbnRlcnZhbC1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLCAwLCAyNTUsIDAuODYzKSxyZ2IoMTQ2LCAxODIsIDIxNikscmdiYSgwLCAwLCAyNTUsIDAuODYzKSxyZ2IoMTQ2LCAxODIsIDIxNikpO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5ib2R5LWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLHJnYigxNCwgMSwgMSkscmdiKDcxLCA3MSwgNjApKTtcclxuICAgIGhlaWdodDo1NzdweDtcclxufVxyXG5cclxuLmdvLWhvbWV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMjBweCAyMHB4O1xyXG59XHJcblxyXG4ubWVudS1oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxLCAxNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubWVudXN7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICBjb2xvcjogZGFya29saXZlZ3JlZW47XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxLCAxNSk7XHJcbiAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5tZW51OmhvdmVye1xyXG4gICAgY29sb3I6cmdiKDI0MSwgNDIsIDcpO1xyXG59XHJcblxyXG4uaWNvbnN7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5cclxuLmxlZnQtYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrZW5kL21lbnUuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDk3JSAxMDAlO1xyXG59XHJcblxyXG4udGV4dC1jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGhlaWdodDogNTYwcHg7XHJcbiAgICBjb2xvcjogYXp1cmU7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG59XHJcblxyXG4ud2VjaGF0e1xyXG4gICAgd2lkdGg6IDIlO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/backend/backend/backend.component.ts":
/*!******************************************************!*\
  !*** ./src/app/backend/backend/backend.component.ts ***!
  \******************************************************/
/*! exports provided: BackendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendComponent", function() { return BackendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BackendComponent = /** @class */ (function () {
    function BackendComponent(data, router, route) {
        this.data = data;
        this.router = router;
        this.route = route;
        this.defimg = true;
    }
    BackendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menus = this.data.getMenus();
        this.getNowTime();
        this.route.queryParams.subscribe(function (queryParams) {
            if (queryParams.showDef)
                _this.defimg = false;
        });
    };
    BackendComponent.prototype.getNowTime = function () {
        var _this = this;
        var week = this.data.getNowWeek();
        setInterval(function () {
            var time = new Date().toLocaleString();
            _this.nowTime = week.concat(' ').concat(time);
        });
    };
    BackendComponent.prototype.selectContent = function (path) {
        this.defimg = false;
        this.router.navigate(['backend/'.concat(path)]);
    };
    BackendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backend',
            template: __webpack_require__(/*! ./backend.component.html */ "./src/app/backend/backend/backend.component.html"),
            styles: [__webpack_require__(/*! ./backend.component.scss */ "./src/app/backend/backend/backend.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BackendComponent);
    return BackendComponent;
}());



/***/ }),

/***/ "./src/app/backend/basic.configuration/domain/domain.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/backend/basic.configuration/domain/domain.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"stitle\">跨域配置 .java文件</div>\n<div><span class=\"keyword\">import </span>org.springframework.web.cors.CorsConfiguration;</div>\n<div><span class=\"keyword\">import </span>org.springframework.web.cors.UrlBasedCorsConfigurationSource;</div>\n<div><span class=\"keyword\">import </span>org.springframework.web.filter.CorsFilter;</div>\n<br>\n<div class=\"note\">@Configuration</div>\n<div><span class=\"keyword\">public  class</span> CrossOriginConfig {{brace}}</div>\n<br>\n<div class=\"function-div\"><span class=\"keyword\">public</span> CorsConfiguration <span class=\"function\">buildConfig</span>() {{brace}}</div>  \n<div class=\"content\">CorsConfiguration corsConfiguration = <span class=\"keyword\">new </span><span class=\"function\">CorsConfiguration</span>();</div>\n<div class=\"content\">corsConfiguration.<span class=\"function\">addAllowedOrigin</span>(\"*\");<span class=\"explain\">//允许所有的域名</span></div>\n<div class=\"content\">corsConfiguration.<span class=\"function\">addAllowedHeader</span>(\"*\");<span class=\"explain\">//允许任何头</span></div>\n<div class=\"content\">corsConfiguration.<span class=\"function\">addAllowedMethod</span>(\"*\");<span class=\"explain\">//允许任何方法post/get等</span></div>\n<div class=\"content\">return corsConfiguration;</div>\n<div class=\"function-div\">}</div>\n<br>\n<div class=\"note function-div\">@Bean</div>\n<div class=\"function-div\"><span class=\"keyword\">public</span> CorsFilter <span class=\"function\">corsFilter</span>() {{brace}}</div>  \n<div class=\"content\">UrlBasedCorsConfigurationSource source = <span class=\"keyword\">new </span><span class=\"function\">UrlBasedCorsConfigurationSource</span>();</div>\n<div class=\"content\">source.<span class=\"function\">registerCorsConfiguration</span>(\"/**\", <span class=\"function\">buildConfig</span>());</div>\n<div class=\"content\">return <span class=\"keyword\">new </span><span class=\"function\">CorsFilter</span>(source);</div>\n<div class=\"function-div\">}</div>\n<div>}</div>"

/***/ }),

/***/ "./src/app/backend/basic.configuration/domain/domain.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/backend/basic.configuration/domain/domain.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvYmFzaWMuY29uZmlndXJhdGlvbi9kb21haW4vZG9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/backend/basic.configuration/domain/domain.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/backend/basic.configuration/domain/domain.component.ts ***!
  \************************************************************************/
/*! exports provided: DomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainComponent", function() { return DomainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DomainComponent = /** @class */ (function () {
    function DomainComponent() {
        this.brace = '{';
    }
    DomainComponent.prototype.ngOnInit = function () {
    };
    DomainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-domain',
            template: __webpack_require__(/*! ./domain.component.html */ "./src/app/backend/basic.configuration/domain/domain.component.html"),
            styles: [__webpack_require__(/*! ./domain.component.scss */ "./src/app/backend/basic.configuration/domain/domain.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DomainComponent);
    return DomainComponent;
}());



/***/ }),

/***/ "./src/app/backend/basic.configuration/exception/exception.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/backend/basic.configuration/exception/exception.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"stitle\">@ControllerAdvice全局异常处理</div>\n<div><span class=\"keyword\">import </span>org.springframework.web.bind.annotation.ControllerAdvice;</div>\n<div><span class=\"keyword\">import </span>org.springframework.web.bind.annotation.ExceptionHandler;</div>\n<div class=\"explain\">/**</div>\n<div class=\"explain\">* 全局异常处理，支持的限定范围</div>\n<div class=\"explain\">* 按注解：@ControllerAdvice(annotations = RestController.class)</div>\n<div class=\"explain\">* 按包名：@ControllerAdvice(\"org.example.controllers\")</div>\n<div class=\"explain\">按类型：@ControllerAdvice(assignableTypes = {{brace}}ControllerInterface.class, AbstractController.class})</div>\n<div class=\"explain\">*/</div>\n<div class=\"note\">@ControllerAdvice</div>\n<div><span class=\"keyword\">public class </span>ExceptionHandle {{brace}}</div>\n<br>\n<div class=\"function-div\"><span class=\"note\">@ExceptionHandler </span>(value = Exception.class)\n  <span class=\"explain\">//指定捕获的异常,多个异常value = {{brace}}Exception.class,IOException.class}</span></div>\n<div class=\"function-div\"><span class=\"note\">@ResponseBody</span><span class=\"explain\">//将内容转换成JSON格式</span></div>\n<div class=\"function-div\"><span class=\"keyword\">public </span>Map <span class=\"function\">exceptionHandler</span>(HttpServletRequest request,Exception e) {{brace}}</div>\n<div class=\"content explain\">//根据不同的异常做处理</div>\n<div class=\"content\">request.<span class=\"function\">getRequestURL</span>();<span class=\"explain\">//获取请求路径</span></div>\n<div class=\"content explain\">...也就是可以通过HTTP来获取前端传递的数据</div>\n<div class=\"content\">e.<span class=\"function\">getMessage</span>();<span class=\"explain\"></span>//获取异常信息</div>\n<div class=\"content\"><span class=\"keyword\">return new </span><span class=\"function\">HashMap</span>();<span class=\"explain\">//这里返回的map是自己需要去封装的返回数据类</span></div>\n<div class=\"content\">}</div>\n<div>}</div>\n\n"

/***/ }),

/***/ "./src/app/backend/basic.configuration/exception/exception.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/backend/basic.configuration/exception/exception.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvYmFzaWMuY29uZmlndXJhdGlvbi9leGNlcHRpb24vZXhjZXB0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/backend/basic.configuration/exception/exception.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/backend/basic.configuration/exception/exception.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionComponent", function() { return ExceptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExceptionComponent = /** @class */ (function () {
    function ExceptionComponent() {
        this.brace = '{';
    }
    ExceptionComponent.prototype.ngOnInit = function () {
    };
    ExceptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exception',
            template: __webpack_require__(/*! ./exception.component.html */ "./src/app/backend/basic.configuration/exception/exception.component.html"),
            styles: [__webpack_require__(/*! ./exception.component.scss */ "./src/app/backend/basic.configuration/exception/exception.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExceptionComponent);
    return ExceptionComponent;
}());



/***/ }),

/***/ "./src/app/backend/basic.configuration/interceptor/interceptor.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/backend/basic.configuration/interceptor/interceptor.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\" type=\"pills\">\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">用户登录拦截器编辑 .java</div>\n    </ng-template>\n    <br>\n    <div><span class=\"keyword\">import </span>org.springframework.web.servlet.HandlerInterceptor;</div>\n    <div><span class=\"keyword\">import </span>org.springframework.web.servlet.ModelAndView;</div>\n    <br>\n    <div class=\"note\">@Component</div>\n    <div><span class=\"keyword\">public class </span>LoginInterceptor <span class=\"keyword\">implements </span>HandlerInterceptor{{brace}}</div>\n    <br>\n    <div class=\"note function-div\">@Override</div>\n    <div class=\"function-div\"><span class=\"keyword\">public boolean </span><span class=\"function\">preHandle</span>\n      (HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) {{brace}}</div>  \n    <div class=\"content\">String type = httpServletRequest.<span class=\"function\">getHeader</span>(\"X-Requested-With\");<span class=\"explain\">从session中获取登录后存入的用户信息，判断当前是否有用户登录 // XMLHttpRequest</span></div>\n    <div class=\"content\">String basePath = httpServletRequest.<span class=\"function\">getScheme</span>()  + \"://\" + httpServletRequest.\n      <span class=\"function\">getServerName</span>() + \":\" + httpServletRequest.\n      <span class=\"function\">getServerPort</span>() + httpServletRequest.\n      <span class=\"function\">getContextPath</span>() + \"/login.html\";<span class=\"explain\">//获取登录页面链接地址</span>\n    </div>\n    <br>\n    <div class=\"content\">...逻辑处理</div>\n    <br>\n    <div class=\"content\"><span class=\"explain\">/*由于AJAX不支持重定向所以这里给其返回一个标记也就是TIMEOUT让前端自己跳到login.html页面*/</span></div>\n    <div class=\"content\"><span class=\"keyword\">if </span>(type.equals(\"XMLHttpRequest\")) {{brace}}</div>\n    <div class=\"content\">httpServletResponse.<span class=\"function\">setHeader</span>(\"SESSIONSTATUS\",\"TIMEOUT\");</div>\n    <div class=\"content\">httpServletResponse.<span class=\"function\">setHeader</span>(\"CONTEXTPATH\",basePath);</div>\n    <div class=\"content\">httpServletResponse.<span class=\"function\">setStatus</span>(HttpServletResponse.SC_FORBIDDEN);</div>\n    <div class=\"content\"><span class=\"keyword\">return false</span>;</div>\n    <div class=\"content\">} <span class=\"keyword\">else </span>{{brace}}</div>\n    <div class=\"content\">httpServletResponse.<span class=\"function\">sendRedirect</span>(basePath);</div>\n    <div class=\"content\"><span class=\"keyword\">return false</span>;</div>\n    <div class=\"content\">}</div>\n    <div class=\"content\">}</div>\n    <br>\n    <div class=\"function-div note\">@Override</div>\n    <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">postHandle</span>\n      (HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o,ModelAndView modelAndView) {{brace}}</div>  \n    <div class=\"content\">System.out.println(\"访问Controller开始时的操作\");</div>\n    <div class=\"content\">}</div>\n    <br>\n    <div class=\"function-div note\">@Override</div>\n    <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">afterCompletion</span>\n      (HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex){{brace}}</div> \n    <div class=\"content\">System.out.println(\"访问Controller结束时的操作\");</div>\n    <div class=\"content\">}</div>\n    <div>}</div>\n\n  </tab>\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">拦截器配置 .java</div>\n    </ng-template>\n    <br>\n    <div><span class=\"keyword\">import </span>org.springframework.util.ResourceUtils;</div>\n    <div><span class=\"keyword\">import </span>org.springframework.web.servlet.config.annotation.*;</div>\n    <br>\n    <div class=\"note\">@Configuration</div>\n    <div><span class=\"keyword\">public class </span>IntereceptorConfig <span class=\"keyword\">implements </span>WebMvcConfigurer {{brace}}</div>\n    <br>\n    <div class=\"content note\">@Override</div>\n    <div class=\"content\"><span class=\"keyword\">public void </span><span class=\"function\">addInterceptors </span>(InterceptorRegistry registry) {{brace}}</div>\n    <div class=\"content\">List{{lefta}}String> pathPatterns = <span class=\"keyword\">new </span> ArrayList{{lefta}} {{rightb}}();<span class=\"explain\">//此处的集合装的是一系列不应该被拦截的地址</span></div>\n    <div class=\"content\">pathPatterns.add(\"/path1/path2\");</div>\n    <div class=\"content\">pathPatterns.add(\"/path1/path3\");</div>\n    <div class=\"content\">InterceptorRegistration registration = registry.<span class=\"explain\">addInterceptor</span>(<span class=\"keyword\">new </span> LoginInterceptor());<span class=\"explain\">//这里的LoginInterceptor对应上面的拦截器具体操作类</span></div>\n    <div class=\"content\">registration.<span class=\"function\">addPathPatterns</span>(\"/**\");</div>\n    <div class=\"content\">registration.<span class=\"function\">excludePathPatterns</span>(pathPatterns);</div>\n    <div class=\"content\">}</div>\n    <div>}</div>\n  </tab>\n</tabset>"

/***/ }),

/***/ "./src/app/backend/basic.configuration/interceptor/interceptor.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/backend/basic.configuration/interceptor/interceptor.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customClass {\n  background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja2VuZC9iYXNpYy5jb25maWd1cmF0aW9uL2ludGVyY2VwdG9yL0Q6XFxnaXRcXGNoZXZ5c2t5L3NyY1xcYXBwXFxiYWNrZW5kXFxiYXNpYy5jb25maWd1cmF0aW9uXFxpbnRlcmNlcHRvclxcaW50ZXJjZXB0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvYmFzaWMuY29uZmlndXJhdGlvbi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21DbGFzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/backend/basic.configuration/interceptor/interceptor.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/backend/basic.configuration/interceptor/interceptor.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InterceptorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorComponent", function() { return InterceptorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InterceptorComponent = /** @class */ (function () {
    function InterceptorComponent() {
        this.brace = '{';
        this.lefta = '<';
        this.rightb = '>';
    }
    InterceptorComponent.prototype.ngOnInit = function () {
    };
    InterceptorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interceptor',
            template: __webpack_require__(/*! ./interceptor.component.html */ "./src/app/backend/basic.configuration/interceptor/interceptor.component.html"),
            styles: [__webpack_require__(/*! ./interceptor.component.scss */ "./src/app/backend/basic.configuration/interceptor/interceptor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InterceptorComponent);
    return InterceptorComponent;
}());



/***/ }),

/***/ "./src/app/backend/code.source/map.string/map.string.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/backend/code.source/map.string/map.string.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\" type=\"pills\">\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">String StringBuilder StringBuffer</div>\n    </ng-template>\n    <br>\n        String是字符串常量，适用于少量的字符串操作。StringBuilder和StringBuffer是字符串变量<br>\n        StringBuffer的方法被<span class=\"note\">synchronized</span>修饰，所以线程是安全的，在多线程运行中，建议StringBuffer，在单线程中建议采用运行速度较快的StringBuilder<br>\n        <span class=\"keyword\">字符串拼接的方法</span>>：加号（+）、String.concat()、StringUtils.join()、StringBuilder和StringBuffer的append()+和concat()适用于小数据量操作，+号在拼接字符串时是在new StringBuilder()，所以在循环中拼接字符串不建议使用加号，这样频繁的new 对象造成资源浪费，应该采用StringBuilder的append()\n        concat()其实质是数组的拷贝，在内存中的处理都是原子性操作速度非常快，但在返回时new了一个对象，最终限制了其速度<br>\n        StringBuffer 和 StringBuilder 的append方法都继承自AbstractStringBuilder，整个逻辑都只做字符数组的加长，拷贝，到最后也不会创建新的String对象，所以速度很快适用于大数据量的操作\n        StringUtils.join() 方法 适用于将ArrayList转换成字符串，速度快，可以省掉循环读取ArrayList的代码<br>\n       <span class=\"keyword\">StringBuilder置空的方法</span>：1、重新new对象（不建议）2、delete(start,end) 3、setLength(0),后两种方法速度较快<br>\n  </tab>\n  <tab>\n      <ng-template tabHeading>\n        <div class=\"stitle\">Map</div>\n      </ng-template>\n      <br>\n          将map数据置空：map.clear() <br>\n          将一个map中的数据添加进来：putAll()<br>\n          是否包含某个key：containsKey() <br>\n          是否包含某个value：containsValue() <br>\n    </tab>\n</tabset>\n"

/***/ }),

/***/ "./src/app/backend/code.source/map.string/map.string.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/backend/code.source/map.string/map.string.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvY29kZS5zb3VyY2UvbWFwLnN0cmluZy9tYXAuc3RyaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/backend/code.source/map.string/map.string.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/backend/code.source/map.string/map.string.component.ts ***!
  \************************************************************************/
/*! exports provided: MapStringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapStringComponent", function() { return MapStringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapStringComponent = /** @class */ (function () {
    function MapStringComponent() {
    }
    MapStringComponent.prototype.ngOnInit = function () {
    };
    MapStringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map.string',
            template: __webpack_require__(/*! ./map.string.component.html */ "./src/app/backend/code.source/map.string/map.string.component.html"),
            styles: [__webpack_require__(/*! ./map.string.component.scss */ "./src/app/backend/code.source/map.string/map.string.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapStringComponent);
    return MapStringComponent;
}());



/***/ }),

/***/ "./src/app/backend/development.kit/idea/idea.component.html":
/*!******************************************************************!*\
  !*** ./src/app/backend/development.kit/idea/idea.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"stitle\">IDEA 从数据库生成Spring Data JPA 实体类</div>\n    <div class=\"keyword\">FIRST：</div>\n    调出 Persistence 窗口，左上角File—>Project Structure—>model—> + —>JPA<br>\n    <div class=\"keyword\">SECOND:</div>\n    左侧点击选择Persistence,这时在项目结构显示的下方会显示Persistence的信息，鼠标右键项目名称，选择Generate Persistence Mapping -> By Database Schema\n    选择数据源Choose Data Source 若是还没有配置数据库可以点击该项后的...，弹出Data Source and Driver窗口，点击+，按要求配置好用户名、密码、数据库地址，\n    注意这个时候点击测试连接的按钮若是为灰色，则可能是没有下载连接驱动，点击下方的下载按钮，之后测试连接；<br>\n    <div class=\"keyword\">THIRD：</div>\n    配置好了数据源后，选择实体类生成的位置，即package包的位置,之后可以配置实体类名字的前后缀，点击刷新按钮下方显示出数据库中的表，选择对应的表生成即可。<br>\n"

/***/ }),

/***/ "./src/app/backend/development.kit/idea/idea.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/backend/development.kit/idea/idea.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvZGV2ZWxvcG1lbnQua2l0L2lkZWEvaWRlYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/backend/development.kit/idea/idea.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/backend/development.kit/idea/idea.component.ts ***!
  \****************************************************************/
/*! exports provided: IdeaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaComponent", function() { return IdeaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IdeaComponent = /** @class */ (function () {
    function IdeaComponent() {
    }
    IdeaComponent.prototype.ngOnInit = function () {
    };
    IdeaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-idea',
            template: __webpack_require__(/*! ./idea.component.html */ "./src/app/backend/development.kit/idea/idea.component.html"),
            styles: [__webpack_require__(/*! ./idea.component.scss */ "./src/app/backend/development.kit/idea/idea.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IdeaComponent);
    return IdeaComponent;
}());



/***/ }),

/***/ "./src/app/backend/plug/dubbo/dubbo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/backend/plug/dubbo/dubbo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\" type=\"pills\">\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">Dubbo 运用</div>\n    </ng-template>\n    <br>\n    <a href=\"https://github.com/chevysky/fireworm\">点击查看 github 代码分享</a>\n    <br>\n    <span class=\"keyword\">第一步</span>：<span class=\"function\">下载安装zookeeper</span><br>\n    <span class=\"keyword\">第二步</span>：<span class=\"function\">下载安装dubbo-admin</span><br>\n    <span class=\"keyword\">第三步</span>：编写一个公共的API包，内容为传递数据的实体类和接口定义，用于消费端consumer的调用和提供端provider去实现。注：传递的实体类需要序列化，所以需要在实体类中实现java.io.Serializable\n    编写完成，maven打包，并将其添加到maven仓库：<br>\n    mvn install:install-file -Dfile=C:\\Users\\Administrator\\.m2\\commom-0.0.1-SNAPSHOT.jar -DgroupId=com.dobbo -DartifactId=commom -Dversion=0.0.1-SNAPSHOT -Dpackaging=jar<br><br>\n    <span class=\"keyword\">第四步</span>：搭建springboot项目，编辑提供者provider<br>\n    <span class=\"keyword\">第五步</span>：搭建springboot项目，编辑消费端consumer<br>\n    <span class=\"keyword\">第六步</span>：<a href=\"javascrips:0\" (click) = \"openPath('backend/cross/domain')\">跨域配置</a><br>\n    <span class=\"keyword\">第七步</span>：前端调用，如在地址栏输入http://localhost:8023/user/info\n    <div class=\"stitle\">Provider/Consumer pom.xml 添加架包</div>\n    <div class=\"explain\">dubbo</div>\n    <div class=\"function-div sign\">{{lefta}}dependency></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}groupId></span>com.alibaba.boot<span class=\"sign\">{{lefta}}/groupId></span></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}artifactId></span>dubbo-spring-boot-starter<span class=\"sign\">{{lefta}}/artifactId></span></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}version></span>0.2.0<span class=\"sign\">{{lefta}}/version></span></div>\n    <div class=\"function-div sign\">{{lefta}}/dependency></div>\n    <br>\n    <div class=\"explain\">zookeeper</div>\n    <div class=\"function-div sign\">{{lefta}}dependency></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}groupId></span>com.101tec<span class=\"sign\">{{lefta}}/groupId></span></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}artifactId></span>zkclient<span class=\"sign\">{{lefta}}/artifactId></span></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}version></span>0.11<span class=\"sign\">{{lefta}}/version></span></div>\n    <div class=\"function-div sign\">{{lefta}}/dependency></div>\n  </tab>\n  <tab>\n      <ng-template tabHeading>\n          <div class=\"stitle\">Provider</div>\n        </ng-template>\n        <br>\n        <div class=\"stitle\">application.properties 配置</div>\n        <div class=\"explain\">#服务端口</div>\n        <div>server.port = 8022</div>\n        <div class=\"explain\">#数据库连接</div>\n        spring.datasource.driver-class-name=com.mysql.jdbc.Driver<br>\n        spring.datasource.username=****<br>\n        spring.datasource.password=****<br>\n        spring.datasource.url=jdbc:mysql://localhost:3306/****?characterEncoding=utf-8<br>\n        spring.datasource.type=com.alibaba.druid.pool.DruidDataSource<br>\n        <div class=\"explain\">#dubbo服务端口，我们无需知道dubbo服务运行在哪个端口，故将其设为随机端口</div>\n        dubbo.protocol.port = -1<br>\n        <div class=\"explain\">#dubbo服务名称</div>\n        dubbo.application.name = provider<br>\n        <div class=\"explain\">#dubbo服务所在包路径</div>\n        dubbo.scan.base-packages = com.dubbo.provider.service<br>\n        <div class=\"explain\">#注册中心地址</div>\n        dubbo.registry.address = zookeeper://127.0.0.1:2181<br>\n        <div class=\"explain\">#设置服务的日志输出级别为debug级</div>\n        logging.level.com.dubbo.provider = debug<br>\n        <div class=\"stitle\">将加入mvan本地库的公共API jar包引入到provider中</div>\n        <div class=\"function-div sign\">{{lefta}}dependency></div>\n        <div class=\"content\"><span class=\"sign\">{{lefta}}groupId></span>com.dobbo<span class=\"sign\">{{lefta}}/groupId></span></div>\n        <div class=\"content\"><span class=\"sign\">{{lefta}}artifactId></span>commom<span class=\"sign\">{{lefta}}/artifactId></span></div>\n        <div class=\"content\"><span class=\"sign\">{{lefta}}version></span>0.0.1-SNAPSHOT<span class=\"sign\">{{lefta}}/version></span></div>\n        <div class=\"function-div sign\">{{lefta}}/dependency></div>\n        <div class=\"stitle\">编写公共服务接口的实现类</div>\n        <span class=\"keyword\">import </span>com.alibaba.dubbo.config.annotation.Service;\n        <br>\n        <div class=\"remark\">备注：在项目启动类上加dubbo的注解@EnableDubbo目的在于识别dubbo的Service注解</div>\n        <br>\n        <div class=\"note\">@Service</div>\n        <div><span class=\"keyword\">public class </span>UserServiceImpl <span class=\"keyword\">implements</span> UserService {{brace}}</div>\n        <br>\n        <div class=\"function-div note\">@Override</div>\n        <div class=\"function-div\"><span class=\"keyword\">public </span>UserEntity <span class=\"function\">getUserInfo</span>() {{brace}}</div>\n        <div class=\"content\">UserEntity user = <span class=\"keyword\">new</span> <span class=\"function\">UserEntity</span>();</div>\n        <div class=\"content\">具体的业务操作...</div>\n        <div class=\"content\"><span class=\"keyword\">return </span>user;</div>\n        <div class=\"function-div\">}</div>\n        <div>}</div>\n  </tab>\n  <tab>\n      <ng-template tabHeading>\n          <div class=\"stitle\">Consumer</div>\n        </ng-template>\n        <br>\n        将加入mvan本地库的公共API jar包引入到consumer中<br>\n        <div class=\"stitle\">application.properties 配置</div>\n        <div class=\"explain\">#服务端口</div>\n        server.port=8023<br>\n        <div class=\"explain\">#数据库连接</div>\n        spring.datasource.driver-class-name=com.mysql.jdbc.Driver<br>\n        spring.datasource.username=****<br>\n        spring.datasource.password=****<br>\n        spring.datasource.url=jdbc:mysql://localhost:3306/****?characterEncoding=utf-8<br>\n        spring.datasource.type=com.alibaba.druid.pool.DruidDataSource<br>\n        <div class=\"explain\">#消费者名称</div>\n        dubbo.application.name=consumer<br>\n        <div class=\"explain\">#需要使用到提供者服务的包路径</div>\n        dubbo.scan.base-packages=com.dubbo.consumer.controller<br>\n        <div class=\"explain\">#注册中心地址</div>\n        dubbo.registry.address=zookeeper://127.0.0.1:2181<br>\n        <div class=\"explain\">#DUBBO 2.5.8重构了telnet端口与DUBBO协议的端口是不同的端口，默认为22222，这里可以手动修改避免端口被占用</div>\n        dubbo.application.qos-enable=true<br>\n        dubbo.application.qos-port=33333<br>\n        <div class=\"explain\">#拒绝远端主机发出的命令，只允许服务本机执行,true有可能带来安全风险</div>\n        dubbo.application.qos-accept-foreign-ip=false<br>\n        <div class=\"stitle\">编辑消费端的controller调取服务接口</div>\n        <span class=\"keyword\">import </span>com.alibaba.dubbo.config.annotation.Reference;<br>\n        <div class=\"note\">@RestController</div>\n        <span class=\"note\">@RequestMapping</span>(\"/user\")<br>\n        <span class=\"keyword\">public class </span>UserController {{brace}}<br>\n        <br>\n        <div class=\"function-div note\">@Reference</div>\n        <div class=\"function-div\"><span class=\"keyword\">private </span>UserService userService;</div>\n        <br>\n        <div class=\"function-div\"><span class=\"note\">@RequestMapping</span>(value = \"/info\")</div>\n        <div class=\"function-div\"><span class=\"keyword\">public </span>UserEntity <span class=\"function\">getUserInfo</span>() {{brace}}</div>\n        <div class=\"content\">UserEntity user = userService.<span class=\"function\">getUserInfo</span>();</div> \n        <div class=\"content\">System.out.println(user);</div>\n        <div class=\"content\"><span class=\"keyword\">return</span>user;</div>\n        <div class=\"function-div\">}</div>\n        <div>}</div>\n  </tab>\n</tabset>\n"

/***/ }),

/***/ "./src/app/backend/plug/dubbo/dubbo.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/backend/plug/dubbo/dubbo.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGx1Zy9kdWJiby9kdWJiby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/backend/plug/dubbo/dubbo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/backend/plug/dubbo/dubbo.component.ts ***!
  \*******************************************************/
/*! exports provided: DubboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DubboComponent", function() { return DubboComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DubboComponent = /** @class */ (function () {
    function DubboComponent() {
        this.brace = '{';
        this.lefta = '<';
    }
    DubboComponent.prototype.ngOnInit = function () {
    };
    DubboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dubbo',
            template: __webpack_require__(/*! ./dubbo.component.html */ "./src/app/backend/plug/dubbo/dubbo.component.html"),
            styles: [__webpack_require__(/*! ./dubbo.component.scss */ "./src/app/backend/plug/dubbo/dubbo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DubboComponent);
    return DubboComponent;
}());



/***/ }),

/***/ "./src/app/backend/plug/ehcache/ehcache.component.html":
/*!*************************************************************!*\
  !*** ./src/app/backend/plug/ehcache/ehcache.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\" type=\"pills\">\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">Ehcache 基本运用</div>\n    </ng-template>\n    <br>\n    <a href=\"https://github.com/chevysky/fireworm\">点击查看 github 代码分享</a>\n    <br>\n    <div class=\"function\">application.properties 文件配置</div>\n    <div class=\"function-div\">spring.cache.ehcache.config=classpath:ehcache.xml</div>\n    <br>\n    <div class=\"function\">pom.xml</div>\n    <div class=\"function-div explain\">{{lefta}}!--开启缓存支持{{ex}}</div>\n    <div class=\"function-div sign\">{{lefta}}dependency></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}groupId></span>org.springframework.boot<span class=\"sign\">{{leftb}}groupId></span></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}artifactId></span>spring-boot-starter-cache<span class=\"sign\">{{leftb}}artifactId></span></div>\n    <div class=\"function-div sign\">{{leftb}}dependency></div>\n    <br>\n    <div class=\"function-div explain\">{{lefta}}!--ehcache架包{{ex}}</div>\n    <div class=\"function-div sign\">{{lefta}}dependency></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}groupId></span>net.sf.ehcache<span class=\"sign\">{{lefta}}/groupId></span></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}artifactId></span>ehcache<span class=\"sign\">{{lefta}}/artifactId></span></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}version></span>2.10.6<span class=\"sign\">{{lefta}}/version></span></div>\n    <div class=\"function-div sign\">{{lefta}}/dependency></div>\n  </tab> \n\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">ehcache.xml 配置</div>\n    </ng-template>\n    <br>\n    <div>{{lefta}}ehcache xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"../config/ehcache.xsd\"></div>\n    <div>{{lefta}}<span class=\"sign\">diskStore </span>path=\"java.io.tmpdir/Tmp_EhCache\"/></div>\n    <div class=\"explain\">{{lefta}}!--</div>\n    <div class=\"function-div explain\">eternal:对象是否永久有效，设置后，timeout将不起作用;</div>\n    <div class=\"function-div explain\">memoryStoreEvictionPolicy:当达到最大存储限制时，根据指定策略清理内存LRU(Least Recently Used最近很少使用)，FIFO（先进先出），LFU(Least Frequently Used较少使用);</div>\n    <div class=\"function-div explain\">timeToIdleSeconds:设置对象在失效前的允许闲置时间(单位：秒);</div>\n    <div class=\"function-div explain\">timeToLiveSeconds:设置对象在失效前允许存活时间(单位：秒);</div>\n    <div class=\"function-div explain\">maxElementsOnDisk:硬盘最大缓存个数;</div>\n    <div class=\"function-div explain\">diskExpiryThreadIntervalSeconds:磁盘失效线程运行时间间隔，默认是120秒;</div>\n    <div class=\"function-div explain\">clearOnFlush:内存数量最大时是否清除;</div>\n    <div class=\"function-div explain\">diskPersistent:是否缓存虚拟机重启期数据;</div>\n    <div class=\"function-div explain\">diskSpoolBufferSizeMB:这个参数设置DiskStore（磁盘缓存）的缓存区大小。默认是30MB。每个Cache都应该有自己的一个缓冲区;</div>\n    <div class=\"function-div explain\">overflowToDisk:当内存中对象数量达到maxElementsInMemory时，Ehcache将会对象写到磁盘中;</div>\n    <div class=\"explain\">{{ex}}</div>\n    <br>\n    <div class=\"sign\">{{lefta}}defaultCache</div>\n    <div class=\"content\">maxElementsInMemory=\"10000\"</div>\n    <div class=\"content\">eternal=\"false\"</div>\n    <div class=\"content\">timeToIdleSeconds=\"120\"</div>\n    <div class=\"content\">timeToLiveSeconds=\"120\"</div>\n    <div class=\"content\">maxElementsOnDisk=\"10000000\"</div>\n    <div class=\"content\">diskExpiryThreadIntervalSeconds=\"120\"</div>\n    <div class=\"content\">memoryStoreEvictionPolicy=\"LRU\"></div>\n    <div class=\"content\">{{lefta}}<span class=\"sign\">persistence </span>strategy=\"localTempSwap\"/></div>\n    <div class=\"sign\">{{lefta}}/defaultCache</div>\n    <br>\n    <div class=\"sign\">{{lefta}}cache</div>\n    <div class=\"content\">name=\"users\"</div>\n    <div class=\"content\">maxElementsInMemory=\"10000\"</div>\n    <div class=\"content\">eternal=\"false\"</div>\n    <div class=\"content\">timeToIdleSeconds=\"120\"</div>\n    <div class=\"content\">timeToLiveSeconds=\"120\"</div>\n    <div class=\"content\">maxElementsOnDisk=\"10000000\"</div>\n    <div class=\"content\">diskExpiryThreadIntervalSeconds=\"120\"</div>\n    <div class=\"content\">memoryStoreEvictionPolicy=\"LRU\"></div>\n    <div class=\"content\">{{lefta}}<span class=\"sign\">persistence </span>strategy=\"localTempSwap\"/></div>\n    <div class=\"sign\">{{lefta}}/cache</div>\n  </tab> \n</tabset>\n"

/***/ }),

/***/ "./src/app/backend/plug/ehcache/ehcache.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/backend/plug/ehcache/ehcache.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGx1Zy9laGNhY2hlL2VoY2FjaGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/backend/plug/ehcache/ehcache.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/backend/plug/ehcache/ehcache.component.ts ***!
  \***********************************************************/
/*! exports provided: EhcacheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EhcacheComponent", function() { return EhcacheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EhcacheComponent = /** @class */ (function () {
    function EhcacheComponent() {
        this.brace = '{';
        this.lefta = '<';
        this.leftb = '</';
        this.ex = '-->';
    }
    EhcacheComponent.prototype.ngOnInit = function () {
    };
    EhcacheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ehcache',
            template: __webpack_require__(/*! ./ehcache.component.html */ "./src/app/backend/plug/ehcache/ehcache.component.html"),
            styles: [__webpack_require__(/*! ./ehcache.component.scss */ "./src/app/backend/plug/ehcache/ehcache.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EhcacheComponent);
    return EhcacheComponent;
}());



/***/ }),

/***/ "./src/app/backend/plug/rabbitmq/rabbitmq.component.html":
/*!***************************************************************!*\
  !*** ./src/app/backend/plug/rabbitmq/rabbitmq.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\" type=\"pills\">\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">RabbitMQ 运用</div>\n    </ng-template>\n    <br>\n    <a href=\"https://github.com/chevysky/fireworm\">点击查看 github 代码分享</a>\n    <br>\n    <div class=\"stitle\">RabbitMQ几个重要概念</div>\n    a) 虚拟主机vhost<br>\n    b）消息通道channel<br>\n    c) 交换机exchange 交换机有四种模式:<br>\n    1、路由模式direct :\"先匹配, 再投送\"。即在绑定时设定一个 routing_key, 消息的routing_key 匹配时, 才会被交换器投送到绑定的队列中去。<br>\n    2、通配符模式topic :​类似路由模式，但是routing_key支持模糊匹配，按规则转发消息（最灵活）。符号“#”匹配一个或多个词，符号“*”匹配不多不少一个词。<br>\n    3、发布订阅模式fanout :​转发消息到所有绑定队列，忽略routing_key。<br>\n    4、headers :​ 设置header attribute参数类型的交换机。相较于 direct 和 topic 固定地使用 routing_key , headers 则是一个自定义匹配规则的类型，忽略routing_key。在队列与交换器绑定时, 会设定一组键值对规则, 消息中也包括一组键值对( headers 属性), 当这些键值对有一对, 或全部匹配时, 消息被投送到对应队列。\n​    在绑定Queue与Exchange时指定一组键值对，当消息发送到RabbitMQ时会取到该消息的headers与Exchange绑定时指定的键值对进行匹配。如果完全匹配则消息会路由到该队列，否则不会路由到该队列。headers属性是一个键值对，可以是Hashtable，键值对的值可以是任何类型。<br>\n<br>\n   <div class=\"keyword\">匹配规则x-match有下列两种类型：</div>\n    x-match = all ：表示所有的键值对都匹配才能接受到消息<br>\n    x-match = any ：表示只要有键值对匹配就能接受到消息<br>\n   <div class=\"stitle\">安装</div>\n    1、由于RabbitMQ是Erlang实现的 所以要先安装Erlang Erlang是面向并发的编程语言<br>\n       配置Erlang的环境变量<br>\n    2、官网下载RabbitMQ<br>\n    激活RabbitMQ Management Plugin<br>\n    cd到....\\sbin\\rabbitmq-plugins.bat enable rabbitmq_management<br>\n    激活之后需要重启服务<br>\n    net stop RabbitMQ && net start RabbitMQ<br>\n    查看用户目录 默认的用户名密码guest<br>\n    rabbitmqctl.bat list_users<br>\n    <div class=\"keyword\">新增用户</div>\n    rabbitmqctl.bat add_user username password<br>\n    rabbitmq中的角色有 超级管理员(administrator)、监控者(monitoring)、策略制定者(policymaker)、普通管理者(management)<br>\n    rabbitmqctl.bat set_user_tags username administrator<br>\n    <div class=\"keyword\">同时设置多个角色</div>\n    rabbitmqctl.bat set_user_tags username tags1 tags2<br>\n    <br><div class=\"keyword\">修改密码</div>\n    rabbitmqctl.bat change_password username newpassword<br>\n    <div class=\"keyword\">删除用户</div>\n    rabbitmqctl.bat delete_user username<br>\n    3、浏览器访问 <a href=\"http://localhost:15672 \"></a><br>\n    <div class=\"stitle\">RabbitMQ 消息确认机制</div>\n    消息持久化解决服务器异常导致的消息丢失。<br>\n    但是若消息未成功发送至broker，消息不能持久化，所以这里RabbitMQ采用了两种方式解决:<br>\n    1、通过AMQP事务机制实现，这也是AMQP协议层面提供的解决方案:<br>\n    RabbitMQ中与事务机制有关的方法有三个：txSelect(), txCommit()以及txRollback(), txSelect用于将当前channel设置成transaction模式，txCommit用于提交事务，txRollback用于回滚事务，在通过txSelect开启事务之后，我们便可以发布消息给broker代理服务器了，如果txCommit提交成功了，则消息一定到达了broker了，如果在txCommit执行之前broker异常崩溃或者由于其他原因抛出异常，这个时候我们便可以捕获异常通过txRollback回滚事务了。\n    <br>\n    事务确实能够解决producer与broker之间消息确认的问题，只有消息成功被broker接受，事务提交才能成功，否则我们便可以在捕获异常进行事务回滚操作同时进行消息重发，但是使用事务机制的话会降低RabbitMQ的性能，那么有没有更好的方法既能保障producer知道消息已经正确送到，又能基本上不带来性能上的损失呢？从AMQP协议的层面看是没有更好的方法，但是RabbitMQ提供了一个更好的方案，即将channel信道设置成confirm模式。\n    <br>\n    2、通过将channel设置成confirm模式来实现；<br>\n    <a href=\"https://www.cnblogs.com/cord/p/9403364.html\">参考一</a>&nbsp;&nbsp;\n    <a href=\"https://www.cnblogs.com/ericli-ericli/p/5902270.html\">参考二</a>\n  </tab>\n\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">RabbitMQ 配置</div>\n    </ng-template>\n    <br>     \n    <div class=\"stitle\">RabbitmqConfiguration.java</div>\n    <span class=\"keyword\">import </span>org.springframework.amqp.core.*;\n    <div class=\"note\">@SpringBootConfiguration</div>\n    <span class=\"keyword\">public class </span>RabbitmqConfiguration {{brace}}\n    <br><br>\n    <div class=\"function-div explain\">在使用队列的时候需要，先在配置类中申明,也可以在可视化管理界面去添加队列,\n      默认的交换机类型是 direct \"先匹配, 再投送\"\n    </div>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span>(name = \"queueHello\")<span class=\"explain\">申明队列</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>Queue <span class=\"function\">queueHello</span>() {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return new </span>Queue(\"hello\",true,true,true);\n    <span class=\"explain\">Queue(String name, boolean durable, boolean exclusive, boolean autoDelete)</span></div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span>(name = \"queue\")<span class=\"explain\">申明队列queue，和下面的队列fanoutQueue做订阅模式的测试</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>Queue <span class=\"function\">queue</span>() {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return new </span>Queue(\"queue\",true,true,true);\n    <span class=\"explain\">Queue(String name, boolean durable, boolean exclusive, boolean autoDelete)</span></div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span>(name = \"fanoutQueue\")<span class=\"explain\">申明队列fanoutQueue与上面的队列做订阅模式测试展示</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>Queue <span class=\"function\">fanoutQueue</span>() {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return new </span>Queue(\"fanoutQueue\",true,true,true);\n    <span class=\"explain\">Queue(String name, boolean durable, boolean exclusive, boolean autoDelete)</span></div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"explain\">定义几个常量用来命名交换机名字</div>\n    <span class=\"keyword\">public static final </span>String topicExchangeName = \"topic\";<br>\n    <span class=\"keyword\">public static final </span>String fanoutExchange = \"fanout\";<br>\n    <span class=\"keyword\">public static final </span>String headersExchange = \"headers\";<br>\n    <br>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span><span class=\"explain\">声明Topic交换机</span></div>\n    <div class=\"function-div\">TopicExchange<span class=\"function\">topicExchange</span>() {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return new </span>TopicExchange(topicExchangeName);</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span><span class=\"explain\">将队列与Topic交换机进行绑定，并指定路由键</span></div>\n    <div class=\"function-div\">Binding<span class=\"function\">topicBinding</span>(<span class=\"note\">@Qualifier</span>(\"queueHello\") Queue queueHello, TopicExchange topicExchange) {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return </span>BindingBuilder.bind(queueHello).to(topicExchange).with(\"org.cord.#\");</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span><span class=\"explain\">声明fanout交换机</span></div>\n    <div class=\"function-div\">FanoutExchange<span class=\"function\">fanoutExchange</span>() {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return new </span>FanoutExchange(fanoutExchange);</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span><span class=\"explain\">将队列fanoutQueue与fanout交换机进行绑定</span></div>\n    <div class=\"function-div\">Binding<span class=\"function\">fanoutBinding</span>(<span class=\"note\">@Qualifier</span>(\"fanoutQueue\") Queue fanoutQueue,  FanoutExchange fanoutExchange) {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return </span>BindingBuilder.bind(fanoutQueue).to(fanoutExchange);</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span><span class=\"explain\">将队列queue与fanout交换机进行绑定</span></div>\n    <div class=\"function-div\">Binding<span class=\"function\">fanoutBind</span>(<span class=\"note\">@Qualifier</span>(\"queue\") Queue queue,  FanoutExchange fanoutExchange) {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return </span>BindingBuilder.bind(queue).to(fanoutExchange);</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span><span class=\"explain\">声明Headers交换机</span></div>\n    <div class=\"function-div\">HeadersExchange<span class=\"function\">headersExchange</span>() {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return new </span>HeadersExchange(headersExchange);</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div\"><span class=\"note\">@Bean</span><span class=\"explain\">将队列与headers交换机进行绑定</span></div>\n    <div class=\"function-div\">Binding<span class=\"function\">headersBinding</span>(<span class=\"note\">@Qualifier</span>(\"queue\") Queue queue,  HeadersExchange headersExchange) {{brace}}</div>\n    <div class=\"content\"> Map{{lefta}}String, Object> map = <span class=\"keyword\">new </span> HashMap{{lefta}} >();</div>\n    <div class=\"content\">map.put(\"First\",\"A\");</div>\n    <div class=\"content\">map.put(\"Fourth\",\"D\");</div>\n    <div class=\"content\"><span class=\"keyword\">return </span>BindingBuilder.bind(queue).to(headersExchange).<span class=\"function\">whereAny</span>(map).match();<span class=\"explain\">whereAny表示部分匹配，whereAll表示全部匹配</span></div>\n    <div class=\"function-div\">}</div>\n    <br>\n  <div>}</div>\n  <div class=\"stitle\">pom.xml</div>\n    <div class=\"sign\">{{lefta}}dependency></div>\n    <div class=\"function-div\"><span class=\"sign\">{{lefta}}groupId></span>org.springframework.boot<span class=\"sign\">{{lefta}}/groupId></span></div>\n    <div class=\"function-div\"><span class=\"sign\">{{lefta}}artifactId></span>spring-boot-starter-amqp<span class=\"sign\">{{lefta}}/artifactId></span></div>\n    <div class=\"sign\">{{lefta}}/dependency></div>\n    <br>\n    <div class=\"stitle\">application.properties</div>\n    <div class=\"explain\">#rabbitmq</div>\n    spring.rabbitmq.host=127.0.0.1<br>\n    spring.rabbitmq.port=5672<br>\n    spring.rabbitmq.username=guest<br>\n    spring.rabbitmq.password=guest<br>\n    spring.rabbitmq.publisher-confirms=true <span class=\"explain\">Enable publisher confirms</span><br>\n    spring.rabbitmq.publisher-returns=true <span class=\"explain\">Enable publisher returns</span><br>\n    spring.rabbitmq.template.mandatory=true <span class=\"explain\">Enable mandatory messages</span><br>\n    <br>\n  </tab>\n\n  <tab>\n      <ng-template tabHeading>\n          <div class=\"stitle\">Sender 发送者</div>\n        </ng-template>\n        <br>\n        <span class=\"keyword\">import </span>org.springframework.amqp.core.AmqpTemplate;\n        <div class=\"note\">@Service</div>\n        <span class=\"keyword\">public class </span>UserMessageSendImpl <span class=\"keyword\">implements </span>UserMessageSend {{brace}}\n        <br><br>\n        <div class=\"note function-div\">@Autowired</div>\n        <div class=\"function-div\"><span class=\"keyword\">private</span>AmqpTemplate amqp;</div>\n        <br>\n        <div class=\"function-div\"><span class=\"note\">@Override</span><span class=\"explain\">发送用户信息</span></div>\n        <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">sendUserInfo</span>(UserEntity user) {{brace}}</div>\n        <div class=\"content\">sendDirectMsg(\"hello\",\"交换机模式：direct，队列名：hello\");</div>\n        <div class=\"content\">sendExchangeMsg(\"topic\",\"org.cord.hello\",\"交换机模式：topic，队列名：hello\");</div>\n        <div class=\"content\">sendExchangeMsg(\"topic\",\"org.cord.a\",\"交换机模式：topic，aaaa\");</div>\n        <div class=\"content\">sendExchangeMsg(\"topic\",\"org.cord.b\",\"交换机模式：topic，bbbbb\");</div>\n        <div class=\"content\">user.setId(1);</div>\n        <div class=\"content\">user.setNickname(\"chevysky\");</div>\n        <div class=\"content\">user.setWechat(\"lalala\");</div>\n        <div class=\"content\">sendExchangeMsg(\"topic\",\"org.cord.user\",user);</div>\n        <div class=\"content\">sendExchangeMsg(RabbitmqConfiguration.fanoutExchange,\"hello\",\"交换机模式：fanout，队列名：queue\");</div>\n        <div class=\"content\">Map map = new HashMap();</div>\n        <div class=\"content\">map.put(\"First\",\"A\");</div>\n        <div class=\"content\">sendHeadersMsg(\"headers\",\"headers发送消息\",map);</div>\n        <div class=\"function-div\">}</div>\n        <br>\n        <div class=\"function-div explain\">routingKey 路由关键字,这里就是队列名/msg 消息体/默认的交换机是direct</div>\n        <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">sendDirectMsg</span>(String routingKey, Object msg) {{brace}}</div>\n        <div class=\"content\">amqp.convertAndSend(routingKey, msg);</div>\n        <div class=\"function-div\">}</div>\n        <br>\n        <div class=\"function-div explain\">routingKey 路由关键字/msg 消息体/exchange 交换机 路由模式direct;通配符模式topic;发布订阅模式fanout;</div>\n        <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">sendExchangeMsg</span>(String exchange, String routingKey, Object msg) {{brace}}</div>\n        <div class=\"content\">amqp.convertAndSend(exchange, routingKey, msg);</div>\n        <div class=\"function-div\">}</div>\n        <br>\n        <div class=\"function-div explain\">map 消息headers属性/msg 消息体/exchange 交换机</div>\n        <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">sendHeadersMsg</span>(String exchange, String msg, Map{{lefta}}String, Object> map) {{brace}}</div>\n        <div class=\"content\">amqp.convertAndSend(exchange, null, msg, message -> {{brace}}</div>\n        <div class=\"scontent\">message.getMessageProperties().getHeaders().putAll(map);</div>\n        <div class=\"scontent\"><span class=\"keyword\">return</span> message;</div>\n        <div class=\"content\">});</div>\n        <div class=\"function-div\">}</div>\n        <div>}</div>\n        <br>\n  </tab>\n\n  <tab>\n      <ng-template tabHeading>\n          <div class=\"stitle\">Receiver/Test</div>\n        </ng-template>\n        <br>\n        <div class=\"stitle\">Receiver 接收者</div>\n        <span class=\"keyword\">import </span>org.springframework.amqp.rabbit.annotation.RabbitHandler;<br>\n        <span class=\"keyword\">import </span>org.springframework.amqp.rabbit.annotation.RabbitListener;<br>\n        <div class=\"note\">@Component</div>\n        <div class=\"note\">@RabbitHandler</div>\n        <span class=\"keyword\">public class </span>GetUserMessage {{brace}}\n        <br><br>\n        <div class=\"function-div\"><span class=\"note\">@RabbitListener</span>(queues = \"hello\")</div>\n        <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">receiverUserInfo1</span>(Object message) {{brace}}</div>\n        <div class=\"content\">System.out.println(\"第一个消费者\" + message);</div>\n        <div class=\"function-div\">}</div>\n        <br>\n        <div class=\"function-div\"><span class=\"note\">@RabbitListener</span>(queues = \"hello\")</div>\n        <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">receiverUserInfo2</span>(Object message) {{brace}}</div>\n        <div class=\"content\">System.out.println(\"第二个消费者\" + message);</div>\n        <div class=\"function-div\">}</div>\n        <br>\n        <div class=\"function-div\"><span class=\"note\">@RabbitListener</span>(queues = \"queue\")</div>\n        <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">receiverUserInfo</span>(Object message) {{brace}}</div>\n        <div class=\"content\">System.out.println(\"订阅一\" + message);</div>\n        <div class=\"function-div\">}</div>\n        <br>\n        <div class=\"function-div\"><span class=\"note\">@RabbitListener</span>(queues = \"fanoutQueue\")</div>\n        <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">receiverUserInfo3</span>(Object message) {{brace}}</div>\n        <div class=\"content\">System.out.println(\"订阅二\" + message);</div>\n        <div class=\"function-div\">}</div>\n        <br>\n        <div class=\"stitle\">Test 测试</div>\n        <div class=\"function-div note\">@Autowired</div>\n        <div class=\"function-div\"><span class=\"keyword\">private</span>UserMessageSend userMessageSend;</div>\n        <div class=\"function-div note\">@Test</div>\n        <div class=\"function-div\"><span class=\"keyword\">public void </span><span class=\"function\">testRabbitMQ</span>() {{brace}}</div>\n        <div class=\"content\">userMessageSend.sendUserInfo(new UserEntity());</div>\n        <div class=\"function-div\">}</div>\n        <br>\n  </tab>\n</tabset>\n"

/***/ }),

/***/ "./src/app/backend/plug/rabbitmq/rabbitmq.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/backend/plug/rabbitmq/rabbitmq.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGx1Zy9yYWJiaXRtcS9yYWJiaXRtcS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/backend/plug/rabbitmq/rabbitmq.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/backend/plug/rabbitmq/rabbitmq.component.ts ***!
  \*************************************************************/
/*! exports provided: RabbitmqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RabbitmqComponent", function() { return RabbitmqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RabbitmqComponent = /** @class */ (function () {
    function RabbitmqComponent() {
        this.lefta = "<";
        this.brace = "{";
    }
    RabbitmqComponent.prototype.ngOnInit = function () {
    };
    RabbitmqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rabbitmq',
            template: __webpack_require__(/*! ./rabbitmq.component.html */ "./src/app/backend/plug/rabbitmq/rabbitmq.component.html"),
            styles: [__webpack_require__(/*! ./rabbitmq.component.scss */ "./src/app/backend/plug/rabbitmq/rabbitmq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RabbitmqComponent);
    return RabbitmqComponent;
}());



/***/ }),

/***/ "./src/app/backend/plug/shiro/shiro.component.html":
/*!*********************************************************!*\
  !*** ./src/app/backend/plug/shiro/shiro.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\" type=\"pills\">\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">Shiro 运用</div>\n    </ng-template>\n    <br>\n    <a href=\"https://github.com/chevysky/fireworm\">点击查看 github 代码分享</a>\n    <br>\n    <div class=\"function\">pom.xml</div>\n    <div class=\"function-div sign\">{{lefta}}dependency></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}groupId></span>org.apache.shiro<span class=\"sign\">{{lefta}}/groupId></span></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}artifactId></span>shiro-spring<span class=\"sign\">{{lefta}}/artifactId></span></div>\n    <div class=\"content\"><span class=\"sign\">{{lefta}}version></span>1.4.0<span class=\"sign\">{{lefta}}/version></span></div>\n    <div class=\"function-div sign\">{{lefta}}/dependency></div>\n    <br>\n    <div><span class=\"keyword\">import </span>org.apache.shiro.SecurityUtils;</div>\n    <div><span class=\"keyword\">import </span>org.apache.shiro.authc.*;</div>\n    <div><span class=\"keyword\">import </span>org.apache.shiro.subject.Subject;</div>\n    <br>\n    <div><span class=\"note\">@RequestMapping</span>(value = \"/login\")</div>\n    <div><span class=\"keyword\">public String </span><span class=\"function\">userLogin</span>(<span class=\"note\">@RequestBody</span> Map map) {{brace}}</div>\n    <div class=\"function-div\">Subject subject = SecurityUtils.<span class=\"function\">getSubject</span>();</div>\n    <div class=\"function-div\">String username = (String)map.get(\"username\");</div>\n    <div class=\"function-div\">String password = (String)map.get(\"password\");</div>\n    <div class=\"function-div\">UsernamePasswordToken token =<span class=\"keyword\"> new </span>UsernamePasswordToken(username,password);</div>\n    <div class=\"function-div\"><span class=\"keyword\">boolean</span> remember = (map.containsKey(\"remember\"))?<span class=\"keyword\">true </span>:<span class=\"keyword\"> false</span>;</div>\n    <div class=\"function-div\">token.setRememberMe(remember);</div>\n    <div class=\"function-div\"><span class=\"keyword\">try</span> {{brace}}</div>\n    <div class=\"content\">subject.login(token);</div>\n    <div class=\"content\"><span class=\"keyword\">return</span> username;</div>\n    <div class=\"content\">} <span class=\"keyword\">catch </span>(UnknownAccountException e) {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return</span> \"用户不存在\";</div>\n    <div class=\"content\">} <span class=\"keyword\">catch </span>(IncorrectCredentialsException e) {{brace}}</div>  \n    <div class=\"content\"><span class=\"keyword\">return</span> \"密码错误\";</div>  \n    <div class=\"content\">} <span class=\"keyword\">catch </span>(LockedAccountException e) {{brace}}</div>  \n    <div class=\"content\"><span class=\"keyword\">return</span> \"该账户被锁定\";</div>      \n    <div class=\"content\">} <span class=\"keyword\">catch </span>(LockedAccountException e) {{brace}}</div>  \n    <div class=\"content\"><span class=\"keyword\">return</span> \"该账户被禁用\";</div>     \n    <div class=\"content\">}</div>   \n    <div>}</div>    \n  </tab>\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">ShiroRealm.java</div>\n    </ng-template>\n    <br>\n    <div><span class=\"keyword\">import</span> org.apache.shiro...</div>\n    <br>\n    <div><span class=\"keyword\">public class </span>ShiroRealm <span class=\"keyword\">extends</span> AuthorizingRealm {{brace}}</div>\n    <br>\n    <div class=\"function-div explain\">/** 获取前端登录的用户信息（通常是用户名和密码），之后去数据库查询当前用户的角色信息，权限信息*/</div>\n    <div class=\"function-div note\">@Override</div>\n    <div class=\"function-div\"><span class=\"keyword\">protected </span>AuthorizationInfo <span class=\"function\">doGetAuthorizationInfo</span>(PrincipalCollection principalCollection) {{brace}}</div>\n    <div class=\"content\">SimpleAuthorizationInfo authorizationInfo = <span class=\"keyword\">new</span> SimpleAuthorizationInfo();</div>\n    <div class=\"content\">String username = (String)principalCollection.getPrimaryPrincipal();</div>\n    <div class=\"content\">Set{{lefta}}?> roles = null;<span class=\"explain\">//通过用户名去获取权限和角色信息</span></div>    \n    <div class=\"content\">authorizationInfo.setRoles(roles);<span class=\"explain\">//将角色名组成的set存入</span></div>   \n    <div class=\"content\">Set{{lefta}}?> permissions = null;</div>    \n    <div class=\"content\">authorizationInfo.setStringPermissions(permissions);<span class=\"explain\">//将权限名所组成的set存入</span></div>   \n    <div class=\"content explain\">/*或者用循环然后一条条添加 authorizationInfo.addRole(role);authorizationInfo.addStringPermission(permission);*/</div>      \n    <div class=\"content\"><span class=\"keyword\">return </span>authorizationInfo;</div>   \n    <div class=\"content\">}</div> \n    <br>\n    <div class=\"function-div explain\">/** 获取前端的登录信息，之后去数据库查询用户信息，进行比对认证 */</div>  \n    <div class=\"function-div note\">@Override</div>\n    <div class=\"function-div\"><span class=\"keyword\">protected </span>AuthenticationInfo <span class=\"function\">doGetAuthenticationInfo</span>(AuthenticationToken authenticationToken) {{brace}}</div>\n    <div class=\"content\">String username = (String)authenticationToken.getPrincipal();<span class=\"explain\">//源码中用户名返回的是String类型</span></div>\n    <div class=\"content\">UserEntity user = userMapper.selectUserByUsername(username);<span class=\"explain\">//去数据库获取用户信息</span></div>\n    <div class=\"content\"><span class=\"keyword\">if </span>(user == null) {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">throw new </span>UnknownAccountException();<span class=\"explain\">//用户不存在</span></div>\n    <div class=\"content\">} <span class=\"keyword\">else </span>{{brace}}<span class=\"explain\"> //用户存在，判断密码</span></div> \n    <div class=\"scontent\">String password = <span class=\"keyword\">new</span> String((char[]) authenticationToken.getCredentials());<span class=\"explain\"> //获取密码的时候，可以点击getCredentials()查看源码，源码中返回的char[]</span></div>  \n    <div class=\"scontent\"><span class=\"keyword\">if </span>(user.getLoginpwd().equals(password)) {{brace}} <span class=\"explain\">//密码正确，判断用户锁定状态</span></div>   \n    <br> \n    <div class=\"scontent\"><span class=\"keyword\">if </span>(user.getState() == 0) {{brace}}<span class=\"explain\">//用户被锁定</span></div>       \n    <div class=\"scontent\"><span class=\"keyword\">throw new </span>LockedAccountException();</div>       \n    <div class=\"scontent\">} <span class=\"keyword\">else </span>{{brace}}<span class=\"explain\"> //所有认证通过，账号、密码保存到登陆信息info中,可查看源码调整</span></div>             \n    <div class=\"scontent\">SimpleAuthenticationInfo authenticationInfo = <span class=\"keyword\">new </span>SimpleAuthenticationInfo(username,password,getName());</div>               \n    <div class=\"scontent\"><span class=\"keyword\">return </span>authenticationInfo; }</div>          \n    <br>               \n    <div class=\"content\">} <span class=\"keyword\">else </span>{{brace}}<span class=\"explain\"> //密码错误，抛出认证错误异常</span></div>           \n    <div class=\"content\"><span class=\"keyword\">throw new </span>IncorrectCredentialsException(); }</div>       \n    <div>}</div>          \n  </tab>\n  <tab>\n    <ng-template tabHeading>\n      <div class=\"stitle\">ShiroConfiguration.java</div>\n    </ng-template>\n    <br>\n    <div><span class=\"keyword\">import</span> org.apache.shiro...</div>\n    <div><span class=\"keyword\">import</span> org.apache.shiro.codec.Base64;</div>\n    <div><span class=\"keyword\">import</span> org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;</div>\n    <br>\n    <div class=\"note\">@SpringBootConfiguration</div>\n    <div><span class=\"keyword\">public class </span>ShiroConfiguration {{brace}}</div>\n    <br>\n    <div class=\"function-div note\">@Bean<span class=\"explain\">/*哈希密码比较器*/</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>HashedCredentialsMatcher <span class=\"function\">hashMatcher</span>() {{brace}}</div>\n    <div class=\"content\">HashedCredentialsMatcher hashMatcher = <span class=\"keyword\">new </span>HashedCredentialsMatcher();</div>\n    <div class=\"content\">hashMatcher.setHashAlgorithmName(\"md5\");<span class=\"explain\"> //设置算法：散列算法 md5</span></div>\n    <div class=\"content\">hashMatcher.setHashIterations(2);<span class=\"explain\"> //设置迭代次数：如散列两次，相当于 md5( md5(\"\"));</span></div>\n    <div class=\"content\"><span class=\"keyword\">return </span>hashMatcher;</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div note\">@Bean<span class=\"explain\">/*注入身份认证realm*/</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>ShiroRealm <span class=\"function\">shiroRealm</span>() {{brace}}</div>\n    <div class=\"content\">ShiroRealm shiroRealm = <span class=\"keyword\">new </span>ShiroRealm();<span class=\"explain\">//ShiroRealm是自己创建的Realm</span></div>\n    <div class=\"content\">shiroRealm.setCredentialsMatcher(hashMatcher());</div>\n    <div class=\"content\"><span class=\"keyword\">return </span>shiroRealm;</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div note\">@Bean<span class=\"explain\">/*登录成功的时候，服务器生成了remember me 的Cookie,可以在下次访问的时候，服务器根据Cookie判断而不用再登录，配置Cookie*/</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>SimpleCookie <span class=\"function\">rememberMeCookie</span>() {{brace}}</div>\n    <div class=\"content\">SimpleCookie simpleCookie = <span class=\"keyword\">new </span>SimpleCookie(\"rememberMe\");<span class=\"explain\">//这个参数是cookie的名称，对应前端的checkbox的name = rememberMe</span></div>\n    <div class=\"content\">simpleCookie.setHttpOnly(true);<span class=\"explain\"> //如果httyOnly设置为true，则客户端不会暴露给客户端脚本代码，使用HttpOnly cookie有助于减少某些类型的跨站点脚本攻击；</span></div>\n    <div class=\"content\">simpleCookie.setMaxAge(600);<span class=\"explain\"> //记住我cookie生效时间,单位是秒</span></div>\n    <div class=\"content\"><span class=\"keyword\">return </span>simpleCookie;</div>\n    <div class=\"function-div\">}</div>\n    <br> \n    <div class=\"function-div note\">@Bean<span class=\"explain\">/*cookie管理器*/</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>CookieRememberMeManager <span class=\"function\">rememberMeManager</span>() {{brace}}</div>\n    <div class=\"content\">CookieRememberMeManager rememberMeManager = <span class=\"keyword\">new </span>CookieRememberMeManager();</div>\n    <div class=\"content\">rememberMeManager.setCookie(rememberMeCookie());</div>\n    <div class=\"content\">rememberMeManager.setCipherKey(Base64.decode(\"3AvVhmFLUs0KTA3Kprsdag==\"));</div>\n    <div class=\"content\"><span class=\"keyword\">return </span>rememberMeManager;</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div note\">@Bean<span class=\"explain\">/*注入安全事务管理器（SecurityManager，注：package org.apache.shiro.mgt.SecurityManager*/</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>SecurityManager <span class=\"function\">securityManager</span>() {{brace}}</div>\n    <div class=\"content\">DefaultWebSecurityManager webSecurityManager = <span class=\"keyword\">new </span>DefaultWebSecurityManager();</div>\n    <div class=\"content\"> webSecurityManager.setRealm(shiroRealm());<span class=\"explain\">//配置自定义的realm</span></div>\n    <div class=\"content\"><span class=\"keyword\">return </span>webSecurityManager;</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div note\">@Bean<span class=\"explain\">/*开启shiro aop注解支持*/</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>AuthorizationAttributeSourceAdvisor <span class=\"function\">attributeSourceAdvisor</span>(SecurityManager securityManager) {{brace}}</div>\n    <div class=\"content\">AuthorizationAttributeSourceAdvisor attributeSourceAdvisor = <span class=\"keyword\">new </span>AuthorizationAttributeSourceAdvisor();</div>\n    <div class=\"content\">attributeSourceAdvisor.setSecurityManager(securityManager);</div>\n    <div class=\"content\"><span class=\"keyword\">return </span>attributeSourceAdvisor;</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div note\">@Bean<span class=\"explain\">/*Shiro生命周期处理器*/</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>LifecycleBeanPostProcessor <span class=\"function\">lifecycleBeanPostProcessor</span>() {{brace}}</div>\n    <div class=\"content\"><span class=\"keyword\">return new </span>LifecycleBeanPostProcessor();</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div note\">@Bean<span class=\"explain\">/*自动创建代理 不然AOP注解不会生效*/</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>DefaultAdvisorAutoProxyCreator <span class=\"function\">autoProxyCreator</span>() {{brace}}</div>\n    <div class=\"content\">DefaultAdvisorAutoProxyCreator advisorAutoProxyCreator = <span class=\"keyword\">new </span>DefaultAdvisorAutoProxyCreator();</div>\n    <div class=\"content\">advisorAutoProxyCreator.setProxyTargetClass(true);</div>\n    <div class=\"content\"><span class=\"keyword\">return </span>advisorAutoProxyCreator;</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div class=\"function-div note\">@Bean<span class=\"explain\">/*过滤器(shiroFilter)*/</span></div>\n    <div class=\"function-div\"><span class=\"keyword\">public </span>ShiroFilterFactoryBean <span class=\"function\">shiroFilter</span>(SecurityManager securityManager) {{brace}}</div>\n    <div class=\"content\">ShiroFilterFactoryBean shiroFilterFactoryBean = <span class=\"keyword\">new </span>ShiroFilterFactoryBean();</div>\n    <div class=\"content\">shiroFilterFactoryBean.setSecurityManager(securityManager);<span class=\"explain\">//设置安全管理器</span></div>\n    <div class=\"content\"> shiroFilterFactoryBean.setLoginUrl(\"/index.html\");<span class=\"explain\">//配置shiro默认登录界面地址，前后端分离中登录界面跳转应由前端路由控制，后台仅返回json数据</span></div>\n    <div class=\"content\">shiroFilterFactoryBean.setSuccessUrl(\"/index\");<span class=\"explain\">//登陆成功后的页面,或者前端自己设置</span></div>\n    <div class=\"content\">shiroFilterFactoryBean.setUnauthorizedUrl(\"/403\");</div>\n    <br>\n    <div class=\"content\">Map{{lefta}}String,String> filterChainDefinitionMap = <span class=\"keyword\">new </span> LinkedHashMap{{lefta}} >();</div>\n    <div class=\"content\">filterChainDefinitionMap.put(\"/static/**\", \"anon\");<span class=\"explain\">//配置不会被拦截的链接 顺序判断 这里是放出静态资源</span></div>\n    <div class=\"content\">filterChainDefinitionMap.put(\"/fireworm/**\",\"anon\");<span class=\"explain\">//.put(\"/**\", \"authc\");设置拦截的接口</span></div>\n    <div class=\"content\">shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);</div>\n    <div class=\"content\"><span class=\"keyword\">return </span>shiroFilterFactoryBean;</div>\n    <div class=\"function-div\">}</div>\n    <br>\n    <div>}</div>\n  </tab>\n</tabset>"

/***/ }),

/***/ "./src/app/backend/plug/shiro/shiro.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/backend/plug/shiro/shiro.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQvcGx1Zy9zaGlyby9zaGlyby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/backend/plug/shiro/shiro.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/backend/plug/shiro/shiro.component.ts ***!
  \*******************************************************/
/*! exports provided: ShiroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiroComponent", function() { return ShiroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShiroComponent = /** @class */ (function () {
    function ShiroComponent() {
        this.brace = '{';
        this.lefta = '<';
    }
    ShiroComponent.prototype.ngOnInit = function () {
    };
    ShiroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shiro',
            template: __webpack_require__(/*! ./shiro.component.html */ "./src/app/backend/plug/shiro/shiro.component.html"),
            styles: [__webpack_require__(/*! ./shiro.component.scss */ "./src/app/backend/plug/shiro/shiro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShiroComponent);
    return ShiroComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
        this.weekArray = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
        this.menu = [
            // id 菜单id / tier 菜单层级 / menuName 菜单名字 / path 路径
            { id: 1, tier: 1, parentId: 0, menuName: 'Java 后端', path: '' },
            { id: 2, tier: 1, parentId: 0, menuName: 'Web 前端', path: '' },
            { id: 3, tier: 1, parentId: 0, menuName: '数据库', path: '' },
            { id: 4, tier: 1, parentId: 0, menuName: '个性随笔', path: '' },
            { id: 5, tier: 2, parentId: 1, menuName: '基本配置', path: '' },
            { id: 6, tier: 2, parentId: 1, menuName: '插件集成', path: '' },
            { id: 7, tier: 2, parentId: 1, menuName: '源码解析', path: '' },
            { id: 8, tier: 3, parentId: 5, menuName: '跨域配置', path: 'cross/domain' },
            { id: 9, tier: 3, parentId: 5, menuName: '拦截器配置', path: 'interceptor' },
            { id: 10, tier: 3, parentId: 5, menuName: '全局异常处理', path: 'exception' },
            { id: 11, tier: 3, parentId: 6, menuName: 'shiro 安全框架', path: 'shiro' },
            { id: 12, tier: 3, parentId: 6, menuName: 'ehcache 缓存', path: 'ehcache' },
            { id: 13, tier: 3, parentId: 6, menuName: 'dubbo 分布式', path: 'dubbo' },
            { id: 14, tier: 3, parentId: 6, menuName: 'RabbitMQ 消息中间件', path: 'rabbitmq' },
            { id: 15, tier: 2, parentId: 2, menuName: 'Angular/Vue', path: '' },
            { id: 16, tier: 3, parentId: 15, menuName: 'Angular 项目创建', path: 'ngcreate' },
            { id: 17, tier: 3, parentId: 15, menuName: 'Angular 基本运用', path: 'nguse' },
            { id: 18, tier: 3, parentId: 15, menuName: 'Vue 项目创建', path: 'vuecreate' },
            { id: 19, tier: 3, parentId: 15, menuName: 'Vue 基本运用', path: 'vueuse' },
            { id: 20, tier: 2, parentId: 2, menuName: '前端工具', path: '' },
            { id: 21, tier: 3, parentId: 7, menuName: 'Map/String', path: 'mapstring' },
            { id: 22, tier: 2, parentId: 1, menuName: '开发工具', path: '' },
            { id: 23, tier: 3, parentId: 22, menuName: 'IDEA 基本运用', path: 'idea' },
        ];
    }
    DataService.prototype.getMenus = function () {
        return this.menu;
    };
    DataService.prototype.getNowWeek = function () {
        return this.weekArray[new Date().getDay()]; //获取星期
    };
    DataService.prototype.getCalender = function () {
        var nowDate = new Date();
        var date = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);
        var monthHasDays = date.getDate(); // 本月天数
        var firstDayWeek = new Date(nowDate.setDate(1)).getDay();
        var calender = [['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']];
        var count = 1;
        for (var i = 1; count <= monthHasDays; i++) {
            var arr = new Array();
            for (var j = 0; j < 7; j++) {
                if (i == 1) {
                    arr[j] = (firstDayWeek <= j) ? count++ : '';
                }
                else {
                    if (count <= monthHasDays)
                        arr[j] = count++;
                }
            }
            calender[i] = arr;
        }
        return calender;
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/database/database/database.component.html":
/*!***********************************************************!*\
  !*** ./src/app/database/database/database.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  database works!\n</p>\n"

/***/ }),

/***/ "./src/app/database/database/database.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/database/database/database.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlL2RhdGFiYXNlL2RhdGFiYXNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/database/database/database.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/database/database/database.component.ts ***!
  \*********************************************************/
/*! exports provided: DatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseComponent", function() { return DatabaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent() {
    }
    DatabaseComponent.prototype.ngOnInit = function () {
    };
    DatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-database',
            template: __webpack_require__(/*! ./database.component.html */ "./src/app/database/database/database.component.html"),
            styles: [__webpack_require__(/*! ./database.component.scss */ "./src/app/database/database/database.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatabaseComponent);
    return DatabaseComponent;
}());



/***/ }),

/***/ "./src/app/essays/essays/essays.component.html":
/*!*****************************************************!*\
  !*** ./src/app/essays/essays/essays.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  essays works!\n</p>\n"

/***/ }),

/***/ "./src/app/essays/essays/essays.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/essays/essays/essays.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vzc2F5cy9lc3NheXMvZXNzYXlzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/essays/essays/essays.component.ts":
/*!***************************************************!*\
  !*** ./src/app/essays/essays/essays.component.ts ***!
  \***************************************************/
/*! exports provided: EssaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssaysComponent", function() { return EssaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EssaysComponent = /** @class */ (function () {
    function EssaysComponent() {
    }
    EssaysComponent.prototype.ngOnInit = function () {
    };
    EssaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-essays',
            template: __webpack_require__(/*! ./essays.component.html */ "./src/app/essays/essays/essays.component.html"),
            styles: [__webpack_require__(/*! ./essays.component.scss */ "./src/app/essays/essays/essays.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EssaysComponent);
    return EssaysComponent;
}());



/***/ }),

/***/ "./src/app/frontend/frontend/frontend.component.html":
/*!***********************************************************!*\
  !*** ./src/app/frontend/frontend/frontend.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row frontbg'>\n  <div class=\"col-md-3 left-body\">\n      <a routerLink = \"/homepage\" class=\"go-home\">返回首页</a>\n      <br>\n      <div>{{nowTime}}</div>\n      <div>\n          <img src='../../../assets/homepage/wechat.png' class=\"wechat\">\n          &nbsp; &nbsp;chevysky\n      </div>\n      <br>\n      <div *ngFor = 'let days of calender ; index as i'>\n        <div *ngFor = \"let day of days\">\n          <div class=\"day\" [ngClass] = \"{'week': i == 0 ?  true:false,'now-day': nowDay == day ? true:false}\">{{day}}</div>\n        </div>\n      </div>         \n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12 headbg\">\n        <span *ngFor = \"let menu of menus\">\n          <span *ngIf = \"menu.parentId == 2\" (click)=\"openSonMenu(menu.id)\" class=\"menus\">{{menu.menuName}}</span>\n        </span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 bodybg\">\n        <div *ngIf = \"showLib\">\n          <br>\n            <div *ngFor = \"let menu of menus\">\n                <div *ngIf = \"menu.parentId == menuId\" class=\"lib\" (click) = \"openContent(menu.path)\">{{menu.menuName}}</div>\n            </div>\n        </div>\n        <router-outlet *ngIf = \"showContent\"></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/frontend/frontend/frontend.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/frontend/frontend/frontend.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frontbg {\n  background-image: url('bgimg.jpg');\n  background-size: 100%;\n  height: 610px; }\n\n.headbg {\n  height: 40px;\n  margin-top: 30px;\n  background-color: darkgreen; }\n\n.bodybg {\n  border-style: groove;\n  border-width: 15px;\n  margin-top: 20px;\n  height: 500px;\n  border-radius: 15px 15px 15px 15px;\n  border-color: #00ff0d;\n  overflow: auto; }\n\n.lib {\n  margin: 15px 200px 0px 200px;\n  text-align: center;\n  border: 2px solid;\n  border-radius: 25px;\n  border-color: #66cfe9;\n  cursor: pointer; }\n\n.lib:hover {\n  border-color: #e728be;\n  color: #e4ab11; }\n\n.menus {\n  color: aliceblue;\n  line-height: 40px;\n  margin-left: 20px;\n  cursor: pointer; }\n\n.menus:hover {\n  color: aqua; }\n\n.left-body {\n  margin: 30px 0px 0px 40px; }\n\n.day {\n  height: 40px;\n  float: left;\n  width: 40px;\n  text-align: center;\n  line-height: 40px;\n  cursor: pointer; }\n\n.day:hover {\n  color: #eb832e; }\n\n.week {\n  color: white;\n  background-color: #1eff31; }\n\n.now-day {\n  background-color: #1eff4f;\n  color: azure;\n  font-weight: bold; }\n\n.go-home {\n  font-weight: bold;\n  font-size: 18px; }\n\n.wechat {\n  width: 10%;\n  height: 22px;\n  margin-top: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvZnJvbnRlbmQvRDpcXGdpdFxcY2hldnlza3kvc3JjXFxhcHBcXGZyb250ZW5kXFxmcm9udGVuZFxcZnJvbnRlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBMkQ7RUFDM0QscUJBQXFCO0VBQ3JCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUE2QjtFQUM3QixjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHFCQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBR25CO0VBQ0kscUJBQStCO0VBQy9CLGNBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNHLGNBQXVCLEVBQUE7O0FBRzFCO0VBQ0ksWUFBVztFQUNYLHlCQUFrQyxFQUFBOztBQUd0QztFQUNJLHlCQUFrQztFQUNsQyxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL2Zyb250ZW5kL2Zyb250ZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyb250Ymd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mcm9udGVuZC9iZ2ltZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGhlaWdodDogNjEwcHg7XHJcbn1cclxuXHJcbi5oZWFkYmd7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcbi5ib2R5Ymd7XHJcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIGJvcmRlci13aWR0aDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMjU1LCAxMyk7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG59XHJcblxyXG4ubGlie1xyXG4gICAgbWFyZ2luOiAxNXB4IDIwMHB4IDBweCAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjoycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxMDIsIDIwNywgMjMzKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpYjpob3ZlcntcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzMSwgNDAsIDE5MCk7XHJcbiAgICBjb2xvcjpyZ2IoMjI4LCAxNzEsIDE3KTtcclxufVxyXG5cclxuLm1lbnVze1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnVzOmhvdmVye1xyXG4gICAgY29sb3I6IGFxdWE7XHJcbn1cclxuXHJcbi5sZWZ0LWJvZHl7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4IDBweCA0MHB4O1xyXG59XHJcblxyXG4uZGF5e1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGF5OmhvdmVye1xyXG4gICBjb2xvcjpyZ2IoMjM1LCAxMzEsIDQ2KTtcclxufVxyXG5cclxuLndlZWt7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjU1LCA0OSk7XHJcbn1cclxuXHJcbi5ub3ctZGF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyNTUsIDc5KTtcclxuICAgIGNvbG9yOiBhenVyZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZ28taG9tZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ud2VjaGF0e1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/frontend/frontend/frontend.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/frontend/frontend/frontend.component.ts ***!
  \*********************************************************/
/*! exports provided: FrontendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendComponent", function() { return FrontendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FrontendComponent = /** @class */ (function () {
    function FrontendComponent(data, router) {
        this.data = data;
        this.router = router;
        this.showLib = false;
        this.showContent = false;
        this.nowDay = new Date().getDate();
        this.bsValue = new Date();
        this.maxDate = new Date();
    }
    FrontendComponent.prototype.ngOnInit = function () {
        this.menus = this.data.getMenus();
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
        this.calender = this.data.getCalender();
        this.getNowTime();
    };
    FrontendComponent.prototype.openSonMenu = function (id) {
        this.menuId = id;
        this.showLib = true;
        this.showContent = false;
    };
    FrontendComponent.prototype.openContent = function (path) {
        this.showLib = false;
        this.showContent = true;
        this.router.navigate(['frontend/'.concat(path)]);
    };
    FrontendComponent.prototype.getNowTime = function () {
        var _this = this;
        var week = this.data.getNowWeek();
        setInterval(function () {
            var time = new Date().toLocaleString();
            _this.nowTime = week.concat(' ').concat(time);
        });
    };
    FrontendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-frontend',
            template: __webpack_require__(/*! ./frontend.component.html */ "./src/app/frontend/frontend/frontend.component.html"),
            styles: [__webpack_require__(/*! ./frontend.component.scss */ "./src/app/frontend/frontend/frontend.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FrontendComponent);
    return FrontendComponent;
}());



/***/ }),

/***/ "./src/app/frontend/ngcreate/ngcreate.component.html":
/*!***********************************************************!*\
  !*** ./src/app/frontend/ngcreate/ngcreate.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n采用angular-cli创建项目，首先需要的工具nodejs中的npm(npm建议采用最新版本)<br>\n<div class=\"stitle\">Angular-cli</div>\nnpm install angular/cli 全局安装<br>\nng -v 查看版本<br>\nnpm install -g @angular/cli@1.7.4 安装版本为1.7.4<br>\nnpm install -g @angular/cli@latest 安装最新版本<br>\nangular项目升级<br>\nnpm uninstall -g @angular/cli; 1、全局卸载<br>\nnpm cache verify; 2、清理<br>\nnpm uninstall --save-dev @angular/cli; 3、在项目路径下卸载<br>\nnpm install --save-dev @angular/cli@1.7.4; 4、在项目路径下安装指定版本<br>\nnpm install 或 yarn install; 5、项目路径下安装模块<br>\nangular project<br>\nng new projectName 创建项目<br>\nng serve --open / npm start / ng serve 启动项目<br>\nng generate component componentName 创建组件<br>\nng generate service serviceName 创建服务<br>\ncreate router<br>\nng generate module routeName --flat --module=app --flat把这个文件放在了src/app中，而不是单独的目录下； --module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。 典型的 Angular 路由（Route）有两个属性：path：一个用于匹配浏览器地址栏中 URL 的字符串。 component：当导航到此路由时，路由器应该创建哪个组件。<br>\n<div>安装内存WEB API</div>\nnpm install angular-in-memory-web-api --save<br>\n若出现500服务器内部错误，则降低版本试试0.5+的版本:npm install angular-in-memory-web-api@0.5.4 --save<br>\nng build --prod 编译工程，编译到dist目录，将其变为可用js5.0代码和相关html、css等文件<br>\n<div class=\"stitle\">Ngx-bootstranp</div>\n首先下载ngx-bootstrap：npm install ngx-bootstrap --save<br>\n下载后，在module.ts中导入ngx-bootstrap/modal类<br>\nimport {{brace}} ModalModule {{bracer}} from 'ngx-bootstrap'<br>\n<div class=\"stitle\">引入bootstrap样式</div>\n方法一：在style.scss或style.css根样式中引入：@import url(\"../node_modules/bootstrap/dist/css/bootstrap.min.css\")<br>\n方法二：在package.json或angular.json中引入：在styles数组中添加\"./node_modules/bootstrap/dist/css/bootstrap.min.css\"\n</div>"

/***/ }),

/***/ "./src/app/frontend/ngcreate/ngcreate.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/frontend/ngcreate/ngcreate.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL25nY3JlYXRlL25nY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/frontend/ngcreate/ngcreate.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/frontend/ngcreate/ngcreate.component.ts ***!
  \*********************************************************/
/*! exports provided: NgcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgcreateComponent", function() { return NgcreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgcreateComponent = /** @class */ (function () {
    function NgcreateComponent() {
        this.brace = '{';
        this.bracer = '}';
    }
    NgcreateComponent.prototype.ngOnInit = function () {
    };
    NgcreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngcreate',
            template: __webpack_require__(/*! ./ngcreate.component.html */ "./src/app/frontend/ngcreate/ngcreate.component.html"),
            styles: [__webpack_require__(/*! ./ngcreate.component.scss */ "./src/app/frontend/ngcreate/ngcreate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgcreateComponent);
    return NgcreateComponent;
}());



/***/ }),

/***/ "./src/app/frontend/nguse/nguse.component.html":
/*!*****************************************************!*\
  !*** ./src/app/frontend/nguse/nguse.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"stitle\"></div>循环ngFor\n    *ngFor = \"let name of objectName\" 页面中循环的使用<br>\n    <div class=\"stitle\">条件判断ngIf</div>\n    *ngIf = \"variable\" 页面中使用ngIf,variable 为Boolean值时 false隐藏 true显示, 当为其它变量时,变量不为undefind显示;<br>\n    <div class=\"stitle\">绑定点击事件</div>\n    (click) = \"incident()\" 绑定点击事件<br>\n    <div class=\"stitle\">从组件接收主组件传递的数据</div>\n    {{lefta}}app-hero-detail [hero] = \"selectHero\" [isClicked] = \"isClicked\">{{lefta}}/app-hero-detail><br>\n    从组件的ts中定义变量用@Input装饰：<br>\n    @Input() hero : variableType;<br>\n    @Input() isClicked : boolean;<br>\n    <div class=\"stitle\">文本格式化</div>\n    {{brace}}hero | uppercase}} 将变量hero的值全部大写<br>\n    <div class=\"stitle\">数据双向绑定</div>\n    {{lefta}}input [(ngModel)]=\"hero.name\" placeholder=\"name\">在组件的class中直接写变量名，不需什么$scope操作使用数据双向绑定要在app.module.ts中导入import {{bracel}} FormsModule {{bracer}} from \"@angular/forms\";并将FormsModule 加入到imports数组中每一个组件都必须申明在app.module.ts的@Ng-Module中<br>\n</div>\n"

/***/ }),

/***/ "./src/app/frontend/nguse/nguse.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/frontend/nguse/nguse.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL25ndXNlL25ndXNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/frontend/nguse/nguse.component.ts":
/*!***************************************************!*\
  !*** ./src/app/frontend/nguse/nguse.component.ts ***!
  \***************************************************/
/*! exports provided: NguseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguseComponent", function() { return NguseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NguseComponent = /** @class */ (function () {
    function NguseComponent() {
        this.lefta = "<";
        this.brace = "{{";
        this.bracel = '{';
        this.bracer = '}';
    }
    NguseComponent.prototype.ngOnInit = function () {
    };
    NguseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nguse',
            template: __webpack_require__(/*! ./nguse.component.html */ "./src/app/frontend/nguse/nguse.component.html"),
            styles: [__webpack_require__(/*! ./nguse.component.scss */ "./src/app/frontend/nguse/nguse.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NguseComponent);
    return NguseComponent;
}());



/***/ }),

/***/ "./src/app/frontend/vuecreate/vuecreate.component.html":
/*!*************************************************************!*\
  !*** ./src/app/frontend/vuecreate/vuecreate.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"stitle\">VUE 项目的安装和启动</div>\n    npm 安装vue-cli脚手架 : npm install -g vue-cli<br>\n    查看版本: vue -V<br>\n    <br>\n    使用脚手架安装项目： vue init webpack demo 项目是基于webpack的<br>\n    Project name（工程名）:回车<br>\n    Project description（工程介绍）：回车<br>\n    Author：作者名<br>\n    Vue build（是否安装编译器）:回车<br>\n    Install vue-router（是否安装Vue路由）：回车<br>\n    Use ESLint to lint your code（是否使用ESLint检查js代码）：n<br>\n    Set up unit tests（安装单元测试工具）：n<br>\n    Setup e2e tests with Nightwatch（是否安装端到端测试工具）：n<br>\n    Should we run npm install for you after the project has been created? (recommended)：回车。<br>\n    <br>\n    进入项目目录：cd demo<br>\n    安装项目所需要的依赖：npm install<br>\n    启动项目：npm run dev<br>\n    启动项目遇到的问题<br>\n    You may use special comments to disable some warnings.<br>\n    Use // eslint-disable-next-line to ignore the next line.<br>\n    Use /* eslint-disable */ to ignore all warnings in a file.<br>\n    解决方法<br>\n    注释build/webpack.base.conf.js文件module->rules中有关eslint的规则<br>\n    ...(config.dev.useEslint ? [createLintingRule()] : []),<br>\n    ElementUI引入<br>\n    npm install element-ui -save<br>\n    在main.js中添加代码<br>\n    import ElementUI from 'element-ui'<br>\n    Vue.use(ElementUI)<br>\n</div>\n"

/***/ }),

/***/ "./src/app/frontend/vuecreate/vuecreate.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/frontend/vuecreate/vuecreate.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL3Z1ZWNyZWF0ZS92dWVjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/frontend/vuecreate/vuecreate.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/frontend/vuecreate/vuecreate.component.ts ***!
  \***********************************************************/
/*! exports provided: VuecreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VuecreateComponent", function() { return VuecreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VuecreateComponent = /** @class */ (function () {
    function VuecreateComponent() {
    }
    VuecreateComponent.prototype.ngOnInit = function () {
    };
    VuecreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vuecreate',
            template: __webpack_require__(/*! ./vuecreate.component.html */ "./src/app/frontend/vuecreate/vuecreate.component.html"),
            styles: [__webpack_require__(/*! ./vuecreate.component.scss */ "./src/app/frontend/vuecreate/vuecreate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VuecreateComponent);
    return VuecreateComponent;
}());



/***/ }),

/***/ "./src/app/frontend/vueuse/vueuse.component.html":
/*!*******************************************************!*\
  !*** ./src/app/frontend/vueuse/vueuse.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n<div class=\"stitle\">VUE路由</div>\nmain.js中引入路由 import router from './router'<br>\nnew Vue({{brace}}<br>\nel: '#app',<br>\nrouter,<br>\ncomponents: {{brace}} App },<br>\ntemplate: '{{lefta}}App/>'})<br>\n在src/router/index.js中给各个组件配置路由<br>\n<br>\n{{lefta}}template>中路由跳转：{{lefta}}router-link to='/path'>{{lefta}}/router-link><br>\n默认渲染成带有正确链接的 {{lefta}}a> 标签，可以通过配置 tag 属性生成别的标签.<br>\n{{lefta}}router-link to='/path' tag='li'>{{lefta}}/router-link><br>\n<br>\n{{lefta}}script>中路由跳转：this.$router.push('/path');<br>\n路由跳转组件显示的位置 {{lefta}}router-view>{{lefta}}/router-view><br>\n<br>\n页面布局可以参考AngularJS的router<br>\n一个页面的head/body/foot 对应vue里路由的视图命名。<br>\ntext_1<br>\npath:'/body',<br>\nname:'bodyer',<br>\ncomponents:{{brace}}<br>\nhead:headhtml,<br>\nbody:bodyhtml,<br>\nfoot:foothtml<br>\n}<br>\n}<br>\n<span class=\"keyword\">备注说明：例如在App.vue中有路由{{lefta}}router-view name='head'>/{{lefta}}router-view name='body'>而在App.vue中又引入了其它模块，那么在其它模块中的路由调用是可以影响到App.vue中的路由显示的。</span><br>\n<br>\n</div>\n<div class=\"content\">\n<div class=\"stitle\">VUE用AXIOS实现与JAVA后端调用</div>\n安装AXIOS npm install axios<br>\n在main.js中引入axios：import axios from 'axios'<br>\n由于axios不能直接使用Vue.use()，所以可以在引入axios后修改原型链，或者结合Vuex封装一个action;<br>\n修改原型链<br>\nVue.prototype.$ajax = axios<br>\naxios 配置<br>\naxios.defaults.timeout = 5000;<br>\n<div class=\"explain\">//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';</div>\naxios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';\n<div class=\"explain\">// axios.defaults.headers.post['Content-Type'] = 'json';</div>\n<div class=\"explain\">// axios.defaults.baseURL = 'http://localhost:8080/项目名/';</div>\naxios.defaults.baseURL = 'http://localhost:8080/';<br>\n向后端发送请求<br>\nmethods:{{brace}}<br>\n<div class=\"scontent\">\n    sendAjax(){{brace}}<br>\n    this.$ajax.post('/user/vue',{{brace}}<br>\n    name:'chevysky',<br>\n    sex:'man',<br>\n    age:16<br>\n    }).then(function(res){{brace}}<br>\n    console.log(res);<br>\n    console.log(res.data);<br>\n    alert(res.data);<br>\n    })<br>\n    },<br>\n    sendNoParams(){{brace}}<br>\n    this.$ajax.post('/user/vues').then(function(res){{brace}}<br>\n    alert('请求成功');<br>\n    })<br>\n    }<br>\n</div>\n}<br>\n\n<a href=\"javascrips:0\" (click) = \"openPath('backend/cross/domain')\">这个时候会出现跨域访问的问题，参考SpringBoot的跨域配置。</a>\n</div>"

/***/ }),

/***/ "./src/app/frontend/vueuse/vueuse.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/frontend/vueuse/vueuse.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL3Z1ZXVzZS92dWV1c2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/frontend/vueuse/vueuse.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/frontend/vueuse/vueuse.component.ts ***!
  \*****************************************************/
/*! exports provided: VueuseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueuseComponent", function() { return VueuseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var VueuseComponent = /** @class */ (function () {
    function VueuseComponent(router) {
        this.router = router;
        this.brace = "{";
        this.lefta = "<";
    }
    VueuseComponent.prototype.ngOnInit = function () {
    };
    VueuseComponent.prototype.openPath = function (path) {
        this.router.navigate([path], {
            queryParams: {
                showDef: false
            }
        });
    };
    VueuseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vueuse',
            template: __webpack_require__(/*! ./vueuse.component.html */ "./src/app/frontend/vueuse/vueuse.component.html"),
            styles: [__webpack_require__(/*! ./vueuse.component.scss */ "./src/app/frontend/vueuse/vueuse.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VueuseComponent);
    return VueuseComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <div class='col-md-12 background'>\n    <div class=\"row\">\n        <div class=\"col-md-1 offset-md-6\">\n            <div class=\"button-style\" (click) = \"switchTarget('backend')\">Java 后端</div>\n          </div>\n          <div class=\"col-md-1\">\n              <div class=\"button-style\" (click) = \"switchTarget('frontend')\">Web 前端</div>\n          </div>\n          <div class=\"col-md-1\">\n              <div class=\"button-style\" (click) = \"switchTarget('database')\">数&nbsp;据&nbsp;库</div>\n          </div>\n          <div class=\"col-md-1\">\n              <div class=\"button-style\" (click) = \"switchTarget('essays')\">个性随笔</div>\n          </div>\n          <div class=\"col-md-2\">\n              <div class=\"mail\">chevysky@163.com</div>\n          </div>\n    </div>\n    <div class='row interval'></div>\n    <div class=\"row\">\n      <div class=\"col-md-12 title-text\">\n        Welcome to Chevysky The Blog\n      </div>\n      <div class=\"col-md-12 explain-text\">\n        本空间主要整合提供Java后端、前端、数据库等的一些入门操作及学习心得，希望对大家有所帮助\n      </div>\n    </div>\n    <div class='row interval-middle'></div>\n    <div class=\"row\">\n     \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-image: url('homepage1.jpg');\n  height: 610px;\n  background-repeat: no-repeat;\n  background-size: 100%; }\n\n.interval {\n  height: 180px; }\n\n.interval-middle {\n  height: 85px; }\n\n.interval-small {\n  height: 10px; }\n\n.title-text {\n  color: #f0f3f3;\n  font-size: 27px;\n  text-align: center;\n  font-weight: bold;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; }\n\n.explain-text {\n  color: #eef5f2;\n  font-size: 12px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.button-style {\n  margin-top: 10px;\n  color: #f7f3ef;\n  cursor: pointer;\n  text-align: center;\n  border-right: 2px white solid;\n  width: 113px; }\n\n.button-style:hover {\n  color: #eaf367; }\n\n.mail {\n  margin-top: 10px;\n  margin-left: 20px;\n  color: #f7f3ef;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvRDpcXGdpdFxcY2hldnlza3kvc3JjXFxhcHBcXGhvbWVwYWdlXFxob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUE0RDtFQUM1RCxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGNBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNFQUVKLEVBQUE7O0FBRUE7RUFDSSxjQUF3QjtFQUN4QixlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixjQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksY0FBeUIsRUFBQTs7QUFHN0I7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQXlCO0VBQ3pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9ob21lcGFnZS9ob21lcGFnZTEuanBnJyk7XHJcbiAgICBoZWlnaHQ6IDYxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLmludGVydmFse1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxufVxyXG5cclxuLmludGVydmFsLW1pZGRsZXtcclxuICAgIGhlaWdodDogODVweDtcclxufVxyXG5cclxuLmludGVydmFsLXNtYWxse1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUtdGV4dHtcclxuICAgIGNvbG9yOiByZ2IoMjQwLCAyNDMsIDI0Myk7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWZcclxuICAgXHJcbn1cclxuXHJcbi5leHBsYWluLXRleHR7XHJcbiAgICBjb2xvcjpyZ2IoMjM4LCAyNDUsIDI0Mik7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLXN0eWxle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMjQ3LCAyNDMsIDIzOSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCB3aGl0ZSBzb2xpZDtcclxuICAgIHdpZHRoOiAxMTNweDtcclxufVxyXG5cclxuLmJ1dHRvbi1zdHlsZTpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMjM0LCAyNDMsIDEwMyk7XHJcbn1cclxuXHJcbi5tYWlse1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNDcsIDI0MywgMjM5KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router) {
        this.router = router;
    }
    HomepageComponent.prototype.ngOnInit = function () { };
    HomepageComponent.prototype.switchTarget = function (path) {
        this.router.navigate([path]);
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/router/backend.ts":
/*!***********************************!*\
  !*** ./src/app/router/backend.ts ***!
  \***********************************/
/*! exports provided: backendRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backendRouter", function() { return backendRouter; });
/* harmony import */ var _backend_backend_backend_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/backend/backend.component */ "./src/app/backend/backend/backend.component.ts");
/* harmony import */ var _backend_basic_configuration_domain_domain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend/basic.configuration/domain/domain.component */ "./src/app/backend/basic.configuration/domain/domain.component.ts");
/* harmony import */ var _backend_basic_configuration_interceptor_interceptor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend/basic.configuration/interceptor/interceptor.component */ "./src/app/backend/basic.configuration/interceptor/interceptor.component.ts");
/* harmony import */ var _backend_basic_configuration_exception_exception_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backend/basic.configuration/exception/exception.component */ "./src/app/backend/basic.configuration/exception/exception.component.ts");
/* harmony import */ var _backend_plug_ehcache_ehcache_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backend/plug/ehcache/ehcache.component */ "./src/app/backend/plug/ehcache/ehcache.component.ts");
/* harmony import */ var _backend_plug_dubbo_dubbo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../backend/plug/dubbo/dubbo.component */ "./src/app/backend/plug/dubbo/dubbo.component.ts");
/* harmony import */ var _backend_plug_shiro_shiro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../backend/plug/shiro/shiro.component */ "./src/app/backend/plug/shiro/shiro.component.ts");
/* harmony import */ var _backend_plug_rabbitmq_rabbitmq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../backend/plug/rabbitmq/rabbitmq.component */ "./src/app/backend/plug/rabbitmq/rabbitmq.component.ts");
/* harmony import */ var _backend_code_source_map_string_map_string_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../backend/code.source/map.string/map.string.component */ "./src/app/backend/code.source/map.string/map.string.component.ts");
/* harmony import */ var _backend_development_kit_idea_idea_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../backend/development.kit/idea/idea.component */ "./src/app/backend/development.kit/idea/idea.component.ts");










var backendRouter = [
    {
        path: 'backend',
        component: _backend_backend_backend_component__WEBPACK_IMPORTED_MODULE_0__["BackendComponent"],
        children: [
            { path: 'cross/domain', component: _backend_basic_configuration_domain_domain_component__WEBPACK_IMPORTED_MODULE_1__["DomainComponent"] },
            { path: 'interceptor', component: _backend_basic_configuration_interceptor_interceptor_component__WEBPACK_IMPORTED_MODULE_2__["InterceptorComponent"] },
            { path: 'exception', component: _backend_basic_configuration_exception_exception_component__WEBPACK_IMPORTED_MODULE_3__["ExceptionComponent"] },
            { path: 'ehcache', component: _backend_plug_ehcache_ehcache_component__WEBPACK_IMPORTED_MODULE_4__["EhcacheComponent"] },
            { path: 'shiro', component: _backend_plug_shiro_shiro_component__WEBPACK_IMPORTED_MODULE_6__["ShiroComponent"] },
            { path: 'dubbo', component: _backend_plug_dubbo_dubbo_component__WEBPACK_IMPORTED_MODULE_5__["DubboComponent"] },
            { path: 'rabbitmq', component: _backend_plug_rabbitmq_rabbitmq_component__WEBPACK_IMPORTED_MODULE_7__["RabbitmqComponent"] },
            { path: 'mapstring', component: _backend_code_source_map_string_map_string_component__WEBPACK_IMPORTED_MODULE_8__["MapStringComponent"] },
            { path: 'idea', component: _backend_development_kit_idea_idea_component__WEBPACK_IMPORTED_MODULE_9__["IdeaComponent"] },
        ]
    }
];


/***/ }),

/***/ "./src/app/router/frontend.ts":
/*!************************************!*\
  !*** ./src/app/router/frontend.ts ***!
  \************************************/
/*! exports provided: frontendRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontendRouter", function() { return frontendRouter; });
/* harmony import */ var _frontend_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frontend/frontend/frontend.component */ "./src/app/frontend/frontend/frontend.component.ts");
/* harmony import */ var _frontend_ngcreate_ngcreate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frontend/ngcreate/ngcreate.component */ "./src/app/frontend/ngcreate/ngcreate.component.ts");
/* harmony import */ var _frontend_nguse_nguse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontend/nguse/nguse.component */ "./src/app/frontend/nguse/nguse.component.ts");
/* harmony import */ var _frontend_vuecreate_vuecreate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontend/vuecreate/vuecreate.component */ "./src/app/frontend/vuecreate/vuecreate.component.ts");
/* harmony import */ var _frontend_vueuse_vueuse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frontend/vueuse/vueuse.component */ "./src/app/frontend/vueuse/vueuse.component.ts");





var frontendRouter = [
    {
        path: 'frontend',
        component: _frontend_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_0__["FrontendComponent"],
        children: [
            { path: 'ngcreate', component: _frontend_ngcreate_ngcreate_component__WEBPACK_IMPORTED_MODULE_1__["NgcreateComponent"] },
            { path: 'nguse', component: _frontend_nguse_nguse_component__WEBPACK_IMPORTED_MODULE_2__["NguseComponent"] },
            { path: 'vuecreate', component: _frontend_vuecreate_vuecreate_component__WEBPACK_IMPORTED_MODULE_3__["VuecreateComponent"] },
            { path: 'vueuse', component: _frontend_vueuse_vueuse_component__WEBPACK_IMPORTED_MODULE_4__["VueuseComponent"] }
        ]
    }
];


/***/ }),

/***/ "./src/app/toolkit/safePipe.ts":
/*!*************************************!*\
  !*** ./src/app/toolkit/safePipe.ts ***!
  \*************************************/
/*! exports provided: safePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safePipe", function() { return safePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var safePipe = /** @class */ (function () {
    function safePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    safePipe.prototype.transform = function (value, arg) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    };
    safePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], safePipe);
    return safePipe;
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

module.exports = __webpack_require__(/*! D:\git\chevysky\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map