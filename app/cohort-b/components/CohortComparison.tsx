'use client';

import React from 'react';
import styles from './CohortComparison.module.css';

const comparisonData = [
    { category: 'CUSTOS VISÍVEIS', isHeader: true },
    { metric: 'Custo/ano', clt: 'R$ 1.673.676', freelancer: 'R$ 2.246.400', aios: 'R$ 8.000' },
    { metric: 'Contratação', clt: 'R$ 315.000', freelancer: 'R$ 0', aios: 'R$ 0' },
    { metric: 'Onboarding', clt: 'R$ 45.000', freelancer: 'R$ 0', aios: 'R$ 0' },
    { category: 'CUSTOS OCULTOS', isHeader: true },
    { metric: 'Turnover', clt: '25%/ano', freelancer: 'Alto', aios: '0%' },
    { metric: 'Substituição', clt: 'R$ 800k+/ano', freelancer: 'Variável', aios: 'R$ 0' },
    { metric: 'Tempo p/ contratar', clt: '270-810 dias', freelancer: '1-4 semanas', aios: 'Imediato' },
    { category: 'RISCOS', isHeader: true },
    { metric: 'Consistência', clt: 'Variável', freelancer: 'Baixa', aios: '100%' },
    { metric: 'Disponibilidade', clt: '8h/dia', freelancer: 'Quando quer', aios: '24/7/365' },
    { metric: 'Escala', clt: '+custo linear', freelancer: '+custo', aios: 'Mesmo custo' },
];

const totals = {
    clt: 'R$ 2.033.676',
    freelancer: 'R$ 2.246.400',
    aios: 'R$ 8.000',
    savingsClt: 'R$ 2.025.676',
    savingsFreelancer: 'R$ 2.238.400'
};

export default function CohortComparison() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>A Comparação Que Ninguém Quer Ver</span>
                    <h2 className={styles.title}>
                        CLT vs Freelancer vs <span className={styles.titleHighlight}>AIOS</span>
                    </h2>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.metricHeader}></th>
                                <th className={styles.optionHeader}>
                                    <span className={styles.optionTitle}>Contratar CLT</span>
                                    <span className={styles.optionSubtitle}>Time tradicional</span>
                                </th>
                                <th className={styles.optionHeader}>
                                    <span className={styles.optionTitle}>Freelancers</span>
                                    <span className={styles.optionSubtitle}>Sob demanda</span>
                                </th>
                                <th className={`${styles.optionHeader} ${styles.highlighted}`}>
                                    <span className={styles.optionTitle}>AIOS</span>
                                    <span className={styles.optionSubtitle}>9 agentes IA</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                row.isHeader ? (
                                    <tr key={index} className={styles.categoryRow}>
                                        <td colSpan={4} className={styles.categoryCell}>
                                            {row.category}
                                        </td>
                                    </tr>
                                ) : (
                                    <tr key={index} className={styles.dataRow}>
                                        <td className={styles.metricCell}>{row.metric}</td>
                                        <td className={styles.valueCell}>{row.clt}</td>
                                        <td className={styles.valueCell}>{row.freelancer}</td>
                                        <td className={`${styles.valueCell} ${styles.highlightedCell}`}>
                                            {row.aios}
                                        </td>
                                    </tr>
                                )
                            ))}
                            <tr className={styles.totalRow}>
                                <td className={styles.totalLabel}>TOTAL ANO 1</td>
                                <td className={styles.totalValue}>{totals.clt}</td>
                                <td className={styles.totalValue}>{totals.freelancer}</td>
                                <td className={`${styles.totalValue} ${styles.totalHighlighted}`}>
                                    {totals.aios}
                                </td>
                            </tr>
                            <tr className={styles.savingsRow}>
                                <td className={styles.savingsLabel}>ECONOMIA vs CLT</td>
                                <td className={styles.savingsEmpty}>—</td>
                                <td className={styles.savingsEmpty}>—</td>
                                <td className={styles.savingsValue}>{totals.savingsClt}</td>
                            </tr>
                            <tr className={styles.savingsRow}>
                                <td className={styles.savingsLabel}>ECONOMIA vs Freelancer</td>
                                <td className={styles.savingsEmpty}>—</td>
                                <td className={styles.savingsEmpty}>—</td>
                                <td className={styles.savingsValue}>{totals.savingsFreelancer}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.sources}>
                    <span>Fontes: Glassdoor, PM3, Robert Half, SHRM, McKinsey, Google for Startups</span>
                </div>
            </div>
        </section>
    );
}
