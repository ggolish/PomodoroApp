webpackJsonp([1,4],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getTasks = function (active) {
        var endpoint = (active) ? "get-active" : "get-archived";
        return this.http.get("tasks/" + endpoint)
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.addTask = function (name, description) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var content = JSON.stringify({
            name: name,
            description: description
        });
        return this.http.post("tasks/add", content, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.removeTask = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var content = JSON.stringify({
            id: id
        });
        return this.http.post("tasks/remove", content, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.changeTaskStatus = function (id, active) {
        var endpoint = (active) ? "archive" : "activate";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var content = JSON.stringify({
            id: id
        });
        return this.http.post("tasks/" + endpoint, content, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.updateTask = function (id, amount, length) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var content = JSON.stringify({
            id: id,
            amount: amount,
            length: length
        });
        return this.http.post("tasks/update", content, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TaskService);
    return TaskService;
    var _a;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/task.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/main.js.map

/***/ }),

/***/ 507:
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
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(679),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_new_task_new_task_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_new_pomodoro_new_pomodoro_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_task_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_timer_timer_component__ = __webpack_require__(515);
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














var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__["a" /* AboutComponent */] },
    { path: "new-task", component: __WEBPACK_IMPORTED_MODULE_9__components_new_task_new_task_component__["a" /* NewTaskComponent */] },
    { path: "new-pomodoro", component: __WEBPACK_IMPORTED_MODULE_10__components_new_pomodoro_new_pomodoro_component__["a" /* NewPomodoroComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_new_task_new_task_component__["a" /* NewTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_new_pomodoro_new_pomodoro_component__["a" /* NewPomodoroComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_timer_timer_component__["a" /* TimerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_task_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(680),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/about.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(taskService) {
        this.taskService = taskService;
        this.activeTasks = this.archivedTasks = [];
        this.pomodoroSum = 0;
        this.updateTasks();
    }
    DashboardComponent.prototype.updateTasks = function () {
        var _this = this;
        this.pomodoroSum = 0;
        this.minuteSum = 0;
        this.taskService.getTasks(true).subscribe(function (tasks) {
            _this.activeTasks = tasks;
            for (var i = 0; i < _this.activeTasks.length; ++i) {
                for (var j = 0; j < _this.activeTasks[i].pomodoros.length; ++j) {
                    _this.pomodoroSum = _this.pomodoroSum + _this.activeTasks[i].pomodoros[j].amount;
                    _this.minuteSum += _this.activeTasks[i].pomodoros[j].amount * _this.activeTasks[i].pomodoros[j].length;
                }
            }
        });
        this.taskService.getTasks(false).subscribe(function (tasks) {
            _this.archivedTasks = tasks;
            for (var i = 0; i < _this.archivedTasks.length; ++i) {
                for (var j = 0; j < _this.archivedTasks[i].pomodoros.length; ++j) {
                    _this.pomodoroSum += _this.archivedTasks[i].pomodoros[j].amount;
                    _this.minuteSum += _this.archivedTasks[i].pomodoros[j].amount * _this.archivedTasks[i].pomodoros[j].length;
                }
            }
        });
    };
    DashboardComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.taskService.removeTask(id).subscribe(function (data) {
            if (data.success) {
                _this.updateTasks();
            }
            else {
                alert("Unable to remove task!");
            }
        });
    };
    DashboardComponent.prototype.archiveTask = function (id) {
        var _this = this;
        this.taskService.changeTaskStatus(id, true).subscribe(function (data) {
            if (data.success) {
                _this.updateTasks();
            }
            else {
                alert("Unable to remove task!");
            }
        });
    };
    DashboardComponent.prototype.activateTask = function (id) {
        var _this = this;
        this.taskService.changeTaskStatus(id, false).subscribe(function (data) {
            if (data.success) {
                _this.updateTasks();
            }
            else {
                alert("Unable to remove task!");
            }
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(681),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(682),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/home.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(683),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPomodoroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPomodoroComponent = (function () {
    function NewPomodoroComponent(router, taskService) {
        var _this = this;
        this.router = router;
        this.taskService = taskService;
        this.taskService.getTasks(true).subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this.pomodoroStart = false;
        this.pomodoroLength = 25;
        this.shortBreakLength = 5;
        this.longBreakLength = 15;
        this.pomodoroCount = 1;
        this.breakCount = 0;
        this.roundCounter = 1;
    }
    NewPomodoroComponent.prototype.updateTimer = function () {
        if (this.roundCounter % 2 == 1) {
            this.timerStatus = this.tasks[this.chosenTask].name + ": Pomodoro " + this.pomodoroCount++;
            this.setTimer(this.pomodoroLength);
        }
        else {
            this.timerStatus = this.tasks[this.chosenTask].name + ": Break " + (this.breakCount + 1);
            this.setTimer(this.breaks[this.breakCount++ % 4]);
        }
    };
    NewPomodoroComponent.prototype.startTimer = function () {
        // Validation
        if (this.chosenTask == undefined) {
            alert("You must choose a task. If one does not exist, create one.");
            return;
        }
        // Timer initialization
        this.pomodoroLength *= 60;
        this.shortBreakLength *= 60;
        this.longBreakLength *= 60;
        this.breaks = [this.shortBreakLength, this.shortBreakLength, this.shortBreakLength, this.longBreakLength];
        this.updateTimer();
        this.pomodoroStart = true;
    };
    NewPomodoroComponent.prototype.setTimer = function (start) {
        this.timerStart = start;
    };
    NewPomodoroComponent.prototype.onTimerChange = function (event) {
        var _this = this;
        var compareValue = (this.roundCounter % 2 == 1) ? this.pomodoroLength : this.breaks[(this.breakCount - 1) % 4];
        if (event.timeEllapsed > compareValue) {
            this.roundCounter++;
            this.updateTimer();
        }
        // Update task in database when the timer is stopped
        if (event.isStopped) {
            var id = this.tasks[this.chosenTask]._id;
            var amount = this.pomodoroCount - 2;
            if (this.roundCounter % 2 == 1)
                amount += event.fraction;
            var length = this.pomodoroLength / 60;
            this.taskService.updateTask(id, amount, length).subscribe(function (data) {
                if (!data.success) {
                    alert("Task update failed!");
                }
                _this.router.navigate(["/dashboard"]);
            });
        }
    };
    NewPomodoroComponent.prototype.ngOnInit = function () {
    };
    NewPomodoroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-new-pomodoro',
            template: __webpack_require__(684),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */]) === 'function' && _b) || Object])
    ], NewPomodoroComponent);
    return NewPomodoroComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/new-pomodoro.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewTaskComponent = (function () {
    function NewTaskComponent(router, taskService) {
        this.router = router;
        this.taskService = taskService;
    }
    NewTaskComponent.prototype.addTask = function () {
        var _this = this;
        this.taskService.addTask(this.name, this.description)
            .subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(["/dashboard"]);
            }
            else {
                alert("Unable to add task!");
                _this.router.navigate(["/add-task"]);
            }
        });
    };
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-new-task',
            template: __webpack_require__(685),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */]) === 'function' && _b) || Object])
    ], NewTaskComponent);
    return NewTaskComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/new-task.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Function for padding a number string with a leading zero,
