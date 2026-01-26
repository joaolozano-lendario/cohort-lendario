'use client';

import React from 'react';
import styles from './MakersPricing.module.css';

export default function MakersPricing() {
    return (
        <section className={styles.section} id="precos">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        O investimento que se paga<br />
                        no primeiro deploy
                    </h2>
                    <p className={styles.subtitle}>
                        Escolha o plano que melhor se adapta ao seu momento.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* PLANO MENSAL */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Lendários<br />Makers (Mensal)</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>R$</span>
                                <span className={styles.amount}>488</span>
                                <span className={styles.period}>/mês</span>
                            </div>
                        </div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <span className={styles.check}>✓</span> Sistema Cloud Code Profundo™
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}>✓</span> Mentorias Técnicas (8x/semana, +60h/mês)
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}>✓</span> Sprint de Automação (14 dias)
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}>✓</span> Biblioteca de Templates & Automações
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}>✓</span> Acesso aos Professores no WhatsApp
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}>✓</span> Tudo da Comunidade Lendária incluído
                            </li>
                        </ul>

                        <div className={styles.cta}>
                            <a href="https://pay.hotmart.com/C104043236F?off=4bonm9t9&checkoutMode=6" className={styles.ctaWrapper}>
                                <span className={styles.ctaButton}>Quero Começar Agora</span>
                                <div className={styles.arrowButton}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* PLANO ANUAL - RECOMENDADO */}
                    <div className={`${styles.card} ${styles.highlight}`}>
                        <div className={styles.bestValueBadge}>RECOMENDADO</div>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Lendários<br />Makers (Anual)</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>12x de R$</span>
                                <span className={styles.amount}>476,23</span>
                            </div>
                            <div className={styles.priceSub}>Ou R$ 4.888,00 / ano à vista</div>
                        </div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <span className={styles.check}>✓</span> Tudo do Plano Mensal
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}>✓</span> Economize R$2.024,00
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}>✓</span> 2 meses grátis
                            </li>
                        </ul>

                        <div className={styles.bonusContainer}>
                            <h4 className={styles.bonusMainTitle}>Bônus Inclusos:</h4>

                            <div className={styles.bonusCard}>
                                <div className={styles.bonusHeader}>
                                    <h5 className={styles.bonusName}>Lendários Club</h5>
                                    <div className={styles.bonusValue}>
                                        <span className={styles.originalValue}>R$ 1.056/ano</span>
                                        <span className={styles.freeBadge}>INCLUSO</span>
                                    </div>
                                </div>
                                <ul className={styles.bonusList}>
                                    <li>✓ Sistema de Mapeamento Cognitivo Lendário</li>
                                    <li>✓ Biblioteca de Soft Skills Essenciais (8 cursos)</li>
                                    <li>✓ Acesso ao Circle com +15 mil Lendários</li>
                                    <li>✓ Hubs Lendários (+50 hubs pelo mundo)</li>
                                    <li>✓ Clube do Livro (curadoria + discussões diárias)</li>
                                    <li>✓ Mulheres Lendárias (exclusivo feminino)</li>
                                    <li>✓ Sistema Segundo Cérebro</li>
                                    <li>✓ Sistema Brain - AI Second Brain</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.cta}>
                            <a href="https://pay.hotmart.com/C104043236F?off=gln2heab&checkoutMode=6" className={styles.ctaWrapper}>
                                <span className={styles.ctaButton}>Quero Começar Agora</span>
                                <div className={styles.arrowButton}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
