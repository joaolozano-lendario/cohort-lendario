'use client';

import React from 'react';
import styles from './CohortProblem.module.css';

const costTable = [
    { item: "Time CLT (9 funções/ano)", value: "R$ 1.673.676", source: "Glassdoor, PM3" },
    { item: "Freelancers (9 funções/ano)", value: "R$ 2.246.400", source: "Workana, Crowd" },
    { item: "Custo de contratação", value: "R$ 315.000", source: "SHRM" },
    { item: "Tempo para contratar", value: "270-810 dias", source: "Revelo" },
    { item: "Risco de turnover", value: "25% ao ano", source: "McKinsey" },
];

const painBullets = [
    "79% das empresas têm dificuldade de encontrar talentos tech",
    "Déficit de 530.000 profissionais de TI até 2025",
    "Profissionais bons recebem 3-5 propostas por semana",
    "Freelancer bom cobra R$ 200-400/hora (e nem sempre está disponível)",
];

export default function CohortProblem() {
    return (
        <section className={styles.section}>
            <div className={styles.blurCircle}></div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>O Problema Que Ninguém Fala</span>
                    <h2 className={styles.title}>
                        Você sabe quanto custa <span className={styles.titleHighlight}>REALMENTE</span>
                        <br />montar um <span className={styles.titleHighlight}>time de produto</span>?
                    </h2>
                </div>

                {/* Cost Table Block */}
                <div className={styles.identificationBlock}>
                    <div className={styles.identificationHeader}>
                        <div className={styles.identificationIcon}>
                            <i className="fi fi-rr-calculator-money"></i>
                        </div>
                        <h3 className={styles.identificationTitle}>
                            A conta que ninguém faz:
                        </h3>
                    </div>

                    <div className={styles.costTable}>
                        {costTable.map((row, index) => (
                            <div key={index} className={styles.costRow}>
                                <span className={styles.costItem}>{row.item}</span>
                                <span className={styles.costValue}>{row.value}</span>
                                <span className={styles.costSource}>{row.source}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.painBulletsSection}>
                        <p className={styles.painBulletsIntro}>E mesmo pagando tudo isso, você ainda enfrenta:</p>
                        <div className={styles.painBullets}>
                            {painBullets.map((bullet, index) => (
                                <div key={index} className={styles.painBullet}>
                                    <span className={styles.painX}>✕</span>
                                    <span>{bullet}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Absolution Section */}
                <div className={styles.absolution}>
                    <div className={styles.absolutionLeft}>
                        <h3 className={styles.absolutionTitle}>A Pergunta Não É SE</h3>
                        <p className={styles.absolutionText}>
                            você precisa de um time.
                        </p>
                    </div>
                    <div className={styles.absolutionRight}>
                        <h3 className={styles.absolutionTitle}>É COMO</h3>
                        <p className={styles.absolutionHighlight}>
                            você vai montar um sem quebrar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
