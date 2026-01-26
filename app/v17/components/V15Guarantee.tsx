import React from 'react';
import styles from './V15Guarantee.module.css';

export default function V15Guarantee() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.blurCircle}></div>
                    <span className={styles.badge}>Garantia Lendária</span>
                    <h2 className={styles.title}>Sistema Funcionando <br /> ou Seu Dinheiro de Volta</h2>
                    <p className={styles.description}>
                        Participe do Dia 1 completo. Se no final do sábado você não tiver um sistema funcionando e aplicável, envie email até 23h59. Devolvemos 100% em até 7 dias úteis. Sem pergunta. Sem enrolação.
                    </p>
                    <div className={styles.footer}>
                        Tu assume zero risco. <br />
                        A gente assume o compromisso de entregar.
                    </div>
                </div>
            </div>
        </section>
    );
}
