import Navbar from '../components/Navbar';

// بيانات وهمية (Mock Data) مؤقتاً عشان نشوف الشكل
const products = [
  { id: 1, name: 'Oversize Basic T-Shirt', price: '249.99 TL', category: 'Erkek' },
  { id: 2, name: 'Minimalist Black Dress', price: '899.00 TL', category: 'Kadın' },
  { id: 3, name: 'White Linen Shirt', price: '549.50 TL', category: 'Erkek' },
  { id: 4, name: 'Classic Trench Coat', price: '1499.00 TL', category: 'Kadın' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 bg-neutral-50 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          Yeni Sezon
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 mb-8 max-w-2xl">
          Zamansız parçalar. Siyah ve beyaz. Koleksiyonu keşfedin.
        </p>
        <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
          Koleksiyonu Keşfet
        </button>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 tracking-tight">Öne Çıkanlar</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image Placeholder */}
              <div className="aspect-[3/4] bg-neutral-200 mb-4 flex items-center justify-center group-hover:opacity-80 transition-opacity">
                <span className="text-neutral-400 text-sm">Görsel</span>
              </div>
              
              {/* Product Info */}
              <div>
                <p className="text-xs text-neutral-500 mb-1">{product.category}</p>
                <h3 className="text-sm font-medium truncate">{product.name}</h3>
                <p className="text-sm font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
