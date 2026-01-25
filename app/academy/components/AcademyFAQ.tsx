'use client';

import React, { useState } from 'react';
import styles from './AcademyFAQ.module.css';

const faqs = [
    {
        question: 'Qual a diferença entre os 3 programas?',
        answer: 'Comunidade é pra clareza e networking. Makers é pra dominar criação técnica. Business é pra transformar em negócio que vende.'
    },
    {
        question: 'Posso começar na Comunidade e fazer upgrade depois?',
        answer: 'Sim. O que você já pagou desconta do próximo tier.'
    },
    {
        question: 'Eu não sei programar, consigo acompanhar o Makers?',
        answer: 'Sim. 95% dos nossos alunos não sabiam. O Cloud Code foi feito pra quem não programa.'
    },
    {
        question: 'O que acontece se eu não conseguir vender em 90 dias?',
        answer: 'Se você seguiu o método, participou das mentorias e executou as tarefas, você ganha +90 dias de acompanhamento grátis.'
    },
    {
        question: 'Tem limite de vagas?',
        answer: 'Não. Você pode entrar quando quiser.'
    },
    {
        question: 'Quanto tempo preciso dedicar por semana?',
        answer: 'Comunidade: 3-5h. Makers: 5-10h. Business: 8-12h.'
    }
];

export default function AcademyFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Perguntas Frequentes</h2>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.item}>
                            <div
                                className={styles.question}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.icon}>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
