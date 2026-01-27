'use client';

import React from 'react';
import styles from './CohortUrgency.module.css';

export default function CohortUrgency() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>A Matemática Final</span>
                    <h2 className={styles.title}>
                        Cada Dia Que Você <span className={styles.titleHighlight}>Espera</span>
                    </h2>
                </div>

                <div className={styles.costBox}>
                    <div className={styles.costMain}>
                        <span className={styles.costLabel}>Você perde</span>
                        <span className={styles.costValue}>R$ 3.638</span>
                        <span className={styles.costDetail}>(R$ 109.164/mês ÷ 30 dias)</span>
                    </div>
                </div>

                <div className={styles.delayTable}>
                    <div className={styles.delayRow}>
                        <span className={styles.delayPeriod}>Em 1 semana de delay:</span>
                        <span className={styles.delayLoss}>R$ 25.466 perdidos</span>
                    </div>
                    <div className={styles.delayRow}>
                        <span className={styles.delayPeriod}>Em 1 mês de delay:</span>
                        <span className={styles.delayLoss}>R$ 109.164 perdidos</span>
                    </div>
                    <div className={styles.delayRow}>
                        <span className={styles.delayPeriod}>Em 3 meses de delay:</span>
                        <span className={styles.delayLoss}>R$ 327.492 perdidos</span>
                    </div>
                </div>

                <div className={styles.comparisonBox}>
                    <p className={styles.comparisonText}>
                        Quanto mais você espera, mais você paga.<br />
                        <strong>Não para o AIOS.</strong> Para a concorrência que já está usando.
                    </p>
                </div>

                <div className={styles.summaryBox}>
                    <h3 className={styles.summaryTitle}>Resumo da Sua Decisão</h3>
                    <div className={styles.summaryGrid}>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>Investimento</span>
                            <span className={styles.summaryValue}>R$ 8.000 <span className={styles.summarySmall}>(aluno)</span></span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>Economia mensal</span>
                            <span className={styles.summaryValueHighlight}>R$ 109.164</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>Payback</span>
                            <span className={styles.summaryValue}>2.2 dias</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>ROI em 12 meses</span>
                            <span className={styles.summaryValueProfit}>16.274%</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>Lucro líquido ano 1</span>
                            <span className={styles.summaryValueProfit}>R$ 1.301.968</span>
                        </div>
                    </div>
                </div>

                <div className={styles.ifNothing}>
                    <h4 className={styles.ifNothingTitle}>Se você não fizer nada:</h4>
                    <ul className={styles.ifNothingList}>
                        <li><i className="fi fi-rr-cross-circle"></i> Continua pagando R$ 1.6M+/ano em time</li>
                        <li><i className="fi fi-rr-cross-circle"></i> Continua competindo com quem tem IA</li>
                        <li><i className="fi fi-rr-cross-circle"></i> Continua perdendo R$ 3.638/dia</li>
                    </ul>
                </div>

                <div className={styles.finalCTA}>
                    <a href="#precos" className={styles.ctaWrapper}>
                        <span className={styles.ctaButton}>Garantir Minha Vaga no Cohort</span>
                        <div className={styles.arrowButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                    <div className={styles.ctaMeta}>
                        <i className="fi fi-rr-lock"></i>
                        <span>Vagas limitadas • Próxima turma em breve</span>
                    </div>
                </div>

                <div className={styles.sources}>
                    <h5 className={styles.sourcesTitle}>Fontes dos Dados Desta Página:</h5>
                    <p className={styles.sourcesText}>
                        Salários: Glassdoor, PM3, Salario.com.br (CAGED) •
                        Turnover: McKinsey, Robert Half •
                        Custo contratação: SHRM, eTalent •
                        Déficit TI: Google for Startups, Brasscom
                    </p>
                    <p className={styles.sourcesNote}>Todos os números são verificáveis.</p>
                </div>
            </div>
        </section>
    );
}
