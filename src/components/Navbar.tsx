'use client'; // ضروري عشان نستخدم hooks

import Link from 'next/link';
import { useCartStore } from '../store/useCartStore';

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  
  // حساب مجموع القطع في السلة
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
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">Yeni Gelenler</Link>
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">Kadın</Link>
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">Erkek</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium hover:text-neutral-600">TR / EN</button>
            <button className="text-sm font-medium hover:text-neutral-600">Giriş</button>
            <Link href="/cart" className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">
              Sepet ({totalItems})
            </Link>
          </div>
