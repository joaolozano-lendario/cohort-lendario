'use client';

import React from 'react';
import CohortHero from './components/CohortHero';
import CohortProblem from './components/CohortProblem';
import CohortOneManArmy from './components/CohortOneManArmy';
import CohortAgents from './components/CohortAgents';
import CohortCalculator from './components/CohortCalculator';
import CohortComparison from './components/CohortComparison';
import CohortPath from './components/CohortPath';
import CohortPricing from './components/CohortPricing';
import CohortGuarantee from './components/CohortGuarantee';
import CohortFAQ from './components/CohortFAQ';
import CohortUrgency from './components/CohortUrgency';
import Footer from '../../components/Footer';

import styles from './cohort.module.css';

export default function CohortPageB() {
    return (
        <main className={styles.cohortMain}>
            <CohortHero />
            <CohortProblem />
            <CohortOneManArmy />
            <CohortAgents />
            <CohortCalculator />
            <CohortComparison />
            <CohortPath />
            <CohortPricing />
            <CohortGuarantee />
            <CohortFAQ />
            <CohortUrgency />
            <Footer />
        </main>
    );
}
