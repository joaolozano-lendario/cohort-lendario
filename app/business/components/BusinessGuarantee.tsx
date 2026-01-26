'use client';

import React from 'react';
import styles from './BusinessGuarantee.module.css';

export default function BusinessGuarantee() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.blurCircle}></div>
                    <span className={styles.badge}>Garantia Lendária</span>
                    <h2 className={styles.title}>Foco Total no seu Resultado</h2>
                    <p className={styles.description}>
                        Não vendemos milagre. Vendemos método + acompanhamento. Se você entrar, participar das mentorias, executar o que foi validado e ainda assim não conseguir estruturar posicionamento, oferta e primeiros clientes em 90 dias...
                    </p>
                    <div className={styles.footer}>
                        Ganha mais 90 dias gratuitos de acompanhamento intensivo. <br />
                        Sem burocracia. Sem enrolação.
                    </div>
                </div>
            </div>
        </section>
    );
}
