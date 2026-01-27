'use client';

import React from 'react';
import styles from './CohortProblem.module.css';

const realPains = [
    {
        pain: "Instalei tudo mas não sei o que fazer primeiro",
        icon: "fi-rr-interrogation"
    },
    {
        pain: "Quero um passo a passo que pegue na minha mão",
        icon: "fi-rr-hand-holding-heart"
    },
    {
        pain: "Meu código funciona por milagre (gambiarra)",
        icon: "fi-rr-bug"
    },
    {
        pain: "Criei vários agentes mas eles não conversam entre si",
        icon: "fi-rr-link-slash"
    },
    {
        pain: "Não consigo deixar rodando sozinho sem quebrar",
        icon: "fi-rr-moon-stars"
    },
    {
        pain: "Gastei muito em tokens sem entender onde foi",
        icon: "fi-rr-money-check-edit"
    },
    {
        pain: "Tenho medo de colocar em produção e dar merda",
        icon: "fi-rr-shield-exclamation"
    },
    {
        pain: "Será que isso funciona pro MEU caso?",
        icon: "fi-rr-user-question"
    }
];

export default function CohortProblem() {
    return (
        <section className={styles.section}>
            {/* Decorative Elements */}
            <div className={styles.blurCircle}></div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Reconhece Alguma Dessas?</span>
                    <h2 className={styles.title}>
                        <span className={styles.titleHighlight}>83 pessoas</span> tiveram
                        <br />a <span className={styles.titleHighlight}>mesma dúvida</span>.
                    </h2>
                </div>

                {/* Identification Block */}
                <div className={styles.identificationBlock}>
                    <div className={styles.identificationHeader}>
                        <div className={styles.identificationIcon}>
                            <i className="fi fi-rr-comment-question"></i>
                        </div>
                        <h3 className={styles.identificationTitle}>
                            Se você sentiu alguma dessas dores, o Cohort é pra você:
                        </h3>
                    </div>

                    <div className={styles.painsGrid}>
                        {realPains.map((item, index) => (
                            <div key={index} className={styles.painCard}>
                                <div className={styles.painIcon}>
                                    <i className={`fi ${item.icon}`}></i>
                                </div>
                                <span className={styles.painText}>"{item.pain}"</span>
                            </div>
                        ))}
                    </div>

                    <p className={styles.identificationNote}>
                        Essas falas vieram <strong>direto do WhatsApp</strong> dos alunos.
                        Se você se identificou com pelo menos 2, esse cohort foi feito pra você.
                    </p>
                </div>

                {/* Absolution Section */}
                <div className={styles.absolution}>
                    <div className={styles.absolutionLeft}>
                        <h3 className={styles.absolutionTitle}>Não É Culpa Sua</h3>
                        <p className={styles.absolutionText}>
                            As ferramentas são poderosas. Mas faltou o método.
                        </p>
                    </div>
                    <div className={styles.absolutionRight}>
                        <div className={styles.forgivenessList}>
                            <p>Se você tentou o AIOS e não conseguiu resultados...</p>
                            <p>Se instalou o Claude Code e ficou olhando para a tela...</p>
                            <p>Se criou agentes que não conversam entre si...</p>
                        </div>
                        <p className={styles.absolutionHighlight}>
                            O problema não é você. É que ninguém ensinou a sequência certa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
