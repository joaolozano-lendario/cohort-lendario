'use client';

import React from 'react';
import styles from './MakersGuarantee.module.css';

export default function MakersGuarantee() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.blurCircle}></div>
                    <span className={styles.badge}>Garantia Lendária</span>
                    <h2 className={styles.title}>Garantia Sem Enrolação</h2>
                    <p className={styles.description}>
                        30 dias completos para você testar tudo. Se você entrar, seguir o método e em 30 dias sentir que não conseguiu construir nada funcionando, que não teve evolução técnica ou simplesmente não gostou das mentorias... Mande um e-mail e devolvemos 100% do seu investimento.
                    </p>
                    <div className={styles.footer}>
                        Sem burocracia. Sem perguntas. <br />
                        O risco é todo nosso.
                    </div>
                </div>
            </div>
        </section>
    );
}
