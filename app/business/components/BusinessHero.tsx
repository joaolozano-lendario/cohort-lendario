'use client';

import React from 'react';
import styles from './BusinessHero.module.css';

const features = [
    { icon: 'fi-rr-rocket-lunch', title: 'Aceleração de IA', description: 'Metodologia exclusiva para implementar IA no seu fluxo.' },
    { icon: 'fi-rr-briefcase', title: 'Business Mindset', description: 'Visão estratégica para escalar seu negócio técnico.' },
    { icon: 'fi-rr-comment-alt', title: 'Mentorias Ao Vivo', description: 'Acompanhamento semanal com especialistas do mercado.' },
    { icon: 'fi-rr-users', title: 'Networking Elite', description: 'Acesso a uma comunidade de alto nível.' },
    { icon: 'fi-rr-shield-check', title: 'Garantia Real', description: 'Compromisso com o seu resultado prático.' }
];

export default function BusinessHero() {
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
                            src="/LB-M.svg"
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
                                Você vê oportunidades que<br />
                                ninguém mais vê. Mas não<br />
                                sabe como cobrar por elas?
                            </h1>
                        </div>

                        <div className={styles.description}>
                            Programa completo para transformar visão técnica em receita recorrente,
                            frameworks validados e mentorias ao vivo toda semana.
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
