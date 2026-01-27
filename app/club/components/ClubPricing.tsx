'use client';

import React from 'react';
import styles from './ClubPricing.module.css';

export default function ClubPricing() {
    return (
        <section className={styles.section} id="precos">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        O Preço, e por que<br />
                        É Ridiculamente Baixo!
                    </h2>
                    <p className={styles.subtitle}>
                        Menos que 3 cafés por dia
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* PLANO MENSAL */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Comunidade<br />Lendária (Mensal)</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>R$</span>
                                <span className={styles.amount}>88</span>
                                <span className={styles.period}>/mês</span>
                            </div>
                        </div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Sistema Segundo Cérebro
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Circle com +15 Mil Lendários
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Mentorias Ao Vivo Semanais
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Hubs Presenciais (+50 pelo mundo)
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Eventos, Clube do Livro, Mulheres Lendárias
                            </li>
                        </ul>

                        <div className={styles.cta}>
                            <a href="https://pay.hotmart.com/C93272244L?off=poxsvcus&checkoutMode=10" className={styles.ctaWrapper}>
                                <span className={styles.ctaButton}>Começar agora</span>
                                <div className={styles.arrowButton}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* PLANO ANUAL - DESTAQUE */}
                    <div className={`${styles.card} ${styles.highlight}`}>
                        <div className={styles.bestValueBadge}>Melhor Custo Benefício</div>

                        <div className={styles.cardHeader}>
                            <h3 className={styles.planName}>Comunidade<br />Lendária (Anual)</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>12x de R$</span>
                                <span className={styles.amount}>86,52</span>
                            </div>
                            <div className={styles.priceSub}>Ou R$ 888,00 / ano à vista</div>
                        </div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Tudo do Plano Mensal
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Economia de R$ 168/ano
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.check}><i className="fi fi-rr-check"></i></span> Acesso prioritário a eventos
                            </li>
                        </ul>

                        <div className={styles.cta}>
                            <a href="https://pay.hotmart.com/C93272244L?off=n4bzoumn&checkoutMode=10" className={styles.ctaWrapper}>
                                <span className={styles.ctaButton}>Começar agora</span>
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
