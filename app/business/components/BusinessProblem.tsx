'use client';

import React from 'react';
import styles from './BusinessProblem.module.css';

export default function BusinessProblem() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <div className={styles.textCard}>
                        <div className={styles.text}>
                            <h2 className={styles.title}>
                                Você tem uma ideia de Sistema com IA.<br />
                                Ou até já criou um.
                            </h2>

                            <p>
                                Algo que resolve uma dor real do seu negócio ou de um mercado inteiro.
                            </p>

                            <p className={styles.highlight}>
                                Mas posso ser brutalmente honesto com você?
                            </p>

                            <div className={styles.statement}>
                                <strong>Ter um sistema bom não significa nada.</strong>
                            </div>

                            <p>
                                O mercado está cheio de soluções incríveis que ninguém conhece.
                                De sistemas perfeitos que ninguém usa. De pessoas geniais que morrem pobres.
                            </p>

                            <p className={styles.highlight}>Sabe por quê?</p>

                            <p>
                                Porque o jogo não é sobre ter o melhor produto. Isso é o básico!
                                E cada dia vai ficar mais fácil criar uma solução com IA.
                            </p>

                            <div className={styles.conclusion}>
                                <strong>
                                    O verdadeiro jogo é transformar isso em Negócio que Vende.
                                    Ou potencializar o que você já tem.
                                </strong>
                            </div>

                            <p>
                                E existe um jeito mais inteligente de fazer isso.
                            </p>

                            <p>
                                Com método validado. Com frameworks testados. Com um time de especialistas
                                te acompanhando e validando cada passo.
                            </p>

                            <div className={styles.urgency}>
                                <strong>Mas essa janela está aberta apenas para quem age agora.</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <img src="/Alan-Lateral.png" alt="Alan Nicolas" className={styles.expertImage} />
                    <div className={styles.infoCard}>
                        <span className={styles.cardName}>Alan Nicolas</span>
                        <p className={styles.cardTitle}>
                            CEO do Maior ecossistema de <br />
                            IA Generativa para Negócios do Brasil
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
