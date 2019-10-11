import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CoinService } from './coin.service';
import { Tx, Transaction } from 'web3/eth/types';
import { TransactionReceipt } from 'web3/types';
import { Account } from 'web3/eth/accounts';

@Controller()
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Get('debit')
  async getDebit(@Query('address') address: string): Promise<string> {
    return await this.coinService.getDebit(address);
  }

  @Post('transfer')
  initiateTransfer(@Body()transfer: Tx) {
    this.coinService.sendTransfer(transfer);
  }

  @Get('accounts')
  async getAccounts(@Body()transfer: Tx): Promise<string[]> {
    return await this.coinService.getAccounts();
  }

  @Get('account')
  async createAccount(@Query('password') password: string): Promise<string> {
    return await this.coinService.createAccount(password);
  }
}
