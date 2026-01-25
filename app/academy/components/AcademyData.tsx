'use client';

import React from 'react';
import styles from './AcademyData.module.css';

const stats = [
    {
        percentage: '92.7%',
        title: 'NUNCA VENDERAM NADA',
        description: 'Grande parte nunca fez uma venda sequer. O projeto fica lindo, mas morre no portfólio.'
    },
    {
        percentage: '2.7%',
        title: 'SABEM QUE É VENDAS',
        description: 'Quando perguntamos qual o maior problema, apenas 2.7% falam "vendas". Quase ninguém sabe.'
    },
    {
        percentage: '48.9%',
        title: 'ACHAM QUE FALTA TÉCNICA',
        description: 'Quase metade acha que precisa aprender mais. O gap não é técnico. É comercial.'
    }
];

export default function AcademyData() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>O Padrão Que A Gente Descobriu</h2>
                    <p className={styles.subtitle}>
                        Analisamos <strong>18.179 pessoas</strong> que querem trabalhar com IA. O padrão é brutal:
                    </p>
                </div>

                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.percentage}>{stat.percentage}</h3>
                            <h4 className={styles.statTitle}>{stat.title}</h4>
                            <p className={styles.statDescription}>{stat.description}</p>
                        </div>
                    ))}
                </div>

                <p className={styles.footerText}>
                    Eles não sabem que o problema não é saber criar. <strong>É saber vender o que cria.</strong>
                </p>
            </div>
        </section>
    );
}
