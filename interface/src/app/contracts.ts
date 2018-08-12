export const DMartAdmin = {
  "contractName": "DMartAdmin",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_role",
          "type": "string"
        }
      ],
      "name": "checkRole",
      "outputs": [],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_role",
          "type": "string"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "ROLE_STORE_OWNER",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "ROLE_ADMIN",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "role",
          "type": "string"
        }
      ],
      "name": "RoleAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "role",
          "type": "string"
        }
      ],
      "name": "RoleRemoved",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_storeOwner",
          "type": "address"
        }
      ],
      "name": "addStoreOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_storeOwner",
          "type": "address"
        }
      ],
      "name": "removeStoreOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061005f336040805190810160405280600581526020017f41646d696e000000000000000000000000000000000000000000000000000000815250610064640100000000026401000000009004565b610203565b6100ee826000836040518082805190602001908083835b6020831015156100a0578051825260208201915060208101905060208303925061007b565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206101a564010000000002610a52179091906401000000009004565b8173ffffffffffffffffffffffffffffffffffffffff167fbfec83d64eaa953f2708271a023ab9ee82057f8f3578d548c1a4ba0b5b700489826040518080602001828103825283818151815260200191508051906020019080838360005b8381101561016757808201518184015260208101905061014c565b50505050905090810190601f1680156101945780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b610adc806102126000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630988ca8c1461007d578063217fe6c6146101065780636174fdd1146101a7578063804ce1df146102025780639adeb5f114610292578063d391014b146102ed575b600080fd5b34801561008957600080fd5b50610104600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061037d565b005b34801561011257600080fd5b5061018d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103fe565b604051808215151515815260200191505060405180910390f35b3480156101b357600080fd5b506101e8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610485565b604051808215151515815260200191505060405180910390f35b34801561020e57600080fd5b50610217610596565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561025757808201518184015260208101905061023c565b50505050905090810190601f1680156102845780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029e57600080fd5b506102d3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105cf565b604051808215151515815260200191505060405180910390f35b3480156102f957600080fd5b506103026106e1565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610342578082015181840152602081019050610327565b50505050905090810190601f16801561036f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103fa826000836040518082805190602001908083835b6020831015156103b95780518252602082019150602081019050602083039250610394565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902061071a90919063ffffffff16565b5050565b600061047d836000846040518082805190602001908083835b60208310151561043c5780518252602082019150602081019050602083039250610417565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902061073390919063ffffffff16565b905092915050565b60006040805190810160405280600581526020017f41646d696e0000000000000000000000000000000000000000000000000000008152506104c7338261037d565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561050357600080fd5b610542836040805190810160405280600b81526020017f53746f7265204f776e65720000000000000000000000000000000000000000008152506103fe565b151561054d57600080fd5b61058c836040805190810160405280600b81526020017f53746f7265204f776e657200000000000000000000000000000000000000000081525061078c565b6001915050919050565b6040805190810160405280600b81526020017f53746f7265204f776e657200000000000000000000000000000000000000000081525081565b60006040805190810160405280600581526020017f41646d696e000000000000000000000000000000000000000000000000000000815250610611338261037d565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561064d57600080fd5b61068c836040805190810160405280600b81526020017f53746f7265204f776e65720000000000000000000000000000000000000000008152506103fe565b15151561069857600080fd5b6106d7836040805190810160405280600b81526020017f53746f7265204f776e65720000000000000000000000000000000000000000008152506108c0565b6001915050919050565b6040805190810160405280600581526020017f41646d696e00000000000000000000000000000000000000000000000000000081525081565b6107248282610733565b151561072f57600080fd5b5050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610809826000836040518082805190602001908083835b6020831015156107c857805182526020820191506020810190506020830392506107a3565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206109f490919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167fd211483f91fc6eff862467f8de606587a30c8fc9981056f051b897a418df803a826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610882578082015181840152602081019050610867565b50505050905090810190601f1680156108af5780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b61093d826000836040518082805190602001908083835b6020831015156108fc57805182526020820191506020810190506020830392506108d7565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020610a5290919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167fbfec83d64eaa953f2708271a023ab9ee82057f8f3578d548c1a4ba0b5b700489826040518080602001828103825283818151815260200191508051906020019080838360005b838110156109b657808201518184015260208101905061099b565b50505050905090810190601f1680156109e35780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a72305820dd79fceb43236069de167c81ff19962c48c393f97f5733faad1a7d8ee619a2750029",
  "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630988ca8c1461007d578063217fe6c6146101065780636174fdd1146101a7578063804ce1df146102025780639adeb5f114610292578063d391014b146102ed575b600080fd5b34801561008957600080fd5b50610104600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061037d565b005b34801561011257600080fd5b5061018d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103fe565b604051808215151515815260200191505060405180910390f35b3480156101b357600080fd5b506101e8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610485565b604051808215151515815260200191505060405180910390f35b34801561020e57600080fd5b50610217610596565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561025757808201518184015260208101905061023c565b50505050905090810190601f1680156102845780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029e57600080fd5b506102d3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105cf565b604051808215151515815260200191505060405180910390f35b3480156102f957600080fd5b506103026106e1565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610342578082015181840152602081019050610327565b50505050905090810190601f16801561036f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103fa826000836040518082805190602001908083835b6020831015156103b95780518252602082019150602081019050602083039250610394565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902061071a90919063ffffffff16565b5050565b600061047d836000846040518082805190602001908083835b60208310151561043c5780518252602082019150602081019050602083039250610417565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902061073390919063ffffffff16565b905092915050565b60006040805190810160405280600581526020017f41646d696e0000000000000000000000000000000000000000000000000000008152506104c7338261037d565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561050357600080fd5b610542836040805190810160405280600b81526020017f53746f7265204f776e65720000000000000000000000000000000000000000008152506103fe565b151561054d57600080fd5b61058c836040805190810160405280600b81526020017f53746f7265204f776e657200000000000000000000000000000000000000000081525061078c565b6001915050919050565b6040805190810160405280600b81526020017f53746f7265204f776e657200000000000000000000000000000000000000000081525081565b60006040805190810160405280600581526020017f41646d696e000000000000000000000000000000000000000000000000000000815250610611338261037d565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561064d57600080fd5b61068c836040805190810160405280600b81526020017f53746f7265204f776e65720000000000000000000000000000000000000000008152506103fe565b15151561069857600080fd5b6106d7836040805190810160405280600b81526020017f53746f7265204f776e65720000000000000000000000000000000000000000008152506108c0565b6001915050919050565b6040805190810160405280600581526020017f41646d696e00000000000000000000000000000000000000000000000000000081525081565b6107248282610733565b151561072f57600080fd5b5050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610809826000836040518082805190602001908083835b6020831015156107c857805182526020820191506020810190506020830392506107a3565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206109f490919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167fd211483f91fc6eff862467f8de606587a30c8fc9981056f051b897a418df803a826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610882578082015181840152602081019050610867565b50505050905090810190601f1680156108af5780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b61093d826000836040518082805190602001908083835b6020831015156108fc57805182526020820191506020810190506020830392506108d7565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020610a5290919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167fbfec83d64eaa953f2708271a023ab9ee82057f8f3578d548c1a4ba0b5b700489826040518080602001828103825283818151815260200191508051906020019080838360005b838110156109b657808201518184015260208101905061099b565b50505050905090810190601f1680156109e35780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a72305820dd79fceb43236069de167c81ff19962c48c393f97f5733faad1a7d8ee619a2750029",
  "sourceMap": "416:802:0:-;;;566:69;8:9:-1;5:2;;;30:1;27;20:12;5:2;566:69:0;597:31;605:10;617;;;;;;;;;;;;;;;;;;597:7;;;:31;;;:::i;:::-;416:802;;1347:141:1;1418:27;1435:9;1418:5;1424;1418:12;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1418:12:1;;;;;;;;;;;;;;;;;;;;;:16;;;;;;:27;;;;;:::i;:::-;1466:9;1456:27;;;1477:5;1456:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1456:27:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1347:141;;:::o;321:106:2:-;418:4;393:5;:12;;:22;406:8;393:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;321:106;;:::o;416:802:0:-;;;;;;;",
  "deployedSourceMap": "416:802:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;837:114:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;837:114:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1091:136;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1091:136:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;933:282:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;933:282:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;504:55;;8:9:-1;5:2;;;30:1;27;20:12;5:2;504:55:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;504:55:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;641:285;;8:9:-1;5:2;;;30:1;27;20:12;5:2;641:285:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;455:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;455:43:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;455:43:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;837:114:1;917:29;936:9;917:5;923;917:12;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;917:12:1;;;;;;;;;;;;;;;;;;;;;:18;;:29;;;;:::i;:::-;837:114;;:::o;1091:136::-;1174:4;1195:27;1212:9;1195:5;1201;1195:12;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1195:12:1;;;;;;;;;;;;;;;;;;;;;:16;;:27;;;;:::i;:::-;1188:34;;1091:136;;;;:::o;933:282:0:-;1027:4;1001:10;;;;;;;;;;;;;;;;;;1951:28:1;1961:10;1973:5;1951:9;:28::i;:::-;1074:1:0;1051:25;;:11;:25;;;;1043:34;;;;;;;;1095:38;1103:11;1116:16;;;;;;;;;;;;;;;;;;1095:7;:38::i;:::-;1087:47;;;;;;;;1145:41;1156:11;1169:16;;;;;;;;;;;;;;;;;;1145:10;:41::i;:::-;1203:4;1196:12;;933:282;;;;:::o;504:55::-;;;;;;;;;;;;;;;;;;;;:::o;641:285::-;732:4;706:10;;;;;;;;;;;;;;;;;;1951:28:1;1961:10;1973:5;1951:9;:28::i;:::-;779:1:0;756:25;;:11;:25;;;;748:34;;;;;;;;801:38;809:11;822:16;;;;;;;;;;;;;;;;;;801:7;:38::i;:::-;800:39;792:48;;;;;;;;859:38;867:11;880:16;;;;;;;;;;;;;;;;;;859:7;:38::i;:::-;914:4;907:12;;641:285;;;;:::o;455:43::-;;;;;;;;;;;;;;;;;;;;:::o;679:117:2:-;770:20;774:5;781:8;770:3;:20::i;:::-;762:29;;;;;;;;679:117;;:::o;874:134::-;960:4;981:5;:12;;:22;994:8;981:22;;;;;;;;;;;;;;;;;;;;;;;;;974:29;;874:134;;;;:::o;1613:149:1:-;1687:30;1707:9;1687:5;1693;1687:12;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1687:12:1;;;;;;;;;;;;;;;;;;;;;:19;;:30;;;;:::i;:::-;1740:9;1728:29;;;1751:5;1728:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1728:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1613:149;;:::o;1347:141::-;1418:27;1435:9;1418:5;1424;1418:12;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1418:12:1;;;;;;;;;;;;;;;;;;;;;:16;;:27;;;;:::i;:::-;1466:9;1456:27;;;1477:5;1456:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1456:27:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1347:141;;:::o;493:110:2:-;593:5;568;:12;;:22;581:8;568:22;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;493:110;;:::o;321:106::-;418:4;393:5;:12;;:22;406:8;393:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;321:106;;:::o",
  "source": "pragma solidity ^0.4.23;\n\nimport \"./access/RBAC.sol\";\n// import \"../installed_contracts/simple-multisig/contracts/SimpleMultisig.sol\";\n\n// Set up the admin and store owner roles here, allow 3 admins to add a new admin? Then hook the DMartStoreOwner contract in to use the roles\n// Have a DMartStore factory create deletable, upgradable store contract for each new store being created (only owner can call any func)\n\ncontract DMartAdmin is RBAC {\n    \n    string public constant ROLE_ADMIN = \"Admin\";\n    string public constant ROLE_STORE_OWNER = \"Store Owner\";\n\n    constructor() public {\n        addRole(msg.sender, ROLE_ADMIN);\n    }\n\n    function addStoreOwner(address _storeOwner) public \n    onlyRole(ROLE_ADMIN) \n    returns (bool) {\n        require(_storeOwner != address(0));\n        require(!hasRole(_storeOwner, ROLE_STORE_OWNER));\n        \n        addRole(_storeOwner, ROLE_STORE_OWNER);\n        return(true);\n    } \n\n    function removeStoreOwner(address _storeOwner) public \n    onlyRole(ROLE_ADMIN) \n    returns (bool) {\n        require(_storeOwner != address(0));\n        require(hasRole(_storeOwner, ROLE_STORE_OWNER));\n\n        removeRole(_storeOwner, ROLE_STORE_OWNER);\n        return(true);\n    } \n}\n",
  "sourcePath": "/Users/alsco/Projects/Decentra-Mart/contracts/DMartAdmin.sol",
  "ast": {
    "absolutePath": "/Users/alsco/Projects/Decentra-Mart/contracts/DMartAdmin.sol",
    "exportedSymbols": {
      "DMartAdmin": [
        90
      ]
    },
    "id": 91,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/Users/alsco/Projects/Decentra-Mart/contracts/access/RBAC.sol",
        "file": "./access/RBAC.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 91,
        "sourceUnit": 198,
        "src": "26:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "RBAC",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 197,
              "src": "439:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_RBAC_$197",
                "typeString": "contract RBAC"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "439:4:0"
          }
        ],
        "contractDependencies": [
          197
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 90,
        "linearizedBaseContracts": [
          90,
          197
        ],
        "name": "DMartAdmin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 7,
            "name": "ROLE_ADMIN",
            "nodeType": "VariableDeclaration",
            "scope": 90,
            "src": "455:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "455:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "41646d696e",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "491:7:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_a729ef4e25027bc652fc8b5c4d1d902947361fa7c8e7b4905e877823f27331b3",
                "typeString": "literal_string \"Admin\""
              },
              "value": "Admin"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 10,
            "name": "ROLE_STORE_OWNER",
            "nodeType": "VariableDeclaration",
            "scope": 90,
            "src": "504:55:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 8,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "504:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "53746f7265204f776e6572",
              "id": 9,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "546:13:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_da7096ea53a68685362e2de37e03c6730a04bcf5fe77f73a60ca1937399d9aaf",
                "typeString": "literal_string \"Store Owner\""
              },
              "value": "Store Owner"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 19,
              "nodeType": "Block",
              "src": "587:48:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 14,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 282,
                          "src": "605:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "605:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16,
                        "name": "ROLE_ADMIN",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "617:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 13,
                      "name": "addRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 164,
                      "src": "597:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 17,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "597:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18,
                  "nodeType": "ExpressionStatement",
                  "src": "597:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 20,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "577:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "587:0:0"
            },
            "scope": 90,
            "src": "566:69:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 54,
              "nodeType": "Block",
              "src": "738:188:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 35,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 31,
                          "name": "_storeOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22,
                          "src": "756:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 33,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "779:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 32,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "771:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 34,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "771:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "756:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 30,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        285,
                        286
                      ],
                      "referencedDeclaration": 285,
                      "src": "748:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 36,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "748:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37,
                  "nodeType": "ExpressionStatement",
                  "src": "748:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 43,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "800:39:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 40,
                              "name": "_storeOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "809:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 41,
                              "name": "ROLE_STORE_OWNER",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10,
                              "src": "822:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 39,
                            "name": "hasRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 144,
                            "src": "801:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_string_memory_ptr_$returns$_t_bool_$",
                              "typeString": "function (address,string memory) view returns (bool)"
                            }
                          },
                          "id": 42,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "801:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 38,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        285,
                        286
                      ],
                      "referencedDeclaration": 285,
                      "src": "792:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 44,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "792:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 45,
                  "nodeType": "ExpressionStatement",
                  "src": "792:48:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 47,
                        "name": "_storeOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "867:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 48,
                        "name": "ROLE_STORE_OWNER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "880:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 46,
                      "name": "addRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 164,
                      "src": "859:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "859:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50,
                  "nodeType": "ExpressionStatement",
                  "src": "859:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 51,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "914:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "id": 52,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "913:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 29,
                  "id": 53,
                  "nodeType": "Return",
                  "src": "907:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 55,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 25,
                    "name": "ROLE_ADMIN",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7,
                    "src": "706:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 26,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 24,
                  "name": "onlyRole",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 196,
                  "src": "697:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_string_memory_ptr_$",
                    "typeString": "modifier (string memory)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "697:20:0"
              }
            ],
            "name": "addStoreOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22,
                  "name": "_storeOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "664:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "664:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "663:21:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "732:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "732:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "731:6:0"
            },
            "scope": 90,
            "src": "641:285:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 88,
              "nodeType": "Block",
              "src": "1033:182:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 66,
                          "name": "_storeOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57,
                          "src": "1051:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 68,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1074:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 67,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1066:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1066:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1051:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 65,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        285,
                        286
                      ],
                      "referencedDeclaration": 285,
                      "src": "1043:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1043:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "1043:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 75,
                            "name": "_storeOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "1103:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 76,
                            "name": "ROLE_STORE_OWNER",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10,
                            "src": "1116:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_string_memory",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 74,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "1095:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_string_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (address,string memory) view returns (bool)"
                          }
                        },
                        "id": 77,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1095:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 73,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        285,
                        286
                      ],
                      "referencedDeclaration": 285,
                      "src": "1087:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 78,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1087:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79,
                  "nodeType": "ExpressionStatement",
                  "src": "1087:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "_storeOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57,
                        "src": "1156:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "ROLE_STORE_OWNER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "1169:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 80,
                      "name": "removeRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 184,
                      "src": "1145:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1145:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "1145:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 85,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1203:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "id": 86,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1202:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 64,
                  "id": 87,
                  "nodeType": "Return",
                  "src": "1196:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 89,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 60,
                    "name": "ROLE_ADMIN",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7,
                    "src": "1001:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 61,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 59,
                  "name": "onlyRole",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 196,
                  "src": "992:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_string_memory_ptr_$",
                    "typeString": "modifier (string memory)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "992:20:0"
              }
            ],
            "name": "removeStoreOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57,
                  "name": "_storeOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "959:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "959:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "958:21:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "1027:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1027:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1026:6:0"
            },
            "scope": 90,
            "src": "933:282:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 91,
        "src": "416:802:0"
      }
    ],
    "src": "0:1219:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/alsco/Projects/Decentra-Mart/contracts/DMartAdmin.sol",
    "exportedSymbols": {
      "DMartAdmin": [
        90
      ]
    },
    "id": 91,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/Users/alsco/Projects/Decentra-Mart/contracts/access/RBAC.sol",
        "file": "./access/RBAC.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 91,
        "sourceUnit": 198,
        "src": "26:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "RBAC",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 197,
              "src": "439:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_RBAC_$197",
                "typeString": "contract RBAC"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "439:4:0"
          }
        ],
        "contractDependencies": [
          197
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 90,
        "linearizedBaseContracts": [
          90,
          197
        ],
        "name": "DMartAdmin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 7,
            "name": "ROLE_ADMIN",
            "nodeType": "VariableDeclaration",
            "scope": 90,
            "src": "455:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "455:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "41646d696e",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "491:7:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_a729ef4e25027bc652fc8b5c4d1d902947361fa7c8e7b4905e877823f27331b3",
                "typeString": "literal_string \"Admin\""
              },
              "value": "Admin"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 10,
            "name": "ROLE_STORE_OWNER",
            "nodeType": "VariableDeclaration",
            "scope": 90,
            "src": "504:55:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 8,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "504:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "53746f7265204f776e6572",
              "id": 9,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "546:13:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_da7096ea53a68685362e2de37e03c6730a04bcf5fe77f73a60ca1937399d9aaf",
                "typeString": "literal_string \"Store Owner\""
              },
              "value": "Store Owner"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 19,
              "nodeType": "Block",
              "src": "587:48:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 14,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 282,
                          "src": "605:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "605:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16,
                        "name": "ROLE_ADMIN",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "617:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 13,
                      "name": "addRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 164,
                      "src": "597:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 17,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "597:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18,
                  "nodeType": "ExpressionStatement",
                  "src": "597:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 20,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "577:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "587:0:0"
            },
            "scope": 90,
            "src": "566:69:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 54,
              "nodeType": "Block",
              "src": "738:188:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 35,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 31,
                          "name": "_storeOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22,
                          "src": "756:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 33,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "779:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 32,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "771:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 34,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "771:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "756:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 30,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        285,
                        286
                      ],
                      "referencedDeclaration": 285,
                      "src": "748:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 36,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "748:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37,
                  "nodeType": "ExpressionStatement",
                  "src": "748:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 43,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "800:39:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 40,
                              "name": "_storeOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "809:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 41,
                              "name": "ROLE_STORE_OWNER",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10,
                              "src": "822:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_string_memory",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 39,
                            "name": "hasRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 144,
                            "src": "801:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_string_memory_ptr_$returns$_t_bool_$",
                              "typeString": "function (address,string memory) view returns (bool)"
                            }
                          },
                          "id": 42,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "801:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 38,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        285,
                        286
                      ],
                      "referencedDeclaration": 285,
                      "src": "792:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 44,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "792:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 45,
                  "nodeType": "ExpressionStatement",
                  "src": "792:48:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 47,
                        "name": "_storeOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "867:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 48,
                        "name": "ROLE_STORE_OWNER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "880:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 46,
                      "name": "addRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 164,
                      "src": "859:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "859:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50,
                  "nodeType": "ExpressionStatement",
                  "src": "859:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 51,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "914:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "id": 52,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "913:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 29,
                  "id": 53,
                  "nodeType": "Return",
                  "src": "907:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 55,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 25,
                    "name": "ROLE_ADMIN",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7,
                    "src": "706:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 26,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 24,
                  "name": "onlyRole",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 196,
                  "src": "697:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_string_memory_ptr_$",
                    "typeString": "modifier (string memory)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "697:20:0"
              }
            ],
            "name": "addStoreOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22,
                  "name": "_storeOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "664:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "664:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "663:21:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "732:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "732:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "731:6:0"
            },
            "scope": 90,
            "src": "641:285:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 88,
              "nodeType": "Block",
              "src": "1033:182:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 66,
                          "name": "_storeOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57,
                          "src": "1051:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 68,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1074:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 67,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1066:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1066:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1051:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 65,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        285,
                        286
                      ],
                      "referencedDeclaration": 285,
                      "src": "1043:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1043:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "1043:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 75,
                            "name": "_storeOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "1103:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 76,
                            "name": "ROLE_STORE_OWNER",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10,
                            "src": "1116:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_string_memory",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 74,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "1095:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_string_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (address,string memory) view returns (bool)"
                          }
                        },
                        "id": 77,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1095:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 73,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        285,
                        286
                      ],
                      "referencedDeclaration": 285,
                      "src": "1087:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 78,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1087:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79,
                  "nodeType": "ExpressionStatement",
                  "src": "1087:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "_storeOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57,
                        "src": "1156:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "ROLE_STORE_OWNER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "1169:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 80,
                      "name": "removeRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 184,
                      "src": "1145:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1145:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "1145:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 85,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1203:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "id": 86,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1202:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 64,
                  "id": 87,
                  "nodeType": "Return",
                  "src": "1196:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 89,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 60,
                    "name": "ROLE_ADMIN",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7,
                    "src": "1001:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 61,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 59,
                  "name": "onlyRole",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 196,
                  "src": "992:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_string_memory_ptr_$",
                    "typeString": "modifier (string memory)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "992:20:0"
              }
            ],
            "name": "removeStoreOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57,
                  "name": "_storeOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "959:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "959:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "958:21:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 89,
                  "src": "1027:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1027:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1026:6:0"
            },
            "scope": 90,
            "src": "933:282:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 91,
        "src": "416:802:0"
      }
    ],
    "src": "0:1219:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "1533977579971": {
      "events": {},
      "links": {},
      "address": "0x47a5dabfa0d410a8675d1effab6295326eb54f3b",
      "transactionHash": "0x61d26e97bd39afd83b8392c1c8f9cf9bfb61bd5c6e6143a28ab63ec6df5fbbde"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-08-11T09:00:37.333Z"
}

