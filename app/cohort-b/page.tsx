'use client';

import React from 'react';
import CohortHero from './components/CohortHero';
import CohortProblem from './components/CohortProblem';
import CohortOneManArmy from './components/CohortOneManArmy';
import CohortPath from './components/CohortPath';
import CohortVibeCoding from './components/CohortVibeCoding';
import CohortProof from './components/CohortProof';
import CohortForWho from './components/CohortForWho';
import CohortPricing from './components/CohortPricing';
import CohortGuarantee from './components/CohortGuarantee';
import CohortFAQ from './components/CohortFAQ';
import Footer from '../../components/Footer';

import styles from './cohort.module.css';

export default function CohortPage() {
    return (
        <main className={styles.cohortMain}>
            <CohortHero />
            <CohortProblem />
            <CohortOneManArmy />
            <CohortProof />
            <CohortPath />
            <CohortVibeCoding />
            <CohortForWho />
            <CohortPricing />
            <CohortGuarantee />
            <CohortFAQ />
            <Footer />
        </main>
    );
}
