import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { BackgroundMusicButton } from './components/BackgroundMusicButton';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Invi de kunple',
  description: 'Invitacion de cumple de Fede',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="mx-2 flex h-screen flex-col items-center justify-center bg-[url('https://i.makeagif.com/media/9-15-2023/MxD5uP.gif')] bg-center">
          <div className="flex w-full max-w-xl flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 py-5 shadow-lg">
            <div className="mb-5">
              <BackgroundMusicButton />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
