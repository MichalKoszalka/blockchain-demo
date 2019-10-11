## Bright blockchain

Execute following: 

``` 
docker-compose -f docker-compose-blockchain.yaml build --no-cache
```
to build docker compose

``` 
docker-compose -f docker-compose-blockchain.yaml up
```
to run docker compose

``` 
docker-compose -f docker-compose-blockchain.yaml down
```

to tear down docker compose

Parity blockchain node will be started (with JSON-RPC port 8545 open) and Coin smart contract will be deployed. You are ready to go. 

Each module contain README - please have a look at those. 

### Task

Your task is to create a simple node.js Typescript based backend and integrate it with deployed contract.
Framework and libraries are up to you - we suggest express/nest.js for backend and web3 for contract integration. 
You need to integrate with COIN contract. You will find the deployed contract address in the docker compose logs. 
Your backend should expose simple API to initiate a coin transfer transaction and get balance of particular account. 
Coin transfer can happen from predefined backend account to other Ethereum account provided in transaction request.

Above task is should take no more than ~8 hours of work.  

Add your solution to backend folder and submit it on private repository for review. 

If you like, you can also create simple React based client app for sending transaction/fetching balance. This is 100% optional though.





