'use client';

import React from 'react';
import styles from './BusinessHero.module.css';

const features = [
    { icon: 'fi-rr-chart-line-up', title: <>Método<br />Growth IA®</>, description: 'Posicionamento, Oferta, Canais & Escala' },
    { icon: 'fi-rr-users', title: <>Mentorias<br />Ao Vivo</>, description: '2 Vezes na semana sobre Negócios & Marketing' },
    { icon: 'fi-rr-document', title: 'Frameworks de Marketing', description: 'Cursos e Ferramentas para receita mensurável' },
    { icon: 'fi-rr-megaphone', title: 'Playbooks de Vendas', description: 'Scripts prontos e análise automatizada' },
    { icon: 'fi-rr-settings', title: 'Ferramentas de IA Internas', description: 'Gestão tributária, financeira e operacional' }
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
                            src="/C-Business-Color-Dark.svg"
                            alt="Academia Lendár[IA] Business"
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
                                Você vê oportunidades que ninguém mais vê. Mas não consegue monetizá-las.
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
