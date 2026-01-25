'use client';

import React from 'react';
import styles from './AcademyComparison.module.css';

const rows = [
    { label: 'Preço/mês', values: ['R$ 88', 'R$ 488', 'R$ 988'] },
    { label: 'Posicionamento', values: ['Eu Entendo', 'Eu Construo', 'Eu Vendo'] },
    { label: 'Comunidade +15k', values: [true, true, true] },
    { label: 'Mentorias Semanais', values: [true, true, true] },
    { label: 'Hubs Presenciais', values: [true, true, true] },
    { label: 'Cloud Code Profundo', values: [false, true, true] },
    { label: 'Sprint Automação', values: [false, true, true] },
    { label: 'Mentorias Técnicas 8x/sem', values: [false, true, true] },
    { label: 'WhatsApp Professores', values: [false, true, true] },
    { label: 'Método Vendas p/ Técnicos', values: [false, false, true] },
    { label: 'Mentorias de Negócios', values: [false, false, true] },
    { label: 'Playbook Prospecção', values: [false, false, true] },
    { label: 'Resultado', values: ['Clareza 90d', 'Deploy 30d', 'Vendas 90d'] }
];

export default function AcademyComparison() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Comparativo Rápido</h2>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Comunidade</th>
                                <th>Makers</th>
                                <th>Business</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <td className={styles.label}>{row.label}</td>
                                    {row.values.map((val, idx) => (
                                        <td key={idx} className={styles.value}>
                                            {typeof val === 'boolean' ? (
                                                val ? <span className={styles.check}>✅</span> : <span className={styles.dash}>—</span>
                                            ) : (
                                                val
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
