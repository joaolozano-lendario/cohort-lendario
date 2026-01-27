'use client';

import React from 'react';
import styles from './ClubTestimonials.module.css';

const testimonials = [
    {
        name: 'Marina Costa',
        age: 29,
        role: 'Designer → IA Product Manager',
        text: 'Entrei sem saber nada de IA. Em 90 dias recebi oferta de PM em startup de IA. O diferencial não foi só o conteúdo, foi o networking. Conheci meu atual CEO num Hub em SP.'
    },
    {
        name: 'Rafael Mendes',
        age: 34,
        role: 'Desenvolvedor',
        text: 'Estava há 2 anos tentando "aprender IA sozinho". Em 30 dias na Comunidade tive mais clareza que nos 2 anos anteriores. A trilha personalizada foi game changer.'
    },
    {
        name: 'Juliana Ferreira',
        age: 41,
        role: 'Advogada',
        text: 'Sempre achei que era "velha demais" pra tech. A comunidade me mostrou que idade não importa quando você tem a tribo certa. Hoje estou construindo meu primeiro agente jurídico.'
    },
    {
        name: 'Pedro Alves',
        age: 26,
        role: 'Recém-formado',
        text: 'Saí da faculdade perdido. Entrei na Trilha A. Em 60 dias já tinha clareza do meu nicho (IA para saúde mental). Consegui meu primeiro cliente através de uma conexão do Circle.'
    }
];

export default function ClubTestimonials() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Depoimentos de Quem Está Dentro</h2>

                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.userName}>{testimonial.name}, {testimonial.age}</h3>
                                <p className={styles.userRole}>{testimonial.role}</p>
                            </div>
                            <p className={styles.cardText}>"{testimonial.text}"</p>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fi fi-sr-star"></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
