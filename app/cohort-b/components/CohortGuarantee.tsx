'use client';

import React from 'react';
import styles from './CohortGuarantee.module.css';

export default function CohortGuarantee() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.guaranteeCard}>
                    <div className={styles.iconWrapper}>
                        <i className="fi fi-rr-shield-check"></i>
                    </div>

                    <h2 className={styles.title}>
                        <span className={styles.titleHighlight}>100% de Volta</span> Até a Aula 2
                    </h2>

                    <p className={styles.description}>
                        <strong>Teste 2 aulas antes de decidir.</strong>
                    </p>

                    <p className={styles.subdescription}>
                        Se até a segunda aula você perceber que não é pra você,
                        basta pedir reembolso. Sem perguntas, sem burocracia.
                    </p>

                    <div className={styles.reasonWhy}>
                        <h3 className={styles.reasonTitle}>Por que essa garantia?</h3>
                        <p className={styles.reasonText}>
                            Quem passou pelas 2 primeiras aulas não quer sair.
                            É assim desde a primeira imersão. O risco é zero pra você.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
