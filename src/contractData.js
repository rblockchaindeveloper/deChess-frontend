const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "player2Escrow",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "verifyPlayerBalance",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "player1Escrow",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "player2",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setupPlayer2",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "player1",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]


const bytecode = {
	"linkReferences": {},
	"object": "608060405260003411151561001357600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346002819055506102ef806100696000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063329f86a81461007d5780633ec2ba89146100a8578063451e408a146100bf57806359a5f12d146100ea57806367bf595414610141578063d30895e41461014b575b600080fd5b34801561008957600080fd5b506100926101a2565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100bd6101a8565b005b3480156100cb57600080fd5b506100d4610219565b6040518082815260200191505060405180910390f35b3480156100f657600080fd5b506100ff61021f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610149610245565b005b34801561015757600080fd5b5061016061029e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600254600354019081150290604051600060405180830381858888f19350505050158015610216573d6000803e3d6000fd5b50565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003411151561025457600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600381905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058204ba15ca45065a95ba413ae9fa422bfa7e84cbedbbb98f11a70896b54b212d07d0029",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 CALLVALUE GT ISZERO ISZERO PUSH2 0x13 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP CALLVALUE PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x2EF DUP1 PUSH2 0x69 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x78 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x329F86A8 EQ PUSH2 0x7D JUMPI DUP1 PUSH4 0x3EC2BA89 EQ PUSH2 0xA8 JUMPI DUP1 PUSH4 0x451E408A EQ PUSH2 0xBF JUMPI DUP1 PUSH4 0x59A5F12D EQ PUSH2 0xEA JUMPI DUP1 PUSH4 0x67BF5954 EQ PUSH2 0x141 JUMPI DUP1 PUSH4 0xD30895E4 EQ PUSH2 0x14B JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x89 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x92 PUSH2 0x1A2 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH2 0x1A8 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xCB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xD4 PUSH2 0x219 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xF6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xFF PUSH2 0x21F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x149 PUSH2 0x245 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x157 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x160 PUSH2 0x29E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC PUSH1 0x2 SLOAD PUSH1 0x3 SLOAD ADD SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x216 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 CALLVALUE GT ISZERO ISZERO PUSH2 0x254 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x1 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP CALLVALUE PUSH1 0x3 DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x0 DUP1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x4b LOG1 0x5c LOG4 POP PUSH6 0xA95BA413AE9F LOG4 0x22 0xbf 0xa7 0xe8 0x4c 0xbe 0xdb 0xbb SWAP9 CALL BYTE PUSH17 0x896B54B212D07D00290000000000000000 ",
	"sourceMap": "25:581:0:-;;;231:1;219:9;:13;211:22;;;;;;;;253:10;243:7;;:20;;;;;;;;;;;;;;;;;;289:9;273:13;:25;;;;25:581;;;;;;"
}

module.exports = {
	abi,
	bytecode,
}