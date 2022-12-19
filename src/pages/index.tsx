import { FormEvent, useState } from 'react'
import styles from '../styles/Home.module.css'
import { findManyUserRoyaltyContract, getServerInfo } from '../utils/trpc';
import { UserRoyaltyContractType } from '../utils/types';

export default function DataFlowTest() {
  const [userRoyaltyContracts, setUserRoyaltyContracts] = useState<UserRoyaltyContractType[]>([])
  const handleOnClick = async () => { 
    try {
      const userRoyaltyContracts = await findManyUserRoyaltyContract('28959c18-4921-432c-8a7e-3bd685b736c3')
      setUserRoyaltyContracts(userRoyaltyContracts);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main className={styles.main}>
        <h1>Dataflow client example</h1>
        <button onClick={() => handleOnClick()}>Submit</button>
        <div>
          {JSON.stringify(userRoyaltyContracts)}
        </div>
      </main>
    </>
  )
}