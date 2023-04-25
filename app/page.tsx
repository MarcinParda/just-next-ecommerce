'use client';
import { Box, Text, Button } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';

function AuthLinks() {
  const { data: session, status } = useSession();

  const loading = status === 'loading';

  if (loading) return null;

  return (
    <>
      {session ? (
        <Box>
          <p>
            <Text>Signed in as {session?.user?.email}</Text>
            <Button onClick={() => signOut()}>Sign out</Button>
          </p>
        </Box>
      ) : (
        <>
          <Button onClick={() => signIn()}>Sign in</Button>
        </>
      )}
    </>
  );
}

export default function Home() {
  return (
    <main>
      <AuthLinks />
    </main>
  );
}
