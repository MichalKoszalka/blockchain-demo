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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const Web3 = require("web3");
let CoinService = class CoinService {
    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
    async sendTransfer(transaction) {
        this.web3.eth.sendTransaction(transaction).on('receipt', console.log);
    }
    async getDebit(address) {
        return this.web3.eth.getBalance(address);
    }
    async getAccounts() {
        return this.web3.eth.getAccounts();
    }
    async createAccount(password) {
        return this.web3.eth.personal.newAccount(password);
    }
};
CoinService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], CoinService);
exports.CoinService = CoinService;
//# sourceMappingURL=coin.service.js.map