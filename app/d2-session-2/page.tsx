'use client'

import { motion } from 'framer-motion'
import { FileText, Layers, GitBranch, Database, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Helper for rendering code snippets safely
const codeSnippet = (code: string) => (
  <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
    {code}
  </pre>
)

export default function SoliditySession() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const sections = [
    {
      title: 'Contract Structure',
      icon: <FileText size={28} />,
      content: [
        `Solidity contracts are like classes in object-oriented programming.\nThey contain state variables, functions, constructors, modifiers, and events.\nContracts can inherit from other contracts, implement interfaces, and be abstract.\nEach contract is deployed as an independent entity on the Ethereum blockchain.`,
        codeSnippet(`pragma solidity ^0.8.20;

contract MyContract {
    uint public counter;

    constructor() {
        counter = 0;
    }

    function increment() public {
        counter += 1;
    }
}`),
        `State variables live on-chain. Changing them costs gas.\nConstructors are run once during deployment.\nInheritance allows code reuse and polymorphism.\nInterfaces define contracts without implementations.`
      ]
    },
    {
      title: 'Data Types',
      icon: <Layers size={28} />,
      content: [
        ` Value Types:  uint, int, bool, address, bytes1..32\n Reference Types:  arrays, structs, mappings, string\n Special Types:  enum, function\n\n Storage Locations:  storage, memory, calldata\nStorage is permanent on-chain, memory is temporary, calldata is read-only for external calls.`,
        codeSnippet(`struct Person {
    string name;
    uint age;
}

mapping(address => Person) public people;

enum Status { Pending, Active, Inactive }`),
        `Arrays can be fixed-size or dynamic.\nMappings store key-value pairs but cannot be enumerated.\nEnums are custom types with named values.`
      ]
    },
    {
      title: 'Functions, Modifiers & Control Flow',
      icon: <GitBranch size={28} />,
      content: [
        `Functions define behavior.\n Visibility:  public, external, internal, private\n State Mutability:  view (read-only), pure (no state), payable (accept ETH)\n Modifiers:  reusable rules for functions (e.g., onlyOwner)`,
        codeSnippet(`address owner;

modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;
}

function transfer(address to, uint amount) public onlyOwner {
    balances[msg.sender] -= amount;
    balances[to] += amount;
}`),
        `Control flow includes if/else, for/while loops, require(), revert(), assert().\nFunction overloading allows multiple functions with same name but different parameters.\nFallback and receive handle ETH transfers to the contract.`
      ]
    },
    {
      title: 'Events & Logging',
      icon: <FileText size={28} />,
      content: [
        `Events are logs stored on-chain but not accessible by contracts.\nThey are used for off-chain monitoring and front-end applications.\nIndexed parameters allow filtering by specific values.`,
        codeSnippet(`event Transfer(address indexed from, address indexed to, uint amount);

emit Transfer(msg.sender, recipient, 100);`),
        `Events are cheaper than storing data on-chain.\nDApps listen to events to react to blockchain state changes.`
      ]
    },
    {
      title: 'Advanced Concepts & Security',
      icon: <Layers size={28} />,
      content: [
        ` Fallback and receive functions:  handle ETH sent to contract without calldata.\n Selfdestruct:  removes contract and sends remaining ETH.\n Upgrade patterns:  proxy contracts allow mutable logic while keeping state.\n Security pitfalls:  reentrancy, integer overflows, uninitialized storage, unchecked external calls.`,
        codeSnippet(`// Example reentrancy guard
bool internal locked;

modifier noReentrancy() {
    require(!locked, "No reentrancy");
    locked = true;
    _;
    locked = false;
}`),
        `Always validate inputs and avoid trusting external contracts.\nUse OpenZeppelin libraries for tested, secure implementations.`
      ]
    }
  ]

  return (
    <div className="relative pt-24 pb-16 bg-gray-900 text-gray-200 min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-cyan-700 rounded-full mb-6">
            <span className="font-semibold">SOLIDITY PROGRAMMING</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            In-Depth Solidity Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn the structure, data types, functions, modifiers, events, and advanced concepts in Solidity. Explore how smart contracts work and how to write secure, efficient Ethereum contracts.
          </p>
        </motion.div>

        {/* Sections */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {sections.map((sec, i) => (
            <motion.div key={i} className="p-6 bg-gray-800/20 rounded-2xl border border-cyan-700">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  {sec.icon}
                  <h2 className="text-2xl font-bold">{sec.title}</h2>
                </div>
                <span className="text-cyan-400 text-xl">{expanded === i ? '▲' : '▼'}</span>
              </div>

              {/* Expandable content */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expanded === i ? 'auto' : 0,
                  opacity: expanded === i ? 1 : 0
                }}
                className="overflow-hidden mt-4 space-y-4 text-gray-300"
              >
                {sec.content.map((c, idx) =>
                  typeof c === 'string' ? (
                    <p key={idx} className="whitespace-pre-line">{c}</p>
                  ) : (
                    <div key={idx}>{c}</div>
                  )
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Takeaways */}
        <motion.div
          className="mt-16 p-8 bg-cyan-800/20 rounded-3xl border border-cyan-600"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">✅ Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-200">
            <li>Solidity contracts are the backbone of Ethereum smart contracts.</li>
            <li>Data types, storage locations, and control flow define how contracts behave.</li>
            <li>Modifiers and events help structure contracts and communicate with the outside world.</li>
            <li>Advanced patterns and security practices are essential for production-ready contracts.</li>
          </ul>
        </motion.div>
                <motion.div className="text-center" {...fadeInUp} viewport={{ once: true }}>
          <Link href="/d2-session-3">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blockchain-purple to-blockchain-cyan rounded-full font-semibold text-lg flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue to Ethereum Smart Contracts
              <ChevronRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
