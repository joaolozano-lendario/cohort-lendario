'use client';

import React, { useState } from 'react';
import styles from './CohortFAQ.module.css';

const faqs = [
    {
        question: "Será que EU vou conseguir?",
        answer: "Depende. Isso aqui não é curso passivo pra assistir no 2x. Exige dedicação real: 8 semanas de aulas ao vivo, prática entre as aulas, e disposição pra errar até acertar. Se você quer só 'aprender sobre IA', não é pra você. Se quer FAZER acontecer e está disposto a colocar as horas, sim — você consegue. 91% dos alunos não sabiam programar."
    },
    {
        question: "E se eu me perder no meio do cohort?",
        answer: "Squads por nível com mentoria técnica direta. Não é 'aluno ajudando aluno'. Equipe técnica acompanha de perto. Todas as aulas ficam gravadas. Mas atenção: gravação é backup, não plano A. O resultado vem de quem participa ao vivo."
    },
    {
        question: "Preciso saber programar?",
        answer: "Não precisa ser dev. Mas precisa entender vocabulário técnico básico: Git, API, Deploy. As aulas de reforço pré-cohort nivelam isso. Se você nunca abriu um terminal na vida, talvez precise se preparar antes."
    },
    {
        question: "Quanto vou gastar em tokens por mês?",
        answer: "A Aula 6 foca em otimização de custos. Alunos que aplicam as técnicas reduzem 40-60% do consumo. Média de R$50-100/mês para projetos ativos."
    },
    {
        question: "E se a IA apagar meus arquivos ou quebrar meu projeto?",
        answer: "Na Aula 1 você configura sandboxes e backups automáticos. Na Aula 7 (Segurança), reforçamos proteção de dados em detalhes. Zero risco de destruição."
    },
    {
        question: "Posso entrar se ainda uso Lovable ou Cursor?",
        answer: "Sim. A Aula 1 cobre exatamente a migração do Lovable/AI Studio para ambiente profissional. É um dos casos de uso mais comuns."
    },
    {
        question: "Quando começa e qual o horário?",
        answer: "12 de Fevereiro de 2026. Quinta 14h OU Quarta 19h (definido com a turma). Todas as aulas são gravadas."
    },
    {
        question: "E se eu não gostar?",
        answer: "Garantia de 100% do dinheiro de volta até a Aula 2. Sem perguntas, sem burocracia."
    },
    {
        question: "Qual a configuração mínima do computador?",
        answer: "4-8GB de RAM é suficiente. O processamento pesado acontece nos servidores da Anthropic, não no seu computador. Você precisa de Claude Pro ou Max ativo."
    },
    {
        question: "Qual modelo do Claude preciso usar?",
        answer: "Você aprende a usar cada modelo no momento certo. Haiku para tarefas simples, Sonnet para produção, Opus para raciocínio complexo."
    }
];

export default function CohortFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Dúvidas Frequentes</span>
                    <h2 className={styles.title}>
                        Perguntas que Você <span className={styles.titleHighlight}>Provavelmente Tem</span>
                    </h2>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={styles.questionText}>{faq.question}</span>
                                <span className={styles.faqIcon}>
                                    <i className={`fi ${openIndex === index ? 'fi-rr-minus' : 'fi-rr-plus'}`}></i>
                                </span>
                            </button>
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.finalCTA}>
                    <h3 className={styles.finalTitle}>Pronto Para Começar?</h3>
                    <p className={styles.finalText}>
                        Turma começa <strong>12 de Fevereiro</strong>. Vagas limitadas a ~50 alunos.
                    </p>
                    <a href="#precos" className={styles.ctaWrapper}>
                        <span className={styles.ctaButton}>Quero Minha Vaga</span>
                        <div className={styles.arrowButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
