const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compile = require("./compile");

const provider = new HDWalletProvider(
    "general goose movie physical ignore until wink strike session ride abuse love",
    "https://rinkeby.infura.io/v3/d512cc63aaa74560a1fa2f909200d878"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compile.interface))
        .deploy({
            data: compile.bytecode,
        })
        .send({ gas: "1000000", from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
};

deploy();
