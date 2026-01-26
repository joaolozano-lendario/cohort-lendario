'use client';

import React, { useRef, useMemo } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import styles from './ScrollRevealText.module.css';

interface ScrollRevealTextProps {
    text: string;
    highlightPhrases?: string[];
    containerClassName?: string;
}

export default function ScrollRevealText({
    text,
    highlightPhrases = [],
    containerClassName
}: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.75", "end 0.35"]
    });

    // Split by punctuation followed by space, keeping the punctuation
    const sentences = useMemo(() => {
        return text.split(/(?<=[.?!])\s+/);
    }, [text]);

    const allWords = useMemo(() => text.split(/\s+/), [text]);
    const totalWords = allWords.length;

    const highlightedIndices = useMemo(() => {
        const indices = new Set<number>();
        highlightPhrases.forEach(phrase => {
            const phraseWords = phrase.split(/\s+/);
            for (let i = 0; i <= allWords.length - phraseWords.length; i++) {
                let match = true;
                for (let j = 0; j < phraseWords.length; j++) {
                    const wordA = allWords[i + j];
                    const wordB = phraseWords[j];
                    if (wordA !== wordB) {
                        match = false;
                        break;
                    }
                }
                if (match) {
                    for (let j = 0; j < phraseWords.length; j++) {
                        indices.add(i + j);
                    }
                }
            }
        });
        return indices;
    }, [allWords, highlightPhrases]);

    let globalWordIndex = 0;

    return (
        <div ref={containerRef} className={`${styles.scrollRevealContainer} ${containerClassName || ''}`}>
            {sentences.map((sentence, sIdx) => {
                const words = sentence.split(/\s+/);
                return (
                    <p key={sIdx} className={styles.revealParagraph}>
                        {words.map((word, wIdx) => {
                            const currentIdx = globalWordIndex++;
                            const start = currentIdx / totalWords;
                            const end = start + (1 / totalWords);
                            const isHighlighted = highlightedIndices.has(currentIdx);

                            return (
                                <Word
                                    key={wIdx}
                                    range={[start, end]}
                                    progress={scrollYProgress}
                                    isHighlighted={isHighlighted}
                                >
                                    {word}
                                </Word>
                            );
                        })}
                    </p>
                );
            })}
        </div>
    );
}

interface WordProps {
    children: string;
    range: [number, number];
    progress: MotionValue<number>;
    isHighlighted?: boolean;
}

function Word({ children, range, progress, isHighlighted }: WordProps) {
    const opacity = useTransform(progress, range, [0.16, 1]);

    return (
        <span className={styles.wordWrapper}>
            <motion.span
                style={{ opacity }}
                className={`${styles.word} ${isHighlighted ? styles.highlight : ''}`}
            >
                {children}
            </motion.span>
        </span>
    );
}
