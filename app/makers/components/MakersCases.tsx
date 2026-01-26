'use client';

import React, { useState } from 'react';
import styles from './MakersCases.module.css';

const testimonials = [
    {
        name: 'Lucas Andrade',
        age: 27,
        role: 'Designer → IA Developer',
        text: '"Entrei sem saber nada de código. Em 45 dias tinha 3 projetos no ar. Consegui meu primeiro freela de R$ 8k construindo chatbot pra e-commerce. O suporte no WhatsApp foi game changer."'
    },
    {
        name: 'Camila Rocha',
        age: 32,
        role: 'Gerente de Projetos',
        text: '"Sprint de Automação mudou meu jogo. Automatizei 80% do meu trabalho repetitivo. Sobrou tempo pra construir meu próprio produto. Hoje faturando R$ 15k/mês vendendo automações."'
    },
    {
        name: 'Felipe Santos',
        age: 24,
        role: 'Dev Backend',
        text: '"Eu sabia programar, mas IA era outro mundo. Cloud Code Profundo me deu a ponte. Em 60 dias lancei meu primeiro SaaS com agentes. Primeiros 50 usuários vieram do próprio Circle."'
    },
    {
        name: 'Beatriz Costa',
        age: 29,
        role: 'Analista de Dados',
        text: '"As mentorias ao vivo são absurdas. Travei implementando RAG, entrei na mentoria, em 40min tava resolvido. Isso vale muito só pelo destrave."'
    }
];

export default function MakersCases() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>O que dizem os Makers.</h2>
                    <p className={styles.subtitle}>Gente real que saiu da teoria e colocou sistema no ar.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.userInfo}>
                                    <h3 className={styles.userName}>{item.name}, {item.age}</h3>
                                    <span className={styles.userRole}>{item.role}</span>
                                </div>
                            </div>
                            <p className={styles.cardText}>{item.text}</p>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fi fi-ss-star"></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
