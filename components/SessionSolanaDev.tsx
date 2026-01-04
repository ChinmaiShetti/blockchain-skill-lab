'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen,
  ListChecks,
  Terminal,
  Layers,
  ArrowRight,
  ExternalLink,
  Code2,
  ClipboardList,
  Brain,
  Sparkles,
  Shield
} from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
}

export default function SessionSolanaDev() {
  return (
    <div className="relative pt-24 pb-24 bg-black text-white selection:bg-purple-900 selection:text-white font-sans overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '38px 38px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Hero */}
        <motion.header
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 bg-purple-900/20 border border-purple-800 text-purple-400 text-xs font-mono uppercase tracking-widest rounded-sm">
              Session 02
            </div>
            <div className="h-px bg-neutral-800 flex-1" />
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">Rust & Tooling</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Solana Dev Foundations
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              RUST WORKFLOW SPRINT
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed font-light border-l border-neutral-800 pl-6">
            Work through curated Rust snippets to gain fluency for Solana development. Orientation, resources, and practice guidance included.
          </p>
        </motion.header>

        {/* Orientation & resources */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-white">01</span>
            <h2 className="text-2xl font-bold tracking-tight">Orientation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <BookOpen size={16} /> Where to look
              </div>
              <ul className="space-y-2 text-neutral-300">
                <li>Guide.txt and README.md contain schedule, problem statement, slides, and drive links.</li>
                <li>Contacts for help are listed in both files.</li>
              </ul>
            </div>
            <div className="border border-neutral-800 bg-[#050505] rounded-sm p-5 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <ExternalLink size={16} /> Code snippets
              </div>
              <p className="text-neutral-300">Progress through the Rust snippets in order to build fluency.</p>
              <Link href="https://tinyurl.com/CodeSnippetsBlock" className="inline-flex items-center gap-2 text-purple-300 hover:text-white text-sm font-semibold">
                Open snippet bundle
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Snippet roadmap */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-white">02</span>
            <h2 className="text-2xl font-bold tracking-tight">Rust snippet roadmap</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            {[{
              title: 'Setup and basics',
              icon: Terminal,
              items: [
                'Hello World (1_HelloWorld.rs): println! and formatting',
                'Variables & types (2_Variables.rs): immutability, mut, primitives',
                'Functions (3_Functions.rs): params, return types, multiple calls',
                'Conditionals (4_Conditionals.rs): if/else, expression returns'
              ]
            }, {
              title: 'Control flow and collections',
              icon: Layers,
              items: [
                'Loops (5_Loops.rs): for ranges, while, infinite + break, chars()',
                'Arrays & vectors (6_Arrays.rs): fixed vs growable, push/pop, indexing',
                'Strings (7_Strings.rs): format!, casing, slicing, contains, CSV split'
              ]
            }].map((col, idx) => (
              <div key={idx} className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 space-y-3">
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                  <col.icon size={16} /> {col.title}
                </div>
                <ul className="space-y-2 text-neutral-300">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm mt-6">
            {[{
              title: 'Data modeling',
              icon: ClipboardList,
              items: [
                'Structs & methods (8_Structs.rs): constructors, impl, derived values',
                'Enums & matching (9_Enums.rs): exhaustive match, nested data'
              ]
            }, {
              title: 'Reliability & safety',
              icon: Shield,
              items: [
                'Error basics (10_Error_Handling.rs): Option, Result, if let, unwrap_or',
                'Ownership & borrowing (11_Ownership.rs): moves, refs, slices, Copy'
              ]
            }].map((col, idx) => (
              <div key={idx} className="border border-neutral-800 bg-[#050505] rounded-sm p-5 space-y-3">
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                  <col.icon size={16} /> {col.title}
                </div>
                <ul className="space-y-2 text-neutral-300">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Deeper explanations */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-white">03</span>
            <h2 className="text-2xl font-bold tracking-tight">Concept spotlights</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            {[{
              title: 'Expressions everywhere',
              bullets: ['if blocks return values; branches must align types (4_Conditionals.rs)', 'Implicit returns are last expressions without semicolon (3_Functions.rs)']
            }, {
              title: 'Strings and slices',
              bullets: ['format! builds Strings without moving inputs', 'Slicing is byte based; examples use ASCII strings for safety (7_Strings.rs)']
            }, {
              title: 'Enums with intent',
              bullets: ['Success/Error variants carry typed data (9_Enums.rs)', 'Exhaustive match enforces coverage; extend matches when adding variants']
            }, {
              title: 'Ownership & borrowing',
              bullets: ['Moves invalidate sources; scalars are Copy (11_Ownership.rs)', 'Immutable vs mutable borrows; exclusive mut required', 'String slices borrow without allocation']
            }].map((card, idx) => (
              <div key={idx} className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 space-y-2">
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                  <Brain size={16} /> {card.title}
                </div>
                <ul className="space-y-2 text-neutral-300">
                  {card.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Practice guidance */}
        <motion.section className="mb-10" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-white">04</span>
            <h2 className="text-2xl font-bold tracking-tight">Practice plan</h2>
          </div>
          <div className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 text-sm text-neutral-300 space-y-3">
            <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
              <ListChecks size={16} /> How to work the snippets
            </div>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />Run each file via <span className="font-mono text-neutral-200">rustc your_file.rs && ./your_file</span> (Windows: <span className="font-mono text-neutral-200">.\\your_file.exe</span>) or drop into <span className="font-mono text-neutral-200">cargo new</span> sandboxes.</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />Tweak constants, add branches, extend enums to trigger compiler guidance.</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />Intentionally break ownership rules (double mutable borrows) to feel the diagnostics.</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />Stretch goals: add new Result error variants, add vector transformations, refactor to methods.</li>
            </ul>
            <p className="text-neutral-500 text-xs">Stay in sequence; each snippet builds toward Anchor readiness.</p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="flex justify-center" {...fadeIn}>
          <Link href="/d3-session-1">
            <button className="px-6 py-4 mr-4 text-neutral-500 text-sm font-bold uppercase tracking-wide hover:text-white transition-colors">
              Back
            </button>
          </Link>
          <Link href="/d3-session-3">
            <button className="group relative px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-3 rounded-sm">
              <span>Next: Anchor Contracts</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
