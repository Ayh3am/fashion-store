import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'FASHION. | Minimalist Store',
  description: 'Timeless pieces. Black and white.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased font-sans">
        {children}
        <Toaster 
          position="bottom-center" 
          toastOptions={{
            style: {
              background: '#000',
              color: '#fff',
              borderRadius: '0',
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  );
}
