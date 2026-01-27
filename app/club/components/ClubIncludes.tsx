'use client';

import React from 'react';
import styles from './ClubIncludes.module.css';

const includes = [
    {
        number: '01',
        icon: 'fi-rr-brain-circuit',
        title: 'Diagnóstico Personalizado',
        subtitle: 'Sistema Segundo Cérebro',
        description: 'Primeiro você responde o Sistema Segundo Cérebro e nós te colocamos na trilha certa para o seu momento: Trilha A (Clareza), Trilha B (Amplificação) ou Trilha C (Transição). Cada trilha tem roadmap específico, conteúdo direcionado e mentorias focadas.',
        trilhas: [
            'TRILHA A - Clareza (47.8% da base) - Você ainda não sabe qual problema quer resolver',
            'TRILHA B - Amplificação (25.4% da base) - Você já tem contexto e quer amplificar',
            'TRILHA C - Transição (21.4% da base) - Está mudando de carreira para IA'
        ]
    },
    {
        number: '02',
        icon: 'fi-rr-users',
        title: 'Circle com +15 Mil Lendários',
        subtitle: 'Networking Real',
        description: 'Não é grupo de WhatsApp que vira spam. É uma plataforma real, organizada, onde operadores reais compartilham o que está funcionando, founders mostram bastidores, investidores dão feedback em ideias. Você encontra co-founders, parceiros, clientes. Networking de verdade.'
    },
    {
        number: '03',
        icon: 'fi-rr-videoconference',
        title: 'Mentorias Ao Vivo Semanais',
        subtitle: 'Com Quem Está Fazendo Acontecer',
        description: 'Toda semana, ao vivo, com quem está fazendo acontecer. Não é "palestra gravada". É mentoria real, ao vivo, com espaço para perguntas. Você pode levantar mão e perguntar na hora. E recebe resposta de quem já fez.'
    },
    {
        number: '04',
        icon: 'fi-rr-marker',
        title: 'Hubs Presenciais (+50 pelo Mundo)',
        subtitle: 'Conexões Reais',
        description: 'Porque tela não substitui olho no olho. São Paulo, Rio, BH, Curitiba, Porto Alegre (Brasil), Lisboa, Porto (Portugal), Miami, NYC, Austin (EUA), Berlim, Londres, Barcelona (Europa) e +40 outros hubs. Encontros reais. Pessoas reais. Conexões reais.'
    },
    {
        number: '05',
        icon: 'fi-rr-book-open-reader',
        title: 'Eventos, Clube do Livro, Mulheres Lendárias',
        subtitle: 'Desenvolvimento Completo',
        description: 'Porque desenvolvimento não é só técnica. Eventos Lendários presenciais pelo Brasil e mundo, Clube do Livro com leitura conjunta dos clássicos, Mulheres Lendárias - espaço dedicado para mulheres na tech.'
    }
];

export default function ClubIncludes() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.blurCircle}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.mainTitle}>
                        O Que Acontece Quando<br />
                        Você Entra Na Comunidade Lendária
                    </h2>
                    <p className={styles.subtitle}>
                        Não é mágica. É estrutura.
                    </p>
                </div>

                <div className={styles.singleColumn}>
                    <div className={styles.timeline}>
                        {includes.map((item, index) => (
                            <div key={index} className={styles.item}>
                                <div className={styles.itemIcon}>
                                    <i className={`fi ${item.icon}`}></i>
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemNumber}>{item.number}</div>
                                    <h4>{item.title}</h4>
                                    <h5>{item.subtitle}</h5>
                                    <p>{item.description}</p>
                                    {item.trilhas && (
                                        <ul className={styles.trilhasList}>
                                            {item.trilhas.map((trilha, i) => (
                                                <li key={i} className={styles.trilhaItem}>
                                                    <i className="fi fi-rr-check"></i> {trilha}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
