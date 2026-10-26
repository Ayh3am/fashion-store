'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import { products } from '../lib/mockData';
import { useLanguageStore } from '../store/useLanguageStore';
import { dictionary } from '../lib/dictionary';

export default function Home() {
  const { lang } = useLanguageStore();
  const t = dictionary[lang];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 bg-neutral-50 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          {t.home.title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 mb-8 max-w-2xl">
          {t.home.subtitle}
        </p>
        <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
          {t.home.button}
        </button>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 tracking-tight">{t.home.featured}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
              <div className="aspect-[3/4] bg-neutral-200 mb-4 flex items-center justify-center group-hover:opacity-80 transition-opacity">
                <span className="text-neutral-400 text-sm">Görsel</span>
              </div>
              
              <div>
                <p className="text-xs text-neutral-500 mb-1">{product.category}</p>
                <h3 className="text-sm font-medium truncate">{product.name}</h3>
                <p className="text-sm font-bold mt-1">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
