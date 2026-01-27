'use client';

import React from 'react';
import ClubHero from './components/ClubHero';
import ClubProblem from './components/ClubProblem';
import ClubForWho from './components/ClubForWho';
import ClubIncludes from './components/ClubIncludes';
import ClubTestimonials from './components/ClubTestimonials';
import ClubPricing from './components/ClubPricing';
import ClubGuarantee from './components/ClubGuarantee';
import ClubFAQ from './components/ClubFAQ';
import LandingFooter from '../../components/LandingFooter';

import styles from './club.module.css';

export default function ClubPage() {
    return (
        <main className={styles.clubMain}>
            <ClubHero />
            <ClubProblem />
            <ClubForWho />
            <ClubIncludes />
            <ClubTestimonials />
            <ClubPricing />
            <ClubGuarantee />
            <ClubFAQ />
            <LandingFooter />
        </main>
    );
}
