'use client';

import React from 'react';
import BusinessHero from './components/BusinessHero';
import BusinessProblem from './components/BusinessProblem';
import BusinessForWho from './components/BusinessForWho';
import BusinessIncludes from './components/BusinessIncludes';
import BusinessCases from './components/BusinessCases';
import BusinessTeam from './components/BusinessTeam';
import BusinessPricing from './components/BusinessPricing';
import BusinessGuarantee from './components/BusinessGuarantee';
import BusinessFAQ from './components/BusinessFAQ';
import LandingFooter from '../../components/LandingFooter';

import styles from './business.module.css';

export default function BusinessPage() {
    return (
        <main className={styles.businessMain}>
            <BusinessHero />
            <BusinessProblem />
            <BusinessForWho />
            <BusinessIncludes />
            <BusinessCases />
            <BusinessTeam />
            <BusinessPricing />
            <BusinessGuarantee />
            <BusinessFAQ />
            <LandingFooter />
        </main>
    );
}
