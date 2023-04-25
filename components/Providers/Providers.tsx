'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <SessionProvider>{children}</SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
