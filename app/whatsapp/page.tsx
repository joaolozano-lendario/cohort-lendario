'use client';

import { useEffect } from 'react';

const whatsappTeam = [
    { name: 'Douglas', number: '5548996285385' },
    { name: 'Luciana', number: '5548996172481' },
    { name: 'Michel', number: '5551999702808' }
];

export default function WhatsAppRedirect() {
    useEffect(() => {
        // Get counter from localStorage and distribute sequentially
        let counter = parseInt(localStorage.getItem('whatsappCounter') || '0');
        const selectedPerson = whatsappTeam[counter % whatsappTeam.length];

        // Increment for next time
        localStorage.setItem('whatsappCounter', (counter + 1).toString());

        // Optional message
        const message = encodeURIComponent('Oi, estou com dúvidas sobre o Cohort Lendário Master');

        // Redirect
        window.location.href = `https://wa.me/${selectedPerson.number}?text=${message}`;
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{
                width: '48px',
                height: '48px',
                border: '3px solid rgba(255, 255, 255, 0.1)',
                borderTopColor: '#25D366',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginBottom: '24px'
            }} />
            <h2 style={{ fontSize: '20px', fontWeight: 600, margin: 0 }}>
                Conectando com nossa equipe...
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '8px' }}>
                Você será atendido em instantes.
            </p>
            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
