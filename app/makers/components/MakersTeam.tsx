'use client';

import React from 'react';
import styles from './MakersTeam.module.css';

const team = [
    { name: 'Alan Nicolas', role: 'Fundador do Ecossistema', image: '/experts-business/Alan.png' },
    { name: 'José Carlos Amorim', role: 'Estrategista de Negócios', image: '/experts-business/José Amorim.png' },
    { name: 'João Lozano', role: 'Engenharia de Dados', image: '/experts-business/João Lozano.png' },
    { name: 'Adávio Tittoni', role: 'Automação', image: '/experts-business/Adavio.png' },
    { name: 'Lucas Charão', role: 'Sistemas', image: '/experts-business/Lucas-Charao.png' }
];

export default function MakersTeam() {
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
