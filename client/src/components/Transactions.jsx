import React from 'react'
import { useQuery } from '@apollo/client';
import TransactionRow from './TransactionRow';
import Spinner from './Spinner';
import { GET_TRANSACTIONS } from '../queries/transactionQueries'

export default function Transactions() {
    const { loading, error, data } = useQuery(GET_TRANSACTIONS)

    if (loading) return <Spinner />
    if (error) return <p>Something Went Wrong</p>

  return (
    <>
        {!loading && !error && (
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Type</th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {data.transactions.map(transaction => (
                        <TransactionRow key={transaction.id} transaction={transaction} />
                    ))}
                </tbody>
            </table>
        )}
    </>
  )
}
