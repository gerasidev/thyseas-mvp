import { Github, Twitter, Disc } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '4rem 0', background: 'var(--color-surface)' }}>
            <div className="container grid-2" style={{ alignItems: 'start' }}>
                <div>
                    <a href="#" className="logo" style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>
                        $<span>THYSEAS</span>
                    </a>
                    <p>
                        The deep-tech stablecoin.<br />
                        No VC. No premine. Just hardware and code.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <a href="#" style={{ color: 'white' }}><Github /></a>
                        <a href="#" style={{ color: 'white' }}><Twitter /></a>
                        <a href="#" style={{ color: 'white' }}><Disc /></a>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Protocol</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)', lineHeight: '2' }}>
                            <li><a href="#" style={{ color: 'inherit' }}>Docs</a></li>
                            <li><a href="#" style={{ color: 'inherit' }}>Governance</a></li>
                            <li><a href="#" style={{ color: 'inherit' }}>Bug Bounty</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)', lineHeight: '2' }}>
                            <li><a href="#" style={{ color: 'inherit' }}>Terms</a></li>
                            <li><a href="#" style={{ color: 'inherit' }}>Privacy</a></li>
                            <li><a href="#" style={{ color: 'inherit' }}>Repo Partners</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '4rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                © 2025 $THYSEAS Protocol. All rights reserved. Built for the machine age.
            </div>
        </footer>
    );
}
