import Image from 'next/image';
import Hero from './components/Hero';
import Featured from './components/Featured';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen gap-12'>
      <Hero />
      <Featured />
    </main>
  );
}
