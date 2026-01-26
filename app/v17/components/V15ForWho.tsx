import React from 'react';
import styles from '../v17.module.css';
import forStyles from './V15ForWho.module.css';

export default function V15ForWho() {
    return (
        <section className={`${styles.section} ${forStyles.wrapper}`}>
            <div className={styles.container}>
                <div className={forStyles.grid}>
                    {/* Para Quem É */}
                    <div className={`${forStyles.card} ${forStyles.cardForWho}`}>
                        <h2 className={forStyles.title}>
                            Para Quem É a Imersão:
                        </h2>
                        <ul className={forStyles.list}>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-check ${forStyles.iconCheck}`}></i>
                                <span>Você tem ideias na cabeça mas não consegue tirá-las do papel por falta de conhecimento técnico.</span>
                            </li>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-check ${forStyles.iconCheck}`}></i>
                                <span>Você está em transição de carreira e quer criar algo próprio, algo que te diferencie no mercado.</span>
                            </li>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-check ${forStyles.iconCheck}`}></i>
                                <span>Você é visionário, antecipador, quer estar à frente — não acompanhando tendências, mas criando elas.</span>
                            </li>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-check ${forStyles.iconCheck}`}></i>
                                <span>Você tem dores específicas no seu trabalho ou negócio que nenhuma ferramenta pronta resolve direito.</span>
                            </li>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-check ${forStyles.iconCheck}`}></i>
                                <span>Você está disposto a trabalhar 2 dias intensivos para sair com algo real funcionando.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Para Quem NÃO É */}
                    <div className={`${forStyles.card} ${forStyles.cardNotForWho}`}>
                        <h2 className={forStyles.title}>
                            Para Quem NÃO É a Imersão:
                        </h2>
                        <ul className={forStyles.list}>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-xmark ${forStyles.iconCross}`}></i>
                                <span>Você só quer "entender sobre IA" sem construir nada prático agora.</span>
                            </li>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-xmark ${forStyles.iconCross}`}></i>
                                <span>Você não tem ideias próprias ou dores específicas para resolver.</span>
                            </li>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-xmark ${forStyles.iconCross}`}></i>
                                <span>Você quer aprender programação, código ou ferramentas complexas — aqui é sobre criar com simplicidade.</span>
                            </li>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-xmark ${forStyles.iconCross}`}></i>
                                <span>Você não tem sábado e domingo disponíveis para dedicação total.</span>
                            </li>
                            <li className={forStyles.listItem}>
                                <i className={`fi fi-rr-octagon-xmark ${forStyles.iconCross}`}></i>
                                <span>Você quer resultado sem esforço — a gente facilita, mas você precisa estar ativo.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
