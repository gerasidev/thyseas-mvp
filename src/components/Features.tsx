import { motion } from 'framer-motion';
import { Bitcoin, Cpu, ShieldCheck, Zap } from 'lucide-react';
import chipImg from '../assets/chip.png';

const features = [
    {
        icon: <Bitcoin size={40} color="var(--color-primary)" />,
        title: "$THYSEAS Stablecoin",
        desc: "ERC-20 token pegged 1:1 to BTC value. Mint by locking BTC via tBTC or native layers. Stability via open arbitrage."
    },
    {
        icon: <Zap size={40} color="var(--color-primary)" />,
        title: "Deep-Tech Lending",
        desc: "Get up to 25x leverage. 6-24 month terms with 8-18% APY. Designed for hardware founders who need to move fast."
    },
    {
        icon: <ShieldCheck size={40} color="var(--color-primary)" />,
        title: "Community Audited",
        desc: "Loans are verified by stakers and community auditors. Accurate audits are rewarded, false claims smashed."
    }
];

export default function Features() {
    return (
        <section id="features" className="container">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    Protocol <span className="text-gradient">Architecture</span>
                </h2>

                <div className="grid-3">
                    {features.map((f, i) => (
                        <div key={i} className="glass-card hover:transform hover:-translate-y-2 transition-transform duration-300">
                            <div style={{ marginBottom: '1.5rem' }}>{f.icon}</div>
                            <h3 style={{ marginBottom: '1rem' }}>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid-2" style={{ marginTop: '8rem' }}>
                    <div>
                        <img
                            src={chipImg}
                            alt="AI Chip Wafer"
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                                border: '1px solid var(--color-secondary)',
                                boxShadow: '0 0 40px rgba(112, 0, 255, 0.2)'
                            }}
                        />
                    </div>
                    <div>
                        <h2>Hardware as <span className="text-gradient">Collateral</span></h2>
                        <p>
                            We tokenize physical assets into ERC-721 NFTs with rich metadata.
                            Your robots, GPUs, bioreactors, and lab equipment act as the bedrock for your liquidity.
                        </p>
                        <ul style={{ listStyle: 'none', marginTop: '2rem' }}>
                            {[
                                'Real-World Asset (RWA) Tokenization',
                                'Legal Seizure & Repo Partner Network',
                                'On-chain Dutch Auctions for Liquidations',
                                'No Real Estate. Ever.'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                    <Cpu size={20} color="var(--color-primary)" style={{ marginRight: '10px' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
