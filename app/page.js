import Image from 'next/image';
import Hero from './components/Hero';
import Featured from './components/Featured';
import About from "./components/About";

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen gap-12'>
      <Hero />
      <Featured />
      <About/>
    </main>
  );
}
