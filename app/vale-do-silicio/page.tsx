'use client';

import React from 'react';
import styles from './vale.module.css';

export default function ValePage() {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5518988119126?text=Oi,%20gostaria%20de%20entender%20os%20pr%C3%B3ximos%20passos%20para%20participar%20da%20Imers%C3%A3o%20para%20o%20Vale%20do%20Sil%C3%ADcio', '_blank');
    };

    const handleAnchorClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('garantir-vaga');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className={styles.valePage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroGlow}></div>
                <div className={styles.container}>
                    <div className={styles.heroBadge}>
                        EDIÇÃO 002 • APENAS 20 VAGAS
                    </div>

                    <h1 className={styles.heroTitle}>
                        Imersão Executiva no Vale do Silício
                    </h1>

                    <div className={styles.heroMeta}>
                        <div className={styles.heroMetaItem}>
                            <i className="fi fi-rr-calendar"></i>
                            <span>13 a 17 de abril de 2026</span>
                        </div>
                        <div className={styles.heroMetaItem}>
                            <i className="fi fi-rr-marker"></i>
                            <span>San Francisco, CA</span>
                        </div>
                        <div className={styles.heroMetaItem}>
                            <i className="fi fi-rr-users"></i>
                            <span>20 participantes</span>
                        </div>
                    </div>

                    <p className={styles.heroSubtitle}>
                        Para quem está cansado de inspiração e pronto para implementação.
                    </p>

                    <p className={styles.heroDescription}>
                        5 dias no epicentro da IA para construir seu braço internacional, cercado por um grupo de executores do mais alto nível.
                    </p>

                    <button className={styles.ctaButton} onClick={handleAnchorClick}>
                        Quero garantir a minha vaga
                    </button>

                    <p className={styles.heroFootnote}>
                        Chegada recomendada: 12 de abril | Saída recomendada: 18 de abril
                    </p>
                </div>
            </section>

            {/* Testimonial */}
            <section className={styles.testimonialSection}>
                <div className={styles.container}>
                    <div className={styles.testimonialCard}>
                        <div className={styles.quoteIcon}>"</div>
                        <p className={styles.testimonialText}>
                            Voltei pra casa com a cabeça diferente e com força renovada. O Vale é incrível. As empresas são incríveis. A forma de pensar é incrível. Mas, sinceramente, o nosso grupo foi ainda mais especial! A energia, a troca, as conversas, as risadas, os aprendizados... tudo isso fez a experiênca ficar muito maior do que o roteiro!
                        </p>
                        <div className={styles.testimonialAuthor}>
                            <div className={styles.authorAvatar}>A</div>
                            <div className={styles.authorInfo}>
                                <div className={styles.authorName}>Arthur</div>
                                <div className={styles.authorRole}>CEO • AKCO • Participante da Ed. 001</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Metrics */}
            <section className={styles.metricsSection}>
                <div className={styles.container}>
                    <div className={styles.metricsGrid}>
                        <div className={styles.metricCard}>
                            <i className="fi fi-rr-clock"></i>
                            <div className={styles.metricNumber}>5 dias</div>
                            <div className={styles.metricTitle}>de imersão intensiva</div>
                            <div className={styles.metricDescription}>no epicentro da IA</div>
                        </div>
                        <div className={styles.metricCard}>
                            <i className="fi fi-rr-diploma"></i>
                            <div className={styles.metricNumber}>+45hrs</div>
                            <div className={styles.metricTitle}>de experiências</div>
                            <div className={styles.metricDescription}>aulas e imersões em Big Techs</div>
                        </div>
                        <div className={styles.metricCard}>
                            <i className="fi fi-rr-calendar"></i>
                            <div className={styles.metricNumber}>09h às 19h</div>
                            <div className={styles.metricTitle}>programação diária</div>
                            <div className={styles.metricDescription}>Visitas, aulas e networking</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className={styles.whySection}>
                <div className={styles.container}>
                    <div className={styles.whyBadge}>POR QUE ESTA IMERSÃO É DIFERENTE</div>
                    <h2 className={styles.whyTitle}>
                        Esta não é mais uma imersão.<br />
                        <span className={styles.whyTitleEmphasis}>É um divisor de águas.</span>
                    </h2>
                    <p className={styles.whyText}>
                        O Vale do Silício não é um lugar que você visita. É um ecossistema do qual você participa. A maioria das imersões oferece um tour superficial. Nós oferecemos <strong>acesso e um método</strong>.
                    </p>
                    <p className={styles.whyText}>
                        Você não vai observar de longe. Vai sentar na mesa com quem constrói o futuro, debater em alto nível e, o mais importante, <strong>aplicar cada insight no seu próprio negócio no mesmo dia</strong>, com mentoria e direção.
                    </p>
                </div>
            </section>

            {/* Companies Logos */}
            <section className={styles.logosSection}>
                <div className={styles.container}>
                    <div className={styles.logosBadge}>ACESSO EXCLUSIVO</div>
                    <h2 className={styles.logosMainTitle}>Empresas que já recebem nossos grupos</h2>
                    <p className={styles.logosDescription}>
                        Na primeira edição, abrimos portas em algumas das empresas mais relevantes do mundo.
                    </p>

                    <div className={styles.logosCategory}>
                        <h3 className={styles.logosCategoryTitle}>BIG TECHS & AI COMPANIES</h3>
                        <div className={styles.logosGrid}>
                            <div className={styles.logoCard}>
                                <img src="/bigtechs/Google.svg" alt="Google" className={styles.logoImage} />
                                <span className={styles.logoName}>Google</span>
                            </div>
                            <div className={styles.logoCard}>
                                <img src="/bigtechs/Apple.svg" alt="Apple" className={styles.logoImage} />
                                <span className={styles.logoName}>Apple</span>
                            </div>
                            <div className={styles.logoCard}>
                                <img src="/bigtechs/Microsoft.svg" alt="Microsoft" className={styles.logoImage} />
                                <span className={styles.logoName}>Microsoft</span>
                            </div>
                            <div className={styles.logoCard}>
                                <img src="/bigtechs/Salesforce.svg" alt="Salesforce" className={styles.logoImage} />
                                <span className={styles.logoName}>Salesforce</span>
                            </div>
                            <div className={styles.logoCard}>
                                <img src="/bigtechs/Netflix.svg" alt="Netflix" className={styles.logoImage} />
                                <span className={styles.logoName}>Netflix</span>
                            </div>
                            <div className={styles.logoCard}>
                                <img src="/bigtechs/OpenAI.svg" alt="OpenAI" className={styles.logoImage} />
                                <span className={styles.logoName}>OpenAI</span>
                            </div>
                            <div className={styles.logoCard}>
                                <img src="/bigtechs/NVIDIA.svg" alt="NVIDIA" className={styles.logoImage} />
                                <span className={styles.logoName}>NVIDIA</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.logosCategory}>
                        <h3 className={styles.logosCategoryTitle}>UNIVERSIDADES DE ELITE</h3>
                        <div className={styles.universitiesGrid}>
                            <div className={styles.logoCard}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg" alt="Stanford" className={styles.logoImage} />
                                <span className={styles.logoName}>Stanford</span>
                            </div>
                            <div className={styles.logoCard}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg" alt="Berkeley" className={styles.logoImage} />
                                <span className={styles.logoName}>Berkeley</span>
                            </div>
                        </div>
                    </div>

                    <p className={styles.logosDisclaimer}>
                        *O acesso a empresas específicas pode variar, mas o calibre das visitas é sempre mantido no mais alto padrão.
                    </p>
                </div>
            </section>

            {/* For Who */}
            <section className={styles.criteriaSection}>
                <div className={styles.container}>
                    <div className={styles.criteriaBadge}>PROCESSO SELETIVO</div>
                    <h2 className={styles.criteriaTitle}>Para quem é (e para quem não é)</h2>
                    <p className={styles.criteriaDescription}>
                        Nós somos transparentes: esta imersão não é para todos.
                    </p>

                    <div className={styles.criteriaGrid}>
                        <div className={styles.criteriaCardGreen}>
                            <h3 className={styles.criteriaCardTitle}>
                                Você deve aplicar se:
                            </h3>
                            <ul className={styles.criteriaList}>
                                <li className={styles.criteriaListItem}>
                                    <i className="fi fi-rr-octagon-check"></i>
                                    <span>Já possui um negócio, empresa ou startup em operação.</span>
                                </li>
                                <li className={styles.criteriaListItem}>
                                    <i className="fi fi-rr-octagon-check"></i>
                                    <span>Já tem conhecimento e aplicação de IA em seus projetos.</span>
                                </li>
                                <li className={styles.criteriaListItem}>
                                    <i className="fi fi-rr-octagon-check"></i>
                                    <span>Está focado em executar e implementar, não apenas em assistir.</span>
                                </li>
                                <li className={styles.criteriaListItem}>
                                    <i className="fi fi-rr-octagon-check"></i>
                                    <span>Busca conexões de alto nível com outros empresários.</span>
                                </li>
                                <li className={styles.criteriaListItem}>
                                    <i className="fi fi-rr-octagon-check"></i>
                                    <span>Possui inglês para conversação e compreensão.</span>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.criteriaCardRed}>
                            <h3 className={styles.criteriaCardTitle}>
                                Não é para você se:
                            </h3>
                            <ul className={styles.criteriaList}>
                                <li className={styles.criteriaListItem}>
                                    <i className="fi fi-rr-octagon-xmark"></i>
                                    <span>Está procurando um passeio ou tour tecnológico superficial.</span>
                                </li>
                                <li className={styles.criteriaListItem}>
                                    <i className="fi fi-rr-octagon-xmark"></i>
                                    <span>Ainda não possui um projeto ou negócio ativo.</span>
                                </li>
                                <li className={styles.criteriaListItem}>
                                    <i className="fi fi-rr-octagon-xmark"></i>
                                    <span>Busca apenas inspiração sem compromisso de implementação.</span>
                                </li>
                                <li className={styles.criteriaListItem}>
                                    <i className="fi fi-rr-octagon-xmark"></i>
                                    <span>Não se sente confortável com discussões em inglês.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className={styles.criteriaFootnote}>
                        <strong>Por que somos tão rigorosos?</strong> Porque a profundidade das conversas depende de quem está na sala.<br />
                        Nosso processo garante que você estará cercado de executores.
                    </p>
                </div>
            </section>

            {/* Ratatouille Methodology */}
            <section className={styles.ratatouilleSection}>
                <div className={styles.container}>
                    <div className={styles.ratatouilleBadge}>METODOLOGIA EXCLUSIVA</div>
                    <h2 className={styles.ratatouilleTitle}>O Formato Ratatouille</h2>
                    <p className={styles.ratatouilleSubtitle}>Insight que vira ação no mesmo dia</p>
                    <p className={styles.ratatouilleDescription}>
                        A maioria das imersões te sobrecarrega de informação. Nós quebramos esse ciclo.
                    </p>

                    <div className={styles.ratatouilleGrid}>
                        <div className={styles.ratatouilleCard}>
                            <i className="fi fi-rr-sun"></i>
                            <h3 className={styles.ratatouilleCardTitle}>MANHÃ</h3>
                            <p className={styles.ratatouilleCardLabel}>Visita e Imersão</p>
                            <p className={styles.ratatouilleCardText}>
                                Mergulhamos em uma empresa ou instituição de ponta (ex: Google, Stanford).
                            </p>
                        </div>

                        <div className={styles.ratatouilleCard}>
                            <i className="fi fi-rr-bulb"></i>
                            <h3 className={styles.ratatouilleCardTitle}>TARDE</h3>
                            <p className={styles.ratatouilleCardLabel}>Implementação Guiada</p>
                            <p className={styles.ratatouilleCardText}>
                                Dissecamos os insights da manhã. Com mentoria direta, você aplica os conceitos no seu negócio.
                            </p>
                        </div>

                        <div className={styles.ratatouilleCard}>
                            <i className="fi fi-rr-users-alt"></i>
                            <h3 className={styles.ratatouilleCardTitle}>FIM DE TARDE</h3>
                            <p className={styles.ratatouilleCardLabel}>Nova Imersão ou Mentorias</p>
                            <p className={styles.ratatouilleCardText}>
                                Uma nova visita ou sessão com especialistas para aprofundar ideias.
                            </p>
                        </div>

                        <div className={styles.ratatouilleCard}>
                            <i className="fi fi-rr-moon-stars"></i>
                            <h3 className={styles.ratatouilleCardTitle}>NOITE</h3>
                            <p className={styles.ratatouilleCardLabel}>Síntese e Networking</p>
                            <p className={styles.ratatouilleCardText}>
                                Jantares e encontros para consolidar o aprendizado e fortalecer conexões.
                            </p>
                        </div>
                    </div>

                    <div className={styles.ratatouilleResult}>
                        <strong>Resultado:</strong> Você não acumula tarefas para "ver depois". Você constrói, dia após dia, um plano de ação sólido e já em execução.
                    </div>
                </div>
            </section>

            {/* Schedule */}
            <section className={styles.scheduleSection}>
                <div className={styles.container}>
                    <div className={styles.scheduleBadge}>PROGRAMAÇÃO COMPLETA</div>
                    <h2 className={styles.scheduleTitle}>Como será sua semana no Vale</h2>

                    <div className={styles.scheduleList}>
                        <div className={styles.timelineLine}></div>

                        {/* Dia 0 */}
                        <div className={styles.scheduleItem}>
                            <div className={styles.scheduleLeft}>
                                <div className={styles.scheduleIcon}>
                                    <i className="fi fi-rr-plane-arrival"></i>
                                </div>
                                <div className={styles.scheduleLabel}>
                                    <div className={styles.scheduleDay}>Sábado</div>
                                    <div className={styles.scheduleDate}>12 de abril</div>
                                </div>
                            </div>
                            <div className={styles.scheduleCard}>
                                <h3 className={styles.scheduleCardTitle}>Chegada e Boas-Vindas</h3>
                                <ul className={styles.scheduleActivities}>
                                    <li>Chegada ao Vale do Silício</li>
                                    <li>Check-in no hotel</li>
                                    <li>19h: Jantar de boas-vindas</li>
                                </ul>
                            </div>
                        </div>

                        {/* Dia 1 */}
                        <div className={styles.scheduleItem}>
                            <div className={styles.scheduleLeft}>
                                <div className={styles.scheduleIcon}>
                                    <i className="fi fi-rr-graduation-cap"></i>
                                </div>
                                <div className={styles.scheduleLabel}>
                                    <div className={styles.scheduleDay}>Domingo</div>
                                    <div className={styles.scheduleDate}>13 de abril</div>
                                </div>
                            </div>
                            <div className={styles.scheduleCard}>
                                <h3 className={styles.scheduleCardTitle}>Dia 1: Imersão e Contexto</h3>
                                <ul className={styles.scheduleActivities}>
                                    <li>Manhã: Visita a Stanford ou Berkeley</li>
                                    <li>Tarde: Mapeamento de objetivos</li>
                                    <li>Noite: Jantar de networking</li>
                                </ul>
                            </div>
                        </div>

                        {/* Dia 2 */}
                        <div className={styles.scheduleItem}>
                            <div className={styles.scheduleLeft}>
                                <div className={styles.scheduleIcon}>
                                    <i className="fi fi-rr-building"></i>
                                </div>
                                <div className={styles.scheduleLabel}>
                                    <div className={styles.scheduleDay}>Segunda</div>
                                    <div className={styles.scheduleDate}>14 de abril</div>
                                </div>
                            </div>
                            <div className={styles.scheduleCard}>
                                <h3 className={styles.scheduleCardTitle}>Dia 2: Big Techs</h3>
                                <ul className={styles.scheduleActivities}>
                                    <li>Manhã: Visita a Google, Apple ou Salesforce</li>
                                    <li>Tarde: Frameworks de inovação</li>
                                    <li>Noite: Networking estruturado</li>
                                </ul>
                            </div>
                        </div>

                        {/* Dia 3 */}
                        <div className={styles.scheduleItem}>
                            <div className={styles.scheduleLeft}>
                                <div className={styles.scheduleIcon}>
                                    <i className="fi fi-rr-comment-alt"></i>
                                </div>
                                <div className={styles.scheduleLabel}>
                                    <div className={styles.scheduleDay}>Terça</div>
                                    <div className={styles.scheduleDate}>15 de abril</div>
                                </div>
                            </div>
                            <div className={styles.scheduleCard}>
                                <h3 className={styles.scheduleCardTitle}>Dia 3: Perspectivas</h3>
                                <ul className={styles.scheduleActivities}>
                                    <li>Manhã: Visita a startup do ecossistema</li>
                                    <li>Tarde: Go-to-market internacional</li>
                                    <li>Noite: Jantar livre</li>
                                </ul>
                            </div>
                        </div>

                        {/* Dia 4 */}
                        <div className={styles.scheduleItem}>
                            <div className={styles.scheduleLeft}>
                                <div className={styles.scheduleIcon}>
                                    <i className="fi fi-rr-rocket"></i>
                                </div>
                                <div className={styles.scheduleLabel}>
                                    <div className={styles.scheduleDay}>Quarta</div>
                                    <div className={styles.scheduleDate}>16 de abril</div>
                                </div>
                            </div>
                            <div className={styles.scheduleCard}>
                                <h3 className={styles.scheduleCardTitle}>Dia 4: Execução</h3>
                                <ul className={styles.scheduleActivities}>
                                    <li>Manhã: Empresa de tecnologia</li>
                                    <li>Tarde: Refinamento dos planos</li>
                                    <li>Noite: Mentoria individual</li>
                                </ul>
                            </div>
                        </div>

                        {/* Dia 5 */}
                        <div className={styles.scheduleItem}>
                            <div className={styles.scheduleLeft}>
                                <div className={styles.scheduleIcon}>
                                    <i className="fi fi-rr-trophy"></i>
                                </div>
                                <div className={styles.scheduleLabel}>
                                    <div className={styles.scheduleDay}>Quinta</div>
                                    <div className={styles.scheduleDate}>17 de abril</div>
                                </div>
                            </div>
                            <div className={styles.scheduleCard}>
                                <h3 className={styles.scheduleCardTitle}>Dia 5: Síntese</h3>
                                <ul className={styles.scheduleActivities}>
                                    <li>Manhã: Última visita</li>
                                    <li>Tarde: Apresentações finais</li>
                                    <li>Noite: Jantar de despedida</li>
                                </ul>
                            </div>
                        </div>

                        {/* Dia 6 */}
                        <div className={styles.scheduleItem}>
                            <div className={styles.scheduleLeft}>
                                <div className={styles.scheduleIcon}>
                                    <i className="fi fi-rr-home"></i>
                                </div>
                                <div className={styles.scheduleLabel}>
                                    <div className={styles.scheduleDay}>Sexta</div>
                                    <div className={styles.scheduleDate}>18 de abril</div>
                                </div>
                            </div>
                            <div className={styles.scheduleCard}>
                                <h3 className={styles.scheduleCardTitle}>Retorno</h3>
                                <ul className={styles.scheduleActivities}>
                                    <li>Partida dos participantes</li>
                                    <li>Acesso ao grupo de alumni</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className={styles.scheduleFootnote}>
                        A programação detalhada será compartilhada 15 dias antes da viagem.
                    </p>
                </div>
            </section>

            {/* Partnership Section */}
            {/* Partnership (Real Results) Section */}
            <section className={styles.partnershipSection}>
                <div className={styles.container}>
                    <span className={styles.partnershipBadge}>RESULTADOS REAIS</span>
                    <h2 className={styles.partnershipTitle}>
                        Da Imersão para o Contrato <br /> com o Banco do Brasil
                    </h2>
                    <p className={styles.partnershipSubtitle}>
                        Não prometemos ROI. Nós criamos o ambiente onde ele acontece.
                    </p>

                    <div className={styles.partnershipBox}>
                        <div className={styles.partnershipBigNumber}>3</div>
                        <p className={styles.partnershipHighlightText}>
                            participantes pagaram o investimento da imersão
                        </p>
                        <p className={styles.partnershipSubHighlight}>
                            com negócios gerados a partir das conexões e aprendizados
                        </p>
                    </div>

                    <p className={styles.partnershipDisclaimer}>
                        Um desses casos foi o de <strong>Roberta Jaya</strong>, que conquistou um projeto de mentoria para o <strong>Banco do Brasil</strong>.
                    </p>

                    <button className={styles.ctaButtonLarge} onClick={handleAnchorClick}>
                        Quero gerar resultados como este
                    </button>
                </div>
            </section>

            {/* Mentors Section */}
            <section className={styles.mentorsSection}>
                <div className={styles.container}>
                    <span className={styles.mentorsBadge}>MENTORIA DE ELITE</span>
                    <h2 className={styles.mentorsTitle}>Quem te acompanha nesta jornada</h2>

                    <div className={styles.mentorsGrid}>
                        <div className={styles.mentorCard}>
                            <div className={styles.mentorAvatar}>
                                <img src="/VS-Alan.png" alt="Alan Nicolas" />
                            </div>
                            <h3 className={styles.mentorName}>Alan Nicolas</h3>
                            <p className={styles.mentorRole}>Liderança Executiva e Mentoria de IA</p>
                            <p className={styles.mentorBio}>
                                Considerado o maior expoente em IA Generativa no Brasil, Alan é o fundador da Academia Lendária, que hoje conta com mais de 20.000 alunos. Seu conteúdo alcança mais de 20 milhões de pessoas por mês.
                            </p>
                            <ul className={styles.mentorSkills}>
                                <li>Mentor direto durante os 5 dias</li>
                                <li>Lidera as sessões de implementação</li>
                            </ul>
                        </div>

                        <div className={styles.mentorCard}>
                            <div className={styles.mentorAvatar}>
                                <img src="/VS-Lucas.png" alt="Lucas Rover" />
                            </div>
                            <h3 className={styles.mentorName}>Lucas Rover</h3>
                            <p className={styles.mentorRole}>Coordenação Estratégica</p>
                            <p className={styles.mentorBio}>
                                O arquiteto da experiência. Lucas desenha a jornada pedagógica para garantir que cada dia seja uma evolução do anterior, conectando todos os pontos.
                            </p>
                            <ul className={styles.mentorSkills}>
                                <li>Desenha a jornada pedagógica</li>
                                <li>Garante que ninguém fique para trás</li>
                            </ul>
                        </div>

                        <div className={styles.mentorCard}>
                            <div className={styles.mentorAvatar}>
                                <img src="/VS-Andre.png" alt="André Vasconcelos" />
                            </div>
                            <h3 className={styles.mentorName}>André Vasconcelos</h3>
                            <p className={styles.mentorRole}>Organização e Acesso Local</p>
                            <p className={styles.mentorBio}>
                                Com uma profunda rede de contatos no Vale, André é quem abre as portas e garante que a logística seja impecável.
                            </p>
                            <ul className={styles.mentorSkills}>
                                <li>Rede profunda de contatos</li>
                                <li>Logística impecável</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pre-Immersion Section */}
            <section className={styles.preImmersionSection}>
                <div className={styles.container}>
                    <span className={styles.preImmersionBadge}>ANTES DE EMBARCAR</span>
                    <h2 className={styles.preImmersionTitle}>Preparação Pré-Imersão</h2>

                    <div className={styles.preImmersionGrid}>
                        {/* Grupo WhatsApp */}
                        <div className={styles.preImmersionCard}>
                            <div className={styles.preImmersionIcon}><i className="fi fi-rr-comment-alt"></i></div>
                            <h3 className={styles.preImmersionCardTitle}>Grupo exclusivo no WhatsApp</h3>
                            <p className={styles.preImmersionCardText}>Com todos os participantes da turma</p>
                        </div>

                        {/* Encontros Online */}
                        <div className={styles.preImmersionCard}>
                            <div className={styles.preImmersionIcon}><i className="fi fi-rr-video-camera"></i></div>
                            <h3 className={styles.preImmersionCardTitle}>3 encontros online preparatórios</h3>
                            <p className={styles.preImmersionCardText}>Alinhamento, networking e definição de objetivos</p>
                        </div>

                        {/* Checklist */}
                        <div className={styles.preImmersionCard}>
                            <div className={styles.preImmersionIcon}><i className="fi fi-rr-document"></i></div>
                            <h3 className={styles.preImmersionCardTitle}>Checklist completo</h3>
                            <p className={styles.preImmersionCardText}>Documentação, visto, hospedagem, passagens</p>
                        </div>

                        {/* Pré-leitura */}
                        <div className={styles.preImmersionCard}>
                            <div className={styles.preImmersionIcon}><i className="fi fi-rr-graduation-cap"></i></div>
                            <h3 className={styles.preImmersionCardTitle}>Material de pré-leitura</h3>
                            <p className={styles.preImmersionCardText}>Ecossistema do Vale e tendências de IA</p>
                        </div>

                        {/* Sessão Individual */}
                        <div className={styles.preImmersionCard}>
                            <div className={styles.preImmersionIcon}><i className="fi fi-rr-user-check"></i></div>
                            <h3 className={styles.preImmersionCardTitle}>Sessão individual</h3>
                            <p className={styles.preImmersionCardText}>Definição dos seus objetivos específicos</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Everything Included Section */}
            <section className={styles.includedSection}>
                <div className={styles.container}>
                    <span className={styles.includedBadge}>O QUE ESTÁ INCLUÍDO</span>
                    <h2 className={styles.includedTitle}>Tudo que você recebe</h2>

                    <div className={styles.includedGrid}>
                        <div className={styles.includedCard}>
                            <h3 className={styles.includedCardTitle}>ACESSO E CONTEÚDO</h3>
                            <p className={styles.includedCardText}>Todas as visitas, palestras e sessões de mentoria</p>
                        </div>
                        <div className={styles.includedCard}>
                            <h3 className={styles.includedCardTitle}>IMPLEMENTAÇÃO</h3>
                            <p className={styles.includedCardText}>Material didático e frameworks proprietários</p>
                        </div>
                        <div className={styles.includedCard}>
                            <h3 className={styles.includedCardTitle}>LOGÍSTICA</h3>
                            <p className={styles.includedCardText}>Transporte executivo e espaço de trabalho</p>
                        </div>
                        <div className={styles.includedCard}>
                            <h3 className={styles.includedCardTitle}>NETWORKING</h3>
                            <p className={styles.includedCardText}>Grupo WhatsApp, Drive e jantares</p>
                        </div>
                        <div className={styles.includedCard}>
                            <h3 className={styles.includedCardTitle}>SUPORTE</h3>
                            <p className={styles.includedCardText}>Tradução e equipe de apoio local</p>
                        </div>
                        <div className={styles.includedCard}>
                            <h3 className={styles.includedCardTitle}>MEMÓRIAS</h3>
                            <p className={styles.includedCardText}>Cobertura fotográfica profissional</p>
                        </div>
                        <div className={styles.includedCard}>
                            <h3 className={styles.includedCardTitle}>CERTIFICADO</h3>
                            <p className={styles.includedCardText}>Conclusão da Imersão Executiva</p>
                        </div>
                        <div className={styles.includedCard}>
                            <h3 className={styles.includedCardTitle}>PÓS-IMERSÃO</h3>
                            <p className={styles.includedCardText}>Grupo de alumni e gravações</p>
                        </div>
                    </div>

                    <div className={styles.excludedBox}>
                        <div className={styles.excludedHeader}>
                            <i className="fi fi-rr-cross-small"></i>
                            <span>Não incluído:</span>
                        </div>
                        <div className={styles.excludedTags}>
                            <span className={styles.excludedTag}>Passagens aéreas</span>
                            <span className={styles.excludedTag}>Hospedagem</span>
                            <span className={styles.excludedTag}>Alimentação (exceto jantares)</span>
                            <span className={styles.excludedTag}>Seguro viagem</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Section */}
            <section className={styles.investmentSection}>
                <div className={styles.container}>
                    <span className={styles.investmentBadge}>INVESTIMENTO</span>
                    <h2 className={styles.investmentTitle}>O acesso a este ecossistema</h2>
                    <p className={styles.investmentSubtitle}>Um investimento estratégico no futuro do seu negócio.</p>

                    <div className={styles.priceGrid}>
                        {/* Pix ou TED */}
                        <div className={`${styles.priceCard} ${styles.priceCardFeatured}`}>
                            <span className={styles.bestValueBadge}>Melhor valor</span>
                            <div className={styles.priceIcon}><i className="fi fi-rr-bank"></i></div>
                            <span className={styles.priceLabel}>Pix ou TED</span>
                            <div className={styles.priceValue}>R$ 24.888</div>
                            <p className={styles.priceDetail}>à vista</p>
                        </div>

                        {/* Cartão de Crédito */}
                        <div className={styles.priceCard}>
                            <div className={styles.priceIcon}><i className="fi fi-rr-credit-card"></i></div>
                            <span className={styles.priceLabel}>Cartão de Crédito</span>
                            <div className={styles.priceValue}>R$ 28.000</div>
                            <p className={styles.priceDetail}>em até 6x sem juros</p>
                        </div>

                        {/* Boleto Parcelado */}
                        <div className={styles.priceCard}>
                            <div className={styles.priceIcon}><i className="fi fi-rr-document"></i></div>
                            <span className={styles.priceLabel}>Boleto Parcelado</span>
                            <div className={styles.priceValue}>R$ 8.888</div>
                            <p className={styles.priceDetail}>entrada + 3x R$ 6.400</p>
                        </div>
                    </div>

                    <div className={styles.investmentNotice}>
                        <p>
                            O evento só acontece com um mínimo de <strong>10 participantes confirmados até 15 de fevereiro de 2026</strong>. Caso contrário, o valor é 100% devolvido.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team/Corporate Section */}
            <section className={styles.corporateSection}>
                <div className={styles.container}>
                    <div className={styles.corporateContent}>
                        <span className={styles.corporateBadge}>CONDIÇÕES ESPECIAIS</span>
                        <h2 className={styles.corporateTitle}>Quer trazer sua equipe ou sócios?</h2>
                        <ul className={styles.corporateList}>
                            <li>Descontos progressivos para grupos corporativos</li>
                            <li>Mentoria exclusiva para o squad durante a viagem</li>
                            <li>Planejamento de objetivos focado na empresa</li>
                        </ul>
                        <p className={styles.corporateContact}>
                            Entre em contato com a produção para garantir sua condição especial.
                        </p>
                    </div>
                </div>
            </section>

            {/* Selection Process Section */}
            <section className={styles.selectionSection} id="garantir-vaga">
                <div className={styles.container}>
                    <span className={styles.selectionBadge}>COMO GARANTIR SUA VAGA</span>
                    <h2 className={styles.selectionTitle}>O processo é simples, mas seletivo.</h2>

                    <div className={styles.selectionGrid}>
                        {/* Passo 1: Interesse */}
                        <div className={styles.selectionCard}>
                            <div className={styles.stepBadge}>1</div>
                            <div className={styles.stepIcon}><i className="fi fi-brands-whatsapp"></i></div>
                            <h3 className={styles.stepTitle}>Interesse</h3>
                            <p className={styles.stepText}>Fale com os nossos <br /> consultores.</p>
                        </div>

                        {/* Passo 2: Qualificação */}
                        <div className={styles.selectionCard}>
                            <div className={styles.stepBadge}>2</div>
                            <div className={styles.stepIcon}><i className="fi fi-rr-messages-question"></i></div>
                            <h3 className={styles.stepTitle}>Qualificação</h3>
                            <p className={styles.stepText}>Conversa para <br /> alinhamento de perfil.</p>
                        </div>

                        {/* Passo 3: Aprovação */}
                        <div className={styles.selectionCard}>
                            <div className={styles.stepBadge}>3</div>
                            <div className={styles.stepIcon}><i className="fi fi-rr-check"></i></div>
                            <h3 className={styles.stepTitle}>Aprovação</h3>
                            <p className={styles.stepText}>Link para pagamento e <br /> garantia da vaga.</p>
                        </div>

                        {/* Passo 4: Onboarding */}
                        <div className={styles.selectionCard}>
                            <div className={styles.stepBadge}>4</div>
                            <div className={styles.stepIcon}><i className="fi fi-rr-rocket-lunch"></i></div>
                            <h3 className={styles.stepTitle}>Onboarding</h3>
                            <p className={styles.stepText}>Grupo exclusivo e <br /> preparação.</p>
                        </div>
                    </div>

                    <button className={styles.ctaButtonLarge} onClick={handleWhatsAppClick}>
                        Fale com um consultor no WhatsApp
                    </button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <span className={styles.faqBadge}>DÚVIDAS FREQUENTES</span>
                    <h2 className={styles.faqTitle}>Dúvidas comuns</h2>

                    <div className={styles.faqList}>
                        {[
                            {
                                q: "Preciso falar inglês fluente?",
                                a: "Não, mas um nível básico de compreensão (listening) é essencial. A tradução é um suporte, mas a riqueza das conversas informais exige um entendimento mínimo."
                            },
                            {
                                q: "Já fui ao Vale. Ainda vale a pena?",
                                a: "Sim. Esta não é uma viagem de turismo. É uma imersão de trabalho e implementação. Se você já foi e voltou apenas com fotos e inspiração, nossa proposta é completamente diferente."
                            },
                            {
                                q: "Por que o grupo é limitado a 20 pessoas?",
                                a: "Porque nosso foco é qualidade, não quantidade. Grupos menores permitem acesso a lugares e pessoas que não recebem grandes delegações."
                            },
                            {
                                q: "Hospedagem e passagem estão inclusas?",
                                a: "Não. Você recebe orientações detalhadas e sugestões de hotéis próximos ao ponto de encontro, com tarifas negociadas quando possível."
                            },
                            {
                                q: "Qual o retorno esperado?",
                                a: "Não prometemos ROI específico. O que entregamos é ambiente, acesso, estrutura e implementação guiada. Na Ed. 001, 3 participantes já pagaram o investimento com resultados de negócio."
                            },
                            {
                                q: "Vocês ajudam com o visto americano?",
                                a: "Oferecemos orientações gerais e uma carta de confirmação de participação para apresentar na imigração."
                            },
                            {
                                q: "Posso levar minha equipe ou sócio?",
                                a: "Sim. Oferecemos condições especiais para 2 ou mais participantes da mesma empresa."
                            },
                            {
                                q: "E se não atingir 10 confirmados até 15 de fevereiro?",
                                a: "A edição é cancelada e o valor pago é devolvido integralmente, sem qualquer custo ou penalidade."
                            },
                            {
                                q: "Terei acesso às gravações?",
                                a: "Sim. As principais sessões são gravadas e disponibilizadas para os participantes após a imersão."
                            }
                        ].map((item, index) => (
                            <details key={index} className={styles.faqDetails}>
                                <summary className={styles.faqSummary}>
                                    {item.q}
                                    <i className="fi fi-rr-angle-small-down"></i>
                                </summary>
                                <div className={styles.faqAnswer}>
                                    <p>{item.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className={styles.finalCTA}>
                <div className={styles.container}>
                    <h2 className={styles.finalTitle}>Sua decisão final</h2>

                    <div className={styles.finalTextWrapper}>
                        <p className={styles.finalText}>
                            Se você busca uma semana de palestras motivacionais e turismo tecnológico, esta imersão não é para você.
                        </p>
                        <p className={styles.finalText}>
                            Agora, se você é um empresário que entende que <strong>o futuro pertence a quem executa mais rápido</strong>, então sua busca terminou.
                        </p>
                    </div>

                    <div className={styles.finalSummary}>
                        <span>20 VAGAS</span>
                        <span className={styles.separator}>•</span>
                        <span>5 DIAS</span>
                        <span className={styles.separator}>•</span>
                        <span>UM DIVISOR DE ÁGUAS</span>
                    </div>

                    <button className={styles.ctaButtonLarge} onClick={handleWhatsAppClick}>
                        Fale com um consultor no WhatsApp
                    </button>
                </div>
            </section>
        </main>
    );
}
