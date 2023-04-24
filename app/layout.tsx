interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Just next ecommerce',
  description:
    'Welcome to my next Next.js project made with experimental appdir',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
