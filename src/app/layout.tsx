import "./globals.css";

export const metadata = {
  title: 'Fashion Store',
  description: 'Timeless pieces. Black and white.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
