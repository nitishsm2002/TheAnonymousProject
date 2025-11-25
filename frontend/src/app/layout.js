import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'The Anonymous Project',
  description: 'A collection of anonymous messages',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