// should probably put this in a service
function padZero(n) {
    var s = n.toString();
    if (n <= 9) {
        s = "0" + s;
    }
    return s;
}
var TimerComponent = (function () {
    function TimerComponent(router) {
        this.router = router;
        this.notifier = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.timeEllapsed = 0;
        this.isPaused = true;
        this.isStopped = false;
        this.pauseOffset = 0;
        this.minutes = "00";
        this.seconds = "00";
        this.oldSeconds = "00";
        this.tickSound = new Audio();
        this.tickSound.src = "../../../sounds/tick.mp3";
        this.alarmSound = new Audio();
        this.alarmSound.src = "../../../sounds/bell.mp3";
    }
    TimerComponent.prototype.start = function () {
        var _this = this;
        this.startTime = Date.now();
        this.isPaused = false;
        this.intervalId = setInterval(function () {
            _this.timeEllapsed = Math.floor((Date.now() - _this.startTime) / 1000) + _this.pauseOffset;
            _this.notify();
            if (_this.timeEllapsed <= _this.countTime && !_this.isPaused) {
                var newTime = _this.countTime - _this.timeEllapsed;
                _this.minutes = padZero(Math.floor(newTime / 60));
                _this.seconds = padZero(newTime % 60);
                if (_this.seconds != _this.oldSeconds) {
                    _this.tickSound.play();
                    _this.oldSeconds = _this.seconds;
                }
            }
            else {
                if (!_this.isPaused) {
                    _this.timeEllapsed = 0;
                    _this.pauseOffset = 0;
                    _this.isPaused = true;
                    _this.alarmSound.load();
                    _this.alarmSound.play();
                }
                clearInterval(_this.intervalId);
            }
        }, 500);
    };
    ;
    TimerComponent.prototype.pause = function () {
        this.isPaused = true;
        this.pauseOffset = this.timeEllapsed;
    };
    TimerComponent.prototype.stop = function () {
        clearInterval(this.intervalId);
        this.isStopped = true;
        this.notify();
    };
    TimerComponent.prototype.notify = function () {
        this.notifier.next({
            timeEllapsed: this.timeEllapsed,
            isStopped: this.isStopped,
            fraction: this.timeEllapsed / this.countTime
        });
    };
    TimerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], TimerComponent.prototype, "countTime", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], TimerComponent.prototype, "status", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], TimerComponent.prototype, "notifier", void 0);
    TimerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-timer',
            template: __webpack_require__(686),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], TimerComponent);
    return TimerComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/timer.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ggolish/Developer/apps/pomodoro/angular-src/src/environment.js.map

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "td:last-child {\n  width: 30%;\n}\n\ntd:nth-child(2) {\n  width: 40%;\n}\n\ntd:nth-child(3) {\n  width: 5%;\n}\n\ntd:first-child {\n  width: 25%;\n}\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "nav {\n  margin-bottom: 20px;\n}\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center;\n}\n\n#timer {\n  font-size: 96pt;\n  color: white;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n\nbutton {\n  width: 200px;\n}\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" class=\"jumbotron bg-light\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<h2>The Pomodoro Technique</h2>\n<p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.</p>\n<h2>Instructions</h2>\n<p>Add tasks using the <i>New Task</i> pane, then run pomodoros on those tasks using the <i>New Pomodoro</i> pane.\n<h2>Author</h2>\n<p>This project was created by Gage Golish.</p>\n<h2>Links</h2>\n<ul>\n  <li><a href=\"https://github.com/ggolish/PomodoroApp\">Project Code</a>\n  <li><a href=\"https://en.wikipedia.org/wiki/Pomodoro_Technique\">Wikipedia Article</a>\n  <li><a href=\"https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730\">Life Hacker Article</a>\n</ul>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"dashboard-summary\">\n  <h2>Pomodoro Summary</h2>\n  <div *ngIf=\"pomodoroSum > 0\">\n    <table class=\"table table-hover\">\n      <tr>\n        <th scope=\"row\">Total Pomodoros\n        <td>{{pomodoroSum.toFixed(2)}}\n        <th scope=\"row\">Total Time\n        <td>{{minuteSum.toFixed(2)}} minutes\n    </table>\n  </div>\n  <div *ngIf=\"pomodoroSum <= 0\">\n    <p>There are no pomodoros to display.</p>\n  </div>\n  <h2>Active Tasks</h2>\n  <div *ngIf=\"activeTasks.length > 0\">\n    <table class=\"table table-hover\">\n      <tr>\n        <th scope=\"col\">Name\n        <th scope=\"col\">Description\n        <th scope=\"col\">Pomodoros\n        <th scope=\"col\">\n      </tr>\n      <tr *ngFor=\"let task of activeTasks\">\n        <td>{{task.name}}\n        <td>{{task.description}}\n        <td>{{task.total.toFixed(2)}}\n        <td>\n          <button (click)=\"archiveTask(task._id)\" class=\"btn btn-primary\">Archive</button>\n          <button (click)=\"deleteTask(task._id)\" class=\"btn btn-secondary\">Delete</button>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"activeTasks.length == 0\">\n    <p>There are no active tasks to display.</p>\n  </div>\n  <h2>Archived Tasks</h2>\n  <div *ngIf=\"archivedTasks.length > 0\">\n    <table class=\"table table-hover\">\n      <tr>\n        <th scope=\"col\">Name\n        <th scope=\"col\">Description\n        <th scope=\"col\">Pomodoros\n        <th scope=\"col\">\n      </tr>\n      <tr *ngFor=\"let task of archivedTasks\">\n        <td>{{task.name}}\n        <td>{{task.description}}\n        <td>{{task.total}}\n        <td>\n          <button (click)=\"activateTask(task._id)\" class=\"btn btn-primary\">Activate</button>\n          <button (click)=\"deleteTask(task._id)\" class=\"btn btn-secondary\">Delete</button>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"archivedTasks.length == 0\">\n    <p>There are no archived tasks to display.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4\">Welcome to PomodoroApp!</h1>\n<p class=\"lead\">This is a simple application utilizing the pomodoro technique for time management.</p>\n<hr class=\"my-3\">\n<p>The <a href=\"https://en.wikipedia.org/wiki/Pomodoro_Technique\">Pomodoro Technique</a> is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.</p>\n<nav>\n  <a class=\"btn btn-primary btn-lg btn-block\" role=\"button\" routerLink=\"/dashboard\">Start Application</a>\n</nav>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><b>PomodoroApp</b></a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\" routerLink=\"/dashboard\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\" routerLink=\"/new-task\">New Task</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\" routerLink=\"/new-pomodoro\">New Pomodoro</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\" routerLink=\"/about\">About</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!pomodoroStart\">\n  <app-navbar></app-navbar>\n  <form (submit)=\"startTimer()\">\n    <div class=\"form-group\">\n      <label>Pomodoro Length (minutes)</label>\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"pomodoroLength\" name=\"pomodoroLength\" value=\"25\" step=1 min=0 max=99 required>\n    </div>\n    <div class=\"form-group\">\n      <label>Short Break Length (minutes)</label>\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"shortBreakLength\" name=\"shortBreakLength\" value=\"5\" step=1 min=0 max=99 required>\n    </div>\n    <div class=\"form-group\">\n      <label>Long Break Length (minutes)</label>\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"longBreakLength\" name=\"longBreakLength\" value=\"15\" step=1 min=0 max=99 required>\n    </div>\n    <div class=\"form-group\">\n      <label>Choose Task</label>\n      <select class=\"form-control\" [(ngModel)]=\"chosenTask\" name=\"chosenTask\">\n        <option *ngFor=\"let task of tasks; let i = index\" value={{i}} placeholder=\"Choose a task...\" required>{{task.name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-secondary\">Start Pomodoro</button>\n    </div>\n  </form>\n</div>\n<div *ngIf=\"pomodoroStart\">\n  <app-timer [countTime]=\"timerStart\" [status]=\"timerStatus\" (notifier)=\"onTimerChange($event)\"></app-timer>\n</div>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<form (submit)=\"addTask()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter name of task...\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <textarea class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" rows=4 placeholder=\"Enter description of task...\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-secondary\">Create Task</button>\n  </div>\n</form>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div id=\"status\">\n  <i>{{status}}</i>\n</div>\n<div id=\"timer\" class=\"jumbotron bg-secondary\">\n  {{minutes}}:{{seconds}}\n</div>\n<div id=\"controls\">\n  <button *ngIf=\"!isPaused\" class=\"btn btn-primary\" (click)=\"pause()\">Pause</button>\n  <button *ngIf=\"isPaused\" class=\"btn btn-primary\" (click)=\"start()\">Start</button>\n  <button class=\"btn btn-primary\" (click)=\"stop()\">Stop</button>\n</div>\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ })

},[720]);
//# sourceMappingURL=main.bundle.map