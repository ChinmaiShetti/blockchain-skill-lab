'use client'

import { motion } from 'framer-motion'
import {
  Network,
  Cpu,
  Fuel,
  FileCode,
  Users,
  ChevronRight,
  Layers,
  Hash,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ChainVisual } from '@/components/AnimatedVisuals'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  }
}

export default function SessionEthereumArchitecture() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="relative pt-24 pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
            <span className="text-blockchain-cyan font-semibold">SESSION 2</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Ethereum</span><br />
            Architecture
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A deep technical exploration of Ethereum’s network design, execution
            model, gas economics, and smart contract architecture.
          </p>
        </motion.div>

        {/* Session Goal */}
        <motion.div
          className="mb-20 p-8 glass-effect rounded-3xl border-l-4 border-blockchain-cyan"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Session Goal</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Understand how Ethereum operates as a decentralized world computer —
            from peer-to-peer networking and execution to gas economics and
            programmable state.
          </p>
        </motion.div>

        {/* 1. Ethereum Network */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-blue to-blockchain-cyan rounded-2xl flex items-center justify-center">
              <Network size={32} />
            </div>
            <div>
              <span className="text-blockchain-cyan text-sm font-semibold">01</span>
              <h2 className="text-3xl font-bold">Ethereum Network</h2>
            </div>
          </div>

          <div className="p-8 glass-effect rounded-2xl">
            <p className="text-gray-300 leading-relaxed mb-6">
              Ethereum is a <span className="font-semibold text-white">peer-to-peer
              network</span> of nodes that collectively maintain a shared global
              state. Nodes communicate using the devp2p protocol and exchange
              blocks, transactions, and state data.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Execution clients (Geth, Nethermind)',
                'Consensus clients (Prysm, Lighthouse)',
                'Validators replacing miners post-Merge'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-4 bg-white/5 rounded-xl text-sm text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="my-8 p-6 bg-blockchain-blue/5 rounded-xl border border-blockchain-blue/20">
              <ChainVisual />
              <p className="text-xs text-center text-gray-400 mt-4">
                Ethereum nodes synchronizing blocks and state
              </p>
            </div>
          </div>
        </motion.section>

        {/* 2. EVM */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-purple to-blockchain-blue rounded-2xl flex items-center justify-center">
              <Cpu size={32} />
            </div>
            <div>
              <span className="text-blockchain-purple text-sm font-semibold">02</span>
              <h2 className="text-3xl font-bold">Ethereum Virtual Machine (EVM)</h2>
            </div>
          </div>

          <div className="p-8 glass-effect rounded-2xl">
            <p className="text-gray-300 mb-6 leading-relaxed">
              The <span className="font-semibold text-white">EVM</span> is a
              deterministic, stack-based virtual machine that executes smart
              contract bytecode identically on every Ethereum node.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Stack-based Execution',
                  desc: '256-bit word stack with strict opcode semantics'
                },
                {
                  title: 'Determinism',
                  desc: 'Same input always produces the same output across nodes'
                },
                {
                  title: 'Isolated Execution',
                  desc: 'Contracts cannot access external system resources'
                },
                {
                  title: 'Opcode Gas Costs',
                  desc: 'Each opcode has a predefined gas cost'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-5 bg-white/5 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 3. Gas Model & Transaction Lifecycle */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-cyan to-blockchain-purple rounded-2xl flex items-center justify-center">
              <Fuel size={32} />
            </div>
            <div>
              <span className="text-blockchain-cyan text-sm font-semibold">03</span>
              <h2 className="text-3xl font-bold">Gas Model & Transaction Lifecycle</h2>
            </div>
          </div>

          <div className="p-8 glass-effect rounded-2xl">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Gas is Ethereum’s economic mechanism that limits computation,
              prevents abuse, and compensates validators.
            </p>

            <div className="space-y-4">
              {[
                'Transaction created and signed by user',
                'Broadcast to mempool',
                'Validator selects transaction',
                'EVM execution consumes gas',
                'State updated and block finalized'
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-blockchain-cyan/30 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <span className="text-gray-300">{step}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blockchain-cyan/10 rounded-xl">
              <p className="text-sm text-center">
                Base fee is burned • Priority fee incentivizes validators
              </p>
            </div>
          </div>
        </motion.section>

        {/* 4. Smart Contracts & Accounts */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-blue to-blockchain-purple rounded-2xl flex items-center justify-center">
              <FileCode size={32} />
            </div>
            <div>
              <span className="text-blockchain-blue text-sm font-semibold">04</span>
              <h2 className="text-3xl font-bold">Smart Contracts & Accounts</h2>
            </div>
          </div>

          <div className="p-8 glass-effect rounded-2xl">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ethereum uses an <span className="font-semibold text-white">account-based
              model</span> rather than UTXOs. State is stored directly on accounts.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Externally Owned Accounts (EOA)',
                  desc: 'Controlled by private keys, initiate transactions'
                },
                {
                  title: 'Contract Accounts',
                  desc: 'Contain bytecode and persistent storage'
                },
                {
                  title: 'Smart Contracts',
                  desc: 'Deterministic programs executed by the EVM'
                },
                {
                  title: 'Global State',
                  desc: 'Mapping of addresses to account data'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-5 bg-white/5 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Takeaways */}
        <motion.section className="mb-12" {...fadeInUp} viewport={{ once: true }}>
          <div className="p-8 glass-effect rounded-3xl border-2 border-blockchain-cyan/50">
            <h2 className="text-3xl font-bold mb-6 text-center">
              ✅ Ethereum Architecture Takeaways
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Ethereum is a stateful, account-based blockchain',
                'The EVM guarantees deterministic execution',
                'Gas aligns computation with economic cost'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-5 bg-blockchain-cyan/10 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-200">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="text-center" {...fadeInUp} viewport={{ once: true }}>
          <Link href="/d2-session-2">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blockchain-purple to-blockchain-cyan rounded-full font-semibold text-lg flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue to Solidity Programming
              <ChevronRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
