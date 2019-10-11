FROM parity/parity:v2.5.8-stable

EXPOSE 8545 8545

CMD ["--config", "dev", "--gasprice", "0", "--gas-floor-target=20000000", "-lminer=debug,txqueue=debug", "--jsonrpc-interface=all", "--jsonrpc-apis=all", "--jsonrpc-hosts=all", "--jsonrpc-cors=all"]
