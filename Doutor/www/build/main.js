webpackJsonp([7],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var auth = (function () {
    function auth(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    auth.prototype.createUser = function (user) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    auth.prototype.signIn = function (user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    auth.prototype.signOut = function () {
        return this.signOutFirebase();
    };
    auth.prototype.signOutFirebase = function () {
        return this.angularFireAuth.auth.signOut();
    };
    auth.prototype.resetPassword = function (email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    };
    return auth;
}());
auth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], auth);

var _a;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_usuario__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, toastCtrl, authService, NavParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.NavParams = NavParams;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__providers_auth_usuario__["a" /* Usuario */]();
        this.CadastroPage = __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */];
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        if (this.form.form.valid) {
            this.authService.signIn(this.user)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado.');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha digitada não é valida.');
                }
                toast.present();
            });
        }
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
], LoginPage.prototype, "form", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="signIn()">\n      Entrar\n    </button>\n  </form>\n\n  Não possui uma conta? \n  <button ion-button block color="primary" [navPush]="CadastroPage">\n      Crie Agora\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* auth */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_usuario__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CadastroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_usuario__["a" /* Usuario */]();
    }
    CadastroPage.prototype.createAccount = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.createUser(this.user)
                .then(function (user) {
                user.sendEmailVerification();
                toast_1.setMessage('Usuário criado com sucesso.');
                toast_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                if (error.code == 'auth/email-already-in-use') {
                    toast_1.setMessage('O e-mail digitado já está em uso.');
                }
                else if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/operation-not-allowed') {
                    toast_1.setMessage('Não está habilitado criar usuários.');
                }
                else if (error.code == 'auth/weak-password') {
                    toast_1.setMessage('A senha digitada é muito fraca.');
                }
                toast_1.present();
            });
        }
    };
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    return CadastroPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* NgForm */])
], CadastroPage.prototype, "form", void 0);
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-cadastro',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="createAccount()">\n      Entrar\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/cadastro/cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* auth */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgendamentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AgendamentoPage = (function () {
    function AgendamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgendamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendamentoPage');
    };
    return AgendamentoPage;
}());
AgendamentoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-agendamento',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/agendamento/agendamento.html"*/'<!--\n  Generated template for the AgendamentoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agendamento</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      <ion-item>\n          <ion-label>Consultas marcadas:</ion-label>\n        </ion-item>\n        <ion-row>\n            <ion-col>\n              <strong>Dia</strong>\n            </ion-col>\n            <ion-col>\n              <strong>Médico</strong>\n            </ion-col>\n            <ion-col>\n              <strong>Hora</strong>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  Hoje\n              </ion-col>\n              <ion-col>\n                  Abnirveste Soares\n              </ion-col>\n              <ion-col>\n                  15:00\n              </ion-col>\n            </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/agendamento/agendamento.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
], AgendamentoPage);

var _a, _b;
//# sourceMappingURL=agendamento.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ExamePage = (function () {
    function ExamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExamePage');
    };
    return ExamePage;
}());
ExamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exame',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/exame/exame.html"*/'<!--\n  Generated template for the ExamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>exame</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <img src="../../assets/exames.png"/>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/exame/exame.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ExamePage);

//# sourceMappingURL=exame.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MedicoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MedicoPage = MedicoPage_1 = (function () {
    function MedicoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.titles = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'];
        this.items = [];
        for (var i = 0; i < this.titles.length; i++) {
            this.items.push({
                title: this.titles[i],
            });
        }
    }
    MedicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicoPage');
    };
    MedicoPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(MedicoPage_1, {
            item: item
        });
    };
    return MedicoPage;
}());
MedicoPage = MedicoPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-medico',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/medico/medico.html"*/'<!--\n  Generated template for the MedicoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Médico</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid> \n    <ion-row>\n      <ion-col col-4><img src="assets/gato.png"></ion-col>\n      <ion-col col-8> <h5 align="center"> Nome do médico </h5>\n      <p align="justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum enim vel lectus auctor laoreet.</p> </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-grid> <h5 align="center"> Horários do Médico </h5>\n\n        <ion-item>\n          <ion-label>Data da Consulta:</ion-label>\n          <ion-datetime displayFormat="D MMM YYYY" min="2017-08" max="2018-10" [(ngModel)]="dataconsulta"\n          cancelText="CANCELAR" doneText="CONFIRMAR"></ion-datetime>\n        </ion-item><br/>\n        <ion-row>\n        <ion-col *ngFor="let item of items" >\n          <button ion-button (click)="itemTapped($event, item)" block round class="button-agendamento" clear>\n            {{item.title}}\n          </button>\n        </ion-col>\n      </ion-row>\n          <!-- <ion-row>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>8:00</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>8:30</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>9:00</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario vermelho" round>9:30</button></ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>10:00</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>10:30</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>11:00</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>11:30</button></ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>14:00</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>14:30</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>15:00</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>15:30</button></ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>16:00</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>16:30</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>17:00</button></ion-col>\n              <ion-col col-3><button ion-button class="button btn-horario verde" round>17:30</button></ion-col>\n          </ion-row> -->\n    </ion-grid>\n    <p>Os horários em <span class="fonteverde">verde</span> estão disponíveis para agendamento, enquanto os\n  <span class="fontevermelha"> vermelhos </span> estão indisponíveis.</p>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/medico/medico.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MedicoPage);

