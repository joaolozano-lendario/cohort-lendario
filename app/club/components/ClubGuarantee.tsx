'use client';

import React from 'react';
import styles from './ClubGuarantee.module.css';

export default function ClubGuarantee() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.blurCircle}></div>
                    <span className={styles.badge}>Garantia Lendária</span>
                    <h2 className={styles.title}>Garantia Sem Risco (30 dias)</h2>
                    <p className={styles.description}>
                        Entra. Testa. 30 dias completos. Se você não sentir diferença na clareza, não encontrar networking de valor ou simplesmente não gostar da comunidade... Manda um email e devolvemos 100% do seu investimento. Sem burocracia. Sem perguntas.
                    </p>
                    <div className={styles.footer}>
                        O risco é todo nosso. <br />
                        Você finalmente sente que não está sozinho.
                    </div>
                </div>
            </div>
        </section>
    );
}
