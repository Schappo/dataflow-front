import { useState } from "react";
import { findManyUserWallet } from "../../utils/trpc";
import styles from "../../styles/Home.module.css";
import { FindManyUserWalletOutput } from "../../../dataflow-api";

export const ListUserWallet = () => {
  const [userWallets, setUserWallets] = useState<FindManyUserWalletOutput>()
  
  const handleOnClick = async () => { 
    const userRoyaltyContracts = await findManyUserWallet(process.env.tenantId!)
    setUserWallets(userRoyaltyContracts);
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.tableRequest}>
          <h3>FindMayUserRoyaltyContract</h3>
          <button onClick={() => handleOnClick()}>Submit</button>
          <div className={styles.response}>
            {
              userWallets?.map((userWallet, index) => (
                <div key={index}>
                  <p><b>tenantId</b>: {userWallet.tenantId}</p>
                  <p><b>email</b>: {userWallet.email}</p>
                  <p><b>name</b>: {userWallet.name}</p>
                  <p><b>roles</b>: {JSON.stringify(userWallet.roles)}</p>
                  <p><b>userId</b>: {userWallet.userId}</p>
                  <p><b>mainWallet</b>: {JSON.stringify(userWallet.mainWallet)}</p>
                  <p><b>wallets</b>: {JSON.stringify(userWallet.wallets)}</p>

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