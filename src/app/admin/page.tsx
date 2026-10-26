'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { supabase } from '../../lib/supabase';

export default function AdminPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Erkek');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (data) setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('products').insert([
      { name, price: parseFloat(price), category, image, description }
    ]);
    
    if (!error) {
      alert('Ürün başarıyla eklendi!');
      setName(''); setPrice(''); setImage(''); setDescription('');
      fetchProducts();
    } else {
      alert('Bir hata oluştu: ' + error.message);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if(confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
      await supabase.from('products').delete().eq('id', id);
      fetchProducts();
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Yönetim Paneli (Admin)</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-neutral-50 p-6 border border-neutral-200 h-fit">
            <h2 className="text-lg font-bold mb-4">Yeni Ürün Ekle</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <input required type="text" placeholder="Ürün Adı" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 focus:border-black outline-none" />
              <input required type="number" step="0.01" placeholder="Fiyat (Örn: 249.99)" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border p-2 focus:border-black outline-none" />
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border p-2 focus:border-black outline-none">
                <option value="Erkek">Erkek</option>
                <option value="Kadın">Kadın</option>
                <option value="Aksesuar">Aksesuar</option>
              </select>
              <input required type="url" placeholder="Görsel URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full border p-2 focus:border-black outline-none" />
              <textarea required placeholder="Ürün Açıklaması" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border p-2 h-24 focus:border-black outline-none"></textarea>
              
              <button disabled={loading} type="submit" className="w-full bg-black text-white py-3 font-medium hover:bg-neutral-800 transition-colors">
                {loading ? 'Ekleniyor...' : 'Ürünü Kaydet'}
              </button>
            </form>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-lg font-bold mb-4">Mevcut Ürünler</h2>
            <div className="space-y-4">
              {products.map((p) => (
                <div key={p.id} className="flex items-center gap-4 border p-4">
                  <img src={p.image} alt={p.name} className="w-16 h-20 object-cover bg-neutral-100" />
                  <div className="flex-grow">
                    <h3 className="font-bold">{p.name}</h3>
                    <p className="text-sm text-neutral-500">{p.category} | {p.price} TL</p>
                  </div>
                  <button onClick={() => handleDelete(p.id)} className="text-red-500 text-sm hover:underline">
                    Sil
                  </button>
                </div>
              ))}
              {products.length === 0 && <p className="text-neutral-500">Henüz ürün eklenmemiş.</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
