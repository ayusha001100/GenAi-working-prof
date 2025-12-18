import React from 'react';

export default function Sidebar({ topics, activeId }) {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav style={{
            width: 'var(--sidebar-width)',
            height: 'calc(100vh - 60px)',
            position: 'sticky',
            top: '60px',
            overflowY: 'auto',
            padding: '2rem 1rem',
            borderRight: '1px solid var(--border-color)',
            background: 'var(--bg-primary)'
        }}>
            <ul style={{ listStyle: 'none' }}>
                <li style={{
                    marginBottom: '1.5rem',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-secondary)'
                }}>
                    Topics
                </li>
                {topics.map(topic => (
                    <li key={topic.id} style={{ marginBottom: '0.8rem' }}>
                        <button
                            onClick={() => scrollToSection(topic.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'left',
                                width: '100%',
                                padding: '0.5rem',
                                fontSize: '0.95rem',
                                color: activeId === topic.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                                fontWeight: activeId === topic.id ? 600 : 400,
                                borderLeft: activeId === topic.id ? '2px solid var(--text-primary)' : '2px solid transparent',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            {topic.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
