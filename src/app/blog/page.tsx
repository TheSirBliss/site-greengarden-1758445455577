import { MetadataRoute } from 'next/server';
import { Metadata } from 'next';

export default function Blog(): JSX.Element {
  return (
    <main>
      <h1>Blog di GreenGarden</h1>
      {/* Qui andrà il contenuto del blog */}
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Blog GreenGarden',
  description: 'Articoli sul giardinaggio da GreenGarden',
};

export const dynamic = 'force-dynamic';