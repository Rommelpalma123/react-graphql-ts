import { gql } from '@apollo/client';

export const GET_ALL_CLIENTS = gql`
  query allClient {
    allClient {
      nombre
      id_pais {
        nombre
      }
    }
  }
`;
