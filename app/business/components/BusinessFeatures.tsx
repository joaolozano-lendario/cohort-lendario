'use client';

import React from 'react';
import styles from './BusinessFeatures.module.css';

const features = [
    {
        icon: 'fi fi-rr-chart-line-up',
        title: <>Método<br />Growth IA®</>,
        description: 'Posicionamento, Oferta, Canais & Escala'
    },
    {
        icon: 'fi fi-rr-users',
        title: <>Mentorias<br />Ao Vivo</>,
        description: '2 Vezes na semana sobre Negócios & Marketing'
    },
    {
        icon: 'fi fi-rr-document',
        title: 'Frameworks de Marketing',
        description: 'Scripts de Vendas, Copy e Funis'
    },
    {
        icon: 'fi fi-rr-comment-alt',
        title: 'Suporte Individual',
        description: 'Feedback direto em todos os seus materiais'
    },
    {
        icon: 'fi fi-rr-rocket-lunch',
        title: 'Sprint de Vendas',
        description: 'Ações práticas para monetizar rápido'
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
