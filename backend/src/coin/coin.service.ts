import { Injectable } from '@nestjs/common';
import Web3 = require('web3');
import { Tx } from 'web3/eth/types';
import { TransactionReceipt } from 'web3/types';
import { Account } from 'web3/eth/accounts';
import PromiEvent from 'web3/promiEvent';

@Injectable()
export class CoinService {

  private web3: Web3;

  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }

  async sendTransfer(transaction: Tx) {
    this.web3.eth.sendTransaction(transaction);
  }

  async getDebit(address: string): Promise<string> {
    return this.web3.eth.getBalance(address);
  }

  async getAccounts(): Promise<string[]> {
    return this.web3.eth.getAccounts();
  }

  async createAccount(password: string): Promise<string> {
    return this.web3.eth.personal.newAccount(password);
  }
}
