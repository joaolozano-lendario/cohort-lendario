'use client';

import React from 'react';
import styles from './CohortHero.module.css';

const agentCards = [
    { agent: "@dev", title: "Desenvolvedor", economy: "R$ 14.976" },
    { agent: "@architect", title: "Arquiteto", economy: "R$ 18.432" },
    { agent: "@pm", title: "Product Manager", economy: "R$ 15.568" },
    { agent: "@qa", title: "QA Engineer", economy: "R$ 13.272" },
    { agent: "@devops", title: "DevOps", economy: "R$ 8.624" },
];

export default function CohortHero() {
    const handleCTAClick = () => {
        const element = document.getElementById('precos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.heroWrapper}>
            <div className={styles.heroContainer}>
                <div className={styles.backgroundImage}></div>
                <div className={styles.blurCircleBlue}></div>
                <div className={styles.blurCircleGold}></div>

                <div className={styles.headerBar}>
                    <div className={styles.headerLeft}>
                        <img
                            src="https://www.academialendaria.ai/logo.svg"
                            alt="Academia Lendária"
                            className={styles.headerLogo}
                        />
                    </div>
                    <div className={styles.headerRight}>
                        <button className={styles.headerCta} onClick={handleCTAClick}>
                            Calcular Economia
                        </button>
                    </div>
                </div>

                <div className={styles.content}>
                    <img
                        src="/L-AiOSCohort-Color-Dark.svg"
                        alt="AiOS Cohort"
                        className={styles.heroLogo}
                    />

                    <div className={styles.badgeRow}>
                        <div className={styles.liveBadge}>
                            <span className={styles.pulseDot}></span>
                            <span>Cohort AIOS Lendário</span>
                        </div>
                    </div>

                    <h1 className={styles.headline}>
                        <span className={styles.headlineHighlight}>R$ 109.164 Por Mês:</span>
                        <br />
                        <span className={styles.headlineLight}>O Custo de </span>
                        <span className={styles.headlineHighlight}>NÃO</span>
                        <span className={styles.headlineLight}> Ter Um </span>
                        <span className={styles.headlineHighlight}>Time de IA</span>
                    </h1>

                    <p className={styles.subheadline}>
                        Descubra quanto você está perdendo por dia enquanto seus
                        concorrentes já automatizam desenvolvimento, produto, QA, DevOps e design.
                    </p>

                    <div className={styles.promiseBlock}>
                        <p className={styles.promise}>
                            <strong>9 agentes especializados</strong> que trabalham 24/7,
                            não pedem aumento, e custam <strong>uma fração de um time tradicional</strong>.
                        </p>
                    </div>

                    {/* Agent Cards */}
                    <div className={styles.featureGrid}>
                        {agentCards.map((card, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <span className={styles.agentTag}>{card.agent}</span>
                                </div>
                                <div className={styles.featureContent}>
                                    <span className={styles.featureTitle}>{card.title}</span>
                                    <span className={styles.featureDescription}>{card.economy}/mês</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.metaInfo}>
                        <div className={styles.metaItem}>
                            <i className="fi fi-rr-clock"></i>
                            <span>Payback em 2.2 dias</span>
                        </div>
                        <div className={styles.metaItem}>
                            <i className="fi fi-rr-chart-line-up"></i>
                            <span>ROI: 16.274%</span>
                        </div>
                        <div className={styles.metaItem}>
                            <i className="fi fi-rr-piggy-bank"></i>
                            <span>Economia: R$ 1.3M/ano</span>
                        </div>
                    </div>

                    <div className={styles.ctaWrapper} onClick={handleCTAClick}>
                        <button className={styles.ctaButton}>
                            Calcular Minha Economia
                        </button>
                        <div className={styles.arrowButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.proofBar}>
                        <div className={styles.proofItem}>
                            <span className={styles.proofQuote}>"Payback em 2 dias. Isso não existe."</span>
                            <span className={styles.proofAuthor}>— Existe. É matemática.</span>
                        </div>
                        <div className={styles.proofDivider}></div>
                        <div className={styles.proofItem}>
                            <span className={styles.proofQuote}>A cada dia que você espera</span>
                            <span className={styles.proofAuthor}>você perde R$ 3.638</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
