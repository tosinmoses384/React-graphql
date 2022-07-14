import React from 'react'
// import Transactions from "./components/Transactions";
import Transactions from "../components/Transactions";
import AddClientModalName from '../components/AddClientModalName';
import AddClientModalEmail from '../components/AddClientModalEmail';
import AddClientModalPhone from '../components/AddClientModalPhone';
import AddClientModalStatus from '../components/AddClientModalStatus';
import AddClientModalType from '../components/AddClientModalType';
import SearchComponent from '../components/SearchComponent';

export default function Home() {
  return (
    <>
        <SearchComponent />
    

     <div className='d-flex gap-3 mb-4'>
        <AddClientModalName />
        {/* <AddClientModalEmail /> */}
        {/* <AddClientModalPhone /> */}
        <AddClientModalStatus />
        <AddClientModalType />
        
      </div>
    
    <Transactions />
    </>
  )
}
