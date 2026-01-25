'use client';

import React from 'react';
import AcademyHero from './components/AcademyHero';
import AcademyContext from './components/AcademyContext';
import AcademyData from './components/AcademyData';
import AcademyPaths from './components/AcademyPaths';
import AcademyComparison from './components/AcademyComparison';
import AcademyWhyBusiness from './components/AcademyWhyBusiness';
import AcademyProof from './components/AcademyProof';
import AcademyFAQ from './components/AcademyFAQ';
import AcademyCTA from './components/AcademyCTA';
import Footer from '../../components/Footer';

import styles from './academy.module.css';

export default function AcademyPage() {
    return (
        <main className={styles.academyMain}>
            <AcademyHero />
            <AcademyContext />
            <AcademyData />
            <AcademyPaths />
            <AcademyComparison />
            <AcademyWhyBusiness />
            <AcademyProof />
            <AcademyFAQ />
            <AcademyCTA />
            <Footer />

            {/* Sticky Mobile Bar */}
            <div className={styles.stickyBar}>
                <div className={styles.stickyContent}>
                    <div className={styles.stickyLeft}>
                        <span className={styles.stickyPrice}>Business R$ 988/mês</span>
                        <span className={styles.stickyRec}>⭐ Recomendado</span>
                    </div>
                    <button className={styles.stickyButton}>GARANTIR MINHA VAGA</button>
                </div>
            </div>
        </main>
    );
}
