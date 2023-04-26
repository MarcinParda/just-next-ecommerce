// TODO: Replace with codegen hooks

import { gql } from 'graphql-request';

export const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    user: nextUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;
