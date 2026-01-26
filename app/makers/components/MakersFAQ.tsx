'use client';

import React, { useState } from 'react';
import styles from './MakersFAQ.module.css';

const faqs = [
    {
        question: 'Eu não sei programar, eu consigo acompanhar?',
        answer: 'Sim. O método foi desenhado para quem está começando do zero absoluto no código. Você vai aprender a usar IA para construir, além de fundamentos essenciais. Mas seja honesto consigo mesmo: você vai precisar estudar e praticar diariamente.'
    },
    {
        question: 'Eu já sou programador sênior, não vai ser muito básico?',
        answer: 'Não. Temos vários devs experientes na comunidade. A diferença aqui é o foco total em IA Generativa, arquiteturas específicas para LLMs, integração de agentes e acesso a templates validados que aceleram seu desenvolvimento em meses.'
    },
    {
        question: 'Quanto tempo por dia preciso dedicar?',
        answer: 'Recomendamos no mínimo 1 a 2 horas por dia para acompanhar os módulos e praticar. Nos finais de semana, temos o Build Day que é um pouco mais intenso, mas é onde a mágica da construção acontece.'
    },
    {
        question: 'E se eu não conseguir acompanhar todas as mentorias ao vivo?',
        answer: 'Não se preocupe. Todas as mentorias ficam gravadas e organizadas na nossa plataforma para você assistir quando quiser. Além disso, você tem o suporte direto no WhatsApp para tirar dúvidas pontuais.'
    },
    {
        question: 'Posso usar os templates do curso em projetos de clientes?',
        answer: 'Com certeza! Os templates são seus. Você pode usá-los para acelerar entregas de freelas, criar seu próprio SaaS ou implementar automações na empresa onde trabalha. Foram feitos para serem aplicados no mundo real.'
    },
    {
        question: 'O curso oferece certificado de conclusão?',
        answer: 'Focamos no que importa: seu portfolio. Ao final de 30 dias, você terá sistemas reais no ar. Isso vale mais do que qualquer papel em uma entrevista ou reunião com cliente. No Makers, seu "certificado" é o seu commit no GitHub.'
    },
    {
        question: 'Quanto tempo tenho de acesso ao suporte no WhatsApp?',
        answer: 'Enquanto sua assinatura estiver ativa, você tem acesso ilimitado aos professores. No plano anual, isso garante um ano inteiro de acompanhamento técnico direto para todos os seus projetos.'
    }
];

export default function MakersFAQ() {
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
                    <h2 className={styles.title}>FAQ - Dúvidas Frequentes</h2>
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
                    <p>Ficou com alguma outra dúvida? Nosso time está pronto para te ajudar.</p>
                    <div className={styles.ctaWrapper} onClick={handleWhatsAppClick}>
                        <button className={styles.ctaButton}>
                            Tirar dúvidas no WhatsApp
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
