import { MetadataRoute } from 'next/server';
import { Metadata } from 'next';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <main>
      <h1>GreenGarden</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/servizi">Servizi</Link>
        <Link href="/testimonianze">Testimonianze</Link>
        <Link href="/contatti">Contatti</Link>
        <Link href="/blog">Blog</Link> {/* Aggiunta link alla pagina del blog */}
      </nav>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'GreenGarden',
  description: 'Servizi di giardinaggio professionali',
};

export const dynamic = 'force-dynamic';