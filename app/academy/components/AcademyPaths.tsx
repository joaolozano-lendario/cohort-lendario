'use client';

import React from 'react';
import styles from './AcademyPaths.module.css';

const paths = [
    {
        tag: '🟢 COMUNIDADE LENDÁRIA',
        concept: '"Eu Entendo"',
        description: 'Para quem quer clareza e fazer parte do movimento.',
        features: [
            'Circle com +15 mil Lendários',
            'Trilhas personalizadas (Clareza/Amplificação/Transição)',
            'Mentorias ao Vivo semanais',
            'Hubs Presenciais (+50 cidades)',
            'Sistema Segundo Cérebro',
            'Networking com founders e operadores'
        ],
        result: 'Resultado: Clareza absoluta em 90 dias',
        oldPrice: 'De R$ 2.029',
        price: 'R$ 88/mês',
        info: 'ou R$ 880/ano (2 meses grátis)',
        guarantee: 'Garantia: 30 dias ou seu dinheiro de volta',
        buttonText: 'ENTRAR NA COMUNIDADE',
        highlight: false
    },
    {
        tag: '🔵 LENDÁRIOS MAKERS',
        concept: '"Eu Construo"',
        description: 'Para quem quer dominar o processo de criação com IA.',
        features: [
            'Tudo da Comunidade incluído',
            'Sistema Cloud Code Profundo™',
            'Sprint de Automação (N8N/Make em 14 dias)',
            'Mentorias Técnicas 8x/semana (+60h/mês)',
            'Biblioteca de Templates prontos',
            'Acesso aos Professores no WhatsApp'
        ],
        result: 'Resultado: 1 sistema deployado em 30 dias',
        oldPrice: 'De R$ 11.217',
        price: 'R$ 488/mês',
        info: 'ou R$ 4.888/ano (2 meses grátis)',
        guarantee: 'Garantia: 30 dias ou seu dinheiro de volta',
        buttonText: 'VIRAR MAKER',
        highlight: false
    },
    {
        tag: '🟡 LENDÁRIOS BUSINESS',
        tagExtra: '⭐ RECOMENDADO',
        concept: '"Eu Vendo"',
        description: 'Para quem quer transformar criação em negócio real.',
        features: [
            'Tudo do Makers incluído',
            'Método Vendas para Técnicos™ (6 semanas)',
            'Sistema Growth IA™',
            'Mentorias de Negócios 2x/semana',
            'Playbook de Prospecção completo',
            'Templates de Contratos, Landing Pages, Criativos',
            'Ferramentas de IA internas da Academia'
        ],
        result: 'Resultado: Primeiros clientes pagantes em 90 dias',
        oldPrice: 'De R$ 26.996',
        price: 'R$ 988/mês',
        info: 'ou R$ 9.888/ano (2 meses grátis)',
        guarantee: 'Não vendeu em 90 dias? +90 dias grátis de acompanhamento',
        buttonText: 'TRANSFORMAR EM NEGÓCIO',
        highlight: true
    }
];

export default function AcademyPaths() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>3 Caminhos A Partir de Agora</h2>
                    <p className={styles.subtitle}>Cada um para um momento diferente da sua jornada.</p>
                </div>

                <div className={styles.grid}>
                    {paths.map((path, index) => (
                        <div key={index} className={`${styles.card} ${path.highlight ? styles.highlightCard : ''}`}>
                            {path.tagExtra && <div className={styles.recommendationTag}>{path.tagExtra}</div>}
                            <div className={styles.cardHeader}>
                                <div className={styles.tag}>{path.tag}</div>
                                <h3 className={styles.concept}>{path.concept}</h3>
                                <p className={styles.description}>{path.description}</p>
                            </div>

                            <ul className={styles.features}>
                                {path.features.map((feature, i) => (
                                    <li key={i}>✓ {feature}</li>
                                ))}
                            </ul>

                            <div className={styles.resultBadge}>{path.result}</div>

                            <div className={styles.pricing}>
                                <div className={styles.oldPrice}>{path.oldPrice}</div>
                                <div className={styles.currentPrice}>{path.price}</div>
                                <div className={styles.priceInfo}>{path.info}</div>
                            </div>

                            <div className={styles.guaranteeText}>{path.guarantee}</div>

                            <button className={`${styles.button} ${path.highlight ? styles.highlightButton : ''}`}>
                                {path.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
