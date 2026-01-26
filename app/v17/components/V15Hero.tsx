import React, { useState, useEffect } from 'react';
import styles from './V15Hero.module.css';
import LoteCountdown from '../../../components/LoteCountdown';
import { getLoteDateString } from '../../../lib/loteConfig';

interface V15HeroProps {
    preHeadline?: string;
    headline?: React.ReactNode;
    description?: React.ReactNode;
    ctaText?: string;
    price?: string;
}

export default function V15Hero({
    preHeadline = "24 e 25 de Janeiro | 48 Horas Para Criar Algo Real",
    headline = <>Você Tem Ideias. <br /> Agora Transforme Elas <br /> em Sistemas Reais.</>,
    description = "Em 2 dias, você sai da imersão com um Sistema de IA funcionando, não mais uma ideia na gaveta. Alan Nicolas e o time da Academia Lendár[IA]™ constroem com você, mão na massa. Sistema funcionando ou dinheiro de volta.",
    ctaText = "Quero garantir meu lugar",
    price = "R$ 428"
}: V15HeroProps) {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        setIsLightMode(document.documentElement.classList.contains('light-mode'));

        const observer = new MutationObserver(() => {
            setIsLightMode(document.documentElement.classList.contains('light-mode'));
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const handleCTAClick = () => {
        const element = document.getElementById('precos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroContainer}>
                <div className={styles.headerBar}>
                    <div className={styles.headerLeft}>
                        <img
                            src="/logo.svg"
                            alt="Academia Lendár[IA]"
                            className={styles.headerLogo}
                        />
                    </div>

                    <div className={styles.headerCenter}>
                        <div className={styles.timerWrapper}>
                            <LoteCountdown
                                targetDate={getLoteDateString(3)}
                                prefix="Último lote encerra em"
                                isTransparent={true}
                            />
                        </div>
                    </div>

                    <div className={styles.headerRight}>
                        <button className={styles.headerCta} onClick={handleCTAClick}>
                            Garantir vaga
                        </button>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.leftColumn}>
                        <div className={styles.titleContainer}>
                            <div className={styles.eventInfo}>
                                <div className={styles.dateRow}>
                                    <div className={styles.iconCircle}>
                                        <i className="fi fi-rr-calendar-lines"></i>
                                    </div>
                                    <div className={styles.dateWrapper}>
                                        <span className={styles.dateText}>24 e 25 de Janeiro</span>
                                    </div>
                                </div>
                                <div className={styles.statusBadge}>
                                    <span className={styles.pulseDot}></span>
                                    <span className={styles.statusText}>48 Horas Online e Ao Vivo</span>
                                </div>
                            </div>
                            <h1 className={styles.textBlock}>{headline}</h1>
                        </div>

                        <div className={styles.description}>
                            {description}
                        </div>

                        <div className={styles.ctaWrapper}>
                            <button className={styles.ctaButton} onClick={handleCTAClick}>
                                {ctaText}
                            </button>
                            <button className={styles.arrowButton} onClick={handleCTAClick}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
