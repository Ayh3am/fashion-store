export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
        Yeni Sezon
      </h1>
      <p className="text-lg md:text-xl text-neutral-500 mb-8">
        Zamansız parçalar. Siyah ve beyaz.
      </p>
      <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
        Alışverişe Başla
      </button>
    </main>
  );
}
