'use client';

import React from 'react';
import styles from './MakersChecklist.module.css';

const techDeliveries = [
    { title: '1 App ou Solução Completa', description: 'Funcionando, deployado e com usuários podendo acessar.' },
    { title: 'Mínimo 2 Automações em Produção', description: 'Rodando 24/7 integrado com IA salvando horas por semana.' },
    { title: 'Portfolio no GitHub', description: '4 projetos completos, código limpo e documentado para impressionar.' }
];

const valueDeliveries = [
    { title: 'Fluência Técnica Real', description: 'Você passa a entender arquitetura e toma decisões técnicas sozinho.' },
    { title: 'Rede de Builders de Elite', description: 'Conexões reais com quem está fazendo, possíveis co-founders e parceiros.' },
    { title: 'Mentalidade de Constructor', description: 'O fim do medo de travar. Você sabe que consegue construir o que imaginar.' }
];

export default function MakersChecklist() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.blurCircle}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.mainTitle}>O Que Você Vai Ter Em 30 Dias.</h2>
                    <p className={styles.subtitle}>Não é promessa vaga. É checklist específico de entrega real.</p>

                    <div className={styles.formula}>
                        <span className={styles.part}>30 Dias</span>
                        <span className={styles.plus}>+</span>
                        <span className={styles.part}>Execução</span>
                        <span className={styles.equal}>=</span>
                        <span className={styles.result}>Maker PRO</span>
                    </div>
                </div>

                <div className={styles.explanation}>
                    <div className={styles.split}>
                        <div className={styles.column}>
                            <h4>Entregas Técnicas:</h4>
                            <ul className={styles.list}>
                                {techDeliveries.map((item, index) => (
                                    <li key={index} className={styles.listItem}>
                                        <i className="fi fi-rr-angle-small-right"></i>
                                        <span>
                                            <strong>{item.title}</strong>
                                            {item.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>Valor & Carreira:</h4>
                            <ul className={styles.list}>
                                {valueDeliveries.map((item, index) => (
                                    <li key={index} className={styles.listItem}>
                                        <i className="fi fi-rr-angle-small-right"></i>
                                        <span>
                                            <strong>{item.title}</strong>
                                            {item.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
