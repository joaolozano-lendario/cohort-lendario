import React from 'react';
import styles from '../v17.module.css';
import schStyles from './V15Schedule.module.css';

const days = [
    {
        date: "Sábado 24/Janeiro",
        sessions: [
            { time: "09h-12h", icon: "fi-rr-sun", title: "Mapeamento de Clareza", desc: "Você identifica sua dor específica, mapeia processos envolvidos e define qual sistema vai criar durante a imersão.", deliverable: "Mapa de Clareza + Sistema definido" },
            { time: "13h30-18h", icon: "fi-rr-sunrise", title: "Construção Parte 1", desc: "Você começa a construir o sistema de IA com o time ao seu lado, em tempo real, replicando cada passo.", deliverable: "Sistema básico funcionando" },
            { time: "19h-23h", icon: "fi-rr-moon-stars", title: "Plantão Especializado", desc: "Suporte técnico individualizado para resolver travas específicas na interface, dados, automação ou integrações do seu sistema.", deliverable: "Sistema refinado e validado" }
        ]
    },
    {
        date: "Domingo 25/Janeiro",
        sessions: [
            { time: "09h-12h", icon: "fi-rr-sun", title: "Sistema Completo", desc: "Refinamento técnico, integração de componentes e ajustes finais para deixar o sistema pronto para uso em produção.", deliverable: "Sistema completo em produção" },
            { time: "13h30-18h", icon: "fi-rr-sunrise", title: "Otimização + Roadmap", desc: "Testes finais de performance, otimização de funcionalidades e construção do plano de ação para os próximos 90 dias.", deliverable: "Roadmap de evolução de 90 dias" },
            { time: "19h-23h", icon: "fi-rr-moon-stars", title: "Suporte Final", desc: "Resolução das últimas dúvidas técnicas, orientação sobre próximos passos e networking estratégico com outros criadores.", deliverable: "Clareza total dos próximos passos" }
        ]
    }
];

export default function V15Schedule() {
    return (
        <section className={schStyles.wrapper}>
            <div className={schStyles.blurCircle}></div>
            <div className={styles.container}>
                <h2 className={`${styles.titleLarge} ${schStyles.mainTitle}`}>Cronograma Completo</h2>

                <div className={schStyles.daysGrid}>
                    {days.map((day, di) => (
                        <div key={di} className={schStyles.dayColumn}>
                            <h3 className={schStyles.dayTitle}>{day.date}</h3>
                            <div className={schStyles.timeline}>
                                {day.sessions.map((s, si) => (
                                    <div key={si} className={schStyles.session}>
                                        <div className={schStyles.sessionIcon}>
                                            <i className={`fi ${s.icon}`}></i>
                                        </div>
                                        <div className={schStyles.sessionContent}>
                                            <div className={schStyles.time}>{s.time}</div>
                                            <h4>{s.title}</h4>
                                            <p>{s.desc}</p>
                                            {s.deliverable && (
                                                <div className={schStyles.deliverable}>
                                                    <strong>Entregável:</strong> {s.deliverable}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
