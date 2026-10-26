import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              FASHION.
            </Link>
          </div>
          
          {/* Navigation Links - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
              Yeni Gelenler
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
              Kadın
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
              Erkek
            </Link>
          </div>

          {/* Right side (Cart, Language, Login) */}
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium hover:text-neutral-600">TR / EN</button>
            <button className="text-sm font-medium hover:text-neutral-600">Giriş</button>
            <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">
              Sepet (0)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
