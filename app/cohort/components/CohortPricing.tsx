'use client';

import React from 'react';
import styles from './CohortPricing.module.css';

const mainDeliverables = [
    {
        title: "8 Aulas Ao Vivo com Alan Nicolas",
        description: "Encontros semanais de 90-120 min cada, com conteúdo prático e hands-on",
        icon: "fi-rr-chalkboard-user"
    },
    {
        title: "Aulas de Reforço Pré-Cohort",
        description: "Nivelamento antes de 12/02 para garantir que todos cheguem prontos",
        icon: "fi-rr-book-open-reader"
    },
    {
        title: "Squad por Nivelamento",
        description: "Agrupados por nível (Iniciante, Intermediário, Avançado). Não aleatório.",
        icon: "fi-rr-users-alt"
    },
    {
        title: "Mentoria Ao Vivo com Especialistas",
        description: "Online, ao vivo, com a equipe técnica da Academia Lendária. Não é 'aluno ajudando aluno'",
        icon: "fi-rr-user-headset"
    }
];

const bonusDeliverables = [
    {
        title: "Squads Proprietários",
        items: ["Squad de Design (Design System profissional)", "Squad de Dados (integração e analytics)"],
        icon: "fi-rr-diamond"
    },
    {
        title: "Gravação de Todas as Sessões",
        items: ["Acesso vitalício às gravações", "Replay ilimitado das aulas"],
        icon: "fi-rr-play-circle"
    },
    {
        title: "Templates e Materiais",
        items: ["DESIGN_SYSTEM.md template", "PRD executável modelo", "Checklist de cada aula"],
        icon: "fi-rr-document"
    },
    {
        title: "Certificado de Conclusão",
        items: ["Certificado Academia Lendária", "Showcase no final como portfólio"],
        icon: "fi-rr-diploma"
    }
];

const schedule = [
    { date: "Até 11/02", event: "Aulas de reforço (nivelamento)" },
    { date: "12/02", event: "Aula 1: Como Alan Começa" },
    { date: "19/02", event: "Aula 2: Design System" },
    { date: "26/02", event: "Aula 3: AIOS Total + PRD" },
    { date: "05/03", event: "Aula 4: Workflows + Squads" },
    { date: "12/03", event: "Aula 5: Supabase + RAG" },
    { date: "19/03", event: "Aula 6: Qualidade + Tokens" },
    { date: "26/03", event: "Aula 7: Segurança + Deploy" },
    { date: "02/04", event: "Aula 8: Showcase" }
];

