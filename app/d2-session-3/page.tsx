'use client'

import { motion } from 'framer-motion'
import { FileText, Layers, GitBranch, Database, Code, Users } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
}

const sections = [
  {
    title: 'Write & Deploy Ethereum Smart Contracts',
    icon: <FileText size={28} />,
    content: [
      `Ethereum smart contracts are self-executing programs stored on the blockchain. They define rules for digital agreements and automatically enforce them.`,
      `**Steps to write and deploy:**`,
      `1. Install Solidity-compatible IDE (Remix IDE is most common).`,
      `2. Write your contract with state variables, functions, events, and modifiers.`,
      `3. Compile the contract to check for syntax and semantic errors.`,
      `4. Deploy on a testnet (e.g., Goerli) using MetaMask or other wallets.`,
      `5. Interact with deployed contracts through frontend or Remix console.`
    ],
    code: `pragma solidity ^0.8.20;

contract Counter {
    uint public count;

    constructor() {
        count = 0;
    }

    function increment() public {
        count += 1;
    }

    function reset() public {
        count = 0;
    }
}`
  },
  {
    title: 'Remix IDE & Contract Interaction',
    icon: <Layers size={28} />,
    content: [
      `Remix IDE is an online Solidity editor and deployment tool with an integrated environment to test smart contracts.`,
      `**Key Features:**`,
      `- Solidity compiler and debugger`,
      `- Deploy to JavaScript VM, Injected Web3, or local testnets`,
      `- Run transactions, call functions, and check emitted events`,
      `- Real-time syntax highlighting and error detection`,
      `- Plugin ecosystem for enhanced functionalities`
    ],
    code: `// Interacting with deployed contract
const counterContract = new web3.eth.Contract(abi, contractAddress);

async function incrementCounter() {
    await counterContract.methods.increment().send({ from: userAddress });
}

async function getCount() {
    return await counterContract.methods.count().call();
}`
  },
  {
    title: 'Student Registry / Asset Transfer Example',
    icon: <Users size={28} />,
    content: [
      `This example shows a smart contract for managing student records and transferring assets.`,
      `It demonstrates mappings, structs, events, and access control in Solidity.`,
      `**Key Concepts:**`,
      `- **Structs**: Custom data types to store multiple related values.`,
      `- **Mappings**: Key-value storage for fast lookups.`,
      `- **Events**: Logging changes to monitor off-chain.`,
      `- **Modifiers**: Reusable access rules, e.g., only admin can update records.`
    ],
    code: `pragma solidity ^0.8.20;

contract StudentRegistry {
    struct Student {
        string name;
        uint age;
        bool enrolled;
    }

    address public admin;
    mapping(uint => Student) public students;

    event StudentAdded(uint studentId, string name);
    event AssetTransferred(address from, address to, uint amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addStudent(uint studentId, string memory name, uint age) public onlyAdmin {
        students[studentId] = Student(name, age, true);
        emit StudentAdded(studentId, name);
    }

    function transferAsset(address to, uint amount) public {
        // Example logic
        emit AssetTransferred(msg.sender, to, amount);
    }
}`
  },
  {
    title: 'Best Practices & Security',
    icon: <GitBranch size={28} />,
    content: [
      `Smart contract security is crucial. Once deployed, contracts cannot be easily changed.`,
      `**Best Practices:**`,
      `- Validate all inputs and outputs`,
      `- Use OpenZeppelin libraries for tested implementations`,
      `- Avoid reentrancy, integer overflow, and uninitialized storage`,
      `- Minimize on-chain storage to reduce gas costs`,
      `- Write unit tests and use static analysis tools before deployment`
    ],
    code: `// Reentrancy guard example
bool internal locked;

modifier noReentrancy() {
    require(!locked, "No reentrancy");
    locked = true;
    _;
    locked = false;
}`
  }
]

export default function EthereumSmartContractPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-16 px-6 md:px-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-2 bg-cyan-700 rounded-full mb-6">
          <span className="font-semibold">ETHEREUM DEVELOPMENT</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Ethereum Smart Contracts In-Depth
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore how to write, deploy, and interact with Ethereum smart contracts, with practical examples like student registries and asset transfers. Learn security practices and advanced concepts to build production-ready contracts.
        </p>
      </motion.div>

      <div className="space-y-12">
        {sections.map((sec, idx) => (
          <motion.div key={idx} className="bg-gray-800/20 rounded-3xl border border-cyan-700 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              {sec.icon}
              <h2 className="text-3xl font-bold">{sec.title}</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              {sec.content.map((c, i) => (
                <p key={i} className="whitespace-pre-line">{c}</p>
              ))}
              <SyntaxHighlighter language="solidity" style={oneDark} customStyle={{ borderRadius: '0.5rem' }}>
                {sec.code}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 p-8 bg-cyan-800/20 rounded-3xl border border-cyan-600"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">✅ Key Takeaways</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-200">
          <li>Ethereum contracts enforce rules programmatically and live on-chain.</li>
          <li>Remix IDE enables coding, compiling, deploying, and interacting with contracts efficiently.</li>
          <li>Structs, mappings, events, and modifiers provide structure and control for contract logic.</li>
          <li>Security best practices are essential to prevent hacks and vulnerabilities.</li>
          <li>Code reusability through libraries and OpenZeppelin improves reliability.</li>
        </ul>
      </motion.div>
    </div>
  )
}
