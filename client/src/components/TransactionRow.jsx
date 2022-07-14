import React from 'react'
// import { FaTrash } from 'react-icons/fa'

export default function TransactionRow({ transaction }) {
  return (
   <tr>
    <td>{transaction.name}</td>
    <td>{transaction.email}</td>
    <td>{transaction.phone}</td>
    <td>{transaction.status}</td>
    <td>{transaction.typeofaccount}</td>
    {/* <td>
        <button className="btn btn-danger btn-sm">
        <FaTrash />
        </button>
    </td> */}
   </tr>
  )
}
