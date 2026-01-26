'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImersaoCases.module.css';

const cases = [
    {
        id: 7,
        image: '/Cases/HubIA360.jpg',
        title: 'Hub IA 360',
        description: 'Plataforma que otimiza seus anúncios para Mercado Livre, Shopee, Amazon e Magalu. Criada para reduzir o trabalho manual de marketplaces, otimizar anúncios com IA e aumentar suas vendas através de SEO avançado.',
        authorName: 'Patrick Cardoso',
        authorImage: '/Cases/Patrick Cardoso.png'
    },
    {
        id: 5,
        image: '/Cases/DermoGuia.jpg',
        title: 'Dermo Guia',
        description: 'Assistente clínico com IA para dermatologia na Atenção Primária. Analisa lesões por foto, sugere diagnósticos diferenciais baseados em protocolos da SBD e gera prescrições completas em segundos.',
        authorName: 'Pedro Freitas',
        authorImage: '/Cases/Pedro Freitas.png'
    },
    {
        id: 2,
        image: '/Cases/ContaAI.jpg',
        title: 'Conta.AI',
        description: 'Assistente de diagnóstico fiscal com IA especializada em negócios digitais brasileiros. Em apenas 5 minutos, a plataforma analisa a situação tributária do empreendedor através de um questionário inteligente.',
        authorName: 'Misael Hermogenes',
        authorImage: '/Cases/Misael Hermogenes.png'
    },
    {
        id: 6,
        image: '/Cases/NexoAtlas.jpg',
        title: 'Nexo Atlas',
        description: 'Diário inteligente de alta performance cognitiva baseado em "O Almanaque" de Naval Ravikant. Processa 5 perguntas diárias com IA para prevenir burnout, revelar progresso invisível e combater a sensação de "hoje não fiz nada".',
        authorName: 'José Amorim',
        authorImage: '/Cases/Jose.png'
    },
    {
        id: 1,
        image: '/Cases/KidsLearn.jpg',
        title: 'Kids Learn',
        description: '1º Tutor infantil gamificado, capaz de transformar qualquer foto, PDF ou tema digitado em uma jornada de aprendizado personalizada, divertida e inteligente, adaptada à idade da criança e acompanhada pelos responsáveis.',
        authorName: 'Marcello Junqueira',
        authorImage: '/Cases/Marcello Junqueira.png'
    },
    {
        id: 3,
        image: '/Cases/NeuroFocus.jpg',
        title: 'NeuroFocus',
        description: 'App que resolve a paralisia de execução típica do TDAH: procrastinação crônica, dificuldade em priorizar, sobrecarga com tarefas grandes, falta de dopamina sem sensação de progresso e burnout invisível.',
        authorName: 'Pedro Freitas',
        authorImage: '/Cases/Pedro Freitas.png'
    },
    {
        id: 8,
        image: '/Cases/BrandOS.jpg',
        title: 'BrandOs',
        description: 'Sistema Criativo para desenvolver Assets Visuais (Carrosséis, Ads, Posts e Slides), com a mesma qualidade de um Designer Sênior. Reduz o tempo de produção de 2 horas para 3 minutos.',
        authorName: 'João Pedro Rodrigues',
        authorImage: '/Cases/Joao-Pedro.png'
    },
    {
        id: 4,
        image: '/Cases/LucroCerto.jpg',
        title: 'Lucro Certo',
        description: 'Hub de gestão inteligente que transforma fotos de notas fiscais em ações automáticas de vendas. A IA atualiza custos, ajusta preços e cria posts para redes sociais, conectando a cozinha ao mercado em um único clique.',
        authorName: 'Thierry A. Santana',
        authorImage: '/Cases/Pedro Freitas.png'
    }
];

// Duplicate items for infinite scroll effect
const extendedCases = [...cases, ...cases, ...cases];

export default function ImersaoCases() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);

    const [slideWidth, setSlideWidth] = useState(0);

    useEffect(() => {
        const updateSlideWidth = () => {
            if (trackRef.current && trackRef.current.children.length > 0) {
                const firstSlide = trackRef.current.children[0] as HTMLElement;
                const gap = parseInt(window.getComputedStyle(trackRef.current).gap) || 0;
                setSlideWidth(firstSlide.offsetWidth + gap);
            }
        };

        const timer = setTimeout(updateSlideWidth, 100);
        window.addEventListener('resize', updateSlideWidth);
        return () => {
            window.removeEventListener('resize', updateSlideWidth);
            clearTimeout(timer);
        };
    }, []);

    const handlePrev = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    useEffect(() => {
        if (currentIndex < 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(cases.length - 1);
            }, 500);
        } else if (currentIndex >= cases.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 500);
        }
    }, [currentIndex]);

    // Drag/Swipe functionality
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);

    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
        setIsTransitioning(false);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const currentPosition = clientX;
        const diff = currentPosition - startX;
        setCurrentTranslate(prevTranslate + diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        setIsTransitioning(true);

        const movedBy = currentTranslate - prevTranslate;

        // Se arrastou mais de 50px, muda de slide
        if (movedBy < -50 && slideWidth > 0) {
            handleNext();
        } else if (movedBy > 50 && slideWidth > 0) {
            handlePrev();
        }

        setCurrentTranslate(0);
        setPrevTranslate(0);
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleDragEnd();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleDragEnd();
        }
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        handleDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleDragEnd();
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Alguns Sistemas de IA criados por nossos alunos e nosso time.
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
                            transform: `translateX(${-currentIndex * slideWidth + currentTranslate}px)`,
                            transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                            cursor: isDragging ? 'grabbing' : 'grab',
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {extendedCases.map((item, index) => (
                            <div key={`${item.id}-${index}`} className={styles.slide}>
                                <div className={styles.cardImage}>
                                    <div className={styles.imageInner}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDescription}>{item.description}</p>
                                    <div className={styles.author}>
                                        <div className={styles.authorImageWrapper}>
                                            <Image
                                                src={item.authorImage}
                                                alt={item.authorName}
                                                width={40}
                                                height={40}
                                                className={styles.authorImage}
                                            />
                                        </div>
                                        <span className={styles.authorName}>{item.authorName}</span>
                                    </div>
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
