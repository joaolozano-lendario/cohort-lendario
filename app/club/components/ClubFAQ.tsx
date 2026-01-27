'use client';

import React, { useState } from 'react';
import styles from './ClubFAQ.module.css';

const faqs = [
    {
        question: 'Eu sou iniciante, isso é pra mim?',
        answer: 'SIM. 47.8% da base está na Trilha A (sem contexto). Foi feito exatamente pra você.'
    },
    {
        question: 'Eu já sei o básico, não vai ser muito iniciante?',
        answer: 'NÃO. Tem 3 trilhas. Se você tem contexto, vai pra Trilha B (amplificação).'
    },
    {
        question: 'Eu não tenho tempo para participar de tudo.',
        answer: 'Não precisa. Escolhe o que faz sentido pro seu momento. O conteúdo fica gravado.'
    },
    {
        question: 'Como sei se a comunidade está ativa?',
        answer: 'Entra e vê. Se em 7 dias você não ver atividade diária, pede reembolso.'
    },
    {
        question: 'E se eu quiser evoluir depois para Makers ou Business?',
        answer: 'Faz upgrade. E o que você já pagou desconta do novo plano.'
    },
    {
        question: 'Tem limite de vagas?',
        answer: 'Não. Mas quanto mais gente entra, mais valiosa fica a rede.'
    }
];

export default function ClubFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleWhatsAppClick = () => {
        const numbers = [
            'https://wa.me/5521998628489',
            'https://wa.me/5548996172481'
        ];
        const randomIndex = Math.random() < 0.5 ? 0 : 1;
        window.open(numbers[randomIndex], '_blank');
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Perguntas Frequentes</h2>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className={styles.question}>
                                <span>{faq.question}</span>
                                <span className={styles.icon}>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && (
                                <div className={styles.answer}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <p>Tem alguma outra dúvida? Fala com o time de suporte.</p>
                    <div className={styles.ctaWrapper} onClick={handleWhatsAppClick}>
                        <button className={styles.ctaButton}>
                            Falar com o suporte no WhatsApp
                        </button>
                        <div className={styles.arrowButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
