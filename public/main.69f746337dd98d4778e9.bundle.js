webpackJsonp([1,4],{155:function(t,e,n){"use strict";var o=n(0),a=n(148),r=n(65),i=n(372);n.n(i);n.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e){this.http=t,this.authService=e,n.i(o.isDevMode)()?this.url="http://localhost:8080/":this.url=""}return t.prototype.getTasks=function(t){this.authService.loadUserJWT();var e=t?"get-active":"get-archived",n=new a.Headers;n.append("Authorization",this.authService.token);var o=new a.URLSearchParams;o.set("userid",this.authService.user._id);var r=new a.RequestOptions;return r.search=o,r.headers=n,this.http.get(this.url+"tasks/"+e,r).map(function(t){return t.json()})},t.prototype.addTask=function(t,e){this.authService.loadUserJWT();var n=new a.Headers;n.append("Content-Type","application/json"),n.append("Authorization",this.authService.token);var o=JSON.stringify({name:t,description:e,userid:this.authService.user._id});return this.http.post(this.url+"tasks/add",o,{headers:n}).map(function(t){return t.json()})},t.prototype.removeTask=function(t){this.authService.loadUserJWT();var e=new a.Headers;e.append("Content-Type","application/json"),e.append("Authorization",this.authService.token);var n=JSON.stringify({id:t});return this.http.post(this.url+"tasks/remove",n,{headers:e}).map(function(t){return t.json()})},t.prototype.changeTaskStatus=function(t,e){this.authService.loadUserJWT();var n=e?"archive":"activate",o=new a.Headers;o.append("Content-Type","application/json"),o.append("Authorization",this.authService.token);var r=JSON.stringify({id:t});return this.http.post(this.url+"tasks/"+n,r,{headers:o}).map(function(t){return t.json()})},t.prototype.updateTask=function(t,e,n){this.authService.loadUserJWT();var o=new a.Headers;o.append("Content-Type","application/json"),o.append("Authorization",this.authService.token);var r=JSON.stringify({id:t,amount:e,length:n});return this.http.post(this.url+"tasks/update",r,{headers:o}).map(function(t){return t.json()})},t=s([n.i(o.Injectable)(),c("design:paramtypes",["function"==typeof(e=void 0!==a.Http&&a.Http)&&e||Object,"function"==typeof(i=void 0!==r.a&&r.a)&&i||Object])],t);var e,i}()},391:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=391},392:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(479),a=n(0),r=n(522),i=n(510);r.a.production&&n.i(a.enableProdMode)(),n.i(o.a)().bootstrapModule(i.a)},509:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){this.title="app works!"}return t=a([n.i(o.Component)({selector:"app-root",template:n(686),styles:[n(676)]}),r("design:paramtypes",[])],t)}()},510:function(t,e,n){"use strict";var o=n(152),a=n(0),r=n(470),i=n(148),s=n(40),c=n(509),u=n(513),l=n(512),p=n(515),d=n(517),f=n(516),h=n(511),m=n(519),v=n(514),g=n(518),b=n(155),y=n(65),k=n(520),S=n(521);n.d(e,"a",function(){return O});var T=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},j=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},R=[{path:"",component:u.a,canActivate:[S.a]},{path:"dashboard",component:l.a,canActivate:[k.a]},{path:"about",component:h.a},{path:"new-task",component:d.a,canActivate:[k.a]},{path:"new-pomodoro",component:f.a,canActivate:[k.a]},{path:"login",component:v.a,canActivate:[S.a]},{path:"register",component:g.a,canActivate:[S.a]}],O=function(){function t(){}return t=T([n.i(a.NgModule)({declarations:[c.a,u.a,l.a,p.a,d.a,f.a,h.a,m.a,v.a,g.a],imports:[o.a,r.a,i.HttpModule,s.a.forRoot(R)],providers:[b.a,y.a,k.a,S.a],bootstrap:[c.a]}),j("design:paramtypes",[])],t)}()},511:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=a([n.i(o.Component)({selector:"app-about",template:n(687),styles:[n(677)]}),r("design:paramtypes",[])],t)}()},512:function(t,e,n){"use strict";var o=n(0),a=n(155);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.taskService=t,this.activeTasks=this.archivedTasks=[],this.pomodoroSum=0,this.updateTasks()}return t.prototype.updateTasks=function(){var t=this;this.pomodoroSum=0,this.minuteSum=0,this.taskService.getTasks(!0).subscribe(function(e){t.activeTasks=e;for(var n=0;n<t.activeTasks.length;++n)for(var o=0;o<t.activeTasks[n].pomodoros.length;++o)t.pomodoroSum=t.pomodoroSum+t.activeTasks[n].pomodoros[o].amount,t.minuteSum+=t.activeTasks[n].pomodoros[o].amount*t.activeTasks[n].pomodoros[o].length}),this.taskService.getTasks(!1).subscribe(function(e){t.archivedTasks=e;for(var n=0;n<t.archivedTasks.length;++n)for(var o=0;o<t.archivedTasks[n].pomodoros.length;++o)t.pomodoroSum+=t.archivedTasks[n].pomodoros[o].amount,t.minuteSum+=t.archivedTasks[n].pomodoros[o].amount*t.archivedTasks[n].pomodoros[o].length})},t.prototype.deleteTask=function(t){var e=this;this.taskService.removeTask(t).subscribe(function(t){t.success?e.updateTasks():alert("Unable to remove task!")})},t.prototype.archiveTask=function(t){var e=this;this.taskService.changeTaskStatus(t,!0).subscribe(function(t){t.success?e.updateTasks():alert("Unable to remove task!")})},t.prototype.activateTask=function(t){var e=this;this.taskService.changeTaskStatus(t,!1).subscribe(function(t){t.success?e.updateTasks():alert("Unable to remove task!")})},t.prototype.ngOnInit=function(){},t=r([n.i(o.Component)({selector:"app-dashboard",template:n(688),styles:[n(678)]}),i("design:paramtypes",["function"==typeof(e=void 0!==a.a&&a.a)&&e||Object])],t);var e}()},513:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=a([n.i(o.Component)({selector:"app-home",template:n(689),styles:[n(679)]}),r("design:paramtypes",[])],t)}()},514:function(t,e,n){"use strict";var o=n(0),a=n(65),r=n(40);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.authService=t,this.router=e}return t.prototype.ngOnInit=function(){},t.prototype.onSubmit=function(){var t=this;this.authService.loginUser(this.username,this.password).subscribe(function(e){e.success?(t.authService.storeUserJWT(e.user,e.token),t.router.navigate(["dashboard"])):alert(e.msg)})},t=i([n.i(o.Component)({selector:"app-login",template:n(690),styles:[n(680)]}),s("design:paramtypes",["function"==typeof(e=void 0!==a.a&&a.a)&&e||Object,"function"==typeof(c=void 0!==r.c&&r.c)&&c||Object])],t);var e,c}()},515:function(t,e,n){"use strict";var o=n(0),a=n(65),r=n(40);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.authService=t,this.router=e,this.show=!1}return t.prototype.toggleCollapse=function(){this.show=!this.show},t.prototype.onLogout=function(){this.authService.logoutUser(),this.router.navigate(["/"])},t.prototype.ngOnInit=function(){},t=i([n.i(o.Component)({selector:"app-navbar",template:n(691),styles:[n(681)]}),s("design:paramtypes",["function"==typeof(e=void 0!==a.a&&a.a)&&e||Object,"function"==typeof(c=void 0!==r.c&&r.c)&&c||Object])],t);var e,c}()},516:function(t,e,n){"use strict";var o=n(0),a=n(40),r=n(155);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){var n=this;this.router=t,this.taskService=e,this.taskService.getTasks(!0).subscribe(function(t){n.tasks=t}),this.pomodoroStart=!1,this.pomodoroLength=25,this.shortBreakLength=5,this.longBreakLength=15,this.pomodoroCount=1,this.breakCount=0,this.roundCounter=1}return t.prototype.updateTimer=function(){this.roundCounter%2==1?(this.timerStatus=this.tasks[this.chosenTask].name+": Pomodoro "+this.pomodoroCount++,this.setTimer(this.pomodoroLength)):(this.timerStatus=this.tasks[this.chosenTask].name+": Break "+(this.breakCount+1),this.setTimer(this.breaks[this.breakCount++%4]))},t.prototype.startTimer=function(){if(void 0==this.chosenTask)return void alert("You must choose a task. If one does not exist, create one.");this.pomodoroLength*=60,this.shortBreakLength*=60,this.longBreakLength*=60,this.breaks=[this.shortBreakLength,this.shortBreakLength,this.shortBreakLength,this.longBreakLength],this.updateTimer(),this.pomodoroStart=!0},t.prototype.setTimer=function(t){this.timerStart=t},t.prototype.onTimerChange=function(t){var e=this,n=this.roundCounter%2==1?this.pomodoroLength:this.breaks[(this.breakCount-1)%4];if(t.timeEllapsed>n&&(this.roundCounter++,this.updateTimer()),t.isStopped){var o=this.tasks[this.chosenTask]._id,a=this.pomodoroCount-2;this.roundCounter%2==1?a+=t.fraction:a+=1;var r=this.pomodoroLength/60;this.taskService.updateTask(o,a,r).subscribe(function(t){t.success||alert("Task update failed!"),e.router.navigate(["/dashboard"])})}},t.prototype.ngOnInit=function(){},t=i([n.i(o.Component)({selector:"app-new-pomodoro",template:n(692),styles:[n(682)]}),s("design:paramtypes",["function"==typeof(e=void 0!==a.c&&a.c)&&e||Object,"function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],t);var e,c}()},517:function(t,e,n){"use strict";var o=n(0),a=n(40),r=n(155);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.router=t,this.taskService=e}return t.prototype.addTask=function(){var t=this;this.taskService.addTask(this.name,this.description).subscribe(function(e){e.success?t.router.navigate(["/dashboard"]):(alert("Unable to add task!"),t.router.navigate(["/add-task"]))})},t.prototype.ngOnInit=function(){},t=i([n.i(o.Component)({selector:"app-new-task",template:n(693),styles:[n(683)]}),s("design:paramtypes",["function"==typeof(e=void 0!==a.c&&a.c)&&e||Object,"function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],t);var e,c}()},518:function(t,e,n){"use strict";var o=n(0),a=n(65),r=n(40);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.authService=t,this.router=e}return t.prototype.ngOnInit=function(){},t.prototype.onSubmit=function(){var t=this;this.authService.registerUser(this.email,this.username,this.password).subscribe(function(e){e.success?t.router.navigate(["/login"]):(alert("Registration failed!"),t.router.navigate(["/register"]))})},t=i([n.i(o.Component)({selector:"app-register",template:n(694),styles:[n(684)]}),s("design:paramtypes",["function"==typeof(e=void 0!==a.a&&a.a)&&e||Object,"function"==typeof(c=void 0!==r.c&&r.c)&&c||Object])],t);var e,c}()},519:function(t,e,n){"use strict";function o(t){var e=t.toString();return t<=9&&(e="0"+e),e}var a=n(0),r=n(40);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){var e=this;this.router=t,this.notifier=new a.EventEmitter,this.timeEllapsed=0,this.isPaused=!0,this.isStopped=!1,this.pauseOffset=0,this.minutes="00",this.seconds="00",this.oldSeconds="00",this.tickSound=new Audio,this.tickSound.src="../../../sounds/tick.mp3",this.alarmSound=new Audio,this.alarmSound.src="../../../sounds/bell.mp3",this.router.events.subscribe(function(t){t instanceof r.b&&e.stop()})}return t.prototype.start=function(){var t=this;this.startTime=Date.now(),this.isPaused=!1,this.intervalId=setInterval(function(){if(t.timeEllapsed=Math.floor((Date.now()-t.startTime)/1e3)+t.pauseOffset,t.notify(),t.timeEllapsed<=t.countTime&&!t.isPaused){var e=t.countTime-t.timeEllapsed;t.minutes=o(Math.floor(e/60)),t.seconds=o(e%60),t.seconds!=t.oldSeconds&&(t.tickSound.play(),t.oldSeconds=t.seconds)}else t.isPaused||(t.timeEllapsed=0,t.pauseOffset=0,t.isPaused=!0,t.alarmSound.load(),t.alarmSound.play()),clearInterval(t.intervalId)},500)},t.prototype.pause=function(){this.isPaused=!0,this.pauseOffset=this.timeEllapsed},t.prototype.stop=function(){clearInterval(this.intervalId),this.isStopped=!0,this.notify()},t.prototype.notify=function(){this.notifier.next({timeEllapsed:this.timeEllapsed,isStopped:this.isStopped,fraction:this.timeEllapsed/this.countTime})},t.prototype.ngOnInit=function(){},i([n.i(a.Input)(),s("design:type",Number)],t.prototype,"countTime",void 0),i([n.i(a.Input)(),s("design:type",String)],t.prototype,"status",void 0),i([n.i(a.Output)(),s("design:type","function"==typeof(e=void 0!==a.EventEmitter&&a.EventEmitter)&&e||Object)],t.prototype,"notifier",void 0),t=i([n.i(a.Component)({selector:"app-timer",template:n(695),styles:[n(685)]}),s("design:paramtypes",["function"==typeof(c=void 0!==r.c&&r.c)&&c||Object])],t);var e,c}()},520:function(t,e,n){"use strict";var o=n(0),a=n(40),r=n(65);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.router=t,this.authService=e}return t.prototype.canActivate=function(){return!!this.authService.loggedIn()||(this.router.navigate(["/"]),!1)},t=i([n.i(o.Injectable)(),s("design:paramtypes",["function"==typeof(e=void 0!==a.c&&a.c)&&e||Object,"function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],t);var e,c}()},521:function(t,e,n){"use strict";var o=n(0),a=n(40),r=n(65);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.router=t,this.authService=e}return t.prototype.canActivate=function(){return!this.authService.loggedIn()||(this.router.navigate(["/dashboard"]),!1)},t=i([n.i(o.Injectable)(),s("design:paramtypes",["function"==typeof(e=void 0!==a.c&&a.c)&&e||Object,"function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],t);var e,c}()},522:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},65:function(t,e,n){"use strict";var o=n(0),a=n(148),r=n(523),i=(n.n(r),n(372));n.n(i);n.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this.http=t,n.i(o.isDevMode)()?this.url="http://localhost:8080/":this.url=""}return t.prototype.registerUser=function(t,e,n){var o=this.url+"users/register",r=new a.Headers;r.append("Content-Type","application/json");var i=JSON.stringify({email:t,username:e,password:n});return this.http.post(o,i,{headers:r}).map(function(t){return t.json()})},t.prototype.loginUser=function(t,e){var n=this.url+"users/login",o=new a.Headers;o.append("Content-Type","application/json");var r=JSON.stringify({username:t,password:e});return this.http.post(n,r,{headers:o}).map(function(t){return t.json()})},t.prototype.logoutUser=function(){this.user=null,this.token=null,localStorage.clear()},t.prototype.storeUserJWT=function(t,e){localStorage.setItem("token",e),localStorage.setItem("user",JSON.stringify(t)),this.token=e,this.user=t},t.prototype.loadUserJWT=function(){this.token=localStorage.getItem("token"),this.user=JSON.parse(localStorage.getItem("user"))},t.prototype.loggedIn=function(){return n.i(r.tokenNotExpired)()},t=s([n.i(o.Injectable)(),c("design:paramtypes",["function"==typeof(e=void 0!==a.Http&&a.Http)&&e||Object])],t);var e}()},676:function(t,e){t.exports=""},677:function(t,e){t.exports=""},678:function(t,e){t.exports="td:last-child{width:30%}td:nth-child(2){width:40%}td:nth-child(3){width:5%}td:first-child{width:25%}"},679:function(t,e){t.exports="a[role=button]{width:10em}"},680:function(t,e){t.exports=""},681:function(t,e){t.exports="nav{margin-bottom:20px}"},682:function(t,e){t.exports=""},683:function(t,e){t.exports=""},684:function(t,e){t.exports=""},685:function(t,e){t.exports="div{text-align:center}#timer{color:#fff;padding:1em;margin-bottom:2em}button{width:10em}h1{font-size:5em}"},686:function(t,e){t.exports='<app-navbar></app-navbar>\n<div style="margin-bottom: 50px;"></div>\n<div class="container">\n  <router-outlet></router-outlet>\n</div>\n'},687:function(t,e){t.exports='<h2>The Pomodoro Technique</h2>\n<p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.</p>\n<h2>Instructions</h2>\n<p>Add tasks using the <i>New Task</i> pane, then run pomodoros on those tasks using the <i>New Pomodoro</i> pane.\n<h2>Author</h2>\n<p>This project was created by Gage Golish.</p>\n<h2>Links</h2>\n<ul>\n  <li><a href="https://github.com/ggolish/PomodoroApp">Project Code</a>\n  <li><a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia Article</a>\n  <li><a href="https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730">Life Hacker Article</a>\n</ul>\n'},688:function(t,e){t.exports='<div id="dashboard-summary">\n  <h2>Pomodoro Summary</h2>\n  <div *ngIf="pomodoroSum > 0">\n    <table class="table table-hover">\n      <tr>\n        <th scope="row">Total Pomodoros\n        <td>{{pomodoroSum.toFixed(2)}}\n        <th scope="row">Total Time\n        <td>{{minuteSum.toFixed(2)}} minutes\n    </table>\n  </div>\n  <div *ngIf="pomodoroSum <= 0">\n    <p>There are no pomodoros to display.</p>\n  </div>\n  <h2>Active Tasks</h2>\n  <div *ngIf="activeTasks.length > 0">\n    <div *ngFor="let task of activeTasks" class="card border-primary mb-3">\n      <div class="card-header bg-primary text-white">\n        <h4 style="display: inline-block;">{{task.name}}</h4>\n        <div style="float: right">\n          <button (click)="archiveTask(task._id)" class="btn btn-primary btn-sm">Archive</button>\n          <button (click)="deleteTask(task._id)" class="btn btn-primary btn-sm">Delete</button>\n        </div>\n      </div>\n      <div class="card-body">\n        <p class="card-text">{{task.description}}</p>\n      </div>\n      <div class="card-footer">\n        <span class="badge badge-primary">{{task.total.toFixed(2)}}</span>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="activeTasks.length == 0">\n    <p>There are no active tasks to display.</p>\n  </div>\n  <h2>Archived Tasks</h2>\n  <div *ngIf="archivedTasks.length > 0">\n    <div *ngFor="let task of archivedTasks" class="card border-secondary mb-3">\n      <div class="card-header bg-secondary text-white">\n        <h4 style="display: inline-block;">{{task.name}}</h4>\n        <div style="float: right">\n          <button (click)="activateTask(task._id)" class="btn btn-secondary btn-sm">Activate</button>\n          <button (click)="deleteTask(task._id)" class="btn btn-secondary btn-sm">Delete</button>\n        </div>\n      </div>\n      <div class="card-body">\n        <p class="card-text">{{task.description}}</p>\n      </div>\n      <div class="card-footer">\n        <span class="badge badge-secondary">{{task.total.toFixed(2)}}</span>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="archivedTasks.length == 0">\n    <p>There are no archived tasks to display.</p>\n  </div>\n</div>\n'},689:function(t,e){t.exports='<div class="jumbotron bg-light text-center">\n  <h1 class="display-4">Welcome to Pomodoro App!</h1>\n  <hr class="my-3">\n  <p class="lead">A simple application utilizing the pomodoro technique for time management.</p>\n  <nav>\n    <a class="btn btn-primary btn-lg" role="button" routerLink="/login">Login</a>\n    <a class="btn btn-primary btn-lg" role="button" routerLink="/register">Register</a>\n  </nav>\n</div>\n'},690:function(t,e){t.exports='<form (submit)="onSubmit()">\n  <div class="form-group">\n    <label>Username</label>\n    <input class="form-control" type="text" [(ngModel)]="username" name="username" placeholder="Enter username...">\n  </div>\n  <div class="form-group">\n    <label>Password</label>\n    <input class="form-control" type="password" [(ngModel)]="password" name="password" placeholder="Enter password...">\n  </div>\n  <div class="form-group">\n    <button class="btn btn-secondary" type="submit">Login</button>\n  </div>\n</form>\n'},691:function(t,e){t.exports='<nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">\n  <a class="navbar-brand" routerLink="/">\n    <img src="../../images/timer.png" width="30" height="30" class="d-inline-block align-top" alt="">\n    <b>Pomodoro App</b>\n  </a>\n  <button (click)="toggleCollapse()" class="navbar-toggler navbar-toggler-right" type="button">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" [class.show]="show">\n    <ul class="navbar-nav mr-auto">\n      <li class="nav-item">\n        <a class="nav-link" *ngIf="authService.loggedIn()" routerLinkActive="active" routerLinkActiveOptions="{exact: true}" routerLink="/dashboard">Dashboard</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" *ngIf="authService.loggedIn()" routerLinkActive="active" routerLinkActiveOptions="{exact: true}" routerLink="/new-task">New Task</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" *ngIf="authService.loggedIn()" routerLinkActive="active" routerLinkActiveOptions="{exact: true}" routerLink="/new-pomodoro">New Pomodoro</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" routerLinkActive="active" routerLinkActiveOptions="{exact: true}" routerLink="/about">About</a>\n      </li>\n    </ul>\n    <ul class="navbar-nav">\n      <li class="nav-item">\n        <a class="nav-link" *ngIf="!authService.loggedIn()" routerLinkActive="active" routerLinkActiveOptions="{exact: true}" routerLink="/login">Login</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" *ngIf="authService.loggedIn()" (click)="onLogout()" href="#">Logout</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" *ngIf="!authService.loggedIn()" routerLinkActive="active" routerLinkActiveOptions="{exact: true}" routerLink="/register">Register</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n'},692:function(t,e){t.exports='<div *ngIf="!pomodoroStart">\n  <form (submit)="startTimer()">\n    <div class="form-group">\n      <label>Pomodoro Length (minutes)</label>\n      <input class="form-control" type="number" [(ngModel)]="pomodoroLength" name="pomodoroLength" value="25" step=1 min=0 max=99 required>\n    </div>\n    <div class="form-group">\n      <label>Short Break Length (minutes)</label>\n      <input class="form-control" type="number" [(ngModel)]="shortBreakLength" name="shortBreakLength" value="5" step=1 min=0 max=99 required>\n    </div>\n    <div class="form-group">\n      <label>Long Break Length (minutes)</label>\n      <input class="form-control" type="number" [(ngModel)]="longBreakLength" name="longBreakLength" value="15" step=1 min=0 max=99 required>\n    </div>\n    <div class="form-group">\n      <label>Choose Task</label>\n      <select class="form-control" [(ngModel)]="chosenTask" name="chosenTask">\n        <option *ngFor="let task of tasks; let i = index" value={{i}} placeholder="Choose a task..." required>{{task.name}}</option>\n      </select>\n    </div>\n    <div class="form-group">\n      <button type="submit" class="btn btn-secondary">Start Pomodoro</button>\n    </div>\n  </form>\n</div>\n<div *ngIf="pomodoroStart">\n  <app-timer [countTime]="timerStart" [status]="timerStatus" (notifier)="onTimerChange($event)"></app-timer>\n</div>\n'},693:function(t,e){t.exports='<form (submit)="addTask()">\n  <div class="form-group">\n    <label>Name</label>\n    <input type="text" [(ngModel)]="name" name="name" class="form-control" placeholder="Enter name of task..." required>\n  </div>\n  <div class="form-group">\n    <label>Description</label>\n    <textarea class="form-control" [(ngModel)]="description" name="description" rows=4 placeholder="Enter description of task..."></textarea>\n  </div>\n  <div class="form-group">\n    <button type="submit" class="btn btn-secondary">Create Task</button>\n  </div>\n</form>\n'},694:function(t,e){t.exports='<form (submit)="onSubmit()">\n  <div class="form-group">\n    <label>Email</label>\n    <input class="form-control" type="email" [(ngModel)]="email" name="email" placeholder="Enter email..." required>\n  </div>\n  <div class="form-group">\n    <label>Username</label>\n    <input class="form-control" type="text" [(ngModel)]="username" name="username" placeholder="Enter username..." required>\n  </div>\n  <div class="form-group">\n    <label>Password</label>\n    <input class="form-control" type="password" [(ngModel)]="password" name="password" placeholder="Enter password..." required>\n  </div>\n  <div class="form-group">\n    <button class="btn btn-secondary" type="submit">Register</button>\n  </div>\n</form>\n'},695:function(t,e){t.exports='<div id="status">\n  <i>{{status}}</i>\n</div>\n<div id="timer" class="jumbotron bg-secondary">\n  <h1>{{minutes}}:{{seconds}}</h1>\n</div>\n<div id="controls">\n  <button *ngIf="!isPaused" class="btn btn-primary" (click)="pause()">Pause</button>\n  <button *ngIf="isPaused" class="btn btn-primary" (click)="start()">Start</button>\n  <button class="btn btn-primary" (click)="stop()">Stop</button>\n</div>\n'},732:function(t,e,n){t.exports=n(392)}},[732]);