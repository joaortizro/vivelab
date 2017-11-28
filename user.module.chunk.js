webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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






var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userURL = "https://jsonplaceholder.typicode.com/users";
        this.postURL = "https://jsonplaceholder.typicode.com/posts";
        this.commentsURL = "https://jsonplaceholder.typicode.com/comments";
    }
    UserService.prototype.getUserbyId = function (id) {
        var url = this.userURL + "?id=" + id;
        //console.log(url);
        return this.http.get(url).map(function (response) {
            return response;
        }).catch(this.handleError);
    };
    UserService.prototype.getPostbyId = function (id) {
        var url = this.postURL + "?userId=" + id;
        //console.log(url)
        return this.http.get(url).map(function (response) {
            return response;
        }).catch(this.handleError);
    };
    UserService.prototype.getCommentsbyPostId = function (id) {
        var url = this.commentsURL + "?postId=" + id;
        console.log(url);
        return this.http.get(url).map(function (response) {
            return response;
        }).catch(this.handleError);
    };
    //FUNCTION FROM ANGULAR.IO 
    UserService.prototype.handleError = function (error) {
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
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("../../../../../src/app/users/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var userRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */]
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(userRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], UserRoutingModule);

//# sourceMappingURL=user-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\r\n    height: 200px;\r\n}\r\na{\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"light-blue\" >\r\n  <div class=\"nav-wrapper\">\r\n    \r\n    <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\r\n        <a href=\"#!\" class=\"brand-logo\"><i>Logo</i>Conectapp</a>\r\n    </ul>\r\n    <ul id=\"nav-mobile2\" class=\"right hide-on-med-and-down\">\r\n      <li><a href=\"#\"><i class=\"material-icons\">search</i></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class =\"container\">\r\n  <div class =\"row\">\r\n    <div class=\"col s12\">\r\n      <div class=\"card horizontal\">\r\n        <div class=\"card-image\">\r\n          <img src=\"{{this.photo}}\">\r\n        </div>\r\n        <div class=\"card-stacked\"> \r\n          <div class=\"card-content\" *ngIf=\"this.user\">\r\n            <p>{{this.user.name}}</p>\r\n            <p>{{this.user.username}}</p>\r\n            <p>{{this.user.email}}</p>\r\n            <p>{{this.user.address.street}}</p>\r\n            <p>{{this.user.company.name}}</p>\r\n            <p>{{this.user.company.catchPhrase}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div clas=\"col s12\" *ngFor=\"let post of this.posts; let i=index\">\r\n      <div class=\"card-panel\">\r\n        <h5>{{post.title}}</h5>\r\n        {{post.body}}\r\n        <a class=\"btn-floating btn-large waves-effect waves-light red right\">\r\n          <i class=\"material-icons\" (click)=\"this.selecteds[i] = !this.selecteds[i];loadComments(post.id)\">add</i>\r\n        </a>\r\n\r\n        <div class=\"card-panel\" *ngIf=\"this.selecteds[i]\">\r\n          <div class=\"card-panel\" *ngFor=\"let comment of this.commentsByPost[post.id]\">\r\n              <p>{{comment.name}}</p>\r\n              <p>{{comment.email}}</p>\r\n              <p>{{comment.body}}</p>\r\n          </div>\r\n        </div> \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.commentsByPost = {};
    }
    UserComponent.prototype.setUp = function () {
        var _this = this;
        this.photo = localStorage.getItem('user_photo');
        this.route.params.subscribe(function (params) {
            //console.log(params.id)
            _this.loadUser(params.id);
            _this.loadPosts(params.id);
        });
    };
    UserComponent.prototype.loadUser = function (userId) {
        var _this = this;
        return this.userService.getUserbyId(userId).subscribe(function (response) {
            _this.user = response.json()[0];
            //console.log(this.user)
        });
    };
    UserComponent.prototype.loadPosts = function (userId) {
        var _this = this;
        return this.userService.getPostbyId(userId).subscribe(function (response) {
            _this.posts = response.json();
            //console.log(this.posts)
            _this.selecteds = new Array(_this.posts.length);
            for (var i = 0; i < _this.selecteds.length; i++) {
                _this.selecteds[i] = false;
            }
        });
    };
    UserComponent.prototype.loadComments = function (postId) {
        var _this = this;
        return this.userService.getCommentsbyPostId(postId).subscribe(function (response) {
            _this.comments = response.json();
            _this.commentsByPost[postId] = _this.comments;
            //console.log(this.comments)
            console.log(_this.commentsByPost);
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.setUp();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/users/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("../../../../../src/app/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_routing_module__ = __webpack_require__("../../../../../src/app/users/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__user_user_routing_module__["a" /* UserRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map