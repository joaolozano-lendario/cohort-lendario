import React from 'react';
import styles from './V15CTA.module.css';

export default function V15CTA() {
    const handleCTAClick = () => {
        const element = document.getElementById('precos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.blurCircle}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Suas Ideias Merecem Existir</h2>

                    <div className={styles.questions}>
                        <p>Quantas ideias você já teve que nunca saíram da cabeça?</p>
                        <p>Quantas vezes você pensou "isso deveria existir" mas não sabia como fazer?</p>
                        <p>Quantas oportunidades você deixou passar por não ter as ferramentas certas?</p>
                    </div>

                    <div className={styles.promise}>
                        <h3>48 horas. Isso é tudo que você precisa.</h3>
                        <p>Sistema criado. Funcionando. Real.</p>
                        <p className={styles.guarantee}>Se não funcionar, devolvemos seu dinheiro.</p>
                    </div>

                    <div className={styles.ctaWrapper} onClick={handleCTAClick}>
                        <button className={styles.ctaButton}>
                            Quero garantir meu lugar
                        </button>
                        <div className={styles.arrowButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.batchInfo}>
                        {/* Timer removido para esta versão */}
                    </div>
                </div>
            </div>
        </section>
    );
}
