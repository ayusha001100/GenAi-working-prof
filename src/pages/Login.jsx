import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, Mail, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulate network delay for effect
        setTimeout(() => {
            if (password === 'Iamsmart') {
                login();
            } else {
                setError('Incorrect password. Hint: You are smart.');
                setLoading(false);
            }
        }, 800);
    };

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Abstract Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(120, 119, 198, 0.3) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    margin: 'auto',
                    width: '100%',
                    maxWidth: '450px',
                    zIndex: 10,
                    padding: '2rem'
                }}
            >
                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    padding: '3rem 2rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            style={{
                                display: 'inline-flex',
                                padding: '12px',
                                borderRadius: '16px',
                                background: 'rgba(255,255,255,0.05)',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <Sparkles size={32} color="#fff" />
                        </motion.div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Welcome Back</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Enter the gateway to AI mastery.</p>
                    </div>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Mail size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="email"
                                required
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '16px 16px 16px 48px',
                                    borderRadius: '12px',
                                    background: 'rgba(0,0,0,0.2)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <Lock size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="password"
                                required
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '16px 16px 16px 48px',
                                    borderRadius: '12px',
                                    background: 'rgba(0,0,0,0.2)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}
                                >
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={loading}
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '16px',
                                borderRadius: '12px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #fff 0%, #e4e4e7 100%)',
                                color: '#000',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: loading ? 'wait' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                marginTop: '1rem'
                            }}
                        >
                            {loading ? 'Accessing...' : (
                                <>
                                    Enter Workshop <ArrowRight size={20} />
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
