'use client';

import React from 'react';
import styles from './MakersForWho.module.css';

const forYou = [
    'Você já tem a visão da solução, mas trava quando o assunto é escolher a stack ou integrar as APIs.',
    'Você quer sair do eterno "planejando" e ir finalmente para o "lançando" — com algo de valor real no ar.',
    'Você quer fluência técnica de verdade. Quer entender arquitetura, Cloud Functions e bases vetoriais.',
    'Você valoriza o tempo. Prefere ter um senior te destravando em 15 minutos no WhatsApp do que perder 3 dias no Google.',
    'Você entende que o futuro pertence aos Builders. E está pronto para botar a mão na massa por 30 dias.'
];

const notForYou = [
    'Você quer que façam tudo por você. O Makers é sobre VOCÊ construir com nosso suporte, não sobre agência.',
    'Você não tem 1-2h por dia para se dedicar. Construir exige tempo e foco, sem atalhos mágicos.',
    'Você acha que tutorial de YouTube é suficiente. Se fosse, você não estaria travado onde está hoje.',
    'Você prefere ficar teorizando sobre o futuro da IA do que realmente construir as ferramentas desse futuro.',
    'Você tem medo de errar, de quebrar o código e de recomeçar se precisar. O Makers é campo de batalha técnico.'
];

export default function MakersForWho() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Mas antes, deixa eu ser claro:</h2>
                    <p className={styles.subtitle}>Isso não é para todo mundo.</p>
                    <p className={styles.description}>
                        Não queremos meros espectadores. Queremos formar uma Legião de MAKERS que constroem o futuro.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={`${styles.card} ${styles.forYou}`}>
                        <h3 className={styles.cardTitle}>O Makers é para você se:</h3>
                        <ul className={styles.list}>
                            {forYou.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <i className={`fi fi-rr-octagon-check ${styles.icon} ${styles.iconCheck}`}></i>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styles.card} ${styles.notForYou}`}>
                        <h3 className={styles.cardTitle}>O Makers NÃO é para você se:</h3>
                        <ul className={styles.list}>
                            {notForYou.map((item, index) => (
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
                        Se você se identificou com o segundo grupo, pode fechar essa página agora.
                    </p>
                    <p className={styles.footerSubtext}>
                        Sério. A gente não quer meros colecionadores de cursos. Queremos quem EXECUTA.
                    </p>
                    <p className={styles.footerHighlight}>
                        Mas se você é um Builder por natureza…<br />
                        Continue lendo. Porque os próximos 30 dias vão mudar o seu nível técnico para sempre.
                    </p>
                </div>
            </div>
        </section>
    );
}