var MedicoPage_1;
//# sourceMappingURL=medico.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeudoutorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__medico_medico__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MeudoutorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MeudoutorPage = (function () {
    function MeudoutorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicoPage = __WEBPACK_IMPORTED_MODULE_0__medico_medico__["a" /* MedicoPage */];
    }
    MeudoutorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeudoutorPage');
    };
    return MeudoutorPage;
}());
MeudoutorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-meudoutor',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/meudoutor/meudoutor.html"*/'<!--\n  Generated template for the MeudoutorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meu Doutor</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n\n    <ion-list>\n      <ion-item-group>\n        <ion-item-divider color="light">Angiologista</ion-item-divider>\n          <ion-item>\n              <ion-thumbnail item-start>\n                  <img src="assets/gato.png">\n                </ion-thumbnail>\n                <h2>Médico 1</h2>\n                <p>Cardiologista</p>\n                <button ion-button clear item-end [navPush]="medicoPage">View</button>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/gato.png">\n                  </ion-thumbnail>\n                  <h2>My Neighbor Totoro</h2>\n                  <p>Hayao Miyazaki • 1988</p>\n                  <button ion-button clear item-end [navPush]="medicoPage">View</button>\n              </ion-item>\n              </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider color="light">Oftalmologista</ion-item-divider>\n          <ion-item>\n              <ion-thumbnail item-start>\n                  <img src="assets/gato.png">\n                </ion-thumbnail>\n                <h2>Médico</h2>\n                <p>Cardiologista</p>\n                <button ion-button clear item-end [navPush]="medicoPage">View</button>\n          </ion-item>\n          <ion-item>\n              <ion-thumbnail item-start>\n                  <img src="assets/gato.png">\n                </ion-thumbnail>\n                <h2>My Neighbor Totoro</h2>\n                <p>Hayao Miyazaki • 1988</p>\n                <button ion-button clear item-end [navPush]="medicoPage">View</button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/gato.png">\n            </ion-thumbnail>\n             <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end [navPush]="medicoPage">View</button>\n          </ion-item>\n      </ion-item-group>\n\n      <ion-item-group>\n          <ion-item-divider color="light">Nutricionista</ion-item-divider>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/gato.png">\n                  </ion-thumbnail>\n                  <h2>Médico</h2>\n                  <p>Cardiologista</p>\n                  <button ion-button clear item-end [navPush]="medicoPage">View</button>\n            </ion-item>\n        </ion-item-group>\n\n        <ion-item-group>\n            <ion-item-divider color="light">Fisioterapeuta</ion-item-divider>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img src="assets/gato.png">\n                    </ion-thumbnail>\n                    <h2>Médico</h2>\n                    <p>Cardiologista</p>\n                    <button ion-button clear item-end [navPush]="medicoPage">View</button>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img src="assets/gato.png">\n                    </ion-thumbnail>\n                    <h2>My Neighbor Totoro</h2>\n                    <p>Hayao Miyazaki • 1988</p>\n                    <button ion-button clear item-end [navPush]="medicoPage">View</button>\n              </ion-item>\n              </ion-item-group>\n\n          <ion-item-group>\n              <ion-item-divider color="light">Clínico Geral</ion-item-divider>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="assets/gato.png">\n                      </ion-thumbnail>\n                      <h2>Médico</h2>\n                      <p>Cardiologista</p>\n                      <button ion-button clear item-end [navPush]="medicoPage">View</button>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="assets/gato.png">\n                      </ion-thumbnail>\n                      <h2>My Neighbor Totoro</h2>\n                      <p>Hayao Miyazaki • 1988</p>\n                      <button ion-button clear item-end [navPush]="medicoPage">View</button>\n                </ion-item>\n            </ion-item-group>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/meudoutor/meudoutor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], MeudoutorPage);

