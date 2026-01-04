'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, ArrowRight, CheckCircle2, FileText, Globe, HardDrive, Hash, Layers, Lock, Upload, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="px-3 py-1 bg-purple-900/20 border border-purple-800 text-purple-400 text-xs font-mono uppercase tracking-widest rounded-sm">
              Session 04.02
            </div>
            <div className="h-px bg-neutral-800 flex-1"></div>
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Decentralized Storage
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.95]">
            IPFS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              STORAGE
            </span>
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light border-l border-neutral-800 pl-6">
            IPFS connects machines with content-addressed files. Instead of fragile location URLs, everything is retrieved by its hash—perfect for keeping heavy assets off-chain while maintaining verifiable links from smart contracts.
          </p>
        </motion.div>

        {/* Section 01: The Blockchain Storage Problem */}
        <Section number="01" title="The Blockchain Storage Problem">
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Blockchains are optimized for consensus over small, critical data—not for streaming megabytes of media. Trying to store files directly leads to massive gas costs and node bloat.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <ProblemCard
              icon={AlertTriangle}
              title="Storage Costs"
              description="Every byte on-chain costs gas. A 1MB image can be ruinous on L1."
              color="purple"
            />
            <ProblemCard
              icon={HardDrive}
              title="Chain Bloat"
              description="Full nodes must store history forever; large files make running nodes painful."
              color="blue"
            />
            <ProblemCard
              icon={Zap}
              title="Inefficiency"
              description="Consensus systems aren’t file systems. Use the right tool for the job."
              color="cyan"
            />
          </div>

          <div className="p-6 bg-purple-900/20 border border-purple-800 rounded-sm">
            <p className="text-purple-100 text-center font-medium">
              💡 Keep only the file hash (CID) on-chain. Store the bytes in IPFS for verifiable, distributed retrieval.
            </p>
          </div>
        </Section>

        {/* Section 02: InterPlanetary File System */}
        <Section number="02" title="InterPlanetary File System">
          <p className="text-neutral-400 mb-8 leading-relaxed">
            IPFS is a P2P network for content-addressed files. Peers fetch data by CID; any node holding the content can serve it, and cryptographic hashes guarantee integrity.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 text-white">Key Principles</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong className="text-white">Content-addressed</strong> (hashes, not locations)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong className="text-white">Peer-to-peer</strong> distribution with no central server</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong className="text-white">Cryptographic verification</strong> of every block</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong className="text-white">Deduplication</strong>—same content, same CID</span>
              </li>
            </ul>
          </div>

          <IPFSNetworkVisual />

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6">
              <h4 className="text-sm font-bold text-neutral-500 uppercase mb-4">HTTP (Traditional Web)</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>• Location-based: <span className="text-purple-300">https://example.com/cat.jpg</span></li>
                <li>• Centralized servers</li>
                <li>• Single point of failure</li>
                <li>• Link rot when hosts disappear</li>
              </ul>
            </div>
            <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6">
              <h4 className="text-sm font-bold text-purple-400 uppercase mb-4">IPFS (Distributed Web)</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>• Content-based: <span className="text-purple-300">ipfs://QmX7Kd...</span></li>
                <li>• Distributed across peers</li>
                <li>• No single point of failure</li>
                <li>• Content stays reachable when pinned</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Section 03: Content Addressing */}
        <Section number="03" title="Content Addressing">
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Adding a file to IPFS turns it into a content-addressed object through chunking, hashing, DAG assembly, and CID generation.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <ProcessCard number="1" title="Chunking" description="Split into 256KB blocks" />
            <ProcessCard number="2" title="Hashing" description="Hash every block (SHA-256)" />
            <ProcessCard number="3" title="DAG" description="Blocks linked in a Merkle DAG" />
            <ProcessCard number="4" title="CID" description="Root hash → unique identifier" />
          </div>

          <CIDVisual />

          <div className="mt-8 p-6 bg-cyan-900/20 border border-cyan-800 rounded-sm">
            <p className="text-cyan-100 text-center">
              <strong>Deduplication:</strong> same content → same CID. Storage is saved across the network automatically.
            </p>
          </div>
        </Section>

        {/* Section 04: Content Identifiers (CIDs) */}
        <Section number="04" title="Content Identifiers (CIDs)">
          <p className="text-neutral-400 mb-8 leading-relaxed">
            A CID is a self-describing identifier for any IPFS object. It carries the hash, codec, and version info needed to verify data.
          </p>

          <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6 mb-8">
            <div className="text-xs font-mono text-purple-500 uppercase tracking-widest mb-4">CID Anatomy</div>
            <div className="font-mono text-2xl text-white break-all mb-6">
              QmX7Kd9FzQ3pR2vN8wH5tJ6mL4sP9xY2aB1cD3eF4gH5i
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-neutral-500 mb-1">Version</div>
                <div className="text-sm text-purple-300">Qm... (CIDv0, Base58)</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Hash Function</div>
                <div className="text-sm text-purple-300">SHA-256</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Content Hash</div>
                <div className="text-sm text-purple-300">X7Kd9Fz...</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PropertyCard icon={Lock} title="Immutable" description="Same bytes, same CID. Change a byte and the CID changes." />
            <PropertyCard icon={CheckCircle2} title="Verifiable" description="Anyone can hash the content to confirm authenticity." />
            <PropertyCard icon={FileText} title="Self-Describing" description="CID encodes hash function and version metadata." />
            <PropertyCard icon={Globe} title="Universal" description="Works across IPFS implementations and versions." />
          </div>
        </Section>

        {/* Section 05: Pinning & Persistence */}
        <Section number="05" title="Pinning & Persistence">
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Garbage collection will remove unpinned data. Pinning keeps content alive by persisting it on nodes you control or via pinning services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6">
              <h4 className="text-sm font-bold text-red-400 uppercase mb-4">Without Pinning</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>✗ Files may disappear</li>
                <li>✗ Unreachable when last peer goes offline</li>
                <li>✗ No durability guarantees</li>
              </ul>
            </div>
            <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6">
              <h4 className="text-sm font-bold text-green-400 uppercase mb-4">With Pinning</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>✓ Content persists as long as pinned</li>
                <li>✓ Pinning services add reliability</li>
                <li>✓ Multiple pins = redundancy</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceCard title="Pinata" description="Managed pinning + APIs" />
            <ServiceCard title="Web3.Storage" description="Protocol Labs managed pinning" />
            <ServiceCard title="Infura IPFS" description="Enterprise-grade gateway" />
            <ServiceCard title="Self-Hosted" description="Run your own node" />
          </div>
        </Section>

        {/* Section 06: Using IPFS */}
        <Section number="06" title="Using IPFS">
          <TerminalBlock title="Upload to IPFS" code={`import { create } from 'ipfs-http-client'

// Connect to IPFS node
const ipfs = create({ 
  host: 'ipfs.infura.io', 
  port: 5001, 
  protocol: 'https' 
})

// Upload file
async function uploadFile(file) {
  const added = await ipfs.add(file)
  console.log('CID:', added.path)
  return added.path
}`} />

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <AccessCard
              title="HTTP Gateway"
              url="https://ipfs.io/ipfs/QmX7Kd..."
              description="Fetch via public gateways"
            />
            <AccessCard
              title="IPFS Desktop"
              url="ipfs://QmX7Kd..."
              description="Use local node + native protocol"
            />
            <AccessCard
              title="Programmatic"
              url="ipfs.cat(CID)"
              description="Fetch content via SDKs"
            />
          </div>
        </Section>

        {/* Key Takeaways */}
        <Section number="07" title="Key Takeaways">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Blockchains are not for file storage',
              'IPFS uses content addressing',
              'CIDs are cryptographic hashes of content',
              'Pinning keeps content alive',
              'Files distribute across peers',
              'Same content → same CID (dedupe)'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-[#050505] border border-neutral-800 rounded-sm">
                <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-16">
          <Link href="/d4-session-1">
            <button className="px-6 py-4 text-neutral-500 hover:text-white transition-colors">
              ← Back
            </button>
          </Link>
          <Link href="/d4-session-3">
            <button className="group px-8 py-4 bg-white text-black font-bold hover:bg-neutral-200 transition-colors flex items-center gap-3 rounded-sm">
              <span>Next: Ethereum + IPFS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

// Components

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-24 group"
    >
      <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
        <span className="text-4xl font-mono font-bold text-neutral-800 group-hover:text-purple-900 transition-colors">
          {number}
        </span>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}

