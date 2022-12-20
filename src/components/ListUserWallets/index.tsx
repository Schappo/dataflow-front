import { useState } from "react";
import { findManyUserWallet } from "../../utils/trpc";
import { UserWallets } from "../../utils/types";
import styles from "../../styles/Home.module.css";

export const ListUserWallet = () => {
  const [userWallets, setUserWallets] = useState<UserWallets[]>()
  
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
                  <p><b>tenant_id</b>: {userWallet.tenant_id}</p>
                  <p><b>email</b>: {userWallet.email}</p>
                  <p><b>name</b>: {userWallet.name}</p>
                  <p><b>roles</b>: {JSON.stringify(userWallet.roles)}</p>
                  <p><b>user_id</b>: {userWallet.user_id}</p>
                  <p><b>main_wallet</b>: {JSON.stringify(userWallet.main_wallet)}</p>
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