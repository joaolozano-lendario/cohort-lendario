'use client';

import React from 'react';
import styles from './AcademyProof.module.css';

const testimonials = [
    {
        quote: 'Passei 3 anos criando projetos que ninguém comprava. Em 45 dias no Business, fechei mais do que em 3 anos.',
        author: 'Gustavo, 33, Desenvolvedor Full Stack'
    },
    {
        quote: 'Meu primeiro cliente pagou o ano inteiro do Business. O segundo pagou minha transição do CLT.',
        author: 'Eduardo, 43, Ex-Gerente de TI'
    },
    {
        quote: 'Com 54 anos achei que estava obsoleto. Hoje sou consultor de IA em logística.',
        author: 'Marcos, 54, Ex-Diretor de Operações'
    }
];

export default function AcademyProof() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Quem Já Está no Caminho</h2>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <p className={styles.quote}>"{item.quote}"</p>
                            <p className={styles.author}>— {item.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
