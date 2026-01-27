import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Imersão Executiva no Vale do Silício | Academia Lendária",
    description: "5 dias no epicentro da IA para construir seu braço internacional, cercado por um grupo de executores do mais alto nível.",
    openGraph: {
        title: "Imersão Executiva no Vale do Silício | Academia Lendária",
        description: "5 dias no epicentro da IA para construir seu braço internacional, cercado por um grupo de executores do mais alto nível.",
        images: [
            {
                url: "/Destaque-IVS.jpg",
                width: 1200,
                height: 630,
                alt: "Imersão Executiva no Vale do Silício",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Imersão Executiva no Vale do Silício | Academia Lendária",
        description: "5 dias no epicentro da IA para construir seu braço internacional, cercado por um grupo de executores do mais alto nível.",
        images: ["/Destaque-IVS.jpg"],
    },
};

export default function ValeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
