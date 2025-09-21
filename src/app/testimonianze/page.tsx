import { MetadataRoute } from 'next/server';
import { Metadata } from 'next';

export default function Testimonianze(): JSX.Element {
  return (
    <main>
      <h1>Testimonianze GreenGarden</h1>
      {/* Qui andrà il contenuto delle testimonianze */}
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Testimonianze GreenGarden',
  description: 'Leggi le recensioni dei nostri clienti soddisfatti',
};

export const dynamic = 'force-dynamic';