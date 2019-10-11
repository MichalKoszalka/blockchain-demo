## Blockchain 

The blockchain that you are running is using Development chain spec. It will mine blocks on each transaction. 

https://wiki.parity.io/Private-development-chain

```
An address containing a lot of Ether (0x00a329c0648769a73afac7f9381e08fb43dbea72) will be automatically added after startup with it’s password being an empty string. The private key for this address is 0x4d5db4107d237df6a3d58ee5f70ae63d73d7658d4026f2eefd2f204c81682cb7, which you’ll need for signing transactions externally, especially after account management has been
```

Above address is used to deploy the contracts. 

You have 8545 port open for JSON-RPC connections.


You can use remix to interact with your contract via UI (CORS is allowed for all traffic) : 

http://remix.ethereum.org

## Build docker Ethereum node
```
docker build --no-cache -t bright-blockchain .
```
## Start Ethereum node in docker
```
docker run -p 8545:8545 -p 8546:8546 bright-blockchain
```