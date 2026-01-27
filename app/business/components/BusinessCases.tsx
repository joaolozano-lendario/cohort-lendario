'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './BusinessCases.module.css';

const videoIds = [
    '1158181036',
    '1158169535',
    '1158169630',
    '1158180956',
    '1158169588'
];

// Duplicate items for infinite scroll effect
const extendedVideos = [...videoIds, ...videoIds, ...videoIds];

export default function BusinessCases() {
    const [currentIndex, setCurrentIndex] = useState(videoIds.length); // Start at the middle set
    const [isTransitioning, setIsTransitioning] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);
    const [slideWidth, setSlideWidth] = useState(400 + 64); // Default desktop width + gap

    // Calculate slide width based on screen size
    useEffect(() => {
        const calculateSlideWidth = () => {
            if (typeof window !== 'undefined') {
                const width = window.innerWidth;
                if (width <= 1024) {
                    // Mobile & Tablet: 85% of viewport width + gap
                    const slideW = width * 0.85;
                    const gap = 32;
                    setSlideWidth(slideW + gap);
                } else {
                    // Desktop: Fixed width for 1:1 look
                    setSlideWidth(400 + 64);
                }
            }
        };

        calculateSlideWidth();
        window.addEventListener('resize', calculateSlideWidth);
        return () => window.removeEventListener('resize', calculateSlideWidth);
    }, []);

    const handlePrev = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    // Reset position seamlessly when reaching the edges
    useEffect(() => {
        if (currentIndex <= 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(videoIds.length);
            }, 500);
        } else if (currentIndex >= videoIds.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(videoIds.length);
            }, 500);
        }
    }, [currentIndex]);

    // Section visibility animation (optional but nice for consistency)
    const [sectionVisible, setSectionVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSectionVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={`${styles.section} ${sectionVisible ? styles.visible : ''}`} id="depoimentos">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Depoimentos de <br className={styles.titleBreak} />
                        Quem Está Dentro
                    </h2>
                    <div className={styles.controls}>
                        <button className={styles.controlBtn} onClick={handlePrev} aria-label="Anterior">
                            <i className="fi fi-rr-angle-small-left"></i>
                        </button>
                        <button className={styles.controlBtn} onClick={handleNext} aria-label="Próximo">
                            <i className="fi fi-rr-angle-small-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.carousel}>
                <div className={styles.shadowLeft}></div>
                <div className={styles.carouselInner}>
                    <div
                        ref={trackRef}
                        className={styles.track}
                        style={{
                            transform: `translateX(-${currentIndex * slideWidth}px)`,
                            transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                        }}
                    >
                        {extendedVideos.map((id, index) => (
                            <div key={`${id}-${index}`} className={styles.slide}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                        title={`Depoimento ${index + 1}`}
                                        className={styles.video}
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.shadowRight}></div>
            </div>
        </section>
    );
}
