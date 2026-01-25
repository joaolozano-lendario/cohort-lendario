'use client';

import React from 'react';
import styles from './BusinessIncludes.module.css';

const includes = [
    {
        number: '01',
        title: 'Método Growth IA®',
        subtitle: 'Posicionamento, Oferta, Canais & Escala',
        description: 'O framework completo para estruturar seu negócio de IA do zero ou escalar o que você já tem. Você define posicionamento estratégico que te coloca como autoridade no nicho, estrutura de oferta irresistível que justifica preços premium, mapeamento de canais de aquisição previsíveis e estratégia de crescimento sustentável. Não é teoria. É o método validado com centenas de técnicos que transformaram expertise em negócio recorrente.'
    },
    {
        number: '02',
        title: 'Mentorias Ao Vivo',
        subtitle: '2 Vezes por Semana',
        description: 'Acesso ao time de especialistas da Academia Lendária. Acompanhamento real, tirando suas dúvidas específicas, validando cada passo, garantindo que você não trave no meio do caminho. 8 sessões por semana. Mais de 60 horas por mês.',
        specialists: ['Vendas — Scripts, prospecção, fechamento e objeções', 'Modelagem de Negócios — Estrutura, operação e escalabilidade', 'Marketing — Posicionamento, canais e aquisição', 'Branding — Identidade, comunicação e autoridade', 'Growth — Experimentos, métricas e otimização', 'Conteúdo — Narrativa, copy e produção estratégica', 'Engenharia de Dados — Análise, automação e integrações', 'Precificação — Valor real, não hora trabalhada', 'Operações — Sistemas, POPs e eficiência']
    },
    {
        number: '03',
        title: 'Frameworks de Marketing',
        subtitle: 'Cursos e Ferramentas para Receita Mensurável',
        description: 'Biblioteca completa de cursos práticos e templates testados para gerar ROI comprovado. Da prospecção ao fechamento, do posicionamento ao tráfego, da conversão à retenção. Você recebe exatamente o que precisa para cada etapa do crescimento — sem teoria de guru, sem conteúdo genérico. Implementação imediata, resultados em 30 dias.'
    },
    {
        number: '04',
        title: 'Playbook de Vendas & Operações',
        subtitle: 'Scripts Prontos e Análise Automatizada',
        description: 'Scripts de reunião validados, sequências de follow-up que convertem, análises de conversas com IA e recomendações automáticas de próximos passos, contratos revisados juridicamente. Sistema comercial completo que fecha contratos enquanto você está criando. Não precisa inventar nada do zero — usa o que já funciona.'
    },
    {
        number: '05',
        title: 'Ferramentas de IA Internas',
        subtitle: 'Gestão Tributária, Financeira e Operacional',
        description: 'As mesmas soluções proprietárias que mantêm a operação de todo nosso Ecossistema Lendário enxuto e com margens preservadas. Análise tributária automatizada, criação de POPs, gerenciador de assinaturas SaaS e otimizador de propostas comerciais. Ferramentas que blindam seu negócio e preservam lucro.'
    }
];

export default function BusinessIncludes() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        O Que Você Recebe<br />
                        no Lendários Business
                    </h2>
                    <p className={styles.subtitle}>
                        Não é curso. Não é conteúdo gravado que você assiste sozinho.<br />
                        É um sistema completo de negócio + time de especialistas te acompanhando toda semana.
                    </p>
                </div>

                <div className={styles.itemsContainer}>
                    {includes.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.itemNumber}>{item.number}</div>
                            <div className={styles.itemContent}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.itemSubtitle}>{item.subtitle}</p>
                                <p className={styles.itemDescription}>{item.description}</p>
                                {item.specialists && (
                                    <ul className={styles.specialistsList}>
                                        {item.specialists.map((spec, i) => (
                                            <li key={i} className={styles.specialistItem}>{spec}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
