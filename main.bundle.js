webpackJsonp([1,4],{

/***/ 289:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 289;


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(402);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.columns = [
            "People",
            "Recent",
            "Lorem"
        ];
        this.items = [
            { "type": "People", "picture": "http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&d=identicon&r=G", "title": "Sara Soueidan" },
            { "type": "People", "picture": "http://0.gravatar.com/avatar/48959f453dffdb6236f4b33eb8e9f4b7?s=50&d=identicon&r=G", "title": "Rachel Smith" },
            { "type": "People", "picture": "http://0.gravatar.com/avatar/06458359cb9e370d7c15bf6329e5facb?s=50&d=identicon&r=G", "title": "Peter Finlan" },
            { "type": "People", "picture": "http://1.gravatar.com/avatar/db7700c89ae12f7d98827642b30c879f?s=50&d=identicon&r=G", "title": "Patrick Cox" },
            { "type": "Recent", "picture": "http://0.gravatar.com/avatar/cb947f0ebdde8d0f973741b366a51ed6?s=50&d=identicon&r=G", "title": "Tim Holman" },
            { "type": "Lorem", "picture": "http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G", "title": "Shaun Dona" }
        ];
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(460),
            styles: [__webpack_require__(456)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_pipe__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        return items.filter(function (it) { return it[field] == value; });
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'filter'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_classie_js__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_classie_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_js_classie_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent() {
        this._data = [];
        this._dataSaved = [];
        this._columns = [];
        this.itemClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    SearchComponent.prototype.searchTitle = function (newValue) {
        this._data = this._dataSaved.filter(function (v) { return v.title.indexOf(newValue) != -1; });
    };
    Object.defineProperty(SearchComponent.prototype, "columns", {
        set: function (columns) {
            this._columns = columns;
            console.log(this._columns);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchComponent.prototype, "data", {
        set: function (data) {
            this._data = data;
            this._dataSaved = data;
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.itemClick = function (item) {
        console.log(item);
        this.itemClicked.emit({ item: item });
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], SearchComponent.prototype, "columns", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], SearchComponent.prototype, "data", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], SearchComponent.prototype, "itemClicked", void 0);
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'ng2-search',
            template: __webpack_require__(461),
            styles: [__webpack_require__(457)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(120)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(120)();
// imports


// module
exports.push([module.i, "html, body {\r\n\theight: 100%;\r\n}\r\n\r\nbody {\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n@-webkit-keyframes MyAnimation {\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  } \r\n}\r\n\r\n@keyframes MyAnimation {\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  } \r\n}\r\n\r\n.my-animation {\r\n  -webkit-animation: MyAnimation 0.5s;\r\n          animation: MyAnimation 0.5s;\r\n}\r\n\r\n.morphsearch {\r\n\tfont-size:0.6em;\r\n\twidth: 200px;\r\n\tmin-height: 40px;\r\n\tbackground: #f1f1f1;\r\n\tposition: absolute;\r\n\tz-index: 10000;\r\n\ttop: 50px;\r\n\tright: 50px;\r\n\t-webkit-transform-origin: 100% 0;\r\n\ttransform-origin: 100% 0;\r\n\t-webkit-transition-property: min-height, width, top, right;\r\n\ttransition-property: min-height, width, top, right;\r\n\t-webkit-transition-duration: 0.5s;\r\n\ttransition-duration: 0.5s;\r\n\t-webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n\ttransition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch.open {\r\n\twidth: 100%;\r\n\tmin-height: 100%;\r\n\ttop: 0px;\r\n\tright: 0px;\r\n}\r\n\r\n.morphsearch-form {\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\t-webkit-transition-property: width, height, -webkit-transform;\r\n\ttransition-property: width, height, -webkit-transform;\r\n\ttransition-property: width, height, transform;\r\n\ttransition-property: width, height, transform, -webkit-transform;\r\n\t-webkit-transition-duration: 0.5s;\r\n\ttransition-duration: 0.5s;\r\n\t-webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n\ttransition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch.open .morphsearch-form {\r\n\twidth: 80%;\r\n\theight: 160px;\r\n\t-webkit-transform: translate3d(0,3em,0);\r\n\ttransform: translate3d(0,3em,0);\r\n}\r\n\r\n.morphsearch-input {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tpadding: 0 10% 0 10px;\r\n\tfont-weight: 700;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\tfont-size: 0.8em;\r\n\tcolor: #ec5a62;\r\n\t-webkit-transition: font-size 0.5s cubic-bezier(0.7,0,0.3,1);\r\n\ttransition: font-size 0.5s cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch-input::-ms-clear { /* remove cross in IE */\r\n    display: none;\r\n}\r\n\r\n.morphsearch.hideInput .morphsearch-input {\r\n\tcolor: transparent;\r\n\t-webkit-transition: color 0.3s;\r\n\ttransition: color 0.3s;\r\n}\r\n\r\n.morphsearch.open .morphsearch-input {\r\n\tfont-size: 7em;\r\n}\r\n\r\n/* placeholder */\r\n.morphsearch-input::-webkit-input-placeholder {\r\n\tcolor: #c2c2c2;\r\n}\r\n\r\n.morphsearch-input:-moz-placeholder {\r\n\tcolor: #c2c2c2;\r\n}\r\n\r\n.morphsearch-input::-moz-placeholder {\r\n\tcolor: #c2c2c2;\r\n}\r\n\r\n.morphsearch-input:-ms-input-placeholder {\r\n\tcolor: #c2c2c2;\r\n}\r\n\r\n/* hide placeholder when active in Chrome */\r\n.gn-search:focus::-webkit-input-placeholder {\r\n\tcolor: transparent;\r\n}\r\n\r\ninput[type=\"search\"] { /* reset normalize */ \r\n\tbox-sizing: border-box;\t\r\n}\r\n\r\n.morphsearch-input:focus,\r\n.morphsearch-submit:focus {\r\n\toutline: none;\r\n}\r\n\r\n.morphsearch-submit {\r\n\tposition: absolute;\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\ttext-indent: 100px;\r\n\toverflow: hidden;\r\n\tright: 0;\r\n\ttop: 50%;\r\n\tbackground: transparent url(" + __webpack_require__(458) + ") no-repeat center center;\r\n\tbackground-size: 100%;\r\n\tborder: none;\r\n\tpointer-events: none;\r\n\t-webkit-transform-origin: 50% 50%;\r\n\t        transform-origin: 50% 50%;\r\n\topacity: 0;\r\n\t-webkit-transform: translate3d(-30px,-50%,0) scale3d(0,0,1);\r\n\ttransform: translate3d(-30px,-50%,0) scale3d(0,0,1);\r\n}\r\n\r\n.morphsearch.open .morphsearch-submit {\r\n\tpointer-events: auto;\r\n\topacity: 1;\r\n\t-webkit-transform: translate3d(-30px,-50%,0) scale3d(1,1,1);\r\n\ttransform: translate3d(-30px,-50%,0) scale3d(1,1,1);\r\n\t-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transition-delay: 0.5s;\r\n\ttransition-delay: 0.5s;\r\n}\r\n\r\n.morphsearch-close {\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\tposition: absolute;\r\n\tright: 1em;\r\n\ttop: 1em;\r\n\toverflow: hidden;\r\n\ttext-indent: 100%;\r\n\tcursor: pointer;\r\n\tpointer-events: none;\r\n\topacity: 0;\r\n\t-webkit-transform: scale3d(0,0,1);\r\n\ttransform: scale3d(0,0,1);\r\n}\r\n\r\n.morphsearch.open .morphsearch-close {\r\n\topacity: 1;\r\n\tpointer-events: auto;\r\n\t-webkit-transform: scale3d(1,1,1);\r\n\ttransform: scale3d(1,1,1);\r\n\t-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transition-delay: 0.5s;\r\n\ttransition-delay: 0.5s;\r\n}\r\n\r\n.morphsearch-close::before,\r\n.morphsearch-close::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\twidth: 2px;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\tborder-radius: 3px;\r\n\topacity: 0.2;\r\n\tbackground: #000;\r\n}\r\n\r\n.morphsearch-close:hover.morphsearch-close::before,\r\n.morphsearch-close:hover.morphsearch-close::after {\r\n\topacity: 1;\r\n}\r\n\r\n.morphsearch-close::before {\r\n\t-webkit-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.morphsearch-close::after {\r\n\t-webkit-transform: rotate(-45deg);\r\n\ttransform: rotate(-45deg);\r\n}\r\n\r\n.morphsearch-content {\r\n\tcolor: #333;\r\n\tmargin-top: 4.5em;\r\n\twidth: 80%;\r\n\theight: 0;\r\n\toverflow: hidden;\r\n\tpadding: 0 10%;\r\n\tbackground: #f1f1f1;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\topacity: 0;\r\n}\r\n\r\n.morphsearch.open .morphsearch-content {\r\n\topacity: 1;\r\n\theight: auto;\r\n\toverflow: visible; /* this breaks the transition of the children in FF: https://bugzilla.mozilla.org/show_bug.cgi?id=625289 */\r\n\tpointer-events: auto;\r\n\t-webkit-transition: opacity 0.3s 0.5s;\r\n\ttransition: opacity 0.3s 0.5s;\r\n}\r\n\r\n.dummy-column {\r\n\twidth: 30%;\r\n\tpadding: 0 0 6em;\r\n\tfloat: left;\r\n\topacity: 0;\r\n\t-webkit-transform: translate3d(0,100px,0);\r\n\ttransform: translateY(100px);\r\n\t-webkit-transition: -webkit-transform 0.5s, opacity 0.5s;\r\n\t-webkit-transition: opacity 0.5s, -webkit-transform 0.5s;\r\n\ttransition: opacity 0.5s, -webkit-transform 0.5s;\r\n\ttransition: transform 0.5s, opacity 0.5s;\r\n\ttransition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:first-child {\r\n\t-webkit-transition-delay: 0.4s;\r\n\ttransition-delay: 0.4s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:nth-child(2) {\r\n\t-webkit-transition-delay: 0.45s;\r\n\ttransition-delay: 0.45s;\r\n}\r\n\r\n.morphsearch.open .dummy-column:nth-child(3) {\r\n\t-webkit-transition-delay: 0.5s;\r\n\ttransition-delay: 0.5s;\r\n}\r\n\r\n.morphsearch.open .dummy-column {\r\n\topacity: 1;\r\n\t-webkit-transform: translate3d(0,0,0);\r\n\ttransform: translate3d(0,0,0);\r\n}\r\n\r\n.dummy-column:nth-child(2) {\r\n\tmargin: 0 5%;\r\n}\r\n\r\n.dummy-column h2 {\r\n\tfont-size: 1em;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 800;\r\n\tcolor: #c2c2c2;\r\n\tpadding: 0.5em 0;\r\n}\r\n\r\n.round {\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.dummy-media-object {\r\n\tpadding: 0.75em;\r\n\tdisplay: block;\r\n\tmargin: 0.3em 0;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tbackground: rgba(118,117,128,0.05);\r\n}\r\n\r\n.dummy-media-object:hover,\r\n.dummy-media-object:focus {\r\n\tbackground: rgba(118,117,128,0.1);\r\n}\r\n\r\n.dummy-media-object img {\r\n\tdisplay: inline-block;\r\n\twidth: 50px;\t\r\n\tmargin: 0 10px 0 0;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.dummy-media-object h3 {\r\n\tvertical-align: middle;\r\n\tfont-size: 0.85em;\r\n\tdisplay: inline-block;\r\n\tfont-weight: 700;\r\n\tmargin: 0 0 0 0;\r\n\twidth: calc(100% - 70px);\r\n\tcolor: rgba(145,145,145,0.7);\r\n}\r\n\r\n.dummy-media-object:hover h3 {\r\n\tcolor: rgba(236,90,98,1);\r\n}\r\n\r\n/* Overlay */\r\n.overlay {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(0,0,0,0.5);\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n\t-webkit-transition: opacity 0.5s;\r\n\ttransition: opacity 0.5s;\r\n\t-webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n\ttransition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.morphsearch.open ~ .overlay {\r\n\topacity: 1;\r\n}\r\n\r\n@media screen and (max-width: 53.125em) {\r\n\t.morphsearch-input {\r\n\t\tpadding: 0 25% 0 10px;\r\n\t}\r\n\t.morphsearch.open .morphsearch-input {\r\n\t\tfont-size: 2em;\r\n\t}\r\n\t.dummy-column {\r\n\t\tfloat: none;\r\n\t\twidth: auto;\r\n\t\tpadding: 0 0 2em;\r\n\t}\r\n\t.dummy-column:nth-child(2) {\r\n\t\tmargin: 0;\r\n\t}\r\n\t.morphsearch.open .morphsearch-submit {\r\n\t\t-webkit-transform: translate3d(0,-50%,0) scale3d(0.5,0.5,1);\r\n\t\ttransform: translate3d(0,-50%,0) scale3d(0.5,0.5,1);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 60.625em) {\r\n\t.morphsearch {\r\n\t\twidth: 80%;\r\n\t\ttop: 10%;\r\n\t\tright: 10%;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "magnifier.a29f54300648d675afc4.svg";

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  <ng2-search [data]=\"items\" [columns]=\"columns\"></ng2-search>\r\n</h1>\r\n"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div id=\"morphsearch\" class=\"morphsearch\">\r\n\t<div class=\"morphsearch-form\">\r\n\t\t<input class=\"morphsearch-input\" type=\"search\" [(ngModel)]=\"search\" (ngModelChange)=\"searchTitle($event)\" placeholder=\"Search...\"/>\r\n\t\t<button class=\"morphsearch-submit\" type=\"submit\">Search</button>\r\n\t</div>\r\n\t<div class=\"morphsearch-content\">\r\n\t\t<div class=\"dummy-column\" *ngFor=\"let column of _columns\">\r\n\t\t\t<h2>{{column}}</h2>\r\n\t\t\t<a (click)=\"itemClick(item)\" class=\"dummy-media-object my-animation\" *ngFor=\"let item of _data | filter : 'type' : column \">\r\n\t\t\t\t<img class=\"round\" [src]=\"item.picture\">\r\n\t\t\t\t<h3>{{item.title}}</h3>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div><!-- /morphsearch-content -->\r\n\t<span class=\"morphsearch-close\"></span>\r\n</div><!-- /morphsearch -->\r\n\r\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( true ) {
  // AMD
  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  // browser global
  window.classie = classie;
}

})( window );


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ })

},[475]);
//# sourceMappingURL=main.bundle.js.map