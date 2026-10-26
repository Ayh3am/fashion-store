import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { products } from '../../../lib/mockData';

export default function ProductPage({ params }: { params: { id: string } }) {
  // البحث عن المنتج بواسطة الـ ID
  const product = products.find((p) => p.id === params.id);

  // إذا المنتج غير موجود
  if (!product) {
    return (
      <div className="min-h-screen bg-white text-black font-sans">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32">
          <h1 className="text-3xl font-bold mb-4">Ürün Bulunamadı</h1>
          <Link href="/" className="text-neutral-500 hover:text-black underline">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back Link */}
        <Link href="/" className="text-sm text-neutral-500 hover:text-black mb-8 inline-block">
          &larr; Alışverişe Devam Et
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center">
            <span className="text-neutral-400 text-lg">Büyük Görsel</span>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <p className="text-sm text-neutral-500 mb-2 uppercase tracking-widest">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
            <p className="text-2xl font-medium mb-8">{product.price}</p>
            
            <div className="border-t border-neutral-200 pt-6 mb-8">
              <p className="text-neutral-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-3">Beden Seçin</h3>
              <div className="flex space-x-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className="w-12 h-12 border border-neutral-300 flex items-center justify-center text-sm hover:border-black transition-colors focus:border-black focus:ring-1 focus:ring-black">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white py-4 text-sm font-medium hover:bg-neutral-800 transition-colors">
              Sepete Ekle
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
