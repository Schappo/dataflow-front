import { useState } from "react";
import { findManyUserRoyaltyContract } from "../../utils/trpc";
import { UserRoyaltyContractType } from "../../utils/types";
import styles from "../../styles/Home.module.css";

export const ListUserRoyaltyContract = () => {
  const [userRoyaltyContracts, setUserRoyaltyContracts] = useState<UserRoyaltyContractType[]>()
  
  const handleOnClick = async () => { 
    const userRoyaltyContracts = await findManyUserRoyaltyContract('152961b1-2276-4b32-aa87-818b3bd1e985')
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
                  <p><b>tenant_id</b>: {userRoyaltyContract.tenant_id}</p>
                  <p><b>userId</b>: {userRoyaltyContract.user_id}</p>
                  <p><b>addresses</b>: {JSON.stringify(userRoyaltyContract.addresses)}</p>
                  <p><b>royalty_contracts</b>{JSON.stringify(userRoyaltyContract.royalty_contracts)}</p>
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