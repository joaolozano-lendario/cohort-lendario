'use client';

import React from 'react';
import styles from './MakersHero.module.css';

const features = [
    { icon: 'fi-rr-square-terminal', title: 'Cloud Code™', description: 'Do Concept até o Deploy de sistemas profundos.' },
    { icon: 'fi-rr-code-branch', title: 'Sprint Automação', description: 'N8N e Make dominados em apenas 14 dias.' },
    { icon: 'fi-rr-videoconference', title: 'Mentorias Ao Vivo', description: '8 vezes por semana para destravar seu código.' },
    { icon: 'fi-rr-template-alt', title: 'Templates de Elite', description: 'Fork e Deploy em 30 minutos de bots e agentes.' },
    { icon: 'fi-rr-comment', title: 'Professores no Wpp', description: 'Suporte direto e destrave rápido via WhatsApp.' }
];

export default function MakersHero() {
    const handleCTAClick = () => {
        const element = document.getElementById('precos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.heroWrapper}>
            <div className={styles.heroContainer}>
                <div className={styles.headerBar}>
                    <div className={styles.headerLeft}>
                        <img
                            src="/C-Makers-Color-Dark.svg"
                            alt="Academia Lendár[IA]"
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
                    <div className={styles.leftColumn}>
                        <div className={styles.titleContainer}>
                            <h1 className={styles.textBlock}>
                                Você sabe o que quer criar. Só não sabe como fazer acontecer?
                            </h1>
                        </div>

                        <div className={styles.description}>
                            Deixa eu adivinhar... Você já tem a visão. Já imaginou o sistema funcionando.
                            Mas quando senta pra fazer... Trava. No Makers, você sai da teoria e coloca o sistema no ar em 30 dias ou menos.
                        </div>

                        <div className={styles.ctaWrapper} onClick={handleCTAClick}>
                            <button className={styles.ctaButton}>
                                Garantir minha vaga
                            </button>
                            <div className={styles.arrowButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.featuresContainer}>
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.iconWrapper}>
                                    <i className={`fi ${feature.icon}`}></i>
                                </div>
                                <div className={styles.featureContent}>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
