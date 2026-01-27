'use client';

import React from 'react';
import styles from './ClubHero.module.css';

const features = [
    { icon: 'fi-rr-brain-circuit', title: <>Sistema<br />Segundo Cérebro</>, description: 'Diagnóstico personalizado e trilha específica' },
    { icon: 'fi-rr-users', title: <>Circle com<br />+15 Mil Lendários</>, description: 'Networking real com operadores e founders' },
    { icon: 'fi-rr-videoconference', title: <>Mentorias<br />Ao Vivo</>, description: 'Semanais com quem está fazendo acontecer' },
    { icon: 'fi-rr-marker', title: <>Hubs<br />Presenciais</>, description: '+50 pelo mundo para conexões reais' },
    { icon: 'fi-rr-book-open-reader', title: <>Clube<br />do Livro</>, description: 'Leitura conjunta dos clássicos' }
];

export default function ClubHero() {
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
                            src="/C-Club-Color-Dark.svg"
                            alt="Academia Lendár[IA] Club"
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
                                Você Não Precisa de Mais Um Grupo. Você Precisa de Um Movimento.
                            </h1>
                        </div>

                        <div className={styles.description}>
                            Clareza absoluta, fundamentos que não mudam e uma tribo de loucos gênios que amam se desenvolver. Não é grupo de WhatsApp. É a vanguarda do futuro com IA.
                        </div>

                        <div className={styles.ctaWrapper} onClick={handleCTAClick}>
                            <button className={styles.ctaButton}>
                                Fazer parte do movimento
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
