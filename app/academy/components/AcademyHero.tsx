'use client';

import React from 'react';
import styles from './AcademyHero.module.css';

export default function AcademyHero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.heroContainer}>
                <div className={styles.topBanner}>
                    <p>🔥 OFERTA PÓS-IMERSÃO — Válida até domingo 23h59</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.leftColumn}>
                        <h1 className={styles.textBlock}>
                            Sua Ideia Finalmente Existe.<br />
                            <span className={styles.highlight}>E Agora?</span>
                        </h1>

                        <p className={styles.description}>
                            Você deu o primeiro passo. A maioria nunca dá. Agora escolha: deixar morrer como os outros 92%... ou transformar em algo real.
                        </p>

                        <div className={styles.ctaWrapper}>
                            <button className={styles.ctaButton}>
                                ESCOLHER MEU CAMINHO →
                            </button>
                            <div className={styles.trustBadge}>
                                <span>+15.000 Lendários</span>
                                <span className={styles.separator}>•</span>
                                <span>Garantia de 30-90 dias</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
