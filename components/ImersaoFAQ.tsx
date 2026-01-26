"use client";
import React, { useState } from 'react';
import styles from './ImersaoFAQ.module.css';

const faqData = [
    {
        question: "Não tenho conhecimento técnico. Vou conseguir?",
        answer: "Sim. A imersão foi feita exatamente para empresários sem formação técnica. O José é chamado de “Tradutor Apaixonado” por isso: ele traduz complexidade em clareza. Se você sabe usar computador e internet, você consegue."
    },
    {
        question: "Preciso de software específico?",
        answer: "Não. Só precisa de computador (Mac, Windows, Linux) com internet boa. Tudo que a gente usa é online, pelo navegador. Qualquer cadastro necessário, a gente orienta antes."
    },
    {
        question: "E se eu perder alguma sessão?",
        answer: "Tudo fica gravado por 90 dias. Mas a real é que o valor está na interação ao vivo com os especialistas, nas suas dúvidas sendo resolvidas em tempo real. Gravação é backup, não substitui estar lá."
    },
    {
        question: "Meu negócio é muito específico. Funciona pra mim?",
        answer: "Nosso framework funciona para qualquer mercado. A gente já implementou em consultório médico, e-commerce, agência, infoproduto, prestador de serviço B2B, escritório de contabilidade... dezenas de nichos diferentes. O que muda é a aplicação específica, e é isso que a gente constrói com você."
    },
    {
        question: "Que nível de automação eu consigo?",
        answer: "Depende do seu negócio e da sua escolha no mapeamento do Dia 1. Tem quem foque em atendimento (reduz 70%+ do tempo de resposta), outros em criação de conteúdo (produz 5x mais rápido), outros em análise de dados (relatórios que levavam dias agora em minutos). Você define a prioridade; a gente garante a implementação."
    },
    {
        question: "Posso levar alguém da equipe?",
        answer: "Cada ingresso é individual. Se você quer trazer alguém do time, cada um precisa do seu. Isso garante que todo mundo tenha acesso ao suporte individualizado e aos materiais completos."
    },
    {
        question: "Vou ter que pagar mais coisas depois?",
        answer: "Depende da ferramenta. Algumas têm plano gratuito robusto, outras têm custo operacional (geralmente bem menor que contratar pessoas). Durante a imersão, a gente deixa claro todos os custos da sua solução específica, para você decidir informado."
    },
    {
        question: "Preciso ficar até 23h no plantão?",
        answer: "Não, é opcional. Mas é recomendado. O plantão existe para você ter suporte aprofundado nas suas dúvidas específicas. Você escolhe a sala com base na sua necessidade. Não é obrigatório ficar até o final — saia quando resolver o que precisa."
    },
    {
        question: "Posso pedir reembolso depois do Dia 2?",
        answer: "Não. A garantia vale só até 23h59 do sábado, depois de você participar do Dia 1 completo. Porque a gente entrega valor já no primeiro dia. Se você participa do Dia 2, é porque viu valor e escolheu continuar. A garantia existe para eliminar seu risco inicial, não para criar saída depois de consumir tudo."
    },
    {
        question: "Vou receber certificado?",
        answer: "Sim. Todo mundo que completa os 2 dias recebe o Certificado de Conclusão da Imersão Prática de IA para Negócios — Academia Lendária."
    }
];

const ImersaoFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Split data into two columns for independent layout
    const leftColumn = faqData.filter((_, index) => index % 2 === 0);
    const rightColumn = faqData.filter((_, index) => index % 2 !== 0);

    const renderFAQItem = (item: typeof faqData[0], originalIndex: number) => (
        <div
            key={originalIndex}
            className={`${styles.faqItem} ${activeIndex === originalIndex ? styles.active : ''}`}
        >
            <button
                className={styles.question}
                onClick={() => toggleFAQ(originalIndex)}
            >
                {item.question}
                <span className={styles.icon}>+</span>
            </button>
            {activeIndex === originalIndex && (
                <div className={styles.answer}>
                    {item.answer}
                </div>
            )}
        </div>
    );

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>Perguntas Comuns</h2>
                <div className={styles.faqList}>
                    <div className={styles.column}>
                        {leftColumn.map((item, index) => renderFAQItem(item, index * 2))}
                    </div>
                    <div className={styles.column}>
                        {rightColumn.map((item, index) => renderFAQItem(item, index * 2 + 1))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImersaoFAQ;
