'use client';

import React from 'react';
import styles from './MakersProblem.module.css';

export default function MakersProblem() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <div className={styles.textCard}>
                        <div className={styles.text}>
                            <h2 className={styles.title}>
                                O Problema Não É Falta de Conteúdo.<br />
                                É Falta de Método.
                            </h2>

                            <p>
                                Você já tem informação demais. YouTube tá cheio. Cursos não faltam.
                            </p>

                            <p className={styles.highlight}>
                                Mas quando você senta pra fazer... Trava.
                            </p>

                            <div className={styles.statement}>
                                <strong>45% das 18.179 pessoas que analisamos estão exatamente nesse lugar.</strong>
                            </div>

                            <p>
                                Sabem o que querem. Não sabem como fazer. E acabam ficando eternamente "planejando",
                                fazendo mais um curso ou assistindo mais um tutorial sem nunca colocar NADA no ar.
                            </p>

                            <p className={styles.highlight}>O que falta é ESTRUTURA.</p>

                            <div className={styles.conclusion}>
                                <strong>
                                    Alguém que pegue você pela mão e fale: "Faz isso. Depois isso. Depois isso."
                                    E no final você tem algo FUNCIONANDO. NO AR. RODANDO.
                                </strong>
                            </div>

                            <p>
                                Aqui a gente não fica só falando. A gente CONSTRÓI.
                            </p>

                            <div className={styles.urgency}>
                                <strong>Você entra sem saber fazer. Sai com sistema no ar em 30 dias.</strong>
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
