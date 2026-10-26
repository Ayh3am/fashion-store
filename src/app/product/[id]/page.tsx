'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { supabase } from '../../../lib/supabase';
import { useCartStore } from '../../../store/useCartStore';
import toast from 'react-hot-toast'; 
export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await supabase.from('products').select('*').eq('id', params.id).single();
      if (data) setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [params.id]);

  if (loading) return <div className="p-20 text-center">Yükleniyor...</div>;

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-black font-sans">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32">
          <h1 className="text-3xl font-bold mb-4">Ürün Bulunamadı</h1>
          <Link href="/" className="text-neutral-500 hover:text-black underline">Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: `${product.price} TL`,
      size: selectedSize,
      quantity: 1,
    });
     toast.success('Ürün sepete eklendi!');
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm text-neutral-500 hover:text-black mb-8 inline-block">&larr; Alışverişe Devam Et</Link>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="aspect-[3/4] bg-neutral-100 overflow-hidden border border-neutral-100">
            <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-widest">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
            <p className="text-2xl font-medium mb-8">{product.price} TL</p>
            <div className="border-t border-neutral-200 pt-6 mb-8">
              <p className="text-neutral-600 leading-relaxed">{product.description}</p>
            </div>
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-3">Beden Seçin</h3>
              <div className="flex space-x-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`w-12 h-12 border flex items-center justify-center text-sm transition-colors ${selectedSize === size ? 'border-black bg-black text-white' : 'border-neutral-300 hover:border-black'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={handleAddToCart} className="w-full bg-black text-white py-4 text-sm font-medium hover:bg-neutral-800 transition-colors">Sepete Ekle</button>
          </div>
        </div>
      </main>
    </div>
  );
}
