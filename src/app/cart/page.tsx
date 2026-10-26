'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useCartStore } from '../../store/useCartStore';

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const totalPrice = items.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace(' TL', ''));
    return total + priceNumber * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />

      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Sepetim</h1>

        {items.length === 0 ? (
          <div className="text-center py-24 border border-neutral-200 bg-neutral-50">
            <p className="text-neutral-500 mb-6 text-lg">Sepetiniz şu an boş.</p>
            <Link href="/" className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
              Alışverişe Başla
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* قائمة المنتجات */}
            <div className="lg:col-span-2">
              <div className="border-t border-neutral-200">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-6 border-b border-neutral-200 py-6">
                    {/* صورة المنتج */}
                    <div className="w-24 h-32 flex-shrink-0 bg-neutral-100 overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-neutral-400">Görsel</div>
                      )}
                    </div>
                    
                    {/* تفاصيل المنتج */}
                    <div className="flex flex-col justify-between flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-sm text-neutral-500 mt-1">Beden: {item.size}</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-neutral-400 hover:text-red-500 transition-colors text-sm"
                        >
                          Kaldır
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-end mt-4">
                        {/* أزرار التحكم بالكمية */}
                        <div className="flex items-center border border-neutral-300">
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, -1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-bold">{(parseFloat(item.price.replace(' TL', '')) * item.quantity).toFixed(2)} TL</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ملخص الطلب */}
            <div className="bg-neutral-50 p-6 h-fit border border-neutral-200 sticky top-24">
              <h2 className="text-lg font-bold mb-6">Sipariş Özeti</h2>
              
              <div className="flex justify-between mb-4 text-sm text-neutral-600">
                <span>Ara Toplam</span>
                <span>{totalPrice.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between mb-6 text-sm text-neutral-600">
                <span>Kargo</span>
                <span>Ücretsiz</span>
              </div>
              
              <div className="flex justify-between border-t border-neutral-300 pt-4 mb-6 font-bold text-lg">
                <span>Toplam</span>
                <span>{totalPrice.toFixed(2)} TL</span>
              </div>
              
              <Link href="/checkout" className="block text-center w-full bg-black text-white py-4 text-sm font-medium hover:bg-neutral-800 transition-colors">
                Ödemeye Geç
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
