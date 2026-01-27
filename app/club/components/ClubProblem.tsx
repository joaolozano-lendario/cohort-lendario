'use client';

import React from 'react';
import styles from './ClubProblem.module.css';

export default function ClubProblem() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <div className={styles.textCard}>
                        <div className={styles.text}>
                            <h2 className={styles.title}>
                                O Problema Não É Você.<br />
                                É O Jogo Que Te Fizeram Jogar.
                            </h2>

                            <p>
                                Te venderam a mentira de que você precisa de <strong>MAIS INFORMAÇÃO</strong>. Mais cursos. Mais aulas. Mais conteúdo.
                            </p>

                            <p className={styles.highlight}>
                                <strong>MENTIRA.</strong>
                            </p>

                            <div className={styles.statement}>
                                <strong>47.8% das 18.179 pessoas que analisamos estão sem contexto e sem clareza.</strong>
                            </div>

                            <p>
                                O que você precisa é de 3 coisas: CLAREZA (saber onde está), FUNDAMENTOS (as bases que nunca mudam) e CONEXÃO (pessoas que te puxam pra cima).
                            </p>

                            <p className={styles.highlight}>O que falta é um MOVIMENTO.</p>

                            <div className={styles.conclusion}>
                                <strong>
                                    Tudo isso você NÃO consegue sozinho vendo YouTube ou em "mais um curso".
                                    Você consegue em uma tribo de loucos gênios.
                                </strong>
                            </div>

                            <p>
                                Aqui a gente não fica assistindo o futuro ser construído. A gente CONSTRÓI.
                            </p>

                            <div className={styles.urgency}>
                                <strong>Não é grupo de WhatsApp. É a vanguarda do futuro com IA.</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <img src="/sct-2-vMakers.png" alt="Alan Nicolas" className={styles.expertImage} />
                    <div className={styles.infoCard}>
                        <span className={styles.cardName}>Alan Nicolas</span>
                        <p className={styles.cardTitle}>
                            Fundador do Maior ecossistema de <br />
                            IA Generativa para Negócios do Brasil
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
