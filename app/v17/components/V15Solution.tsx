import React from 'react';
import styles from '../v17.module.css';
import solStyles from './V15Solution.module.css';

const days = [
    {
        label: "Dia 01",
        sessions: [
            { period: "Manhã", icon: "fi-rr-sun", text: "Você mapeia sua ideia mais valiosa e define exatamente o que vai construir" },
            { period: "Tarde", icon: "fi-rr-sunrise", text: "Você começa a criar o sistema, com o time ao seu lado, em tempo real" },
            { period: "Noite", icon: "fi-rr-moon-stars", text: "Plantão especializado para resolver seus desafios específicos" }
        ]
    },
    {
        label: "Dia 02",
        sessions: [
            { period: "Manhã", icon: "fi-rr-sun", text: "Você finaliza o sistema e deixa pronto para usar" },
            { period: "Tarde", icon: "fi-rr-sunrise", text: "Você otimiza, testa e recebe o roadmap de evolução" },
            { period: "Noite", icon: "fi-rr-moon-stars", text: "Últimos ajustes e clareza total de como seguir" }
        ]
    }
];

export default function V15Solution() {
    return (
        <section className={solStyles.sectionWrapper}>
            <div className={styles.container}>
                <div className={solStyles.header}>
                    <h2 className={styles.titleLarge}>De Ideia Para Sistema Real em 48 Horas</h2>
                    <p className={styles.textLead}>Você não vai aprender "sobre IA". Você vai <span className={solStyles.whiteHighlight}>CRIAR com IA</span>.</p>
                </div>

                <div className={solStyles.timelinesContainer}>
                    {days.map((day, di) => (
                        <div key={di} className={solStyles.daySection}>
                            <h3 className={solStyles.dayTitle}>{day.label}</h3>
                            <div className={solStyles.timeline}>
                                {day.sessions.map((session, si) => (
                                    <div key={si} className={solStyles.timelinePoint}>
                                        <div className={solStyles.pointIcon}>
                                            <i className={`fi ${session.icon}`}></i>
                                        </div>
                                        <div className={solStyles.pointContent}>
                                            <span className={solStyles.periodLabel}>{session.period}</span>
                                            <p className={solStyles.periodDesc}>{session.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={solStyles.footer}>
                    <p>No final do domingo, você tem algo que não existia na sexta.</p>
                    <h3>Um sistema customizado. Criado por você. Funcionando.</h3>
                </div>
            </div>
        </section>
    );
}