function ProblemCard({ icon: Icon, title, description, color }: any) {
  const colorClasses = {
    purple: 'text-purple-400 border-purple-800 bg-purple-900/20',
    blue: 'text-blue-400 border-blue-800 bg-blue-900/20',
    cyan: 'text-cyan-400 border-cyan-800 bg-cyan-900/20'
  }

  return (
    <div className={`p-6 border rounded-sm ${colorClasses[color as keyof typeof colorClasses]}`}>
      <Icon className="mb-4" size={32} />
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-sm text-neutral-300">{description}</p>
    </div>
  )
}

function ProcessCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-[#050505] border border-neutral-800 rounded-sm p-4">
      <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500 flex items-center justify-center mb-3 font-mono font-bold text-purple-400">
        {number}
      </div>
      <h4 className="font-bold text-sm mb-2">{title}</h4>
      <p className="text-xs text-neutral-400">{description}</p>
    </div>
  )
}

function PropertyCard({ icon: Icon, title, description }: any) {
  return (
    <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6 hover:border-purple-800 transition-colors">
      <Icon className="text-purple-400 mb-3" size={24} />
      <h4 className="font-bold text-sm mb-2">{title}</h4>
      <p className="text-xs text-neutral-400">{description}</p>
    </div>
  )
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#050505] border border-neutral-800 rounded-sm p-4 hover:border-purple-800 transition-colors">
      <h4 className="font-bold text-sm mb-2 text-purple-300">{title}</h4>
      <p className="text-xs text-neutral-400">{description}</p>
    </div>
  )
}

