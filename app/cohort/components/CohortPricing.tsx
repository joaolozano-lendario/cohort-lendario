'use client';

import React from 'react';
import styles from './CohortPricing.module.css';

const whatsappTeam = [
    { name: 'Douglas', number: '5548996285385' },
    { name: 'Luciana', number: '5548996172481' },
    { name: 'Michel', number: '5551999702808' }
];

const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Round-robin distribution using localStorage
    let counter = 0;
    if (typeof window !== 'undefined') {
        counter = parseInt(localStorage.getItem('whatsappCounter') || '0');
        localStorage.setItem('whatsappCounter', ((counter + 1) % whatsappTeam.length).toString());
    }
    const selectedPerson = whatsappTeam[counter % whatsappTeam.length];
    const message = encodeURIComponent('Oi, estou com dúvidas sobre o Cohort Lendário Master');
    window.open(`https://wa.me/${selectedPerson.number}?text=${message}`, '_blank');
};

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
                                <span className={styles.amountHighlight}>800</span>
                            </div>
                            <div className={styles.priceTotal}>ou R$ 9.600 à vista</div>
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
                            <a href="https://checkout.pagtrust.com.br/ck5ae851a4?funnel=fn8ddc0298" target="_blank" rel="noopener noreferrer" className={styles.ctaWrapper}>
                                <span className={styles.ctaButton}>Garantir minha vaga</span>
                                <div className={styles.arrowButton}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" onClick={handleWhatsAppClick} className={styles.whatsappLink}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                <span>Dúvidas? Fale com a gente</span>
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
                                <span className={styles.amount}>1.200</span>
                            </div>
                            <div className={styles.priceTotal}>ou R$ 14.400 à vista</div>
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
                            <a href="https://checkout.pagtrust.com.br/ck8bc7b674?funnel=fn1458a7b9" target="_blank" rel="noopener noreferrer" className={styles.ctaWrapperSecondary}>
                                <span className={styles.ctaButtonSecondary}>Garantir minha vaga</span>
                                <div className={styles.arrowButtonSecondary}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" onClick={handleWhatsAppClick} className={styles.whatsappLink}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                <span>Dúvidas? Fale com a gente</span>
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
