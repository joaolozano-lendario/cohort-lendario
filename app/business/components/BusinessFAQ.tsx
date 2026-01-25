'use client';

import React, { useState } from 'react';
import styles from './BusinessFAQ.module.css';

const faqs = [
    {
        question: 'Nunca construí um negócio antes. Esse programa é para mim?',
        answer: 'Sim. O método foi desenhado exatamente para técnicos que dominam a criação mas não sabem estruturar o comercial. Você vai aprender posicionamento, oferta, canais, vendas e operação do zero — com acompanhamento semanal para não travar.'
    },
    {
        question: 'Já tenho um negócio. O Business serve para mim?',
        answer: 'Sim. Se você quer escalar, melhorar posicionamento, aumentar ticket médio, dominar novos canais ou blindar operação — o programa foi feito para isso também. Vários Lendários usam para potencializar negócios existentes.'
    },
    {
        question: 'Preciso ter um sistema pronto para entrar?',
        answer: 'Não. Você pode entrar com uma ideia validada ou com sistema já criado. O importante é ter clareza sobre qual dor você resolve e estar disposto a estruturar o negócio em volta.'
    },
    {
        question: 'Qual a diferença entre Makers e Business?',
        answer: 'Makers: foco em dominar criação técnica (Cloud Code, automações, aplicações). Business: foco em monetizar (posicionamento, oferta, canais, vendas, operação). Se você quer criar, vai pro Makers. Se quer faturar com o que cria, vai pro Business (que inclui tudo do Makers no anual).'
    },
    {
        question: 'Quantas mentorias posso participar por mês?',
        answer: 'São 8 sessões por semana, totalizando mais de 60 horas mensais. Você escolhe quais participar conforme suas necessidades: vendas, marketing, growth, operações, etc.'
    },
    {
        question: 'E se eu perder uma mentoria ao vivo?',
        answer: 'Todas as mentorias ficam gravadas por 90 dias. Mas o ideal é participar ao vivo para tirar dúvidas específicas e validar seus próximos passos em tempo real.'
    },
    {
        question: 'Vou ter acesso direto aos mentores?',
        answer: 'Sim, nas mentorias ao vivo (8x/semana). Você pode fazer perguntas, apresentar seu caso, pedir validação. Não é conteúdo gravado — é acompanhamento real.'
    }
];

export default function BusinessFAQ() {
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
                    <h2 className={styles.title}>FAQ - Perguntas Frequentes</h2>
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
