import { gql } from '@apollo/client';

const GET_TRANSACTIONS = gql`
    query getClients {
        transactions{
            id,
            name,
            email,
            phone,
            status,
            typeofaccount
          }
    }
`

export { GET_TRANSACTIONS }