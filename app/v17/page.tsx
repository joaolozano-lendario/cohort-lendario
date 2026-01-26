'use client';

import React from 'react';
import Header from '../../components/Header';
import CountdownTimer from '../../components/CountdownTimer';
import Footer from '../../components/Footer';
import ImersaoCases from '../../components/ImersaoCases';
import ImersaoTeam from '../../components/ImersaoTeam';
import ImersaoOffer from '../../components/ImersaoOffer';
import ImersaoSupport from '../../components/ImersaoSupport';

// V15 Components (Reused for V17)
import V15Hero from './components/V15Hero';
import V15Problem from './components/V15Problem';
import V15Solution from './components/V15Solution';
import V15ForWho from './components/V15ForWho';
import V15Methodology from './components/V15Methodology';
import V15Schedule from './components/V15Schedule';
import V15Guarantee from './components/V15Guarantee';
import ImersaoFAQ from '../../components/ImersaoFAQ';
import V15CTA from './components/V15CTA';

import styles from './v17.module.css';

export default function V17Page() {
    return (
        <main className={styles.v17Main}>

            {/* 1. HERO SECTION */}
            <V15Hero />

            {/* 2. O PROBLEMA DOS CRIADORES */}
            <V15Problem />

            {/* 3. A SOLUÇÃO PARA CRIADORES */}
            <V15Solution />

            {/* 4. EXEMPLOS DO QUE CRIADORES JÁ CONSTRUÍRAM */}
            <ImersaoCases />

            {/* 5. PARA QUEM É A IMERSÃO / PARA QUEM NÃO É */}
            <V15ForWho />

            {/* 6. A METODOLOGIA: 80% CLAREZA, 20% IA */}
            <V15Methodology />

            {/* 7. O TIME QUE VAI CRIAR COM VOCÊ */}
            <ImersaoTeam />

            {/* 8. CRONOGRAMA COMPLETO */}
            <V15Schedule />

            {/* 10. INVESTIMENTO */}
            <ImersaoOffer />

            {/* 11. GARANTIA INCONDICIONAL */}
            <V15Guarantee />

            {/* 12. FAQ */}
            <ImersaoFAQ />

            {/* 13. CTA FINAL */}
            <V15CTA />

            <ImersaoSupport />
            <Footer />
        </main>
    );
}
