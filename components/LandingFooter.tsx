'use client';

import React from 'react';
import styles from './LandingFooter.module.css';

export default function LandingFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <a href="https://academialendaria.ai/termos-de-uso-e-politicas-de-privacidade/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Termos de Uso
                    </a>
                    <a href="https://academialendaria.ai/termos-de-uso-e-politicas-de-privacidade/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Políticas de Privacidade
                    </a>
                    <a href="https://bkp.academialendaria.ai/termos-de-uso-dos-cursos/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Termos de Uso do Cursos
                    </a>
                </div>

                <div className={styles.copyright}>
                    Academia Lendár[IA] © 2026 · All rights reserved
                </div>

                <div className={styles.bottomInfo}>
                    <span>CNPJ: 37.348.342/0001-07</span>
                    <span className={styles.separator}>·</span>
                    <span>Rua Jair Hamms, nº 38, sala 102, Pedra Branca, Palhoça/SC – CEP 88137-084</span>
                    <span className={styles.separator}>·</span>
                    <span>Contato: suporte@academialendaria.ai</span>
                </div>
            </div>
        </footer>
    );
}
