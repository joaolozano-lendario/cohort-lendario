'use client';

import React from 'react';
import MakersHero from './components/MakersHero';
import MakersProblem from './components/MakersProblem';
import MakersForWho from './components/MakersForWho';
import MakersIncludes from './components/MakersIncludes';
import MakersChecklist from './components/MakersChecklist';
import MakersCases from './components/MakersCases';
import MakersTeam from './components/MakersTeam';
import MakersPricing from './components/MakersPricing';
import MakersGuarantee from './components/MakersGuarantee';
import MakersFAQ from './components/MakersFAQ';
import LandingFooter from '../../components/LandingFooter';

import styles from './makers.module.css';

export default function MakersPage() {
    return (
        <main className={styles.makersMain}>
            <MakersHero />
            <MakersProblem />
            <MakersForWho />
            <MakersIncludes />
            <MakersChecklist />
            <MakersCases />
            <MakersTeam />
            <MakersPricing />
            <MakersGuarantee />
            <MakersFAQ />
            <LandingFooter />
        </main>
    );
}
