'use client';

import React from 'react';
import styles from './CohortHero.module.css';

const featureCards = [
    {
        icon: "fi-rr-chalkboard-user",
        title: "8 Aulas Ao Vivo",
        description: "Com Alan Nicolas"
    },
    {
        icon: "fi-rr-users-alt",
        title: "Squads por Nível",
        description: "Mentoria técnica real"
    },
    {
        icon: "fi-rr-rocket-lunch",
        title: "Projeto em Produção",
        description: "Deploy no final"
    },
    {
        icon: "fi-rr-workflow",
        title: "Agentes em Cadeia",
        description: "Squad funcionando"
    },
    {
        icon: "fi-rr-diploma",
        title: "Certificação",
        description: "+ Showcase final"
    }
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
                {/* Background Elements */}
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
                            Garantir minha vaga
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
                            <span>Cohort Lendário Master</span>
                        </div>
                    </div>

                    <h1 className={styles.headline}>
                        <span className={styles.headlineLight}>Torne-se um</span>
                        <br />
                        <span className={styles.headlineHighlight}>Exército de Um Só</span>
                    </h1>

                    <p className={styles.subheadline}>
                        O método para comandar agentes IA como um maestro.
                    </p>

                    <div className={styles.promiseBlock}>
                        <p className={styles.promise}>
                            Em <strong>8 semanas ao vivo com Alan</strong>, saia de "não sei o que fazer primeiro" para
                            <strong> projeto no ar com agentes trabalhando enquanto você dorme</strong>.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className={styles.featureGrid}>
                        {featureCards.map((card, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <i className={`fi ${card.icon}`}></i>
                                </div>
                                <div className={styles.featureContent}>
                                    <span className={styles.featureTitle}>{card.title}</span>
                                    <span className={styles.featureDescription}>{card.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.metaInfo}>
                        <div className={styles.metaItem}>
                            <i className="fi fi-rr-calendar"></i>
                            <span>Início: 12 de Fevereiro de 2026</span>
                        </div>
                        <div className={styles.metaItem}>
                            <i className="fi fi-rr-users"></i>
                            <span>~50 vagas</span>
                        </div>
                        <div className={styles.metaItem}>
                            <i className="fi fi-rr-time-watch-calendar"></i>
                            <span>8 semanas ao vivo</span>
                        </div>
                    </div>

                    <div className={styles.ctaWrapper} onClick={handleCTAClick}>
                        <button className={styles.ctaButton}>
                            Quero Minha Vaga no Cohort
                        </button>
                        <div className={styles.arrowButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.proofBar}>
                        <div className={styles.proofItem}>
                            <span className={styles.proofQuote}>"Caixa de Pandora na minha cabeça"</span>
                            <span className={styles.proofAuthor}>— Walter Sousa</span>
                        </div>
                        <div className={styles.proofDivider}></div>
                        <div className={styles.proofItem}>
                            <span className={styles.proofQuote}>"É tipo ver o Ronaldinho fazer bruxaria e ensinar como fez"</span>
                            <span className={styles.proofAuthor}>— Dr. Lucas Moraes</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
