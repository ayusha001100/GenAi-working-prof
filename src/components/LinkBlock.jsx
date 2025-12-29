import React from 'react';
import { ExternalLink } from 'lucide-react';
import ninjaImg from '../assets/ninja.png';

const LinkBlock = ({ title, url, color = '#fff' }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'block',
                textDecoration: 'none',
                backgroundColor: '#1e1e1e',
                border: '1px solid #333',
                borderRadius: '8px',
                margin: '2.5rem 0', // Increased margin for mascot space
                position: 'relative',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-color)';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                backgroundColor: '#2d2d2d',
                borderBottom: '1px solid #333',
                color: '#aaa',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                fontFamily: '"Fira Code", "Consolas", monospace',
                borderRadius: '8px 8px 0 0'
            }}>
                <span>INTERACTIVE VISUALIZATION</span>
                <ExternalLink size={14} />
            </div>

            {/* Content */}
            <div style={{
                padding: window.innerWidth < 768 ? '1rem' : '1.2rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingRight: window.innerWidth < 768 ? '80px' : '120px'
            }}>
                <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: color,
                    flexShrink: 0,
                    boxShadow: `0 0 10px ${color}80`
                }}></div>
                <div style={{ flex: 1 }}>
                    <div style={{
                        color: '#e0e0e0',
                        fontWeight: 700,
                        fontSize: window.innerWidth < 768 ? '0.95rem' : '1.1rem',
                        marginBottom: '0.3rem',
                        lineHeight: '1.4'
                    }}>
                        {title}
                    </div>
                    <div style={{
                        color: '#666',
                        fontSize: '0.75rem',
                        fontFamily: '"Fira Code", monospace',
                        wordBreak: 'break-all',
                        opacity: 0.8,
                        display: window.innerWidth < 640 ? 'none' : 'block'
                    }}>
                        {url}
                    </div>
                </div>
            </div>

            {/* Ninja Mascot */}
            <img
                src={ninjaImg}
                alt="Ninja"
                style={{
                    position: 'absolute',
                    right: '25px',
                    bottom: '-25px',
                    height: '170px',
                    width: 'auto',
                    pointerEvents: 'none',
                    zIndex: 10,
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.5))',
                    transform: 'rotate(-5deg)',
                }}
            />
        </a>
    );
};

export default LinkBlock;
