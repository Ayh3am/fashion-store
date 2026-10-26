'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useCartStore } from '../../store/useCartStore';

export default function CartPage() {
  const { items, removeItem } = useCartStore();

  // حساب المجموع الكلي (بنشيل كلمة TL ونحول الرقم)
  const totalPrice = items.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace(' TL', ''));
    return total + priceNumber * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Sepetim</h1>

        {items.length === 0 ? (
          <div className="text-center py-20 border-t border-neutral-200">
            <p className="text-neutral-500 mb-6">Sepetiniz şu an boş.</p>
            <Link href="/" className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
              Alışverişe Başla
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* قائمة المنتجات */}
            <div className="md:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-neutral-200 pb-6">
                  <div className="w-24 h-32 bg-neutral-100 flex-shrink-0"></div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-neutral-500">Beden: {item.size}</p>
                      <p className="text-sm text-neutral-500">Adet: {item.quantity}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <p className="font-bold">{item.price}</p>
                      <button 
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-sm text-red-500 hover:underline"
                      >
                        Kaldır
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ملخص الطلب */}
            <div className="bg-neutral-50 p-6 h-fit border border-neutral-200">
              <h2 className="text-lg font-bold mb-4">Sipariş Özeti</h2>
              <div className="flex justify-between mb-2 text-sm">
                <span>Ara Toplam</span>
                <span>{totalPrice.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between mb-4 text-sm text-neutral-500">
                <span>Kargo</span>
                <span>Ücretsiz</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-4 mb-6 font-bold text-lg">
                <span>Toplam</span>
                <span>{totalPrice.toFixed(2)} TL</span>
              </div>
              <Link href="/checkout" className="block text-center w-full bg-black text-white py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
                Ödemeye Geç
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
