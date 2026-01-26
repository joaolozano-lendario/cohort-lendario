import React from 'react';
import styles from '../v17.module.css';
import methStyles from './V15Methodology.module.css';

export default function V15Methodology() {
    return (
        <section className={methStyles.wrapper}>
            <div className={methStyles.blurCircle}></div>
            <div className={styles.container}>
                <div className={methStyles.header}>
                    <h2 className={styles.titleLarge}>A Metodologia: 80% Clareza, 20% IA</h2>
                    <div className={methStyles.formula}>
                        <span className={methStyles.part}>80% Clareza</span>
                        <span className={methStyles.plus}>+</span>
                        <span className={methStyles.part}>20% IA</span>
                        <span className={methStyles.equal}>=</span>
                        <span className={methStyles.result}>Sistema Real</span>
                    </div>
                </div>

                <div className={methStyles.explanation}>
                    <div className={methStyles.intro}>
                        <h3>Todo Mundo Cria Errado</h3>
                        <p>A maioria pula direto para a tecnologia sem saber o que realmente precisa criar.</p>
                        <p className={methStyles.result}>Resultado? Sistemas confusos, que ninguém usa, que não resolvem nada.</p>
                    </div>

                    <div className={methStyles.split}>
                        <div className={methStyles.column}>
                            <h4>80% Clareza:</h4>
                            <ul>
                                <li>
                                    <i className="fi fi-rr-angle-small-right"></i>
                                    <span>Qual problema você está resolvendo?</span>
                                </li>
                                <li>
                                    <i className="fi fi-rr-angle-small-right"></i>
                                    <span>Para quem você está criando isso?</span>
                                </li>
                                <li>
                                    <i className="fi fi-rr-angle-small-right"></i>
                                    <span>Como o sistema vai funcionar na prática?</span>
                                </li>
                            </ul>
                        </div>
                        <div className={methStyles.column}>
                            <h4>20% IA:</h4>
                            <ul>
                                <li>
                                    <i className="fi fi-rr-angle-small-right"></i>
                                    <span>Qual ferramenta simples resolve isso?</span>
                                </li>
                                <li>
                                    <i className="fi fi-rr-angle-small-right"></i>
                                    <span>Como você constrói sem código?</span>
                                </li>
                                <li>
                                    <i className="fi fi-rr-angle-small-right"></i>
                                    <span>Como você deixa pronto para usar?</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={methStyles.outro}>
                        <h3>Você sai com um sistema claro, funcional e útil.</h3>
                        <p>Não uma gambiarra técnica que ninguém entende.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
