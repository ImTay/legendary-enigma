/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(9);

	__webpack_require__(16);

	__webpack_require__(21);

	__webpack_require__(22);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app', ['app.run', 'app.filters', 'app.services', 'app.components', 'app.directives', 'app.routes', 'app.config', 'app.partials']);

	angular.module('app.run', []);
	angular.module('app.routes', []);
	angular.module('app.filters', []);
	angular.module('app.services', []);
	angular.module('app.config', []);
	angular.module('app.directives', []);
	angular.module('app.components', ['ui.router', 'ngMaterial', 'angular-loading-bar', 'restangular', 'ngStorage', 'satellizer']);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(3);

	angular.module('app.run').run(_routes.RoutesRun);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	RoutesRun.$inject = ["$rootScope", "$state", "$auth"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesRun = RoutesRun;
	function RoutesRun($rootScope, $state, $auth) {
	    'ngInject';

	    var deregisterationCallback = $rootScope.$on("$stateChangeStart", function (event, toState) {

	        if (toState.data && toState.data.auth) {
	            /*Cancel going to the authenticated state and go back to the login page*/
	            if (!$auth.isAuthenticated()) {
	                event.preventDefault();
	                return $state.go('app.login');
	            }
	        }
	    });
	    $rootScope.$on('$destroy', deregisterationCallback);
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(5);

	var _loading_bar = __webpack_require__(6);

	var _theme = __webpack_require__(7);

	var _satellizer = __webpack_require__(8);

	angular.module('app.config').config(_routes.RoutesConfig).config(_loading_bar.LoadingBarConfig).config(_theme.ThemeConfig).config(_satellizer.SatellizerConfig);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    var getView = function getView(viewName) {
	        return './views/app/pages/' + viewName + '/' + viewName + '.page.html';
	    };

	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('app', {
	        abstract: true,
	        data: {}, //{auth: true} would require JWT auth
	        views: {
	            header: {
	                templateUrl: getView('header')
	            },
	            footer: {
	                templateUrl: getView('footer')
	            },
	            main: {}
	        }
	    }).state('app.landing', {
	        url: '/',
	        views: {
	            'main@': {
	                templateUrl: getView('landing')
	            }
	        }
	    }).state('app.login', {
	        url: '/login',
	        views: {
	            'main@': {
	                templateUrl: getView('login')
	            }
	        }
	    }).state('app.register', {
	        url: '/register',
	        views: {
	            'main@': {
	                templateUrl: getView('register')
	            }
	        }
	    }).state('app.forgot_password', {
	        url: '/forgot-password',
	        views: {
	            'main@': {
	                templateUrl: getView('forgot-password')
	            }
	        }
	    }).state('app.reset_password', {
	        url: '/reset-password/:email/:token',
	        views: {
	            'main@': {
	                templateUrl: getView('reset-password')
	            }
	        }
	    }).state('app.book', {
	        url: '/book',
	        views: {
	            'main@': {
	                templateUrl: getView('book')
	            }
	        }
	    }).state('app.rooms', {
	        url: '/rooms',
	        views: {
	            'main@': {
	                templateUrl: getView('rooms')
	            }
	        }
	    }).state('app.about', {
	        url: '/about',
	        views: {
	            'main@': {
	                templateUrl: getView('about')
	            }
	        }
	    }).state('app.contact', {
	        url: '/contact',
	        views: {
	            'main@': {
	                templateUrl: getView('contact')
	            }
	        }
	    }).state('app.activities', {
	        url: '/activities',
	        views: {
	            'main@': {
	                templateUrl: getView('activities')
	            }
	        }
	    });
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	LoadingBarConfig.$inject = ["cfpLoadingBarProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoadingBarConfig = LoadingBarConfig;
	function LoadingBarConfig(cfpLoadingBarProvider) {
		'ngInject';

		cfpLoadingBarProvider.includeSpinner = false;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	ThemeConfig.$inject = ["$mdThemingProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ThemeConfig = ThemeConfig;
	function ThemeConfig($mdThemingProvider) {
		'ngInject';
		/* For more info, visit https://material.angularjs.org/#/Theming/01_introduction */

		$mdThemingProvider.theme('default').primaryPalette('light-blue', {
			default: '600'
		}).accentPalette('grey').warnPalette('red');

		$mdThemingProvider.theme('warn');
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	SatellizerConfig.$inject = ["$authProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SatellizerConfig = SatellizerConfig;
	function SatellizerConfig($authProvider) {
		'ngInject';

		$authProvider.httpInterceptor = function () {
			return true;
		};

		$authProvider.loginUrl = '/api/auth/login';
		$authProvider.signupUrl = '/api/auth/register';
		$authProvider.tokenRoot = 'data'; //compensates success response macro
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _capitalize = __webpack_require__(10);

	var _human_readable = __webpack_require__(11);

	var _truncate_characters = __webpack_require__(12);

	var _truncate_words = __webpack_require__(13);

	var _trust_html = __webpack_require__(14);

	var _ucfirst = __webpack_require__(15);

	angular.module('app.filters').filter('capitalize', _capitalize.CapitalizeFilter).filter('humanReadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CapitalizeFilter = CapitalizeFilter;
	function CapitalizeFilter() {
		return function (input) {
			return input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) : '';
		};
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HumanReadableFilter = HumanReadableFilter;
	function HumanReadableFilter() {
		return function humanize(str) {
			if (!str) {
				return '';
			}
			var frags = str.split('_');
			for (var i = 0; i < frags.length; i++) {
				frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
			}
			return frags.join(' ');
		};
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncatCharactersFilter = TruncatCharactersFilter;
	function TruncatCharactersFilter() {
		return function (input, chars, breakOnWord) {
			if (isNaN(chars)) {
				return input;
			}
			if (chars <= 0) {
				return '';
			}
			if (input && input.length > chars) {
				input = input.substring(0, chars);

				if (!breakOnWord) {
					var lastspace = input.lastIndexOf(' ');
					// Get last space
					if (lastspace !== -1) {
						input = input.substr(0, lastspace);
					}
				} else {
					while (input.charAt(input.length - 1) === ' ') {
						input = input.substr(0, input.length - 1);
					}
				}
				return input + '...';
			}
			return input;
		};
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncateWordsFilter = TruncateWordsFilter;
	function TruncateWordsFilter() {
		return function (input, words) {
			if (isNaN(words)) {
				return input;
			}
			if (words <= 0) {
				return '';
			}
			if (input) {
				var inputWords = input.split(/\s+/);
				if (inputWords.length > words) {
					input = inputWords.slice(0, words).join(' ') + '...';
				}
			}
			return input;
		};
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TrustHtmlFilter = TrustHtmlFilter;
	function TrustHtmlFilter($sce) {
		return function (html) {
			return $sce.trustAsHtml(html);
		};
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UcFirstFilter = UcFirstFilter;
	function UcFirstFilter() {
		return function (input) {
			if (!input) {
				return null;
			}
			return input.substring(0, 1).toUpperCase() + input.substring(1);
		};
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _resetPassword = __webpack_require__(17);

	var _forgotPassword = __webpack_require__(18);

	var _loginForm = __webpack_require__(19);

	var _registerForm = __webpack_require__(20);

	angular.module('app.components').component('resetPassword', _resetPassword.ResetPasswordComponent).component('forgotPassword', _forgotPassword.ForgotPasswordComponent).component('loginForm', _loginForm.LoginFormComponent).component('registerForm', _registerForm.RegisterFormComponent);

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ResetPasswordController = function () {
	    ResetPasswordController.$inject = ["API", "ToastService", "$state"];
	    function ResetPasswordController(API, ToastService, $state) {
	        'ngInject';

	        _classCallCheck(this, ResetPasswordController);

	        this.API = API;
	        this.$state = $state;
	        this.ToastService = ToastService;
	    }

	    _createClass(ResetPasswordController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.password = '';
	            this.password_confirmation = '';
	            this.isValidToken = false;

	            this.verifyToken();
	        }
	    }, {
	        key: 'verifyToken',
	        value: function verifyToken() {
	            var _this = this;

	            var email = this.$state.params.email;
	            var token = this.$state.params.token;

	            this.API.all('auth/password').get('verify', {
	                email: email, token: token
	            }).then(function () {
	                _this.isValidToken = true;
	            }, function () {
	                _this.$state.go('app.landing');
	            });
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var data = {
	                email: this.$state.params.email,
	                token: this.$state.params.token,
	                password: this.password,
	                password_confirmation: this.password_confirmation
	            };

	            this.API.all('auth/password/reset').post(data).then(function () {
	                _this2.ToastService.show('Password successfully changed');
	                _this2.$state.go('app.login');
	            });
	        }
	    }]);

	    return ResetPasswordController;
	}();

	var ResetPasswordComponent = exports.ResetPasswordComponent = {
	    templateUrl: './views/app/components/reset-password/reset-password.component.html',
	    controller: ResetPasswordController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ForgotPasswordController = function () {
	    ForgotPasswordController.$inject = ["API", "ToastService", "$state"];
	    function ForgotPasswordController(API, ToastService, $state) {
	        'ngInject';

	        _classCallCheck(this, ForgotPasswordController);

	        this.API = API;
	        this.$state = $state;
	        this.ToastService = ToastService;
	    }

	    _createClass(ForgotPasswordController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.email = '';
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            this.API.all('auth/password/email').post({
	                email: this.email
	            }).then(function () {
	                _this.ToastService.show('Please check your email for instructions on how to reset your password.');
	                _this.$state.go('app.landing');
	            });
	        }
	    }]);

	    return ForgotPasswordController;
	}();

	var ForgotPasswordComponent = exports.ForgotPasswordComponent = {
	    templateUrl: './views/app/components/forgot-password/forgot-password.component.html',
	    controller: ForgotPasswordController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginFormController = function () {
		LoginFormController.$inject = ["$auth", "ToastService"];
		function LoginFormController($auth, ToastService) {
			'ngInject';

			_classCallCheck(this, LoginFormController);

			this.$auth = $auth;
			this.ToastService = ToastService;
		}

		_createClass(LoginFormController, [{
			key: '$onInit',
			value: function $onInit() {
				this.email = '';
				this.password = '';
			}
		}, {
			key: 'login',
			value: function login() {
				var _this = this;

				var user = {
					email: this.email,
					password: this.password
				};

				this.$auth.login(user).then(function (response) {
					_this.$auth.setToken(response.data);

					_this.ToastService.show('Logged in successfully.');
				}).catch(this.failedLogin.bind(this));
			}
		}, {
			key: 'failedLogin',
			value: function failedLogin(response) {
				if (response.status === 422) {
					for (var error in response.data.errors) {
						return this.ToastService.error(response.data.errors[error][0]);
					}
				}
				this.ToastService.error(response.statusText);
			}
		}]);

		return LoginFormController;
	}();

	var LoginFormComponent = exports.LoginFormComponent = {
		templateUrl: './views/app/components/login-form/login-form.component.html',
		controller: LoginFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterFormController = function () {
		RegisterFormController.$inject = ["$auth", "ToastService"];
		function RegisterFormController($auth, ToastService) {
			'ngInject';

			_classCallCheck(this, RegisterFormController);

			this.$auth = $auth;
			this.ToastService = ToastService;
		}

		_createClass(RegisterFormController, [{
			key: '$onInit',
			value: function $onInit() {
				this.name = '';
				this.email = '';
				this.password = '';
			}
		}, {
			key: 'register',
			value: function register() {
				var _this = this;

				var user = {
					name: this.name,
					email: this.email,
					password: this.password
				};

				this.$auth.signup(user).then(function (response) {
					//remove this if you require email verification
					_this.$auth.setToken(response.data);

					_this.ToastService.show('Successfully registered.');
				}).catch(this.failedRegistration.bind(this));
			}
		}, {
			key: 'failedRegistration',
			value: function failedRegistration(response) {
				if (response.status === 422) {
					for (var error in response.data.errors) {
						return this.ToastService.error(response.data.errors[error][0]);
					}
				}
				this.ToastService.error(response.statusText);
			}
		}]);

		return RegisterFormController;
	}();

	var RegisterFormComponent = exports.RegisterFormComponent = {
		templateUrl: './views/app/components/register-form/register-form.component.html',
		controller: RegisterFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app.directives');

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _API = __webpack_require__(23);

	var _dialog = __webpack_require__(24);

	var _toast = __webpack_require__(25);

	angular.module('app.services').service('API', _API.APIService).service('DialogService', _dialog.DialogService).service('ToastService', _toast.ToastService);

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var APIService = exports.APIService = ["Restangular", "ToastService", "$window", function APIService(Restangular, ToastService, $window) {
		'ngInject';
		//content negotiation

		_classCallCheck(this, APIService);

		var headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/x.laravel.v1+json'
		};

		return Restangular.withConfig(function (RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('/api/').setDefaultHeaders(headers).setErrorInterceptor(function (response) {
				if (response.status === 422 || response.status === 401) {
					for (var error in response.data.errors) {
						return ToastService.error(response.data.errors[error][0]);
					}
				}
				if (response.status === 500) {
					return ToastService.error(response.statusText);
				}
			}).addFullRequestInterceptor(function (element, operation, what, url, headers) {
				var token = $window.localStorage.satellizer_token;
				if (token) {
					headers.Authorization = 'Bearer ' + token;
				}
			});
		});
	}];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DialogService = exports.DialogService = function () {
	    DialogService.$inject = ["$mdDialog"];
	    function DialogService($mdDialog) {
	        'ngInject';

	        _classCallCheck(this, DialogService);

	        this.$mdDialog = $mdDialog;
	    }

	    _createClass(DialogService, [{
	        key: 'fromTemplate',
	        value: function fromTemplate(template, options) {
	            if (!template) {
	                return false;
	            }

	            if (!options) {
	                options = {};
	            }

	            options.templateUrl = './views/dialogs/' + template + '/' + template + '.dialog.html';

	            return this.$mdDialog.show(options);
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            return this.$mdDialog.hide();
	        }
	    }, {
	        key: 'alert',
	        value: function alert(title, content) {
	            var alert = this.$mdDialog.alert().title(title).content(content).ariaLabel(content).ok('Ok');

	            this.$mdDialog.show(alert);
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm(title, content) {
	            var confirm = this.$mdDialog.confirm().title(title).content(content).ariaLabel(content).ok('Ok').cancel('Cancel');

	            return this.$mdDialog.show(confirm);
	        }
	    }, {
	        key: 'prompt',
	        value: function prompt(title, content, placeholder) {
	            var prompt = this.$mdDialog.prompt().title(title).textContent(content).placeholder(placeholder).ariaLabel(placeholder).ok('Ok').cancel('Cancel');

	            return this.$mdDialog.show(prompt);
	        }
	    }]);

	    return DialogService;
	}();

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToastService = exports.ToastService = function () {
		ToastService.$inject = ["$mdToast"];
		function ToastService($mdToast) {
			'ngInject';

			_classCallCheck(this, ToastService);

			this.$mdToast = $mdToast;

			this.delay = 6000;
			this.position = 'top right';
			this.action = 'OK';
		}

		_createClass(ToastService, [{
			key: 'show',
			value: function show(content) {
				if (!content) {
					return false;
				}

				return this.$mdToast.show(this.$mdToast.simple().content(content).position(this.position).action(this.action).hideDelay(this.delay));
			}
		}, {
			key: 'error',
			value: function error(content) {
				if (!content) {
					return false;
				}

				return this.$mdToast.show(this.$mdToast.simple().content(content).position(this.position).theme('warn').action(this.action).hideDelay(this.delay));
			}
		}]);

		return ToastService;
	}();

/***/ }
/******/ ]);