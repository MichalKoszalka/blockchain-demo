# Smart contracts

This module is used to deploy smart contracts to the network. It is using truffle library to do so.

## Compile smart contracts (using local npm)
```
npm run compile
```

## Deploy smart contract to local environment

```
docker build --no-cache -t baltic-blockchain-deployer .
```
```
docker run -e "HOST= http://docker.for.mac.host.internal:8545" -e "PRIVATE_KEY=xxx" baltic-blockchain-deployer
```

where Private key is the private key of the contract owner account