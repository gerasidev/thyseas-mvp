import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function Hero() {
    return (
        <section className="hero container grid-2">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-gradient" style={{ marginBottom: '1rem', display: 'inline-block', borderBottom: '1px solid var(--color-primary)' }}>
                    BTC-Pegged Stablecoin
                </h3>
                <h1>
                    Fund the <br />
                    <span className="text-gradient">Machine Age</span>
                </h1>
                <p>
                    $THYSEAS is the first crypto bank designed for deep-tech hardware startups.
                    Get 10–25× leverage to fund machines that move atoms—not real estate.
                </p>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <a href="#" className="btn">
                        Mint $THYSEAS <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </a>
                    <a href="#" className="btn btn-outline">
                        <FileText size={20} style={{ marginRight: '0.5rem' }} /> Whitepaper
                    </a>
                </div>

                <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                    <div>
                        <h4 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>1:1</h4>
                        <span style={{ color: 'var(--color-text-muted)' }}>BTC Peg</span>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>25x</h4>
                        <span style={{ color: 'var(--color-text-muted)' }}>Max Leverage</span>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>0%</h4>
                        <span style={{ color: 'var(--color-text-muted)' }}>Real Estate</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ position: 'relative' }}
            >
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
                    zIndex: -1
                }} />
                <img
                    src={heroImg}
                    alt="Cyberpunk Robot Hand"
                    style={{
                        width: '100%',
                        borderRadius: '20px',
                        border: '1px solid var(--color-primary)',
                        boxShadow: '0 0 30px rgba(0,240,255,0.2)',
                        animation: 'float 6s ease-in-out infinite'
                    }}
                />
            </motion.div>
        </section>
    );
}
