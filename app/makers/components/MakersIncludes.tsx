'use client';

import React from 'react';
import styles from './MakersIncludes.module.css';

const includes = [
    {
        number: 'Pilar 01',
        icon: 'fi-rr-users',
        title: 'Tudo da Comunidade Lendária',
        subtitle: 'Networking, Eventos e Hubs Presenciais',
        description: 'Você já entra com pé direito: Circle com +15 mil Lendários, Mentorias semanais gerais, Hubs presenciais (+50 no mundo), Clube do Livro e um networking de elite que vale o investimento sozinho.'
    },
    {
        number: 'Pilar 02',
        icon: 'fi-rr-square-terminal',
        title: 'Sistema Cloud Code Profundo™',
        subtitle: 'Do Concept até o Deploy Real',
        description: 'Não é "assiste aula e vira sozinho". É um sistema completo passo a passo. Dos fundamentos de arquitetura e modelos de IA, passando por APIs (OpenAI, Anthropic) e Vector Databases, até o deploy profissional em produção.'
    },
    {
        number: 'Pilar 03',
        icon: 'fi-rr-code-branch',
        title: 'Sprint de Automação (14 dias)',
        subtitle: 'N8N e Make Dominados em 2 Semanas',
        description: 'Domine as ferramentas de automação mais poderosas do mercado. Em 14 dias você sai de zero conhecimento para ter automações complexas multi-step rodando integradas com IA.'
    },
    {
        number: 'Apoio 04',
        icon: 'fi-rr-videoconference',
        title: 'Mentorias Técnicas Ao Vivo',
        subtitle: '8 Vezes por Semana',
        description: 'Não é palestra. É destrave técnico real. São +60 horas por mês de suporte ao vivo para resolver problemas gerais, Cloud, Deploy, APIs e Code Review.',
        specialists: [
            'Segunda, Quarta, Sexta (20h): Mentoria técnica geral',
            'Terça (20h): Cloud e Deploy - do localhost para a nuvem',
            'Quinta (20h): APIs e Integrações - conecte tudo',
            'Sábado (10h): Code Review - feedback senior',
            'Sábado (15h): Build Day - construção intensiva',
            'Domingo (19h): Office Hours - dúvidas abertas'
        ]
    },
    {
        number: 'Apoio 05',
        icon: 'fi-rr-template-alt',
        title: 'Templates & Automações',
        subtitle: 'Fork e Deploy em 30 Minutos',
        description: 'Biblioteca de templates de Chatbots com memória, Agentes de pesquisa, Sistemas multi-agente e automações de CRM/Email validadas. Você não começa do zero.'
    },
    {
        number: 'Apoio 06',
        icon: 'fi-rr-comment',
        title: 'Professores no WhatsApp',
        subtitle: 'Suporte Direto e Destrave Rápido',
        description: 'Acesso direto aos mesmos professores que dão as aulas. Travou no código? Manda mensagem. Quer validar uma arquitetura? Pede opinião. Resposta rápida.'
    }
];

export default function MakersIncludes() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.blurCircle}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.mainTitle}>
                        O Que Você Recebe<br />
                        no Lendários Makers
                    </h2>
                    <p className={styles.subtitle}>
                        Não é curso. A gente não quer que você só "saiba".<br />
                        A gente quer que você TENHA sistemas funcionando e portfolio pronto.
                    </p>
                </div>

                <div className={styles.singleColumn}>
                    <div className={styles.timeline}>
                        {includes.map((item, index) => (
                            <div key={index} className={styles.item}>
                                <div className={styles.itemIcon}>
                                    <i className={`fi ${item.icon}`}></i>
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemNumber}>{item.number}</div>
                                    <h4>{item.title}</h4>
                                    <h5>{item.subtitle}</h5>
                                    <p>{item.description}</p>
                                    {item.specialists && (
                                        <ul className={styles.specialistsList}>
                                            {item.specialists.map((spec, i) => (
                                                <li key={i} className={styles.specialistItem}>{spec}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
