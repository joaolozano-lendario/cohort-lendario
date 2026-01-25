'use client';

import React from 'react';
import styles from './BusinessFeatures.module.css';

const features = [
    {
        icon: 'fi fi-rr-chart-line-up',
        title: 'Método Growth IA®',
        description: 'Posicionamento, Oferta, Canais & Escala'
    },
    {
        icon: 'fi fi-rr-users',
        title: 'Mentorias Ao Vivo',
        description: '2 Vezes na semana sobre Negócios & Marketing'
    },
    {
        icon: 'fi fi-rr-document',
        title: 'Frameworks de Marketing',
        description: 'Cursos e Ferramentas para receita mensurável'
    },
    {
        icon: 'fi fi-rr-megaphone',
        title: 'Playbooks de Vendas',
        description: 'Scripts prontos e análise automatizada'
    },
    {
        icon: 'fi fi-rr-settings',
        title: 'Ferramentas de IA Internas',
        description: 'Gestão tributária, financeira e operacional'
    }
];

export default function BusinessFeatures() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <i className={feature.icon}></i>
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
