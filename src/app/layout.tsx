// Path: app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // File per gli stili globali

// Ottimizzazione del font con next/font
const inter = Inter({ subsets: ['latin'] });

// Metadata di base per l'intero sito
export const metadata: Metadata = {
  title: {
    template: '%s | GreenGarden', // Aggiunge "| GreenGarden" al titolo di ogni pagina
    default: 'GreenGarden - Servizi di Giardinaggio Professionali',
  },
  description: 'Offriamo servizi professionali di progettazione e manutenzione giardini per rendere il tuo spazio verde un capolavoro.',
};

/**
 * Questo è il Layout Radice (Root Layout).
 * Avvolge tutti i contenuti delle pagine.
 * @param {object} props - Le props del componente.
 * @param {React.ReactNode} props.children - Il contenuto della pagina (es. page.tsx) che verrà renderizzato qui.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        {/* Il prop 'children' renderizzerà qui il contenuto del tuo page.tsx */}
        {children}
      </body>
    </html>
  );
}