//# sourceMappingURL=meudoutor.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agendamento/agendamento.module": [
		965,
		6
	],
	"../pages/cadastro/cadastro.module": [
		966,
		5
	],
	"../pages/exame/exame.module": [
		967,
		4
	],
	"../pages/login/login.module": [
		964,
		3
	],
	"../pages/medico/medico.module": [
		968,
		2
	],
	"../pages/meudoutor/meudoutor.module": [
		969,
		1
	],
	"../pages/slides/slides.module": [
		970,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 311;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/list/list.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Especialidades do Dia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SlidesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SlidesPage = (function () {
    function SlidesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    SlidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlidesPage');
    };
    return SlidesPage;
}());
SlidesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-slides',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/slides/slides.html"*/'<!--\n  Generated template for the SlidesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>slides</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-slides pager>\n        <ion-slide *ngFor="let slide of slides">\n          <ion-toolbar>\n            <ion-buttons end>\n              <button ion-button color="primary" [navPush]="homePage">Skip</button>\n            </ion-buttons>\n          </ion-toolbar>\n          <img [src]="slide.image" class="slide-image"/>\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n          <p [innerHTML]="slide.description"></p>\n        </ion-slide>\n        <ion-slide>\n          <ion-toolbar>\n          </ion-toolbar>\n          <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n          <h2 class="slide-title">Ready to Play?</h2>\n          <button ion-button large clear icon-end color="primary">\n            Continue\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-slide>\n      </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/slides/slides.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SlidesPage);

//# sourceMappingURL=slides.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(569);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cadastro_cadastro__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_exame_exame__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_slides_slides__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_medico_medico__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_cloud_angular__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_list__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_meudoutor_meudoutor__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_agendamento_agendamento__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var config = {
    apiKey: "AIzaSyDI3XJc4gjWfBsBRSJr6s5jhTyLZd48InE",
    authDomain: "doutor-a694d.firebaseapp.com",
    databaseURL: "https://doutor-a694d.firebaseio.com",
    projectId: "doutor-a694d",
    storageBucket: "doutor-a694d.appspot.com",
    messagingSenderId: "667638902248"
};
var cloudSettings = {
    'core': {
        'app_id': 'APP_ID'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_agendamento_agendamento__["a" /* AgendamentoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_meudoutor_meudoutor__["a" /* MeudoutorPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_medico_medico__["a" /* MedicoPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_slides_slides__["a" /* SlidesPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_exame_exame__["a" /* ExamePage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_cadastro_cadastro__["a" /* CadastroPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/agendamento/agendamento.module#AgendamentoPageModule', name: 'AgendamentoPage', segment: 'agendamento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exame/exame.module#ExamePageModule', name: 'ExamePage', segment: 'exame', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/medico/medico.module#MedicoPageModule', name: 'MedicoPage', segment: 'medico', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/meudoutor/meudoutor.module#MeudoutorPageModule', name: 'MeudoutorPage', segment: 'meudoutor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_agendamento_agendamento__["a" /* AgendamentoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_meudoutor_meudoutor__["a" /* MeudoutorPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_medico_medico__["a" /* MedicoPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_slides_slides__["a" /* SlidesPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_exame_exame__["a" /* ExamePage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_cadastro_cadastro__["a" /* CadastroPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* auth */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agendamento_agendamento__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = HomePage_1 = (function () {
    function HomePage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.AgendamentoPage = __WEBPACK_IMPORTED_MODULE_1__agendamento_agendamento__["a" /* AgendamentoPage */];
    }
    HomePage.prototype.teste = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.signOut = function () {
        var _this = this;
        this.auth.signOut()
            .then(function () {
            _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    return HomePage;
}());
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="assets/logo.png"/>\n  <h3>Doutor Celular</h3>\n\n  <p>\n    Seja bem vindo ao aplicativo Doutor Celular. Através desse aplicativo, será possível realizar agendamento de consultas e exames no seu celular.\n  </p>\n\n  <button ion-button block color="primary" (click)="signOut()">\n      Sair\n    </button>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* auth */]) === "function" && _c || Object])
], HomePage);

var HomePage_1, _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cadastro_cadastro__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_exame_exame__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_meudoutor_meudoutor__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_agendamento_agendamento__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(562);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //PAGINA INICIAL DO APLICATIVO
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */] },
            { title: 'Agendamento', component: __WEBPACK_IMPORTED_MODULE_5__pages_agendamento_agendamento__["a" /* AgendamentoPage */] },
            { title: 'Meu Doutor', component: __WEBPACK_IMPORTED_MODULE_4__pages_meudoutor_meudoutor__["a" /* MeudoutorPage */] },
            { title: 'Exames', component: __WEBPACK_IMPORTED_MODULE_3__pages_exame_exame__["a" /* ExamePage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */] },
            { title: 'Cadastro', component: __WEBPACK_IMPORTED_MODULE_0__pages_cadastro_cadastro__["a" /* CadastroPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/matheusmedeiros/facisa/portateis2017/Doutor/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[564]);
//# sourceMappingURL=main.js.map