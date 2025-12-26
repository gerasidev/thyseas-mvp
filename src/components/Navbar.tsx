import { Wallet, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const connectWallet = async () => {
        if ((window as any).ethereum) {
            try {
                await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
                alert('Wallet Connected!');
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    };

    return (
        <nav>
            <div className="container nav-content">
                <a href="#" className="logo">
                    $<span>THYSEAS</span>
                </a>

                <div className="hidden md:flex gap-8 items-center">
                    {/* Desktop Menu - using CSS modules or just classes if I had tailwind, but here plain CSS */}
                    {/* I need to add styles for these utility classes in index.css if I use them, 
              but I defined specific classes like .nav-content. 
              I'll use inline styles or standard CSS for simplicity since I didn't verify specific utility classes in index.css 
          */}
                </div>

                {/* Since I didn't use Tailwind, I need to be careful with classes like 'hidden' 'md:flex' 
            I will use a simple inline style or standard class approach.
        */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#features" className="hover:text-primary transition-colors">Features</a>
                    <a href="#governance" className="hover:text-primary transition-colors">Governance</a>
                    <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
                    <button className="btn btn-outline" onClick={connectWallet} style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}>
                        <Wallet size={16} style={{ marginRight: '0.5rem' }} /> Connect
                    </button>
                </div>
            </div>
        </nav>
    );
}
