'use client';

import React, { useState, useEffect } from 'react';
import styles from './ImersaoOffer.module.css';
import LoteCountdown from './LoteCountdown';
import { getLoteDates, getLoteDateString } from '../lib/loteConfig';

interface PricingLote {
    name: string;
    installments: string;
    fullPrice: string;
    active: boolean;
    checkoutUrl?: string;
}

interface ImersaoOfferProps {
    pricing?: PricingLote[];
}

const ImersaoOffer = ({ pricing }: ImersaoOfferProps) => {
    const [currentBatch, setCurrentBatch] = useState(1);

    useEffect(() => {
        const { lote1Date, lote2Date, lote3Date } = getLoteDates();

        const checkBatch = () => {
            const now = new Date().getTime();
            if (now < lote1Date) {
                setCurrentBatch(1);
            } else if (now < lote2Date) {
                setCurrentBatch(2);
            } else {
                setCurrentBatch(3); // Para no lote 3
            }
        };

        checkBatch();
        const interval = setInterval(checkBatch, 1000);

        return () => clearInterval(interval);
    }, []);

    const defaultPricing = [
        { name: "LOTE 01", installments: "12x de R$ 34,80", fullPrice: "R$ 348 à vista", active: currentBatch === 1, checkoutUrl: "https://checkout.pagtrust.com.br/ck3dd8ac36?funnel=fn7e41919e" },
        { name: "LOTE 02", installments: "12x de R$ 38,80", fullPrice: "R$ 388 à vista", active: currentBatch === 2, checkoutUrl: "https://checkout.pagtrust.com.br/ck3dd8ac36?funnel=fn7e41919e" },
        { name: "LOTE 03", installments: "12x de R$ 42,80", fullPrice: "R$ 428 à vista", active: currentBatch === 3, checkoutUrl: "https://checkout.pagtrust.com.br/ck3dd8ac36?funnel=fn7e41919e" }
    ];

    // Se pricing customizado foi passado, aplica a lógica de batch nele
    const lotes = pricing ? pricing.map((lote, index) => ({
        ...lote,
        active: index === currentBatch - 1
    })) : defaultPricing;
    const featuredIndex = currentBatch - 1;

    return (
        <section className={styles.sectionWrapper} id="precos">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* O que está incluso */}
                    <div className={styles.inclusionsSection}>
                        <h2 className={styles.title}>O que está incluso:</h2>
                        <ul className={styles.inclusionList}>
                            <li className={styles.inclusionItem}>
                                <i className="fi fi-rr-check"></i> 48 horas de imersão intensiva (09h-23h nos 2 dias)
                            </li>
                            <li className={styles.inclusionItem}>
                                <i className="fi fi-rr-check"></i> Time de especialistas criando com você em tempo real
                            </li>
                            <li className={styles.inclusionItem}>
                                <i className="fi fi-rr-check"></i> Framework de Clareza (problema → solução → sistema)
                            </li>
                            <li className={styles.inclusionItem}>
                                <i className="fi fi-rr-check"></i> Construção do seu sistema customizado
                            </li>
                            <li className={styles.inclusionItem}>
                                <i className="fi fi-rr-check"></i> Plantões especializados noturnos
                            </li>
                            <li className={styles.inclusionItem}>
                                <i className="fi fi-rr-check"></i> Materiais, templates e frameworks
                            </li>
                            <li className={styles.inclusionItem}>
                                <i className="fi fi-rr-check"></i> Gravações por 90 dias
                            </li>
                            <li className={styles.inclusionItem}>
                                <i className="fi fi-rr-check"></i> Certificado de conclusão
                            </li>
                            <li className={styles.inclusionItem}>
                                <i className="fi fi-rr-check"></i> Garantia Lendária
                            </li>
                        </ul>
                    </div>

                    {/* Lotes */}
                    <div className={styles.pricingSection}>
                        {lotes.map((lote, index) => {
                            const isSoldOut = lote.name === "LOTE 01" || lote.name === "LOTE 02";

                            return (
                                <div key={index} className={`${styles.offerCard} ${index === featuredIndex ? styles.featuredLote : ''} ${!lote.active ? styles.disabledLote : ''} ${isSoldOut ? styles.soldOutCard : ''}`}>
                                    <div className={index === featuredIndex ? styles.cardMainContent : ''} style={index !== featuredIndex ? { display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' } : {}}>
                                        <div className={styles.loteInfo}>
                                            <span className={styles.loteName}>
                                                {lote.name === "LOTE 03" ? "LOTE 03 | ÚLTIMAS VAGAS!" : lote.name}
                                            </span>
                                            {!isSoldOut && (
                                                <div className={styles.priceDisplay}>
                                                    <span className={styles.installments}>
                                                        {lote.installments.includes('R$') ? (
                                                            <>
                                                                {lote.installments.split('R$')[0]}
                                                                <br className={styles.mobileBreak} />
                                                                <span style={{ whiteSpace: 'nowrap' }}>R${lote.installments.split('R$')[1]}</span>
                                                            </>
                                                        ) : lote.installments}
                                                    </span>
                                                    <span className={styles.fullPrice}>ou {lote.fullPrice}</span>
                                                </div>
                                            )}
                                        </div>
                                        {isSoldOut ? (
                                            <button className={`${styles.ctaButton} ${styles.soldOutButton}`} disabled>ESGOTADO!</button>
                                        ) : (
                                            lote.active ? (
                                                <a href={lote.checkoutUrl} className={`${styles.ctaButton} ${styles.heroStyleButton}`}>
                                                    <span>Quero garantir meu lugar</span>
                                                    <div className={styles.heroArrow}>
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            ) : (
                                                <button className={styles.ctaButton} disabled>Garantir meu Lugar</button>
                                            )
                                        )}
                                    </div>
                                    {index === featuredIndex && lote.active && (
                                        <LoteCountdown targetDate={getLoteDateString(currentBatch)} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImersaoOffer;
