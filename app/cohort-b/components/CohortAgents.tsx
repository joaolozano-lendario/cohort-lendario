'use client';

import React, { useState } from 'react';
import styles from './CohortAgents.module.css';

const agentsData = [
    {
        id: 'dev',
        name: '@dev',
        title: 'Desenvolvedor Full Stack',
        economy: 'R$ 14.976/mês',
        description: 'Implementa histórias completas, do código ao teste. Não é um "assistente de código" - é um desenvolvedor que entende contexto, padrões do projeto, e entrega código production-ready.',
        tasks: [
            { task: 'Implementar user story', manual: '8h', aios: '1h', saving: '7h', freq: '5×/sem' },
            { task: 'Debug de bug', manual: '2h', aios: '20min', saving: '1h40', freq: '10×/sem' },
            { task: 'Refatoração', manual: '4h', aios: '30min', saving: '3h30', freq: '2×/sem' },
            { task: 'Testes + lint + typecheck', manual: '30min', aios: '5min', saving: '25min', freq: '20×/sem' },
        ],
        whyWorks: '@dev lê o PRD, entende acceptance criteria, gera código seguindo padrões do projeto, e roda testes automaticamente. Sem "tentativa e erro" - processo sistemático que elimina 87% do tempo.'
    },
    {
        id: 'devops',
        name: '@devops',
        title: 'DevOps Engineer',
        economy: 'R$ 8.624/mês',
        description: 'Guardião do repositório. Único agente autorizado a fazer push. Executa quality gates obrigatórios, gerencia releases, configura CI/CD.',
        tasks: [
            { task: 'Commit + quality gates', manual: '45min', aios: '10min', saving: '35min', freq: '15×/sem' },
            { task: 'Criar PR completo', manual: '30min', aios: '5min', saving: '25min', freq: '10×/sem' },
            { task: 'Configurar CI/CD', manual: '4h', aios: '30min', saving: '3h30', freq: '1×/sem' },
            { task: 'Release + changelog', manual: '2h', aios: '15min', saving: '1h45', freq: '2×/sem' },
        ],
        whyWorks: '@devops roda lint, test, typecheck, build, CodeRabbit em sequência automatizada. Se algo falha, reporta exatamente o que corrigir.'
    },
    {
        id: 'architect',
        name: '@architect',
        title: 'Arquiteto de Software',
        economy: 'R$ 18.432/mês',
        description: 'Projeta sistemas completos: frontend, backend, banco de dados, infraestrutura. Considera trade-offs, escalabilidade, e experiência do usuário como driver de decisões.',
        tasks: [
            { task: 'Arquitetura full-stack', manual: '40h', aios: '4h', saving: '36h', freq: '0.25×/sem' },
            { task: 'Design de API', manual: '8h', aios: '1h', saving: '7h', freq: '1×/sem' },
            { task: 'Arquitetura backend', manual: '16h', aios: '2h', saving: '14h', freq: '0.5×/sem' },
            { task: 'Documentar projeto', manual: '8h', aios: '1h', saving: '7h', freq: '0.5×/sem' },
        ],
        whyWorks: '@architect analisa requisitos + contexto do projeto, propõe arquitetura com trade-offs explícitos, gera diagramas e documentação, e itera baseado em feedback.'
    },
    {
        id: 'qa',
        name: '@qa',
        title: 'QA Engineer',
        economy: 'R$ 13.272/mês',
        description: 'Arquiteto de testes e guardião de qualidade. Entende rastreabilidade de requisitos, avaliação de risco, e toma decisões de quality gate (PASS/FAIL/CONCERNS).',
        tasks: [
            { task: 'Code review completo', manual: '2h', aios: '15min', saving: '1h45', freq: '10×/sem' },
            { task: 'Quality gate decision', manual: '1h', aios: '10min', saving: '50min', freq: '10×/sem' },
            { task: 'Design cenários teste', manual: '4h', aios: '30min', saving: '3h30', freq: '3×/sem' },
            { task: 'Security scan (SAST)', manual: '2h', aios: '15min', saving: '1h45', freq: '2×/sem' },
        ],
        whyWorks: '@qa integra com CodeRabbit, analisa padrões, identifica vulnerabilidades. 4 camadas de validação antes de qualquer entrega.'
    },
    {
        id: 'pm',
        name: '@pm',
        title: 'Product Manager',
        economy: 'R$ 15.568/mês',
        description: 'Estrategista de produto. Cria PRDs completos, epics estruturados, e toma decisões go/no-go. Entende mercado, priorização (MoSCoW, RICE), e visão de produto.',
        tasks: [
            { task: 'Criar PRD completo', manual: '20h', aios: '2h', saving: '18h', freq: '0.5×/sem' },
            { task: 'Criar epic', manual: '8h', aios: '1h', saving: '7h', freq: '1×/sem' },
            { task: 'Criar user story', manual: '2h', aios: '15min', saving: '1h45', freq: '5×/sem' },
            { task: 'Priorização MoSCoW/RICE', manual: '4h', aios: '30min', saving: '3h30', freq: '1×/sem' },
        ],
        whyWorks: '@pm usa estrutura padronizada, seções obrigatórias, validação automática. PRD de 20h vira 2h. User story de 2h vira 15min.'
    },
    {
        id: 'po',
        name: '@po',
        title: 'Product Owner',
        economy: 'R$ 12.144/mês',
        description: 'Guardião do backlog e processos. Valida coesão de artefatos, refina stories, gerencia sprints. Não é um "organizador de tickets" - é um PO que garante alinhamento.',
        tasks: [
            { task: 'Gestão backlog', manual: '4h', aios: '30min', saving: '3h30', freq: '2×/sem' },
            { task: 'Refinamento stories', manual: '2h', aios: '20min', saving: '1h40', freq: '5×/sem' },
            { task: 'Validar story draft', manual: '1h', aios: '10min', saving: '50min', freq: '10×/sem' },
            { task: 'Sprint planning review', manual: '3h', aios: '30min', saving: '2h30', freq: '1×/sem' },
        ],
        whyWorks: '@po mantém backlog priorizado, valida coesão entre PRD e stories, garante que tudo está acionável antes de entrar em sprint.'
    },
    {
        id: 'ux',
        name: '@ux',
        title: 'UX Designer',
        economy: 'R$ 7.812/mês',
        description: 'Designer completo: pesquisa, wireframes, design system, componentes atômicos. Entende usuários, acessibilidade (WCAG), e sistemas escaláveis (Atomic Design).',
        tasks: [
            { task: 'UX research', manual: '16h', aios: '2h', saving: '14h', freq: '0.5×/sem' },
            { task: 'Wireframes', manual: '8h', aios: '1h', saving: '7h', freq: '1×/sem' },
            { task: 'Design system audit', manual: '12h', aios: '1.5h', saving: '10h30', freq: '0.25×/sem' },
            { task: 'Build componente', manual: '4h', aios: '30min', saving: '3h30', freq: '3×/sem' },
        ],
        whyWorks: '@ux aplica Atomic Design, gera tokens, valida acessibilidade automaticamente. Componentes saem documentados e testáveis.'
    },
    {
        id: 'data',
        name: '@data-eng',
        title: 'Data Engineer',
        economy: 'R$ 13.440/mês',
        description: 'Guardião de dados: schema design, migrations, RLS, otimização. Não é um "escrevedor de SQL" - é um DBA que entende PostgreSQL, segurança (RLS), e operações de banco.',
        tasks: [
            { task: 'Database schema', manual: '12h', aios: '1.5h', saving: '10h30', freq: '0.5×/sem' },
            { task: 'Migration plan', manual: '4h', aios: '30min', saving: '3h30', freq: '1×/sem' },
            { task: 'RLS policies', manual: '6h', aios: '45min', saving: '5h15', freq: '0.5×/sem' },
            { task: 'Query optimization', manual: '3h', aios: '30min', saving: '2h30', freq: '2×/sem' },
        ],
        whyWorks: '@data-eng projeta schemas otimizados, cria migrations seguras, implementa RLS para segurança. Banco estruturado desde o início.'
    },
    {
        id: 'analyst',
        name: '@analyst',
        title: 'Business Analyst',
        economy: 'R$ 4.896/mês',
        description: 'Pesquisador e facilitador de ideação. Não é um "pesquisador de Google" - é um analista que estrutura pesquisas, facilita brainstorms, e gera relatórios acionáveis.',
        tasks: [
            { task: 'Market research', manual: '20h', aios: '2h', saving: '18h', freq: '0.25×/sem' },
            { task: 'Competitive analysis', manual: '12h', aios: '1.5h', saving: '10h30', freq: '0.25×/sem' },
            { task: 'Project brief', manual: '8h', aios: '1h', saving: '7h', freq: '0.5×/sem' },
            { task: 'Brainstorm facilitado', manual: '3h', aios: '30min', saving: '2h30', freq: '1×/sem' },
        ],
        whyWorks: '@analyst transforma perguntas vagas em pesquisas estruturadas, analisa concorrência com método, e entrega insights acionáveis.'
    },
];

