'use client';

import React, { useState } from 'react';
import styles from './CohortFAQ.module.css';

const faqs = [
    {
        question: "R$ 109.000/mês de economia parece exagerado. É real?",
        answer: "É matemática, não marketing. 9 agentes economizam em média 31h/semana cada. Total: 282h/semana × 4 = 1.128h/mês. Valor médio/hora: R$ 97 (média ponderada dos 9 cargos). 1.128h × R$ 97 = R$ 109.416. Todos os salários são de fontes públicas: Glassdoor, PM3, Salario.com.br (dados CAGED)."
    },
    {
        question: "IA não substitui humano de verdade, substitui?",
        answer: "Correto - e não é isso que estamos dizendo. AIOS executa tarefas repetitivas e estruturadas (80% do trabalho), segue padrões e frameworks já definidos, gera outputs que humanos revisam. Uma calculadora não 'substitui' um contador. Mas um contador sem calculadora é 10x mais lento que um com. AIOS é a 'calculadora' para trabalho de produto/desenvolvimento."
    },
    {
        question: "E se eu não usar todos os 9 agentes?",
        answer: "A economia é proporcional. Só @dev = R$ 14.976/mês (payback 16 dias). @dev + @qa = R$ 28.248/mês (payback 8.5 dias). @dev + @qa + @pm = R$ 43.816/mês (payback 5.5 dias). Todos os 9 = R$ 109.164/mês (payback 2.2 dias)."
    },
    {
        question: "Preciso saber programar para usar?",
        answer: "Depende do agente. @dev ajuda mas não é obrigatório. @devops, @architect, @qa, @pm, @po, @ux, @analyst: NÃO precisa. @data-eng ajuda para validar. O Cohort existe para isso: você aprende a OPERAR os agentes, não a programar."
    },
    {
        question: "E se a qualidade do output for ruim?",
        answer: "A qualidade é consistente por design. Quality Gates obrigatórios - @devops só faz push se passar: lint, test, typecheck, build, CodeRabbit. Revisão em camadas - @dev escreve → @qa revisa → @devops valida → você aprova. Self-healing - Se CodeRabbit encontra problema CRITICAL, @dev corrige automaticamente (até 3x)."
    },
    {
        question: "Por que R$ 8.000 único e não assinatura mensal?",
        answer: "Você aprende a operar - não fica dependente de plataforma. Conhecimento é seu - mesmo se a ferramenta mudar. ROI infinito - depois de pagar, cada mês é lucro puro. Se fosse SaaS de R$ 2.000/mês, em 5 anos você pagaria R$ 120.000. Com o cohort, paga R$ 8.000 uma vez."
    },
    {
        question: "Já tenho time. Vou ter que demitir todo mundo?",
        answer: "Não. AIOS multiplica seu time, não substitui. Antes: 1 dev faz 5 stories/sprint. Depois: 1 dev + @dev faz 15 stories/sprint. Antes: PM gasta 20h em PRDs. Depois: PM gasta 2h em PRDs, 18h em estratégia. Planilhas não demitiram contadores. Demitiram contadores que não usavam planilhas."
    },
    {
        question: "E o custo das ferramentas de IA (API, etc)?",
        answer: "Custo operacional existe, mas é marginal. API Claude/GPT: R$ 200-500/mês. GitHub Copilot (opcional): R$ 100. Ferramentas (CodeRabbit, etc): R$ 100-300. Total operacional: R$ 400-900/mês máximo. Economia líquida: R$ 108.264/mês."
    },
    {
        question: "Prefiro esperar a tecnologia amadurecer...",
        answer: "Custo de esperar: 1 mês = R$ 109.164 perdidos. 3 meses = R$ 327.492 perdidos. 6 meses = R$ 654.984 perdidos. 1 ano = R$ 1.309.968 perdidos. Enquanto isso, seus concorrentes já estão usando, produzem 3x mais com mesmo custo, e ganham mercado enquanto você 'espera'. A tecnologia JÁ amadureceu."
    },
    {
        question: "E se eu não gostar?",
        answer: "Garantia de 100% do dinheiro de volta até a Aula 2. Sem perguntas, sem burocracia. Quem passa das 2 primeiras aulas não quer sair."
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
                    <span className={styles.eyebrow}>Objeções Respondidas</span>
                    <h2 className={styles.title}>
                        A <span className={styles.titleHighlight}>Matemática</span> Não Mente
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
                    <h3 className={styles.finalTitle}>A Decisão É Sua</h3>
                    <p className={styles.finalText}>
                        A cada dia que você espera, você perde <strong>R$ 3.638</strong>.
                    </p>
                    <a href="#precos" className={styles.ctaWrapper}>
                        <span className={styles.ctaButton}>Calcular Minha Economia</span>
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
