import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare, hash } from 'bcrypt';
import { CreateNextUserByEmail } from '@/graphql/mutations';
import { GetUserByEmail } from '@/graphql/queries';
import { hygraphClient } from '@/utils/consts/hypgraphClient';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jamie@hygraph.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      authorize: async ({ email, password }) => {
        const { user } = await hygraphClient.request(GetUserByEmail, {
          email,
        });

        if (!user) {
          const { newUser } = await hygraphClient.request(
            CreateNextUserByEmail,
            {
              email,
              password: await hash(password, 12),
            }
          );

          return {
            id: newUser.id,
            username: email,
            email,
          };
        }

        const isValid = await compare(password, user.password);

        if (!isValid) {
          throw new Error('Wrong credentials. Try again.');
        }

        return {
          id: user.id,
          username: email,
          email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
  },
});
