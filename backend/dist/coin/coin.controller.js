"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const coin_service_1 = require("./coin.service");
let CoinController = class CoinController {
    constructor(coinService) {
        this.coinService = coinService;
    }
    async getDebit(address) {
        return await this.coinService.getDebit(address);
    }
    initiateTransfer(transfer) {
        this.coinService.sendTransfer(transfer);
    }
    async getAccounts(transfer) {
        return await this.coinService.getAccounts();
    }
    async createAccount(password) {
        return await this.coinService.createAccount(password);
    }
};
__decorate([
    common_1.Get('debit'),
    __param(0, common_1.Query('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoinController.prototype, "getDebit", null);
__decorate([
    common_1.Post('transfer'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoinController.prototype, "initiateTransfer", null);
__decorate([
    common_1.Get('accounts'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoinController.prototype, "getAccounts", null);
__decorate([
    common_1.Get('account'),
    __param(0, common_1.Query('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoinController.prototype, "createAccount", null);
CoinController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [coin_service_1.CoinService])
], CoinController);
exports.CoinController = CoinController;
//# sourceMappingURL=coin.controller.js.map