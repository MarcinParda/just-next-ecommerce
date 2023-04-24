import { Roboto } from '@next/font/google';
import { Providers } from '@/components/Providers/Providers';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Just next ecommerce',
  description:
    'Welcome to my next Next.js project made with experimental appdir',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin-ext'],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
