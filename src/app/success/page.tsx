import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Siparişiniz Alındı!</h1>
        <p className="text-neutral-500 mb-8 max-w-md">
          Bizi tercih ettiğiniz için teşekkür ederiz. Sipariş detayları e-posta adresinize gönderildi.
        </p>
        
        <Link href="/" className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
          Alışverişe Devam Et
        </Link>
      </main>
    </div>
  );
}
