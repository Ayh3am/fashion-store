'use client';

import Link from 'next/link';
import { useCartStore } from '../store/useCartStore';
import { useLanguageStore } from '../store/useLanguageStore';
import { dictionary } from '../lib/dictionary';

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const { lang, toggleLanguage } = useLanguageStore();
  const t = dictionary[lang];
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="border-b border-neutral-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              FASHION.
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">{t.nav.newArrivals}</Link>
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">{t.nav.women}</Link>
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">{t.nav.men}</Link>
          </div>

          <div className="flex items-center space-x-6">
            {/* زر اللغة */}
            <button onClick={toggleLanguage} className="text-sm font-bold hover:text-neutral-600 uppercase">
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
            
            <button className="text-sm font-medium hover:text-neutral-600">{t.nav.login}</button>
            
            {/* أيقونة السلة الجديدة */}
            <Link href="/cart" className="relative group flex items-center justify-center text-black hover:text-neutral-600 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              
              {/* الدائرة السوداء اللي بتعرض عدد القطع */}
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
