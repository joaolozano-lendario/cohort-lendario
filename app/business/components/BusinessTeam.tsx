'use client';

import React from 'react';
import styles from './BusinessTeam.module.css';

const team = [
    { name: 'Alan Nicolas', role: 'Modelo de Negócios', image: '/experts-business/Alan.png' },
    { name: 'José Carlos Amorim', role: 'Estrategista de Negócios', image: '/experts-business/José Amorim.png' },
    { name: 'Gabriel Marcondes', role: 'Negócios com IA', image: '/experts-business/Gabriel-Marcondes.png' },
    { name: 'João Lozano', role: 'Engenharia de Dados', image: '/experts-business/João Lozano.png' },
    { name: 'Adávio Tittoni', role: 'Automação', image: '/experts-business/Adavio.png' },
    { name: 'Lucas Charão', role: 'Sistemas', image: '/experts-business/Lucas-Charao.png' },
    { name: 'Lucas Rover', role: 'Gestão & Operações', image: '/experts-business/Lucas Rover.png' },
    { name: 'João Pedro', role: 'Branding e Design', image: '/experts-business/João Pedro.png' },
    { name: 'Erica Souza', role: 'Marketing e Conteúdo', image: '/experts-business/Erica Souza.png' },
    { name: 'Fran Martins', role: 'Vendas e Produto', image: '/experts-business/Fran Martins.png' }
];

export default function BusinessTeam() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        O Time Lendário que vai estar<br />
                        com você nessa Jornada.
                    </h2>
                </div>

                <div className={styles.grid}>
                    {team.map((member, index) => (
                        <div key={index} className={styles.memberCard}>
                            <div className={styles.imageContainer}>
                                <img src={member.image} alt={member.name} className={styles.memberImage} />
                            </div>
                            <div className={styles.memberInfo}>
                                <h3 className={styles.name}>{member.name}</h3>
                                <p className={styles.role}>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
