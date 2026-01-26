// MODO TESTE: Descomente para testar a troca automática de lotes
// Lote 2 expira em 5 segundos, Lote 3 em 10 segundos
export const TEST_MODE = false;

export function getLoteDates() {
    if (TEST_MODE) {
        const now = new Date().getTime();
        return {
            lote1Date: now - (10 * 1000), // Já passou
            lote2Date: now + (5 * 1000),  // 5 segundos
            lote3Date: now + (15 * 1000), // 15 segundos (10s após lote 2)
        };
    }

    // PRODUÇÃO
    return {
        lote1Date: new Date('2026-01-14T23:59:59').getTime(),
        lote2Date: new Date('2026-01-20T00:00:00').getTime(), // Virada para o Lote 3
        lote3Date: new Date('2026-01-23T23:59:59').getTime(), // Fim do Lote 3
    };
}

export function getLoteDateString(batch: number): string {
    const dates = getLoteDates();
    if (batch === 1) return new Date(dates.lote1Date).toISOString();
    if (batch === 2) return new Date(dates.lote2Date).toISOString();
    return new Date(dates.lote3Date).toISOString();
}
