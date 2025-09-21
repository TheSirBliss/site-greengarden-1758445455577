import { MetadataRoute } from 'next/server';
import { Metadata } from 'next';

export default function Contatti(): JSX.Element {
  return (
    <main>
      <h1>Contatta GreenGarden</h1>
      {/* Qui andrà il form di contatto */}
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Contatta GreenGarden',
  description: 'Contattaci per informazioni o preventivi',
};

export const dynamic = 'force-dynamic';