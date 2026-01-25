'use client';

import React from 'react';
import styles from './BusinessForWho.module.css';

const forYou = [
    'Você tem visão de mercado. Identifica oportunidades que outros não veem e sabe que pode criar algo único.',
    'Você está disposto a trabalhar. Não quer fórmula mágica, quer método validado e está pronto para executar.',
    'Você pensa grande. Não quer "fechar uns projetinhos". Quer construir um negócio escalável, criar equity e/ou deixar legado.',
    'Você valoriza o acompanhamento real. Prefere ter especialistas validando cada passo do que tentar sozinho na tentativa e erro.',
    'Você age rápido. Entende que janela de oportunidade fecha e não fica "pensando" por meses.'
];

const notForYou = [
    'Você quer resultado sem esforço. Acha que vai pagar e o dinheiro vai cair do céu sem você fazer nada.',
    'Você só quer "aprender sobre IA". Não tem ideia própria, não tem dor para resolver, não está disposto a construir.',
    'Você quer ficar só na técnica. Prefere mexer no código do que pensar em posicionamento, oferta e vendas.',
    'Você não tem visão de negócio. Acha que "bom produto vende sozinho" e não está disposto a entender o jogo comercial.',
    'Você é indeciso crônico. Vai "avaliar", "pensar", "ver se dá" — enquanto o mercado passa por você.'
];

export default function BusinessForWho() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Mas antes, deixa eu ser claro:</h2>
                    <p className={styles.subtitle}>Isso não é para todo mundo.</p>
                    <p className={styles.description}>
                        Não queremos qualquer pessoa. Queremos formar uma Legião de Lendários de Verdade.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={`${styles.card} ${styles.forYou}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.checkIcon}>✓</span>
                            <h3 className={styles.cardTitle}>Esse programa é para você se:</h3>
                        </div>
                        <ul className={styles.list}>
                            {forYou.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <span className={styles.bullet}>✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styles.card} ${styles.notForYou}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.xIcon}>✗</span>
                            <h3 className={styles.cardTitle}>Esse programa NÃO é para você se:</h3>
                        </div>
                        <ul className={styles.list}>
                            {notForYou.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <span className={styles.bulletRed}>✗</span>
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
                        Sério. A gente não quer você com a gente, muito menos seu dinheiro se você não está pronto.
                    </p>
                    <p className={styles.footerHighlight}>
                        Mas se você é do primeiro grupo…<br />
                        Continue lendo. Porque o que vem a seguir pode mudar completamente a trajetória do seu negócio.
                    </p>
                </div>
            </div>
        </section>
    );
}
