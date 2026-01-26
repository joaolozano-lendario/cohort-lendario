'use client';

import { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';
import { getLoteDates } from '../lib/loteConfig';

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });
    const [currentBatch, setCurrentBatch] = useState(1);

    useEffect(() => {
        const { lote1Date, lote2Date, lote3Date } = getLoteDates();

        const timer = setInterval(() => {
            const now = new Date().getTime();

            // Determina qual lote está ativo
            let targetDate;
            let batch;

            if (now < lote1Date) {
                targetDate = lote1Date;
                batch = 1;
            } else if (now < lote2Date) {
                targetDate = lote2Date;
                batch = 2;
            } else {
                targetDate = lote3Date;
                batch = 3;
                if (now >= lote3Date) {
                    clearInterval(timer);
                }
            }

            setCurrentBatch(batch);
            const difference = targetDate - now;

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
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const getBatchText = () => {
        if (currentBatch === 1) return 'primeiro';
        if (currentBatch === 2) return 'segundo';
        return 'último';
    };

    const batchText = getBatchText();
    const daysLabel = parseInt(timeLeft.days) === 1 ? 'Dia' : 'Dias';

    return (
        <div className={styles.timerWrapper}>
            <div className={styles.container}>
                <div className={styles.mainText}>
                    <span className={styles.prefix}>Faltam apenas</span>
                    <span className={styles.countdown}>{timeLeft.days}<span className={styles.label}>{daysLabel}</span> : {timeLeft.hours}<span className={styles.label}>Hrs</span> : {timeLeft.minutes}<span className={styles.label}>Min</span> : {timeLeft.seconds}<span className={styles.label}>Seg</span></span>
                </div>
                <div className={styles.subText}>
                    para encerrar o {batchText} lote da Imersão.
                </div>
            </div>
        </div>
    );
}