export default function CohortPricing() {
    return (
        <section className={styles.section} id="precos">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>O Que Está Incluso</span>
                    <h2 className={styles.title}>
                        Exatamente o Que <span className={styles.titleHighlight}>Você Recebe</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Sem surpresas. Sem letras miúdas.
                    </p>
                </div>

                {/* MAIN DELIVERABLES */}
                <div className={styles.mainGrid}>
                    {mainDeliverables.map((item, index) => (
                        <div key={index} className={styles.mainCard}>
                            <div className={styles.mainIcon}>
                                <i className={`fi ${item.icon}`}></i>
                            </div>
                            <h3 className={styles.mainTitle}>{item.title}</h3>
                            <p className={styles.mainDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* BONUS DELIVERABLES */}
                <div className={styles.bonusSection}>
                    <h3 className={styles.bonusSectionTitle}>
                        <span className={styles.bonusBadge}>BÔNUS INCLUSOS</span>
                    </h3>
                    <div className={styles.bonusGrid}>
                        {bonusDeliverables.map((bonus, index) => (
                            <div key={index} className={styles.bonusCard}>
                                <div className={styles.bonusIcon}>
                                    <i className={`fi ${bonus.icon}`}></i>
                                </div>
                                <h4 className={styles.bonusTitle}>{bonus.title}</h4>
                                <ul className={styles.bonusList}>
                                    {bonus.items.map((item, i) => (
                                        <li key={i}>
                                            <i className="fi fi-rr-check"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SCHEDULE */}
                <div className={styles.scheduleSection}>
                    <h3 className={styles.scheduleTitle}>Calendário das Aulas</h3>
                    <p className={styles.scheduleSubtitle}>
                        Quinta 14h OU Quarta 19h (definido com a turma)
                    </p>
                    <div className={styles.scheduleGrid}>
                        {schedule.map((item, index) => (
                            <div key={index} className={styles.scheduleItem}>
                                <span className={styles.scheduleDate}>{item.date}</span>
                                <span className={styles.scheduleEvent}>{item.event}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PRICING CARDS */}
                <div className={styles.pricingHeader}>
                    <h3 className={styles.pricingTitle}>Investimento</h3>
                    <p className={styles.pricingQuote}>
                        "A conta é básica: quanto custa um estagiário no mês?
                        Paga metade neste pitch e ganha uma equipe." — Eduardo
                    </p>
                </div>

                <div className={styles.pricingGrid}>
                    {/* PLANO ALUNO */}
                    <div className={`${styles.pricingCard} ${styles.highlight}`}>
                        <div className={styles.bestValueBadge}>Alunos Academia</div>

                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Cohort<br />Lendário Master</h3>
                            <div className={styles.priceLabel}>12x de</div>
                            <div className={styles.price}>
                                <span className={styles.currency}>R$</span>
                                <span className={styles.amountHighlight}>666</span>
                            </div>
                            <div className={styles.priceTotal}>ou R$ 8.000 à vista</div>
                        </div>

                        <div className={styles.cardBody}>
                            <p className={styles.cardDescription}>
                                Para quem já é aluno da Academia Lendária
                                (Comunidade, Makers ou Business)
                            </p>

                            {/* Bonus inside card */}
                            <div className={styles.cardBonuses}>
                                <div className={styles.cardBonusItem}>
                                    <i className="fi fi-rr-check-circle"></i>
                                    <span>8 aulas ao vivo + gravações</span>
                                </div>
                                <div className={styles.cardBonusItem}>
                                    <i className="fi fi-rr-check-circle"></i>
                                    <span>Squads proprietários</span>
                                </div>
                                <div className={styles.cardBonusItem}>
                                    <i className="fi fi-rr-check-circle"></i>
                                    <span>Mentoria técnica direta</span>
                                </div>
                                <div className={styles.cardBonusItem}>
                                    <i className="fi fi-rr-check-circle"></i>
                                    <span>Certificado + Showcase</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cta}>
                            <a href="https://pay.hotmart.com/cohort-aluno" target="_blank" rel="noopener noreferrer" className={styles.ctaWrapper}>
                                <span className={styles.ctaButton}>Garantir minha vaga</span>
                                <div className={styles.arrowButton}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* PLANO EXTERNO */}
                    <div className={styles.pricingCard}>
                        <div className={styles.tagExternal}>Público Externo</div>

                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Cohort<br />Lendário Master</h3>
                            <div className={styles.priceLabel}>12x de</div>
                            <div className={styles.price}>
                                <span className={styles.currency}>R$</span>
                                <span className={styles.amount}>1.000</span>
                            </div>
                            <div className={styles.priceTotal}>ou R$ 12.000 à vista</div>
                        </div>

                        <div className={styles.cardBody}>
                            <p className={styles.cardDescription}>
                                Para quem ainda não é aluno mas quer
                                participar dessa experiência
                            </p>

                            {/* Bonus inside card */}
                            <div className={styles.cardBonuses}>
                                <div className={styles.cardBonusItem}>
                                    <i className="fi fi-rr-check-circle"></i>
                                    <span>8 aulas ao vivo + gravações</span>
                                </div>
                                <div className={styles.cardBonusItem}>
                                    <i className="fi fi-rr-check-circle"></i>
                                    <span>Squads proprietários</span>
                                </div>
                                <div className={styles.cardBonusItem}>
                                    <i className="fi fi-rr-check-circle"></i>
                                    <span>Mentoria técnica direta</span>
                                </div>
                                <div className={styles.cardBonusItem}>
                                    <i className="fi fi-rr-check-circle"></i>
                                    <span>Certificado + Showcase</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cta}>
                            <a href="https://pay.hotmart.com/cohort-externo" target="_blank" rel="noopener noreferrer" className={styles.ctaWrapperSecondary}>
                                <span className={styles.ctaButtonSecondary}>Garantir minha vaga</span>
                                <div className={styles.arrowButtonSecondary}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.urgencyBar}>
                    <div className={styles.urgencyIcon}>
                        <i className="fi fi-rr-hourglass-end"></i>
                    </div>
                    <div className={styles.urgencyText}>
                        <strong>~50 vagas</strong>. Turma limitada para garantir qualidade de suporte.
                    </div>
                </div>
            </div>
        </section>
    );
}
