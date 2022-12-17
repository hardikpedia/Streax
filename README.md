# Streax Token (STX)
It is an ERC20 token built with the help of OpenZeppelin.

## Installation

Use the package manager yarn to install node_modules.

```bash
yarn
```

## Usage
Firstly, delete .env.example file and add the .env file and add your credentials.
To deploy it on testnet/hardhat-localhost check the hardhat.configure.js.
It is suitable for Goerli testnet and localhost.For other testnets you may need to configure it accordingly.
```bash
yarn hardhat run scripts/deploy.js --network goerli
```
You will get the address of deployed contract in terminal.

For Testing run the following command.

```bash
yarn hardhat test
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
