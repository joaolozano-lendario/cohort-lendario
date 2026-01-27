'use client';

import React, { useState, useMemo } from 'react';
import styles from './CohortCalculator.module.css';

const agents = [
    { id: 'dev', name: '@dev', title: 'Desenvolvedor Full Stack', economy: 14976 },
    { id: 'devops', name: '@devops', title: 'DevOps Engineer', economy: 8624 },
    { id: 'architect', name: '@architect', title: 'Arquiteto de Software', economy: 18432 },
    { id: 'qa', name: '@qa', title: 'QA Engineer', economy: 13272 },
    { id: 'pm', name: '@pm', title: 'Product Manager', economy: 15568 },
    { id: 'po', name: '@po', title: 'Product Owner', economy: 12144 },
    { id: 'ux', name: '@ux', title: 'UX Designer', economy: 7812 },
    { id: 'data', name: '@data-eng', title: 'Data Engineer', economy: 13440 },
    { id: 'analyst', name: '@analyst', title: 'Business Analyst', economy: 4896 },
];

export default function CohortCalculator() {
    const [selectedAgents, setSelectedAgents] = useState<string[]>(agents.map(a => a.id));
    const [isStudent, setIsStudent] = useState(true);

    const investment = isStudent ? 8000 : 12000;

    const calculations = useMemo(() => {
        const monthlyEconomy = agents
            .filter(a => selectedAgents.includes(a.id))
            .reduce((sum, a) => sum + a.economy, 0);

        const dailyEconomy = monthlyEconomy / 30;
        const yearlyEconomy = monthlyEconomy * 12;
        const paybackDays = dailyEconomy > 0 ? investment / dailyEconomy : 0;
        const roi = yearlyEconomy > 0 ? ((yearlyEconomy - investment) / investment) * 100 : 0;
        const netProfit = yearlyEconomy - investment;

        return {
            monthlyEconomy,
            dailyEconomy,
            yearlyEconomy,
            paybackDays,
            roi,
            netProfit
        };
    }, [selectedAgents, investment]);

    const toggleAgent = (id: string) => {
        setSelectedAgents(prev =>
            prev.includes(id)
                ? prev.filter(a => a !== id)
                : [...prev, id]
        );
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <section className={styles.section} id="calculadora">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Calculadora de ROI</span>
                    <h2 className={styles.title}>
                        Calcule Sua <span className={styles.titleHighlight}>Economia Real</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Selecione os agentes que você precisa e veja o impacto no seu negócio
                    </p>
                </div>

                <div className={styles.calculatorGrid}>
                    {/* Left: Agent Selection */}
                    <div className={styles.selectionPanel}>
                        <h3 className={styles.panelTitle}>Selecione os Agentes</h3>
                        <div className={styles.agentList}>
                            {agents.map(agent => (
                                <label
                                    key={agent.id}
                                    className={`${styles.agentItem} ${selectedAgents.includes(agent.id) ? styles.selected : ''}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedAgents.includes(agent.id)}
                                        onChange={() => toggleAgent(agent.id)}
                                        className={styles.checkbox}
                                    />
                                    <div className={styles.agentInfo}>
                                        <span className={styles.agentName}>{agent.name}</span>
                                        <span className={styles.agentTitle}>{agent.title}</span>
                                    </div>
                                    <span className={styles.agentEconomy}>
                                        {formatCurrency(agent.economy)}/mês
                                    </span>
                                </label>
                            ))}
                        </div>

                        <div className={styles.profileSelector}>
                            <h4 className={styles.profileTitle}>Seu Perfil</h4>
                            <div className={styles.profileOptions}>
                                <label className={`${styles.profileOption} ${isStudent ? styles.active : ''}`}>
                                    <input
                                        type="radio"
                                        checked={isStudent}
                                        onChange={() => setIsStudent(true)}
                                    />
                                    <span>Aluno Academia (R$ 8.000)</span>
                                </label>
                                <label className={`${styles.profileOption} ${!isStudent ? styles.active : ''}`}>
                                    <input
                                        type="radio"
                                        checked={!isStudent}
                                        onChange={() => setIsStudent(false)}
                                    />
                                    <span>Não-aluno (R$ 12.000)</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Right: Results */}
                    <div className={styles.resultsPanel}>
                        <div className={styles.resultCard}>
                            <div className={styles.resultIcon}>
                                <i className="fi fi-rr-piggy-bank"></i>
                            </div>
                            <div className={styles.resultContent}>
                                <span className={styles.resultLabel}>Economia Mensal</span>
                                <span className={styles.resultValue}>{formatCurrency(calculations.monthlyEconomy)}</span>
                            </div>
                        </div>

                        <div className={styles.resultCard}>
                            <div className={styles.resultIcon}>
                                <i className="fi fi-rr-chart-line-up"></i>
                            </div>
                            <div className={styles.resultContent}>
                                <span className={styles.resultLabel}>Economia Anual</span>
                                <span className={styles.resultValue}>{formatCurrency(calculations.yearlyEconomy)}</span>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.resultCard}>
                            <div className={styles.resultIcon}>
                                <i className="fi fi-rr-wallet"></i>
                            </div>
                            <div className={styles.resultContent}>
                                <span className={styles.resultLabel}>Seu Investimento</span>
                                <span className={styles.resultValueSmall}>{formatCurrency(investment)} (único)</span>
                            </div>
                        </div>

                        <div className={styles.resultCard + ' ' + styles.highlight}>
                            <div className={styles.resultIcon}>
                                <i className="fi fi-rr-clock"></i>
                            </div>
                            <div className={styles.resultContent}>
                                <span className={styles.resultLabel}>Seu Payback</span>
                                <span className={styles.resultValueHighlight}>
                                    {calculations.paybackDays.toFixed(1)} dias
                                </span>
                            </div>
                        </div>

                        <div className={styles.resultCard + ' ' + styles.highlight}>
                            <div className={styles.resultIcon}>
                                <i className="fi fi-rr-rocket-lunch"></i>
                            </div>
                            <div className={styles.resultContent}>
                                <span className={styles.resultLabel}>ROI em 12 Meses</span>
                                <span className={styles.resultValueHighlight}>
                                    {calculations.roi.toFixed(0)}%
                                </span>
                            </div>
                        </div>

                        <div className={styles.resultCard + ' ' + styles.profit}>
                            <div className={styles.resultIcon}>
                                <i className="fi fi-rr-money-check-edit"></i>
                            </div>
                            <div className={styles.resultContent}>
                                <span className={styles.resultLabel}>Lucro Líquido Ano 1</span>
                                <span className={styles.resultValueProfit}>
                                    {formatCurrency(calculations.netProfit)}
                                </span>
                            </div>
                        </div>

                        <div className={styles.urgencyBox}>
                            <i className="fi fi-rr-hourglass-end"></i>
                            <span>
                                A cada dia que você espera, você perde{' '}
                                <strong>{formatCurrency(calculations.dailyEconomy)}</strong>
                            </span>
                        </div>

                        <a href="#precos" className={styles.ctaWrapper}>
                            <span className={styles.ctaButton}>Garantir Minha Vaga no Cohort</span>
                            <div className={styles.arrowButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