function AccessCard({ title, url, description }: { title: string; url: string; description: string }) {
  return (
    <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6">
      <h4 className="font-bold mb-2">{title}</h4>
      <code className="text-xs text-purple-300 block mb-3">{url}</code>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  )
}

function TerminalBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="rounded-sm overflow-hidden border border-neutral-800 bg-[#080808] font-mono text-sm my-6 shadow-2xl">
      <div className="flex items-center justify-between px-3 py-2 bg-neutral-900 border-b border-neutral-800">
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest">{title}</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-neutral-300">{code}</pre>
      </div>
    </div>
  )
}

function IPFSNetworkVisual() {
  const [activeNode, setActiveNode] = useState<number | null>(null)

  const nodes = [
    { x: 50, y: 30, label: 'Node A', files: ['cat.jpg', 'data.json'] },
    { x: 20, y: 60, label: 'Node B', files: ['video.mp4'] },
    { x: 80, y: 60, label: 'Node C', files: ['cat.jpg', 'doc.pdf'] },
    { x: 50, y: 90, label: 'Node D', files: ['data.json'] },
  ]

  return (
    <div className="my-8 bg-[#050505] border border-neutral-800 rounded-sm relative group hover:border-purple-900 transition-colors">
      <div className="absolute top-0 left-0 px-2 py-1 bg-neutral-900 border-r border-b border-neutral-800 z-10">
        <span className="text-[10px] font-mono text-purple-500 uppercase tracking-widest">IPFS-NET-01</span>
      </div>

      <div className="p-8 relative w-full h-80">
        <svg className="absolute inset-0 w-full h-full">
          {nodes.map((node, i) =>
            nodes.slice(i + 1).map((otherNode, j) => (
              <line
                key={`${i}-${j}`}
                x1={`${node.x}%`} y1={`${node.y}%`}
                x2={`${otherNode.x}%`} y2={`${otherNode.y}%`}
                stroke="#404040" strokeWidth="1" strokeDasharray="4"
              />
            ))
          )}
        </svg>

        {nodes.map((node, i) => (
          <button
            key={i}
            onClick={() => setActiveNode(activeNode === i ? null : i)}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            className={`absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 flex flex-col items-center justify-center transition-colors ${
              activeNode === i ? 'bg-purple-500/20 border-purple-500' : 'bg-neutral-900 border-neutral-700 hover:border-purple-500'
            }`}
          >
            <Globe size={20} />
            <span className="text-[8px] font-mono mt-1">{node.label}</span>
          </button>
        ))}

        {activeNode !== null && (
          <div className="absolute bottom-4 left-4 right-4 bg-neutral-900 border border-purple-800/50 rounded-sm p-4">
            <div className="text-xs font-mono text-purple-300 mb-2">
              {nodes[activeNode].label} - Hosted Files:
            </div>
            <div className="flex flex-wrap gap-2">
              {nodes[activeNode].files.map((file, i) => (
                <span key={i} className="text-[10px] bg-neutral-800 px-2 py-1 rounded text-neutral-300">
                  {file}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-2 border-t border-neutral-800 bg-neutral-900/30">
        <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider text-center">
          FIG IPFS-NET-01: IPFS Network Topology
        </p>
      </div>
    </div>
  )
}

function CIDVisual() {
  const [step, setStep] = useState(0)

  const steps = [
    { label: 'File Upload', icon: Upload, desc: 'cat.jpg uploaded to IPFS' },
    { label: 'Chunking', icon: Layers, desc: 'File split into blocks' },
    { label: 'Hashing', icon: Hash, desc: 'SHA-256 hash each block' },
    { label: 'CID Generated', icon: CheckCircle2, desc: 'QmX... unique identifier' },
  ]

  return (
    <div className="my-8 bg-[#050505] border border-neutral-800 rounded-sm p-6">
      <div className="flex justify-between items-center mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-800" />
        <div
          className="absolute top-1/2 left-0 h-px bg-purple-500 transition-all duration-500"
          style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((s, i) => {
          const StepIcon = s.icon
          return (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`relative z-10 flex flex-col items-center gap-2 transition-opacity ${
                i <= step ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
                  i <= step ? 'bg-purple-500/20 border-purple-500' : 'bg-neutral-900 border-neutral-700'
                }`}
              >
                <StepIcon size={16} />
              </div>
              <span className="text-[10px] font-mono">{s.label}</span>
            </button>
          )
        })}
      </div>

      <div className="text-center p-4 bg-neutral-900/30 border border-neutral-800 rounded-sm">
        <p className="text-sm text-neutral-400">{steps[step].desc}</p>
        {step === 3 && (
          <div className="mt-3 p-2 bg-purple-900/20 border border-purple-800/50 rounded font-mono text-xs text-purple-200">
            QmX7Kd9FzQ3pR2vN8wH5tJ6mL4sP9xY2aB1cD3eF4gH5i
          </div>
        )}
      </div>
    </div>
  )
}
