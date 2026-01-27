'use client';

import React from 'react';
import styles from './CohortOneManArmy.module.css';

const comparisons = [
    {
        before: "Você sozinho, dependendo de devs para cada mudança",
        after: "Você comandando um squad de agentes que trabalham 24/7"
    },
    {
        before: "Pagando markup de ferramentas intermediárias",
        after: "Pagando direto pro Claude, sem intermediários"
    },
    {
        before: "Projetos que levam semanas para ficar prontos",
        after: "Deploy profissional em horas, não semanas"
    },
    {
        before: "Código que funciona 'por milagre'",
        after: "Código consistente que um dev sênior aprovaria"
    }
];

const powers = [
    {
        title: "Submissão automática de PRs",
        description: "Em 2 minutos, o Claude Code sobe um PR automaticamente",
        icon: "fi-rr-code-pull-request"
    },
    {
        title: "Múltiplos agentes em paralelo",
        description: "Enquanto um testa, outro implementa, outro documenta",
        icon: "fi-rr-apps"
    },
    {
        title: "Modo YOLO ativado",
        description: "Você dorme, os agentes continuam trabalhando",
        icon: "fi-rr-moon-stars"
    },
    {
        title: "Deploy automático",
        description: "Do localhost para produção sem esforço manual",
        icon: "fi-rr-cloud-upload-alt"
    }
];

export default function CohortOneManArmy() {
    return (
        <section className={styles.section}>
            {/* Decorative Elements */}
            <div className={styles.blurCircleBlue}></div>
            <div className={styles.blurCircleGold}></div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>O Resultado</span>
                    <h2 className={styles.title}>
                        Você Não Precisa de 10 Devs<br />
                        <span className={styles.highlight}>Precisa de Um Squad de Agentes</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Um time de IAs trabalhando 24/7 sob seu comando.
                        Enquanto você dorme, eles continuam.
                    </p>
                </div>

                <blockquote className={styles.quoteMinimal}>
                    <p>"Em 2 minutos, o Claude Code sobe um PR automaticamente. Você só aprova."</p>
                    <cite>— Alan Nicolas</cite>
                </blockquote>

                <div className={styles.comparisonSection}>
                    <h3 className={styles.comparisonTitle}>Antes vs Depois do Cohort</h3>
                    <div className={styles.comparisonGrid}>
                        {comparisons.map((item, index) => (
                            <div key={index} className={styles.comparisonRow}>
                                <div className={styles.beforeCard}>
                                    <span className={styles.beforeLabel}>ANTES</span>
                                    <p>{item.before}</p>
                                </div>
                                <div className={styles.arrow}>
                                    <i className="fi fi-rr-arrow-right"></i>
                                </div>
                                <div className={styles.afterCard}>
                                    <span className={styles.afterLabel}>DEPOIS</span>
                                    <p>{item.after}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.powersSection}>
                    <h3 className={styles.powersTitle}>O Que Você Vai Conseguir Fazer</h3>
                    <p className={styles.powersSubtitle}>
                        Capacidades que você vai desbloquear nas 8 semanas
                    </p>
                    <div className={styles.powersGrid}>
                        {powers.map((power, index) => (
                            <div key={index} className={styles.powerCard}>
                                <div className={styles.powerIcon}>
                                    <i className={`fi ${power.icon}`}></i>
                                </div>
                                <h4 className={styles.powerTitle}>{power.title}</h4>
                                <p className={styles.powerDescription}>{power.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.fomoBar}>
                    <div className={styles.fomoContent}>
                        <div className={styles.fomoQuotes}>
                            <div className={styles.fomoQuote}>
                                <span>"Vai ter muita gente não dormindo mais"</span>
                                <cite>— Marcos Ferreira</cite>
                            </div>
                            <div className={styles.fomoQuote}>
                                <span>"Já estou 3 noites sem dormir hackeando AIOS"</span>
                                <cite>— José Petrúcio</cite>
                            </div>
                            <div className={styles.fomoQuote}>
                                <span>"O problema é que não queremos dormir mais"</span>
                                <cite>— Diego Sottani</cite>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
