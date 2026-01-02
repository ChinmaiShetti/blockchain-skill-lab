'use client'

import { motion } from 'framer-motion'
import {
    Zap,
    Cpu,
    Database,
    Layers,
    ArrowRight,
    Clock,
    Unlock,
    Terminal,
    Activity,
    Box
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const fadeInUp = {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export default function SessionSolanaFundamentals() {
    const [activeTech, setActiveTech] = useState<string | null>(null);
    const [showCoreAnalogy, setShowCoreAnalogy] = useState(false);
    const [showAccountAnalogy, setShowAccountAnalogy] = useState(false);
    const [showPdaAnalogy, setShowPdaAnalogy] = useState(false);

    return (
        <div className="relative pt-24 pb-24 bg-black text-white selection:bg-purple-900 selection:text-white font-sans">

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="relative max-w-5xl mx-auto px-6 z-10">

                {/* Header */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1 bg-purple-900/20 border border-purple-800 text-purple-400 text-xs font-mono uppercase tracking-widest rounded-sm">
                            Session 01
                        </div>
                        <div className="h-px bg-neutral-800 flex-1"></div>
                        <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
                            Fundamentals
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        SOLANA
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">ARCHITECT.</span>
                    </h1>

                    <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light border-l border-neutral-800 pl-6">
                        Solana is a high performance blockchain designed for speed, low cost, and scalability. It solves key limitations found in earlier blockchains like Bitcoin and Ethereum.
                    </p>
                </motion.div>

                {/* Comparison / Why Solana */}
                <motion.section className="mb-24" {...fadeInUp} viewport={{ once: true }}>
                    <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
                        <h2 className="text-lg font-bold font-mono text-neutral-500 uppercase tracking-widest">01 / Why Solana</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Bitcoin",
                                desc: "Secure but slow and not flexible for applications.",
                                borderColor: "border-orange-900/30",
                                textColor: "text-orange-500"
                            },
                            {
                                title: "Ethereum",
                                desc: "Supports smart contracts but continues to suffer from high gas fees and limited throughput.",
                                borderColor: "border-blue-900/30",
                                textColor: "text-blue-500"
                            },
                            {
                                title: "Solana",
                                desc: "Addresses these problems by combining multiple innovations focused on speed and efficiency.",
                                borderColor: "border-purple-600",
                                textColor: "text-purple-400",
                                active: true
                            }
                        ].map((chain, i) => (
                            <div key={i} className={`p-6 bg-[#0A0A0A] border ${chain.borderColor} rounded-sm relative group`}>
                                {chain.active && (
                                    <div className="absolute top-0 right-0 px-2 py-1 bg-purple-900/50 text-[10px] uppercase font-mono tracking-widest text-white border-l border-b border-purple-800">
                                        Focus
                                    </div>
                                )}
                                <h3 className={`text-xl font-bold mb-2 ${chain.textColor}`}>{chain.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">{chain.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>


                {/* Core Technologies */}
                <motion.section className="mb-24 px-1" {...fadeInUp} viewport={{ once: true }}>
                    <div className="flex items-baseline gap-4 mb-12 border-b border-neutral-800 pb-4">
                        <span className="text-4xl font-mono font-bold text-neutral-800">02</span>
                        <h2 className="text-2xl font-bold tracking-tight">Core Technologies</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            {[
                                { id: 'pos', name: 'Proof of Stake', icon: Zap, desc: 'Validator selection based on staked SOL.' },
                                { id: 'poh', name: 'Proof of History', icon: Clock, desc: 'Cryptographic ordering of transactions before consensus.' },
                                { id: 'sealevel', name: 'Sealevel', icon: Layers, desc: 'Parallel execution engine.' },
                                { id: 'tower', name: 'Tower BFT', icon: Activity, desc: 'Optimized consensus for fast finality.' },
                            ].map((tech) => (
                                <button
                                    key={tech.id}
                                    onClick={() => setActiveTech(tech.id)}
                                    className={`w-full text-left p-4 border rounded-sm transition-all duration-300 flex items-center gap-4 group
                            ${activeTech === tech.id
                                            ? 'bg-purple-900/20 border-purple-500'
                                            : 'bg-[#0A0A0A] border-neutral-800 hover:border-purple-800'}`}
                                >
                                    <div className={`p-2 rounded-sm ${activeTech === tech.id ? 'bg-purple-500 text-white' : 'bg-neutral-900 text-neutral-500 group-hover:text-purple-400'}`}>
                                        <tech.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className={`text-sm font-bold uppercase tracking-wide ${activeTech === tech.id ? 'text-white' : 'text-neutral-300'}`}>
                                            {tech.name}
                                        </h3>
                                    </div>
                                    <ArrowRight className={`ml-auto w-4 h-4 transition-transform ${activeTech === tech.id ? 'translate-x-1 text-purple-500' : 'text-neutral-700 opacity-0 group-hover:opacity-100'}`} />
                                </button>
                            ))}
                        </div>

                        <div className="border border-neutral-800 bg-[#050505] p-8 rounded-sm min-h-[300px] flex flex-col justify-center relative overflow-hidden">
                            {/* Visualizer Placeholder */}
                            <div className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 50% 50%, #7c3aed 1px, transparent 1px)',
                                    backgroundSize: '20px 20px'
                                }}></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-purple-500 font-mono text-xs uppercase tracking-widest">
                                        {activeTech ? `// Deep Dive: ${activeTech}` : '// SELECT TECHNOLOGY'}
                                    </h4>
                                    {activeTech && (
                                        <div className="flex items-center gap-2 bg-neutral-900 rounded-full p-1 border border-neutral-800">
                                            <button
                                                onClick={() => setShowCoreAnalogy(false)}
                                                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-colors ${!showCoreAnalogy ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                                            >
                                                Tech
                                            </button>
                                            <button
                                                onClick={() => setShowCoreAnalogy(true)}
                                                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-colors ${showCoreAnalogy ? 'bg-purple-900/50 text-purple-200' : 'text-neutral-500 hover:text-neutral-300'}`}
                                            >
                                                Analogy
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {activeTech === 'pos' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={`${activeTech}-${showCoreAnalogy ? 'analogy' : 'tech'}`}>
                                        {!showCoreAnalogy ? (
                                            <p className="text-lg text-white mb-4 font-light">
                                                "Selects validators based on staked SOL to propose blocks in an energy efficient way."
                                            </p>
                                        ) : (
                                            <div className="space-y-4">
                                                <div className="p-4 bg-purple-900/10 border border-purple-900/30 rounded-sm">
                                                    <h5 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                                                        <span className="text-xl">🍔</span> McDonald's: Leader Selection
                                                    </h5>
                                                    <p className="text-sm text-neutral-300">
                                                        For a short time, one counter person is selected to take orders. This person is chosen based on trust and responsibility (their stake in the business).
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                                {activeTech === 'poh' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={`${activeTech}-${showCoreAnalogy ? 'analogy' : 'tech'}`}>
                                        {!showCoreAnalogy ? (
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                Provides a <strong className="text-white">cryptographic ordering of transactions</strong> before consensus, removing the need for validators to constantly communicate for time synchronization.
                                            </p>
                                        ) : (
                                            <div className="space-y-4">
                                                <div className="p-4 bg-purple-900/10 border border-purple-900/30 rounded-sm">
                                                    <h5 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                                                        <span className="text-xl">🎫</span> McDonald's: Ticket Numbers
                                                    </h5>
                                                    <p className="text-sm text-neutral-300">
                                                        Every customer gets a sequential number (101, 102...). The counter person cannot skip numbers. This creates a verifiable timeline of orders without needing a clock.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                                {activeTech === 'sealevel' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={`${activeTech}-${showCoreAnalogy ? 'analogy' : 'tech'}`}>
                                        {!showCoreAnalogy ? (
                                            <>
                                                <div className="flex gap-2 mb-4">
                                                    <div className="h-2 w-16 bg-blue-500 rounded-sm animate-pulse"></div>
                                                    <div className="h-2 w-16 bg-purple-500 rounded-sm animate-pulse delay-75"></div>
                                                    <div className="h-2 w-16 bg-green-500 rounded-sm animate-pulse delay-150"></div>
                                                </div>
                                                <p className="text-sm text-neutral-400 leading-relaxed">
                                                    A <strong className="text-white">parallel execution engine</strong> that allows multiple non overlapping transactions to run at the same time.
                                                </p>
                                            </>
                                        ) : (
                                            <div className="space-y-4">
                                                <div className="p-4 bg-purple-900/10 border border-purple-900/30 rounded-sm">
                                                    <h5 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                                                        <span className="text-xl">👨‍🍳</span> McDonald's: Kitchen Chefs
                                                    </h5>
                                                    <p className="text-sm text-neutral-300">
                                                        If two orders are different (Fries vs Burger), they are cooked at the same time by different chefs. If they need the same grill, they wait using the same resource.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                                {activeTech === 'tower' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={`${activeTech}-${showCoreAnalogy ? 'analogy' : 'tech'}`}>
                                        {!showCoreAnalogy ? (
                                            <p className="text-sm text-neutral-400 leading-relaxed">
                                                An optimized consensus mechanism that enables <strong className="text-white">fast finality</strong> by locking validator votes.
                                            </p>
                                        ) : (
                                            <div className="space-y-4">
                                                <div className="p-4 bg-purple-900/10 border border-purple-900/30 rounded-sm">
                                                    <h5 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                                                        <span className="text-xl">👀</span> McDonald's: Final Approval
                                                    </h5>
                                                    <p className="text-sm text-neutral-300">
                                                        Validators (audience) watch the process. If enough people agree "Yes, that batch was correct", it's marked as final. No taking it back.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                                {(!activeTech) && (
                                    <div className="text-neutral-600 text-sm font-mono text-center">
                                        Select a technology from the left to visualize its mechanism.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.section>


                {/* Account Model */}
                <motion.section className="mb-24 group px-1" {...fadeInUp} viewport={{ once: true }}>
                    <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
                        <span className="text-4xl font-mono font-bold text-neutral-800">03</span>
                        <h2 className="text-2xl font-bold tracking-tight">The Account Model</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                Solana uses an account based model where everything is stored in accounts. Wallets, smart contracts, tokens, NFTs, and application data all follow the same structure.
                                <br /><br />
                                Each account contains an <strong className="text-white">address, lamports, data, and an owner program.</strong> Only the owning program can modify an account’s data.
                            </p>

                            <div className="p-4 bg-neutral-900/30 border-l-2 border-purple-500 mb-8">
                                <h4 className="text-sm font-bold text-white mb-1">Program vs Data</h4>
                                <p className="text-xs text-neutral-400">
                                    Smart contracts are called <span className="text-purple-300">Program Accounts</span> and store only code.
                                    <br />
                                    All changing data is stored in separate <span className="text-purple-300">Data Accounts</span>.
                                </p>
                            </div>

                            <h3 className="text-sm font-bold font-mono text-neutral-500 uppercase tracking-widest mb-4">
                                Account Structure
                            </h3>
                            <div className="space-y-2 font-mono text-xs mb-8">
                                <div className="flex justify-between p-3 border border-neutral-800 bg-[#0A0A0A] text-neutral-300">
                                    <span>Lamports</span>
                                    <span className="text-purple-400">u64</span>
                                </div>
                                <div className="flex justify-between p-3 border border-neutral-800 bg-[#0A0A0A] text-neutral-300">
                                    <span>Owner (Program ID)</span>
                                    <span className="text-purple-400">Pubkey</span>
                                </div>
                                <div className="flex justify-between p-3 border border-neutral-800 bg-[#0A0A0A] text-neutral-300">
                                    <span>Executable</span>
                                    <span className="text-purple-400">bool</span>
                                </div>
                                <div className="flex justify-between p-3 border border-neutral-800 bg-[#0A0A0A] text-neutral-300">
                                    <span>Data</span>
                                    <span className="text-purple-400">byte[]</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowAccountAnalogy(!showAccountAnalogy)}
                                className="text-xs font-bold uppercase tracking-widest text-purple-500 hover:text-purple-400 flex items-center gap-2 mb-4"
                            >
                                {showAccountAnalogy ? '[-]' : '[+]'} Explain with Analogy
                            </button>

                            {showAccountAnalogy && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-sm overflow-hidden"
                                >
                                    <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                                        <span className="text-xl">🔐</span> School Locker Room
                                    </h5>
                                    <ul className="text-sm text-neutral-400 space-y-2 list-disc pl-4">
                                        <li>Every locker looks the same (Standard structure).</li>
                                        <li>Each locker has a unique number (Address).</li>
                                        <li>Only the assigned owner (Program) can open and use it.</li>
                                    </ul>
                                </motion.div>
                            )}
                        </div>

                        <div className="bg-[#050505] border border-neutral-800 rounded-sm p-8 flex items-center justify-center">
                            <div className="relative w-full max-w-sm">
                                {/* Diagram */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-[10px] font-mono text-neutral-600 uppercase">
                                    Isolation Architecture
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* Program Account */}
                                    <div className="p-4 border border-blue-900 bg-blue-900/10 rounded-sm flex items-center gap-4">
                                        <Box className="text-blue-500" />
                                        <div>
                                            <div className="text-xs font-mono text-blue-400 uppercase">Program Account</div>
                                            <div className="text-sm text-white font-bold">Token Program</div>
                                            <div className="text-[10px] text-neutral-500">Code Only (Immutable)</div>
                                        </div>
                                    </div>

                                    {/* Arrows */}
                                    <div className="flex justify-center -my-2 z-10">
                                        <div className="h-8 w-px bg-neutral-700"></div>
                                    </div>

                                    {/* Data Account */}
                                    <div className="p-4 border border-purple-900 bg-purple-900/10 rounded-sm flex items-center gap-4 ml-8">
                                        <Database className="text-purple-500" />
                                        <div>
                                            <div className="text-xs font-mono text-purple-400 uppercase">Data Account</div>
                                            <div className="text-sm text-white font-bold">User Balances</div>
                                            <div className="text-[10px] text-neutral-500">Owned by Token Program</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* PDAs */}
                <motion.section className="mb-24 px-1" {...fadeInUp} viewport={{ once: true }}>
                    <div className="bg-neutral-900/20 border border-neutral-800 p-8 rounded-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-[#050505] border border-neutral-800 rounded-sm text-purple-500">
                                <Unlock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Program Derived Addresses (PDAs)</h3>
                                <p className="text-neutral-400 max-w-2xl leading-relaxed mb-4">
                                    PDAs are special accounts controlled entirely by programs. They do not have private keys and can only be modified through program logic, enabling <strong className="text-white">secure application state management.</strong>
                                </p>

                                <button
                                    onClick={() => setShowPdaAnalogy(!showPdaAnalogy)}
                                    className="text-xs font-bold uppercase tracking-widest text-purple-500 hover:text-purple-400 flex items-center gap-2 mb-4"
                                >
                                    {showPdaAnalogy ? '[-]' : '[+]'} Explain with Analogy
                                </button>

                                {showPdaAnalogy && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-sm overflow-hidden max-w-xl"
                                    >
                                        <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <span className="text-xl">🏨</span> Hotel Lockers
                                        </h5>
                                        <ul className="text-sm text-neutral-400 space-y-2 list-disc pl-4">
                                            <li>Guests (Users) do not have the keys.</li>
                                            <li>Only the reception staff (Program) can open them.</li>
                                            <li>Guests request items through the staff, ensuring security.</li>
                                        </ul>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Fees & Apps & Summary */}
                <motion.section className="mb-24" {...fadeInUp} viewport={{ once: true }}>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Transaction Fees */}
                        <div>
                            <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-4">
                                <span className="text-4xl font-mono font-bold text-neutral-800">04</span>
                                <h2 className="text-2xl font-bold tracking-tight">Transaction Fees</h2>
                            </div>
                            <p className="text-neutral-400 leading-relaxed mb-4">
                                Solana does not use an Ethereum style gas model.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-sm mt-2"></div>
                                    <span className="text-sm text-neutral-300">Each transaction has a small and <strong className="text-white">predictable fee</strong> paid in lamports.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-sm mt-2"></div>
                                    <span className="text-sm text-neutral-300">Optional <strong className="text-white">priority fees</strong> can be added during congestion to speed up confirmation.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Real World Apps */}
                        <div>
                            <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-4">
                                <span className="text-4xl font-mono font-bold text-neutral-800">05</span>
                                <h2 className="text-2xl font-bold tracking-tight">Real World Applications</h2>
                            </div>
                            <p className="text-neutral-400 leading-relaxed mb-4">
                                Projects like <strong className="text-white">Hivemapper</strong> and <strong className="text-white">Helium</strong> use Solana for token issuance, rewards distribution, and decentralized validation.
                            </p>
                            <div className="p-4 bg-[#0A0A0A] border border-neutral-800 rounded-sm">
                                <p className="text-sm text-neutral-500 italic">
                                    "Solana enables trustless incentives, high throughput, and low cost operations that centralized systems cannot easily replicate."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Summary */}
                <motion.section className="mb-16 border-t border-neutral-800 pt-16" {...fadeInUp} viewport={{ once: true }}>
                    <div className="bg-neutral-900/10 border border-neutral-800 p-8 rounded-sm text-center">
                        <h2 className="text-lg font-bold font-mono uppercase tracking-widest text-purple-500 mb-4">
                            Summary
                        </h2>
                        <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed mb-2">
                            Solana is designed for developers building high speed, user friendly decentralized applications.
                        </p>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Its architecture prioritizes scalability, low fees, and efficient execution while maintaining decentralization and security.
                        </p>
                    </div>
                </motion.section>

                {/* Navigation */}
                <motion.div className="flex justify-center" {...fadeInUp} viewport={{ once: true }}>
                    <Link href="/d2-session-1">
                        <button className="px-6 py-4 mr-4 text-neutral-500 text-sm font-bold uppercase tracking-wide hover:text-white transition-colors">
                            Back
                        </button>
                    </Link>
                    <Link href="#">
                        <button className="group relative px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-3 rounded-sm">
                            <span>Next: Coming Soon</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </Link>
                </motion.div>

            </div>
        </div>
    )
}
