'use client';

import React from 'react';
import styles from './CohortPath.module.css';

const lessons = [
    {
        number: "01",
        title: "Como Alan Começa",
        subtitle: "Do 'instalei tudo' ao primeiro comando",
        content: [
            "GitHub estruturado para projetos de produção",
            "Configuração otimizada do Claude Code",
            "Migração do projeto (Lovable, AI Studio para ambiente profissional)"
        ],
        solves: "Não sei o que fazer primeiro",
        outcome: "A sequência exata que Alan usa para começar qualquer projeto",
        icon: "fi-rr-rocket"
    },
    {
        number: "02",
        title: "Design System",
        subtitle: "Do código inconsistente ao padrão profissional",
        content: [
            "Interface Inventory (auditoria completa)",
            "Atomic Design (átomos, moléculas, organismos)",
            "DESIGN_SYSTEM.md como fonte de verdade"
        ],
        solves: "Código gambiarra",
        outcome: "Código consistente em todas as gerações da IA",
        icon: "fi-rr-palette"
    },
    {
        number: "03",
        title: "AIOS Total + PRD",
        subtitle: "De entidades isoladas a time integrado",
        content: [
            "Identificação e resolução de débitos técnicos",
            "PRD executável (não documento morto)",
            "Agentes integrados em cadeia"
        ],
        solves: "Agentes que não conversam entre si",
        outcome: "Sistema integrado, não peças soltas",
        icon: "fi-rr-link"
    },
    {
        number: "04",
        title: "Workflows + Squads",
        subtitle: "De babá de agente a gestor de time",
        content: [
            "Loop externo com mmos.sh",
            "Criação de Expansion Packs customizados",
            "Modo YOLO (automação quando você não está)"
        ],
        solves: "Preciso estar olhando",
        outcome: "Automação real, não supervisão constante",
        icon: "fi-rr-workflow"
    },
    {
        number: "05",
        title: "Supabase + RAG",
        subtitle: "Do armazenamento básico à inteligência de dados",
        content: [
            "Supabase: Database + Auth + RLS",
            "Edge Functions",
            "RAG com Pinecone"
        ],
        solves: "Dados isolados",
        outcome: "Integração de dados com agentes",
        icon: "fi-rr-database"
    },
    {
        number: "06",
        title: "Qualidade + Tokens",
        subtitle: "Do desperdício à eficiência máxima",
        content: [
            "Playwright para testes automatizados",
            "Testing integrado ao workflow",
            "Otimização de custos (tokens)"
        ],
        solves: "Queimando tokens",
        outcome: "Pipeline de qualidade integrado",
        icon: "fi-rr-money-check-edit"
    },
    {
        number: "07",
        title: "Segurança + Deploy",
        subtitle: "Do localhost ao mundo, com proteção",
        content: [
            "Proteção de dados sensíveis",
            "Variáveis de ambiente e secrets",
            "Vercel MCP para deploy"
        ],
        solves: "Medo de quebrar",
        outcome: "Projeto no ar com domínio próprio",
        icon: "fi-rr-shield-check"
    },
    {
        number: "08",
        title: "Showcase",
        subtitle: "Prova de que funciona pro SEU caso",
        content: [
            "Alunos apresentam seus projetos (5-7 min cada)",
            "Antes/depois documentado",
            "Votação e celebração"
        ],
        solves: "Funciona pro meu caso?",
        outcome: "Certificação de conclusão",
        icon: "fi-rr-trophy"
    }
];

export default function CohortPath() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>As 8 Semanas</span>
                    <h2 className={styles.title}>
                        O Mesmo <span className={styles.titleHighlight}>Método</span> que Alan Usa
                    </h2>
                    <p className={styles.subtitle}>
                        A sequência exata para sair do zero ao sistema funcionando.
                        Cada aula resolve uma dor específica.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {lessons.map((lesson, index) => (
                        <div key={index} className={styles.lessonCard}>
                            <div className={styles.lessonHeader}>
                                <div className={styles.lessonNumber}>{lesson.number}</div>
                                <div className={styles.iconWrapper}>
                                    <i className={`fi ${lesson.icon}`}></i>
                                </div>
                            </div>

                            <div className={styles.lessonBody}>
                                <h3 className={styles.lessonTitle}>{lesson.title}</h3>
                                <p className={styles.lessonSubtitle}>{lesson.subtitle}</p>

                                <ul className={styles.contentList}>
                                    {lesson.content.map((item, i) => (
                                        <li key={i}>
                                            <span className={styles.bullet}>
                                                <i className="fi fi-rr-check"></i>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className={styles.solvesBadge}>
                                    <span className={styles.solvesLabel}>Dor que resolve:</span>
                                    <span className={styles.solvesQuote}>"{lesson.solves}"</span>
                                </div>

                                <div className={styles.outcomeBar}>
                                    <i className="fi fi-rr-flag-checkered"></i>
                                    <span>{lesson.outcome}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.bottomCTA}>
                    <div className={styles.bottomIcon}>
                        <i className="fi fi-rr-rocket-lunch"></i>
                    </div>
                    <h3 className={styles.bottomTitle}>
                        Depois das 8 Semanas
                    </h3>
                    <p className={styles.bottomText}>
                        Você vai ter <strong>sistema no ar</strong>, com domínio próprio,
                        e <strong>squad de agentes funcionando</strong>.
                    </p>
                    <div className={styles.transformationGrid}>
                        <div className={styles.transformCard}>
                            <span className={styles.transformLabel}>ANTES</span>
                            <span className={styles.transformText}>Instalei tudo mas não sei o que fazer</span>
                        </div>
                        <div className={styles.transformArrow}>
                            <i className="fi fi-rr-arrow-right"></i>
                        </div>
                        <div className={`${styles.transformCard} ${styles.after}`}>
                            <span className={styles.transformLabel}>DEPOIS</span>
                            <span className={styles.transformText}>Projeto em produção com agentes 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
