'use client';

import React from 'react';
import styles from './BusinessGuarantee.module.css';

export default function BusinessGuarantee() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>


                    <h2 className={styles.title}>Garantia Lendária</h2>

                    <p className={styles.subtitle}>
                        Não vendemos milagre. Vendemos método + acompanhamento.
                    </p>

                    <div className={styles.text}>
                        <p>
                            Se você entrar, participar das mentorias, executar o que foi validado e ainda assim não conseguir estruturar posicionamento, oferta e primeiros clientes em 90 dias...
                        </p>
                        <p className={styles.highlight}>
                            Ganha mais 90 dias gratuitos de acompanhamento intensivo.
                        </p>
                        <p>
                            Sem burocracia. Sem enrolação.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
