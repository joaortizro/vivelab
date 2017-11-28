webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.usersURL = "https://jsonplaceholder.typicode.com/users";
        this.photosURL = "https://jsonplaceholder.typicode.com/photos";
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.usersURL).map(function (response) {
            return response;
        }).catch(this.handleError);
    };
    UsersService.prototype.getPhotos = function () {
        return this.http.get(this.photosURL).map(function (response) {
            return response;
        }).catch(this.handleError);
    };
    //FUNCTION FROM ANGULAR.IO 
    UsersService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
            // alert(errMsg);
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var usersRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */],
    },
    {
        path: ':id',
        loadChildren: './user/user.module#UserModule'
    }
];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    return UsersRoutingModule;
}());
UsersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(usersRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], UsersRoutingModule);

//# sourceMappingURL=users-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\nspan{\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"light-blue\" >\r\n  <div class=\"nav-wrapper\">\r\n    \r\n    <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\r\n        <a href=\"#!\" class=\"brand-logo\"><i>Logo</i>Conectapp</a>\r\n    </ul>\r\n    <ul id=\"nav-mobile2\" class=\"right hide-on-med-and-down\">\r\n      <li><a href=\"#\"><i class=\"material-icons\">search</i></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col s12 \" *ngFor=\"let user of this.users ; let  i=index\">\r\n                <div class=\"card\" >\r\n                    <div class=\"card-image\">\r\n                      <img src=\"{{this.user_photo[i]}}\">\r\n                          <span class=\"card-title\">{{user.name}}\r\n                          <br>\r\n                          {{user.address.street}} <i class=\"material-icons right\"  (click)=\"saveData(this.user_photo[i])\" routerLink=\"{{user.id}}\">add</i>\r\n                          </span>\r\n                      </div>\r\n\r\n                  </div>\r\n        </div>\r\n      </div>\r\n</div>\r\n\r\n<footer class=\"page-footer black\">\r\n      <p class=\"center-align\">conectapp</p>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
        this.album_ids = [];
        this.album = [];
        this.user_photo = [];
    }
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        return this.usersService.getUsers().subscribe(function (response) {
            _this.users = response.json();
        });
    };
    UsersComponent.prototype.slice = function (element, index, array) {
        return (index % 10 == 0);
    };
    UsersComponent.prototype.loadPhotos = function () {
        var _this = this;
        return this.usersService.getPhotos().subscribe(function (response) {
            _this.photos = response.json();
            for (var photo in _this.photos) {
                if (_this.album_ids.indexOf(_this.photos[photo].albumId) == -1) {
                    _this.album_ids.push(_this.photos[photo].albumId);
                    _this.album.push(_this.photos[photo].url);
                }
            }
            _this.user_photo = _this.album.filter(_this.slice);
        });
    };
    UsersComponent.prototype.saveData = function (photo) {
        //console.log(user);
        localStorage.setItem('user_photo', photo);
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadPhotos();
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_routing_module__ = __webpack_require__("../../../../../src/app/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__users_routing_module__["a" /* UsersRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]
        ]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map