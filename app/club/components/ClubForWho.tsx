'use client';

import React from 'react';
import styles from './ClubForWho.module.css';

const vaimostrar = [
    'Clareza absoluta - em 90 dias você sabe exatamente onde está e para onde vai',
    'Fundamentos que não mudam - não importa se amanhã sai GPT-7, você sabe os princípios',
    'Tribo de verdade - gente fazendo, não falando que vai fazer',
    'Acesso a operadores reais - founders, investidores, construtores',
    'Estrutura que te puxa pra cima - quando você desanima, a tribo te levanta',
    'Networking que abre portas - parcerias, clientes, oportunidades'
];

const naovaimostrar = [
    'Fórmula mágica de ficar rico rápido - Não existe. Quem vende isso está mentindo.',
    'Conteúdo infinito sem direção - Não vamos te afogar em 500 horas de aula. Vamos te dar clareza.',
    'Comunidade morta - Se você entrar e não ver atividade, peça reembolso.',
    'Guru em pedestal - Somos operadores reais, não "influencers de LinkedIn".',
    'Promessa de resultado sem trabalho - Você vai ter que FAZER. Nós damos a estrutura, você bota ação.'
];

export default function ClubForWho() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Mas antes, deixa eu ser claro:</h2>
                    <p className={styles.subtitle}>Isso não é para todo mundo.</p>
                    <p className={styles.description}>
                        Não queremos meros espectadores. Queremos formar uma Legião de LENDÁRIOS que constroem o futuro.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={`${styles.card} ${styles.forYou}`}>
                        <h3 className={styles.cardTitle}>O que você VAI encontrar aqui:</h3>
                        <ul className={styles.list}>
                            {vaimostrar.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <i className={`fi fi-rr-octagon-check ${styles.icon} ${styles.iconCheck}`}></i>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styles.card} ${styles.notForYou}`}>
                        <h3 className={styles.cardTitle}>O que você NÃO vai encontrar:</h3>
                        <ul className={styles.list}>
                            {naovaimostrar.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <i className={`fi fi-rr-octagon-xmark ${styles.icon} ${styles.iconCross}`}></i>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.footer}>
                    <p className={styles.footerText}>
                        A decisão real que você está tomando não é "vou comprar ou não".
                    </p>
                    <p className={styles.footerSubtext}>
                        É: "Eu vou continuar sozinho... ou vou fazer parte de algo maior?"
                    </p>
                    <p className={styles.footerHighlight}>
                        A diferença entre essas duas opções? <br />
                        O preço de três cafés.
                    </p>
                </div>
            </div>
        </section>
    );
}
