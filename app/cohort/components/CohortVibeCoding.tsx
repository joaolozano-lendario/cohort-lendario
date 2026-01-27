'use client';

import React from 'react';
import styles from './CohortVibeCoding.module.css';

export default function CohortVibeCoding() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <span className={styles.label}>A Habilidade Mais Rara de 2026</span>

                    <h2 className={styles.title}>
                        "Vibe Coding"<br />
                        <span className={styles.titleLight}>já nasceu morto.</span>
                    </h2>

                    <p className={styles.subtitle}>
                        Isso aqui é o poder de tornar qualquer ideia real.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>10x</span>
                            <span className={styles.statLabel}>mais rápido do<br />conceito ao produto</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>R$0</span>
                            <span className={styles.statLabel}>de equipe técnica<br />para lançar seu negócio</span>
                        </div>
                    </div>

                    <p className={styles.closing}>
                        Não é sobre programar. É sobre comandar.<br />
                        <span className={styles.closingLight}>Quem domina orquestração de agentes transforma qualquer ideia em produto real.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
