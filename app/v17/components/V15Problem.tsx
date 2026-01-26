'use client';

import styles from './V15Problem.module.css';

export default function V15Problem() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <div className={styles.textCard}>
                        <div className={styles.text}>
                            <p>
                                Você tem ideias incríveis na cabeça.
                            </p>

                            <p>
                                Você vê possibilidades que outros não veem. Você sabe que poderia criar algo único, algo que resolve problemas reais.
                            </p>

                            <p>
                                Mas tem um <span className={styles.highlight}>gap entre a ideia e a execução</span>. Você não sabe por onde começar. Não tem equipe técnica. Não tem tempo para errar e testar sozinho.
                            </p>

                            <p>
                                E enquanto você adia, suas ideias continuam apenas como ideias.
                            </p>

                            <p>
                                <span className={styles.highlight}>E se você pudesse materializar sua melhor ideia em 48 horas?</span> Sem precisar saber programar. Sem contratar desenvolvedor. Sem complicação técnica.
                            </p>

                            <p>
                                É exatamente isso que acontece na Imersão Prática de IA para Negócios.
                            </p>

                            <p>
                                Um ambiente focado onde o objetivo não é apenas aprender, mas sim <span className={styles.highlight}>construir seu próprio sistema</span> funcionando em tempo recorde.
                            </p>

                            <p>
                                Não é sobre assistir aulas, é sobre sair com a ferramenta que você precisa para escalar seus resultados.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.infoCard}>
                        <span className={styles.cardName}>Alan Nicolas</span>
                        <p className={styles.cardTitle}>
                            CEO do Maior ecossistema de <br />
                            IA Generativa para Negócios do Brasil
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
