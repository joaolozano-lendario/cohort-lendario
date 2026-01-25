'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './BusinessCases.module.css';
import { motion, AnimatePresence } from 'motion/react';

const videoIds = [
    '1158181036',
    '1158169535',
    '1158169630',
    '1158180956',
    '1158169588'
];

export default function BusinessCases() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const next = () => {
        if (currentIndex < videoIds.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(videoIds.length - 1);
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.offsetWidth / (window.innerWidth > 1024 ? 2.5 : 1.2);
            scrollRef.current.scrollTo({
                left: currentIndex * (cardWidth + 24),
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Alguns CASES de Sucesso.</h2>
                    <div className={styles.controls}>
                        <button onClick={prev} className={styles.controlBtn} aria-label="Anterior">
                            <i className="fi fi-rr-angle-left"></i>
                        </button>
                        <button onClick={next} className={styles.controlBtn} aria-label="Próximo">
                            <i className="fi fi-rr-angle-right"></i>
                        </button>
                    </div>
                </div>

                <div className={styles.sliderWrapper}>
                    <div className={styles.slider} ref={scrollRef}>
                        {videoIds.map((id, index) => (
                            <div key={id} className={styles.videoCard}>
                                <div className={styles.aspectRatio}>
                                    <iframe
                                        src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title={`Sucesso Case ${index + 1}`}
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
