'use client';

import React from 'react';
import styles from './AcademyContext.module.css';

export default function AcademyContext() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.textSide}>
                        <h2 className={styles.title}>Esse Fim de Semana Foi Diferente</h2>

                        <div className={styles.textContent}>
                            <p>Há 48 horas, aquela ideia só existia na sua cabeça.</p>
                            <p className={styles.strong}>Agora ela existe no mundo.</p>

                            <p>Pare e pense: <strong>quantos projetos você já começou? Quantos realmente terminou?</strong></p>

                            <p>A maioria morre na gaveta. Esse não morreu.</p>

                            <div className={styles.highlightBox}>
                                <p><strong>Você fez o que a maioria nunca faz: tirou da cabeça e colocou no mundo.</strong></p>
                            </div>

                            <p>Não importa se ficou perfeito. Não importa se travou em alguma parte. O que importa é que você provou pra si mesmo que consegue terminar.</p>

                            <p className={styles.question}>E agora?</p>
                        </div>
                    </div>

                    <div className={styles.imageSide}>
                        <div className={styles.imagePlaceholder}>
                            {/* In a real app, an actual image would go here */}
                            <div className={styles.innerBox}>
                                <span>SUA IDEIA</span>
                                <div className={styles.arrow}>↓</div>
                                <span className={styles.world}>O MUNDO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
