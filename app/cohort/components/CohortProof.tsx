'use client';

import React, { useState, useEffect } from 'react';
import styles from './CohortProof.module.css';

const highlightTestimonial = {
    quote: "Já valeu 10x a imersão!",
    author: "Josef",
    role: "Aluno Imersão"
};

const carouselTestimonials = [
    {
        quote: "Fazia tempo que eu não estava tão viciado em algo...",
        author: "Torriani"
    },
    {
        quote: "Virada de chave! Os PSs é algo que ninguém faz.",
        author: "William"
    },
    {
        quote: "Acordei sem despertador com uma força maior me chamando.",
        author: "Marcia, 59 anos"
    },
    {
        quote: "Cada dia tenho certeza que tô no melhor lugar/comunidade.",
        author: "Genesis"
    },
    {
        quote: "É muito bom não se sentir burro SOZINHO.",
        author: "Mário Romero"
    },
    {
        quote: "Isso não é um Puxadinho. Isso é uma Catedral.",
        author: "Jaya Roberta"
    },
    {
        quote: "Pensei em desistir, mas quando vi pessoas de todas as idades conseguindo, entendi que eu também não posso desistir.",
        author: "Luciana"
    },
    {
        quote: "Vai ter muita gente não dormindo mais",
        author: "Marcos Ferreira"
    },
    {
        quote: "Já estou 3 noites sem dormir hackeando AIOS",
        author: "José Petrúcio"
    },
    {
        quote: "O problema é que não queremos dormir mais",
        author: "Diego Sottani"
    },
    {
        quote: "Caixa de Pandora na minha cabeça",
        author: "Walter Sousa"
    },
    {
        quote: "É tipo ver o Ronaldinho fazer bruxaria e ensinar como fez",
        author: "Dr. Lucas Moraes"
    }
];

export default function CohortProof() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                (prev + itemsPerPage) >= carouselTestimonials.length ? 0 : prev + itemsPerPage
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const visibleTestimonials = carouselTestimonials.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.firstBadge}>
                        <i className="fi fi-rr-star"></i>
                        <span>Primeira e Única Turma de 2026</span>
                    </div>
                    <h2 className={styles.title}>
                        <span className={styles.titleHighlight}>8 Semanas Ao Vivo</span><br />
                        <span className={styles.titleLight}>Com Alan Nicolas</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Quem passou pela imersão sabe o que é possível.
                        Agora você vai FAZER junto com ele.
                    </p>
                </div>

                {/* Highlight Testimonial */}
                <div className={styles.highlightCard}>
                    <div className={styles.highlightQuoteIcon}>
                        <i className="fi fi-rr-quote-right"></i>
                    </div>
                    <blockquote className={styles.highlightQuote}>
                        "{highlightTestimonial.quote}"
                    </blockquote>
                    <div className={styles.highlightAuthor}>
                        <div className={styles.highlightAvatar}>
                            <span>J</span>
                        </div>
                        <div className={styles.highlightInfo}>
                            <span className={styles.highlightName}>{highlightTestimonial.author}</span>
                            <span className={styles.highlightRole}>{highlightTestimonial.role}</span>
                        </div>
                    </div>
                </div>

                {/* Carousel */}
                <div className={styles.carouselSection}>
                    <div className={styles.carouselHeader}>
                        <span>O que os Lendários estão falando sobre a Imersão:</span>
                        <div className={styles.carouselDots}>
                            {Array.from({ length: Math.ceil(carouselTestimonials.length / itemsPerPage) }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`${styles.dot} ${Math.floor(currentIndex / itemsPerPage) === i ? styles.activeDot : ''}`}
                                    onClick={() => setCurrentIndex(i * itemsPerPage)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.carouselGrid}>
                        {visibleTestimonials.map((testimonial, index) => (
                            <div key={index} className={styles.carouselCard}>
                                <blockquote>"{testimonial.quote}"</blockquote>
                                <cite>— {testimonial.author}</cite>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.statsBar}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>83</span>
                        <span className={styles.statLabel}>Pessoas fizeram a<br />mesma pergunta</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>~50</span>
                        <span className={styles.statLabel}>Vagas nesse<br />cohort</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>8</span>
                        <span className={styles.statLabel}>Semanas de<br />imersão prática</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>1º</span>
                        <span className={styles.statLabel}>Cohort da<br />história</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
