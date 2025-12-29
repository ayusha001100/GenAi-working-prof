
import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import {
    User, Mail, Trophy, Target,
    CheckCircle2, XCircle, ArrowLeft,
    TrendingUp, Calendar, Hash, Award
} from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import { day1Content, day2Content } from '../data/content.jsx';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function Profile() {
    const { userData } = useAuth();
    const { theme } = useTheme();
    const navigate = useNavigate();

    const stats = userData?.stats || { totalPoints: 0, totalCorrect: 0, totalIncorrect: 0 };
    const completedCount = userData?.progress?.completedSections?.length || 0;
    const totalModules = day1Content.length + day2Content.length;
    const progressPercent = Math.round((completedCount / totalModules) * 100);

    // Dynamic "Member Since"
    const creationDate = userData?.createdAt ? new Date(userData.createdAt) : new Date();
    const memberSinceYear = creationDate.getFullYear();

    // Chart Data - Performance distribution
    // We'll show a real comparison of their current score vs potential
    const chartData = [
        { name: 'Goal', value: totalModules },
        { name: 'Completed', value: completedCount },
        { name: 'Correct', value: stats.totalCorrect },
        { name: 'Incorrect', value: stats.totalIncorrect },
        { name: 'Points', value: Math.max(0, stats.totalPoints) },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            padding: '2rem',
            fontFamily: 'var(--font-family)'
        }}>
            {/* Nav Header */}
            <header style={{
                maxWidth: '1100px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '4rem'
            }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        background: 'rgba(var(--accent-rgb), 0.1)',
                        border: '1px solid rgba(var(--accent-rgb), 0.2)',
                        color: 'var(--accent-color)',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                    }}
                >
                    <ArrowLeft size={18} /> Back to Learning
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <img src={theme === 'dark' ? '/logo-dark.png' : '/logo.png'} alt="Logo" style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '0.9', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.04em' }}>
                            <span>Lets</span>
                            <span>Upgrade</span>
                        </div>
                    </div>
                    <ThemeToggle />
                </div>
            </header>

            <motion.main
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ maxWidth: '1100px', margin: '0 auto' }}
            >
                {/* Hero Profile Block */}
                <motion.div variants={itemVariants} style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: '40px',
                    padding: '3.5rem',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '4rem',
                    marginBottom: '2.5rem',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-5%',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        zIndex: 0
                    }} />

                    <div style={{
                        width: '140px',
                        height: '140px',
                        borderRadius: '48px',
                        background: 'linear-gradient(135deg, var(--accent-color) 0%, #a855f7 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3.5rem',
                        fontWeight: 900,
                        color: '#fff',
                        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)',
                        zIndex: 1
                    }}>
                        {userData?.name ? userData.name[0].toUpperCase() : 'U'}
                    </div>

                    <div style={{ zIndex: 1, flex: 1 }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.04em' }}>{userData?.name || 'Student'}</h1>
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <div style={{ padding: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><Mail size={16} /></div>
                                <span style={{ fontWeight: 500 }}>{userData?.email}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <div style={{ padding: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><Calendar size={16} /></div>
                                <span style={{ fontWeight: 500 }}>Member since {memberSinceYear}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ zIndex: 1, textAlign: 'right' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.6rem', letterSpacing: '0.1em' }}>ACCESS LEVEL</div>
                        <div style={{
                            padding: '8px 20px',
                            background: userData?.role === 'admin' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(var(--accent-rgb), 0.1)',
                            color: userData?.role === 'admin' ? '#f59e0b' : 'var(--accent-color)',
                            borderRadius: '16px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            fontSize: '0.85rem',
                            border: `1px solid ${userData?.role === 'admin' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(var(--accent-rgb), 0.2)'}`,
                            letterSpacing: '0.05em'
                        }}>
                            {userData?.role || 'user'}
                        </div>
                    </div>
                </motion.div>

                {/* Score Dashboard */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
                    <motion.div variants={itemVariants}>
                        <ScoreCard
                            icon={<Trophy size={24} color="#f59e0b" />}
                            label="Overall Score"
                            value={stats.totalPoints}
                            sub="Net Performance"
                            color="#f59e0b"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <ScoreCard
                            icon={<CheckCircle2 size={24} color="#10b981" />}
                            label="Correct Answers"
                            value={stats.totalCorrect}
                            sub="Direct Knowledge Hits"
                            color="#10b981"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <ScoreCard
                            icon={<XCircle size={24} color="#ef4444" />}
                            label="Learning Gaps"
                            value={stats.totalIncorrect}
                            sub="Growth Opportunities"
                            color="#ef4444"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <ScoreCard
                            icon={<Target size={24} color="var(--accent-color)" />}
                            label="Course Progress"
                            value={`${progressPercent}%`}
                            sub={`${completedCount} / ${totalModules} Modules`}
                            color="var(--accent-color)"
                        />
                    </motion.div>
                </div>

                {/* Detailed Analytics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2rem' }}>

                    {/* Real Performance Chart */}
                    <motion.div variants={itemVariants} style={{
                        background: 'var(--bg-secondary)',
                        borderRadius: '32px',
                        padding: '2.5rem',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Performance Distribution</h3>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>SNAPSHOT</div>
                        </div>

                        <div style={{ height: '300px', width: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: 'var(--text-secondary)', fontSize: 12, fontWeight: 600 }}
                                        dy={10}
                                    />
                                    <YAxis hide />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                        contentStyle={{
                                            background: 'var(--bg-primary)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '12px',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                        }}
                                        itemStyle={{ fontWeight: 700 }}
                                    />
                                    <Bar dataKey="value" radius={[12, 12, 12, 12]} barSize={45}>
                                        {chartData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={
                                                    entry.name === 'Incorrect' ? '#ef4444' :
                                                        entry.name === 'Correct' ? '#10b981' :
                                                            entry.name === 'Goal' ? 'rgba(var(--accent-rgb), 0.15)' :
                                                                'var(--accent-color)'
                                                }
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Achievements Sidebar */}
                    <motion.div variants={itemVariants} style={{
                        background: 'var(--bg-secondary)',
                        borderRadius: '32px',
                        padding: '2.5rem',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Award size={24} color="var(--accent-color)" />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Mastery Badges</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <BadgeItem
                                title="LMS Pioneer"
                                desc="First step into the AI journey"
                                icon="🚀"
                                unlocked={true}
                            />
                            <BadgeItem
                                title="Fast Learner"
                                desc="Completed 5+ modules"
                                icon="⚡"
                                unlocked={completedCount >= 5}
                            />
                            <BadgeItem
                                title="Prompt Master"
                                desc="Achieved 50+ points"
                                icon="🪄"
                                unlocked={stats.totalPoints >= 50}
                            />
                            <BadgeItem
                                title="GenAI Wizard"
                                desc="Course 100% completed"
                                icon="🎓"
                                unlocked={progressPercent === 100}
                            />
                        </div>

                        <div style={{
                            marginTop: 'auto',
                            padding: '1.5rem',
                            background: 'rgba(var(--accent-rgb), 0.05)',
                            borderRadius: '24px',
                            border: '1px dashed rgba(var(--accent-rgb), 0.3)',
                            textAlign: 'center'
                        }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                Solve more quizzes to unlock **12 specialized industry badges** and certifications.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.main>
        </div>
    );
}

function ScoreCard({ icon, label, value, sub, color }) {
    return (
        <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: '32px',
            padding: '2rem',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '80px',
                height: '80px',
                background: color,
                opacity: 0.05,
                filter: 'blur(30px)',
                borderRadius: '50%'
            }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ padding: '10px', background: `${color}15`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {icon}
                </div>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '0.02em' }}>{label}</span>
            </div>

            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {value}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                <TrendingUp size={14} color="#10b981" />
                <span>{sub}</span>
            </div>
        </div>
    );
}

function BadgeItem({ title, desc, icon, unlocked }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '1rem',
            background: unlocked ? 'rgba(255,255,255,0.03)' : 'transparent',
            borderRadius: '20px',
            border: unlocked ? '1px solid var(--border-color)' : '1px solid transparent',
            opacity: unlocked ? 1 : 0.3,
            transition: 'all 0.3s ease',
            filter: unlocked ? 'none' : 'grayscale(1)'
        }}>
            <div style={{
                width: '56px',
                height: '56px',
                background: 'var(--bg-primary)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                border: '1px solid var(--border-color)',
                boxShadow: unlocked ? '0 10px 20px rgba(0,0,0,0.2)' : 'none'
            }}>
                {icon}
            </div>
            <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: unlocked ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{desc}</div>
            </div>
        </div>
    );
}
