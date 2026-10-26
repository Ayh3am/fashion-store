'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { useCartStore } from '../../store/useCartStore';

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = items.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace(' TL', ''));
    return total + priceNumber * item.quantity;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // محاكاة الاتصال بالسيرفر لمدة ثانية ونص
    setTimeout(() => {
      clearCart(); // تفريغ السلة
      router.push('/success'); // توجيه لصفحة النجاح
    }, 1500);
  };

  if (items.length === 0 && !isProcessing) {
    return (
      <div className="min-h-screen bg-white text-black font-sans">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32">
          <h1 className="text-3xl font-bold mb-4">Sepetiniz Boş</h1>
          <button onClick={() => router.push('/')} className="bg-black text-white px-6 py-2 mt-4">Ana Sayfaya Dön</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Ödeme</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* فورم الدفع */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Ad Soyad</label>
              <input required type="text" className="w-full border border-neutral-300 p-2 focus:outline-none focus:border-black" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-posta</label>
              <input required type="email" className="w-full border border-neutral-300 p-2 focus:outline-none focus:border-black" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Adres</label>
              <textarea required className="w-full border border-neutral-300 p-2 focus:outline-none focus:border-black h-24" placeholder="Sokak, Bina No, Daire"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Kart Numarası (Demo)</label>
              <input required type="text" className="w-full border border-neutral-300 p-2 focus:outline-none focus:border-black" placeholder="0000 0000 0000 0000" maxLength={19} />
            </div>
            
            <button 
              type="submit" 
              disabled={isProcessing}
              className={`w-full text-white py-4 text-sm font-medium transition-colors mt-6 ${
                isProcessing ? 'bg-neutral-400 cursor-not-allowed' : 'bg-black hover:bg-neutral-800'
              }`}
            >
              {isProcessing ? 'İşleniyor...' : `Öde (${totalPrice.toFixed(2)} TL)`}
            </button>
            <p className="text-xs text-neutral-500 text-center mt-2">
              Bu bir demo ödeme sayfasıdır. Gerçek kart bilgisi girmeyiniz.
            </p>
          </form>

          {/* ملخص الطلب */}
          <div className="bg-neutral-50 p-6 border border-neutral-200 h-fit">
            <h2 className="text-lg font-bold mb-4">Sipariş Özeti</h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                  <span>{item.quantity}x {item.name} ({item.size})</span>
                  <span className="font-medium">
                    {(parseFloat(item.price.replace(' TL', '')) * item.quantity).toFixed(2)} TL
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-neutral-200 pt-4 flex justify-between font-bold">
              <span>Toplam</span>
              <span>{totalPrice.toFixed(2)} TL</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
