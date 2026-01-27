'use client';

import React from 'react';
import styles from './CohortForWho.module.css';

const forYou = [
    "Tem Claude Pro ou Max",
    "Tem projeto que quer levar para produção",
    "Entende Git, API, Deploy (não precisa ser dev)",
    "Pode participar das 8 aulas ao vivo",
    "Quer FAZER, não só assistir"
];

const notForYou = [
    "Nunca usou IA para código",
    "Não tem projeto definido",
    'Quer só "aprender sobre IA" sem implementar',
    "Espera que alguém faça por você"
];

const differentials = [
    {
        title: "Cohort ao vivo, não curso gravado",
        description: "Você FAZ junto com 50 pessoas. Turma começa 12 de Fevereiro. Todo mundo junto, ao mesmo tempo.",
        icon: "fi-rr-users"
    },
    {
        title: "Squad por nivelamento",
        description: "Iniciante, Intermediário ou Avançado. Mentoria ao vivo (online) com especialistas da Academia Lendária.",
        icon: "fi-rr-chart-tree"
    },
    {
        title: "Mão na massa",
        description: "Você sai com sistema em produção. Não com anotações.",
        icon: "fi-rr-hammer"
    }
];

export default function CohortForWho() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Para Quem É</span>
                    <h2 className={styles.title}>
                        Esse Cohort É <span className={styles.titleHighlight}>Pra Você</span>?
                    </h2>
                </div>

                <div className={styles.criteriaGrid}>
                    <div className={styles.criteriaCard}>
                        <h3 className={styles.criteriaTitle}>
                            <span className={styles.checkIcon}>
                                <i className="fi fi-rr-check"></i>
                            </span>
                            É para você se:
                        </h3>
                        <ul className={styles.criteriaList}>
                            {forYou.map((item, index) => (
                                <li key={index} className={styles.criteriaItem}>
                                    <span className={styles.bulletCheck}>
                                        <i className="fi fi-rr-check"></i>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styles.criteriaCard} ${styles.notFor}`}>
                        <h3 className={styles.criteriaTitle}>
                            <span className={styles.crossIcon}>
                                <i className="fi fi-rr-cross"></i>
                            </span>
                            NÃO é para você se:
                        </h3>
                        <ul className={styles.criteriaList}>
                            {notForYou.map((item, index) => (
                                <li key={index} className={styles.criteriaItem}>
                                    <span className={styles.bulletCross}>
                                        <i className="fi fi-rr-cross-small"></i>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className={styles.notForNote}>
                            Se não é pra você agora, tudo bem. A gente se encontra em outro momento.
                        </p>
                    </div>
                </div>

                <div className={styles.differentialsSection}>
                    <h3 className={styles.differentialsTitle}>Por Que Funciona</h3>
                    <div className={styles.differentialsGrid}>
                        {differentials.map((diff, index) => (
                            <div key={index} className={styles.differentialCard}>
                                <div className={styles.diffIconWrapper}>
                                    <i className={`fi ${diff.icon}`}></i>
                                </div>
                                <h4 className={styles.diffTitle}>{diff.title}</h4>
                                <p className={styles.diffDescription}>{diff.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
