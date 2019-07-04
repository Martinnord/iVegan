import { gql } from "apollo-boost";

export const loginMutation = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      id
      firstName
      lastName
      email
      username
    }
  }
`;
