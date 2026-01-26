'use client';

import { useState, useEffect } from 'react';
import styles from './ImersaoOffer.module.css';

interface LoteCountdownProps {
    targetDate: string;
    prefix?: string;
    isTransparent?: boolean;
}

export default function LoteCountdown({ targetDate, prefix = "Esta oferta encerra em", isTransparent = false }: LoteCountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: days.toString().padStart(2, '0'),
                    hours: hours.toString().padStart(2, '0'),
                    minutes: minutes.toString().padStart(2, '0'),
                    seconds: seconds.toString().padStart(2, '0')
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const daysLabel = parseInt(timeLeft.days) === 1 ? 'Dia' : 'Dias';

    return (
        <div
            className={`${styles.loteTimerBanner} ${isTransparent ? styles.transparentBanner : ''}`}
            style={isTransparent ? { background: 'none', backgroundColor: 'transparent', backdropFilter: 'none', border: 'none', boxShadow: 'none', padding: 0 } : {}}
        >
            <span className={styles.loteTimerPrefix}>{prefix} </span>
            <span className={styles.loteTimerValues}>
                {timeLeft.days} {daysLabel} : {timeLeft.hours} Hrs : {timeLeft.minutes} Min : {timeLeft.seconds} Seg
            </span>
        </div>
    );
}
