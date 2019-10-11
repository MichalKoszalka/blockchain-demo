import { CoinService } from './coin.service';
import { Tx } from 'web3/eth/types';
export declare class CoinController {
    private readonly coinService;
    constructor(coinService: CoinService);
    getDebit(address: string): Promise<string>;
    initiateTransfer(transfer: Tx): void;
    getAccounts(transfer: Tx): Promise<string[]>;
    createAccount(password: string): Promise<string>;
}
