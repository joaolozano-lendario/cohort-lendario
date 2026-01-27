'use client';

import React from 'react';
import styles from './BusinessPricing.module.css';

export default function BusinessPricing() {
    return (
        <section className={styles.section} id="precos">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        O investimento mais importante<br />
                        do seu negócio
                    </h2>
                </div>

                <div className={styles.grid}>
                    {/* PLANO MENSAL */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Lendário<br />Business (Mensal)</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>R$</span>
                                <span className={styles.amount}>988</span>
                                <span className={styles.period}>/mês</span>
                            </div>
                        </div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Método Growth IA®
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Mentorias Business Ao Vivo (8x/semana, +60h/mês)
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Frameworks de Marketing
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Playbooks de Vendas
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Ferramentas de IA Internas
                            </li>
                        </ul>

                        <div className={styles.cta}>
                            <a href="https://pay.hotmart.com/F104043403P?off=77wd2tqo&checkoutMode=6" className={styles.ctaWrapper}>
                                <span className={styles.ctaButton}>Garantir minha vaga</span>
                                <div className={styles.arrowButton}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* PLANO ANUAL - O DESTAQUE COM BÔNUS */}
                    <div className={`${styles.card} ${styles.highlight}`}>
                        <div className={styles.bestValueBadge}>Melhor Custo Benefício</div>

                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Lendário<br />Business (Anual)</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>12x de R$</span>
                                <span className={styles.amount}>963,37</span>
                            </div>
                            <div className={styles.priceSub}>Ou R$ 9.888,00 / ano à vista</div>
                        </div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Tudo do Plano Mensal
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Masterclass com Gabriel Marcondes
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Economia de R$ 8.880,00
                            </li>
                        </ul>

                        {/* BONUSES BLOCK */}
                        <div className={styles.bonusContainer}>
                            <h4 className={styles.bonusMainTitle}>Bônus Inclusos:</h4>

                            {/* BÔNUS 01: CLUB */}
                            <div className={styles.bonusCard}>
                                <div className={styles.bonusHeader}>
                                    <h5 className={styles.bonusName}>Lendários Club</h5>
                                    <div className={styles.bonusValue}>
                                        <span className={styles.originalValue}>R$ 1.056/ano</span>
                                        <span className={styles.freeBadge}>INCLUSO</span>
                                    </div>
                                </div>
                                <ul className={styles.bonusList}>
                                    <li><i className="fi fi-rr-check"></i> Sistema de Mapeamento Cognitivo Lendário</li>
                                    <li><i className="fi fi-rr-check"></i> Biblioteca de Soft Skills Essenciais (8 cursos)</li>
                                    <li><i className="fi fi-rr-check"></i> Acesso ao Circle com +15 mil Lendários</li>
                                    <li><i className="fi fi-rr-check"></i> Hubs Lendários (+50 hubs pelo mundo)</li>
                                    <li><i className="fi fi-rr-check"></i> Clube do Livro (curadoria + discussões diárias)</li>
                                    <li><i className="fi fi-rr-check"></i> Mulheres Lendárias (exclusivo feminino)</li>
                                    <li><i className="fi fi-rr-check"></i> Sistema Segundo Cérebro</li>
                                    <li><i className="fi fi-rr-check"></i> Sistema Brain - AI Second Brain</li>
                                </ul>
                            </div>

                            {/* BÔNUS 02: MAKERS */}
                            <div className={styles.bonusCard}>
                                <div className={styles.bonusHeader}>
                                    <h5 className={styles.bonusName}>Lendários Makers</h5>
                                    <div className={styles.bonusValue}>
                                        <span className={styles.originalValue}>R$ 5.856/ano</span>
                                        <span className={styles.freeBadge}>INCLUSO</span>
                                    </div>
                                </div>
                                <ul className={styles.bonusList}>
                                    <li><i className="fi fi-rr-check"></i> Sistema Cloud Code Profundo * (framework zero &gt; app em 30 dias)</li>
                                    <li><i className="fi fi-rr-check"></i> Mentorias Técnicas ao Vivo (8x/semana, +60h/mês)</li>
                                    <div className={styles.tagContainer}>
                                        <span className={styles.tag}>Cloud Code profundo</span>
                                        <span className={styles.tag}>N8N e automações</span>
                                        <span className={styles.tag}>Criação de aplicações</span>
                                        <span className={styles.tag}>Debugging e otimização</span>
                                        <span className={styles.tag}>Templates e Componentes</span>
                                    </div>
                                    <li><i className="fi fi-rr-check"></i> Biblioteca de Templates &amp; Automações</li>
                                    <li><i className="fi fi-rr-check"></i> Acesso aos Professores no WhatsApp</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.cta}>
                            <a href="https://pay.hotmart.com/F104043403P?off=5a7p971q&checkoutMode=6" className={styles.ctaWrapper}>
                                <span className={styles.ctaButton}>Garantir minha vaga</span>
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
