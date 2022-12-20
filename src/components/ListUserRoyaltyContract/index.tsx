import { useState } from "react";
import { findManyUserRoyaltyContract } from "../../utils/trpc";
import styles from "../../styles/Home.module.css";
import { FindManyUserRoyaltyContractOutput } from "../../../dataflow-api";

export const ListUserRoyaltyContract = () => {
  const [userRoyaltyContracts, setUserRoyaltyContracts] = useState<FindManyUserRoyaltyContractOutput>()
  
  const handleOnClick = async () => { 
    const userRoyaltyContracts = await findManyUserRoyaltyContract(process.env.tenantId!)
    setUserRoyaltyContracts(userRoyaltyContracts);
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.tableRequest}>
          <h3>FindMayUserRoyaltyContract</h3>
          <button onClick={() => handleOnClick()}>Submit</button>
          <div className={styles.response}>
            {
              userRoyaltyContracts?.map((userRoyaltyContract, index) => (
                <div key={index}>
                  <p><b>tenantId</b>: {userRoyaltyContract.tenantId}</p>
                  <p><b>userId</b>: {userRoyaltyContract.userId}</p>
                  <p><b>addresses</b>: {JSON.stringify(userRoyaltyContract.addresses)}</p>
                  <p><b>royaltyContracts</b>{JSON.stringify(userRoyaltyContract.royaltyContracts)}</p>
                  <br />
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}