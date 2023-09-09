/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const user_controller_1 = __webpack_require__(8);
const user_service_1 = __webpack_require__(9);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, user_controller_1.UserController],
        providers: [app_service_1.AppService, user_service_1.UserService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
const swagger_1 = __webpack_require__(7);
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Base'),
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = exports.AppService = class AppService {
    getData() {
        return 'Hello World';
    }
};
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const user_service_1 = __webpack_require__(9);
const types_1 = __webpack_require__(11);
const swagger_1 = __webpack_require__(7);
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll() {
        return this.userService.findAll();
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    findOne(id) {
        return this.userService.findOne(+id);
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: types_1.User, isArray: true }),
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: types_1.User }),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof types_1.CreateUserDto !== "undefined" && types_1.CreateUserDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: types_1.User }),
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
exports.UserController = UserController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
// import { UpdateUserDto } from './dto/update-user.dto';
const user_1 = __webpack_require__(10);
let UserService = exports.UserService = class UserService {
    findAll() {
        return { users: user_1.mockUsers };
    }
    create(createUserDto) {
        const maxId = user_1.mockUsers.map((user) => {
            const { id } = user;
            if (typeof id === 'string')
                return parseInt(id);
            return id;
        });
        Math.max();
        const newUser = {
            id: Math.max(...maxId) + 1,
            name: createUserDto.name,
        };
        user_1.mockUsers.push(newUser);
        return newUser;
    }
    findOne(id) {
        const user = user_1.mockUsers.find((user) => user.id === id);
        if (!user)
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        return user;
    }
};
exports.UserService = UserService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserService);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mockUsers = void 0;
exports.mockUsers = [
    { id: 1, name: 'yoko' },
    { id: 2, name: 'hoko' },
    { id: 3, name: 'goko' },
    { id: 4, name: 'boko' },
    { id: 5, name: 'shoko' },
];


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commonTypes = void 0;
function commonTypes() {
    return 'common-types';
}
exports.commonTypes = commonTypes;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = exports.User = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(7);
class User {
}
exports.User = User;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        oneOf: [{ type: 'string' }, { type: 'number' }],
        required: true,
    }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
class CreateUserDto extends User {
}
exports.CreateUserDto = CreateUserDto;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(7);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    // SWAGGER ==============================================
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Monorepo Practice')
        .setDescription('Docs for NestJS API')
        .setVersion('1.0')
        .addTag('monorepo')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    // ==============================================
    app.enableCors();
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map