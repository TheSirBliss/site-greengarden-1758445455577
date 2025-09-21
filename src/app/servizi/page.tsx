import { MetadataRoute } from 'next/server';
import { Metadata } from 'next';

export default function Servizi(): JSX.Element {
  return (
    <main>
      <h1>Servizi GreenGarden</h1>
      {/* Qui andrà il contenuto dei servizi */}
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Servizi GreenGarden',
  description: 'Scopri i servizi di giardinaggio offerti da GreenGarden',
};

export const dynamic = 'force-dynamic';