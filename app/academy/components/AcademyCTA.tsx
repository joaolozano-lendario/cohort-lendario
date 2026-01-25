'use client';

import React from 'react';
import styles from './AcademyCTA.module.css';

export default function AcademyCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <p>🔥 OFERTA PÓS-IMERSÃO — Válida até domingo 23h59</p>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>Sua Ideia Já Existe. O Que Você Vai Fazer Com Ela?</h2>
                    <p className={styles.subtitle}>
                        O futuro será dividido entre quem constrói e quem assiste. Você já provou que é do primeiro grupo. Agora é só não parar.
                    </p>

                    <div className={styles.ctaGrid}>
                        <div className={styles.ctaItem}>
                            <h4>COMUNIDADE</h4>
                            <div className={styles.price}>R$ 88/mês</div>
                            <button className={styles.button}>[COMEÇAR]</button>
                        </div>

                        <div className={styles.ctaItem}>
                            <h4>MAKERS</h4>
                            <div className={styles.price}>R$ 488/mês</div>
                            <button className={styles.button}>[COMEÇAR]</button>
                        </div>

                        <div className={styles.ctaItem}>
                            <h4>BUSINESS</h4>
                            <div className={styles.price}>R$ 988/mês</div>
                            <div className={styles.recommendation}>⭐ RECOMENDADO</div>
                            <button className={`${styles.button} ${styles.highlight}`}>[COMEÇAR]</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
