'use client';

import React from 'react';
import styles from './AcademyWhyBusiness.module.css';

const points = [
    {
        icon: '📉',
        title: 'CRIAÇÃO VIROU COMMODITY',
        description: 'Em 6 meses todo mundo vai saber criar com IA. O diferencial será saber VENDER.'
    },
    {
        icon: '🏢',
        title: 'COMO ALUGAR UM DEPARTAMENTO',
        description: 'Time técnico + time de negócios + ferramentas. Por menos de R$33/dia.'
    },
    {
        icon: '🛡️',
        title: 'GARANTIA REAL',
        description: 'Não vendeu em 90 dias seguindo o método? +90 dias grátis de acompanhamento.'
    }
];

export default function AcademyWhyBusiness() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Por Que o Business é Recomendado?</h2>

                <div className={styles.grid}>
                    {points.map((point, index) => (
                        <div key={index} className={styles.pointCard}>
                            <div className={styles.icon}>{point.icon}</div>
                            <h3 className={styles.pointTitle}>{point.title}</h3>
                            <p className={styles.pointDescription}>{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
