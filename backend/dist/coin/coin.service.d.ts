import { Tx } from 'web3/eth/types';
export declare class CoinService {
    private web3;
    constructor();
    sendTransfer(transaction: Tx): Promise<void>;
    getDebit(address: string): Promise<string>;
    getAccounts(): Promise<string[]>;
    createAccount(password: string): Promise<string>;
}
