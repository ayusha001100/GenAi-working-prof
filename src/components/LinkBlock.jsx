import React from 'react';
import { ExternalLink } from 'lucide-react';

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
                margin: '1.5rem 0',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#555';
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
                fontFamily: '"Fira Code", "Consolas", monospace'
            }}>
                <span>INTERACTIVE VISUALIZATION</span>
                <ExternalLink size={14} />
            </div>

            {/* Content */}
            <div style={{
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: color,
                    flexShrink: 0
                }}></div>
                <div>
                    <div style={{
                        color: '#e0e0e0',
                        fontWeight: 600,
                        fontSize: '1rem',
                        marginBottom: '0.2rem'
                    }}>
                        {title}
                    </div>
                    <div style={{
                        color: '#666',
                        fontSize: '0.8rem',
                        fontFamily: '"Fira Code", monospace'
                    }}>
                        {url}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default LinkBlock;
