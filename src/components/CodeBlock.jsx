import React from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ code, language = 'EXAMPLE' }) => {
    const [copied, setCopied] = React.useState(false);
    const lines = code.trim().split('\n');

    const handleCopy = () => {
        navigator.clipboard.writeText(code.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            backgroundColor: '#1e1e1e',
            border: '1px solid #333',
            borderRadius: '8px',
            margin: '1.5rem 0',
            overflow: 'hidden',
            fontFamily: '"Fira Code", "Consolas", monospace',
            fontSize: '0.85rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            maxWidth: '100%'
        }}>
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
                letterSpacing: '0.05em'
            }}>
                <span>{language}</span>
                <button
                    onClick={handleCopy}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#aaa',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        transition: 'background 0.2s'
                    }}
                >
                    {copied ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
                    {copied ? 'Copied' : ''}
                </button>
            </div>

            {/* Code Body */}
            <div style={{
                padding: '1rem',
                overflowX: 'auto',
                display: 'flex',
                alignItems: 'flex-start',
                color: '#e0e0e0',
                lineHeight: '1.6'
            }}>
                {/* Line Numbers */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingRight: '1rem',
                    borderRight: '1px solid #444',
                    marginRight: '1rem',
                    textAlign: 'right',
                    color: '#555',
                    userSelect: 'none',
                    minWidth: '25px',
                    fontSize: '0.8rem'
                }}>
                    {lines.map((_, i) => (
                        <span key={i}>{i + 1}</span>
                    ))}
                </div>

                {/* Content */}
                <div style={{
                    flex: 1,
                    fontFamily: 'inherit',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                }}>
                    {lines.map((line, i) => (
                        <div key={i} style={{ minHeight: '1.6em' }}>
                            {/* Simple highlighting: Strings in green, Keys in Blue */}
                            {line.split(/(".*?"|'.*?')/).map((part, index) => {
                                if (part.startsWith('"') || part.startsWith("'")) {
                                    return <span key={index} style={{ color: '#a5d6ff' }}>{part}</span>;
                                }
                                return <span key={index}>{part}</span>;
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CodeBlock;
