import { motion } from 'framer-motion';

const quarters = [
    { q: "Q1 2026", title: "Testnet Launch", items: ["5 Committed Pilot Teams", "Smart Contract Audits", "Community Staking Trials"] },
    { q: "Q2 2026", title: "Mainnet Genesis", items: ["$THYSEAS Token Generation", "First Lending Pools Live", "Initial Hardware Tokenization"] },
    { q: "Q3 2026", title: "Expansion", items: ["Repo Partner Integration", "Open Applications", "Cross-chain Bridges"] },
    { q: "Q4 2026", title: "Decentralization", items: ["Governance DAO Live", "Treasury Handover", "Full Protocol Autonomy"] }
];

export default function Roadmap() {
    return (
        <section id="roadmap" className="container" style={{ position: 'relative' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>
                Mission <span className="text-gradient">Timeline</span>
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'var(--color-primary-glow)'
                }} className="hidden md:block"></div>

                {quarters.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="glass-card"
                        style={{ marginBottom: '2rem', marginLeft: '3rem', position: 'relative' }}
                    >
                        {/* Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '-3.45rem',
                            top: '2rem',
                            width: '1rem',
                            height: '1rem',
                            background: 'var(--color-primary)',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px var(--color-primary)'
                        }} className="hidden md:block"></div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{item.q}</span>
                            <h3 style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)' }}>
                                {item.items.map((sub, j) => (
                                    <li key={j} style={{ marginBottom: '0.2rem' }}>{sub}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