export default function CohortAgents() {
    const [expandedAgent, setExpandedAgent] = useState<string | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Detalhamento dos Agentes</span>
                    <h2 className={styles.title}>
                        Como Cada Agente <span className={styles.titleHighlight}>Economiza Seu Tempo</span>
                    </h2>
                    <p className={styles.subtitle}>Clique para expandir e ver a economia por tarefa</p>
                </div>

                <div className={styles.agentsList}>
                    {agentsData.map(agent => (
                        <div
                            key={agent.id}
                            className={`${styles.agentCard} ${expandedAgent === agent.id ? styles.expanded : ''}`}
                        >
                            <button
                                className={styles.agentHeader}
                                onClick={() => setExpandedAgent(expandedAgent === agent.id ? null : agent.id)}
                            >
                                <div className={styles.agentInfo}>
                                    <span className={styles.agentName}>{agent.name}</span>
                                    <span className={styles.agentTitle}>{agent.title}</span>
                                </div>
                                <div className={styles.agentMeta}>
                                    <span className={styles.agentEconomy}>{agent.economy}</span>
                                    <span className={styles.expandIcon}>
                                        <i className={`fi ${expandedAgent === agent.id ? 'fi-rr-angle-up' : 'fi-rr-angle-down'}`}></i>
                                    </span>
                                </div>
                            </button>

                            {expandedAgent === agent.id && (
                                <div className={styles.agentContent}>
                                    <p className={styles.agentDescription}>{agent.description}</p>

                                    <div className={styles.tasksTable}>
                                        <div className={styles.tasksHeader}>
                                            <span>Tarefa</span>
                                            <span>Manual</span>
                                            <span>AIOS</span>
                                            <span>Economia</span>
                                            <span>Freq.</span>
                                        </div>
                                        {agent.tasks.map((task, idx) => (
                                            <div key={idx} className={styles.taskRow}>
                                                <span className={styles.taskName}>{task.task}</span>
                                                <span className={styles.taskManual}>{task.manual}</span>
                                                <span className={styles.taskAios}>{task.aios}</span>
                                                <span className={styles.taskSaving}>{task.saving}</span>
                                                <span className={styles.taskFreq}>{task.freq}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={styles.whyWorks}>
                                        <strong>Por que funciona:</strong> {agent.whyWorks}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.totalBox}>
                    <div className={styles.totalIcon}>
                        <i className="fi fi-rr-calculator-money"></i>
                    </div>
                    <div className={styles.totalContent}>
                        <span className={styles.totalLabel}>Economia Total Mensal</span>
                        <span className={styles.totalValue}>R$ 109.164</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
