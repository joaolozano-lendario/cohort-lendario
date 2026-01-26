import React from 'react';
import Image from 'next/image';
import styles from './ImersaoTeam.module.css';

const teamMembers = [
    {
        name: "Alan Nicolas",
        role: "CEO do Ecossistema Lendário®",
        image: "/experts/Alan Nicolas.png",
        featured: true
    },
    {
        name: "José Carlos Amorim",
        role: "Professor da Academia Lendár[IA]™",
        image: "/experts/Jose.png"
    },
    {
        name: "Gabriel Marcondes",
        role: "CEO da Agência Lendár[IA]™ e Super Agentes™",
        image: "/experts/Gabriel-Marcondes.png"
    },
    {
        name: "Adávio Tittoni",
        role: "Professor da Academia Lendár[IA]™",
        image: "/experts/Adavio.png"
    },
    {
        name: "Lucas Charão",
        role: "Professor da Academia Lendár[IA]™",
        image: "/experts/Lucas-Charao.png"
    }
];

const ImersaoTeam = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>O Time Lendário que vai trabalhar contigo.</h2>
                    <p className={styles.subtitle}>
                        Por 48 horas, você terá acesso direto a um time Sênior que custaria<br />
                        mais +R$80k/mês se fosse interno na sua empresa.
                    </p>
                </div>

                <div className={styles.teamGrid}>
                    {/* Alan - Featured (spans 2 rows) */}
                    <div className={`${styles.memberCard} ${styles.featuredCard}`}>
                        <div className={styles.memberImage}>
                            <Image
                                src={teamMembers[0].image}
                                alt={teamMembers[0].name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <h3 className={styles.memberName}>{teamMembers[0].name}</h3>
                        <p className={styles.memberRole}>{teamMembers[0].role}</p>

                        <div className={styles.featuredDescription}>
                            <p>
                                Esse time foi convocado para resolver as suas dúvidas específicas, adaptar as soluções pro seu negócio, em tempo recorde. <span className={styles.highlight}>Você terá acesso a um departamento de IA.</span> Sem rescisão. Sem encargo. Sem dor de cabeça. Por 48 horas, esse time trabalha com você.
                            </p>
                        </div>
                    </div>

                    {/* Other team members */}
                    {teamMembers.slice(1).map((member, index) => (
                        <div key={index} className={styles.memberCard}>
                            <div className={styles.memberImage}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <h3 className={styles.memberName}>{member.name}</h3>
                            <p className={styles.memberRole}>{member.role}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default ImersaoTeam;
