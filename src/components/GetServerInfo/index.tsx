import { useState } from "react";
import { findManyUserWallet, getServerInfo } from "../../utils/trpc";
import { UserWallets } from "../../utils/types";
import styles from "../../styles/Home.module.css";

export const GetServerInfo = () => {
  const [serverInfo, setServerInfo] = useState<string>()
  
  const handleOnClick = async () => { 
    const serverInfomation = await getServerInfo()
    setServerInfo(serverInfomation.version);
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.tableRequest}>
          <h3>GetServerInfo</h3>
          <button onClick={() => handleOnClick()}>Submit</button>
          <div className={styles.response}>
            {serverInfo}  
          </div>
        </div>
      </main>
    </>
  )
}