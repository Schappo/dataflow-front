import { GetServerInfo } from '../components/GetServerInfo';
import { ListUserRoyaltyContract } from '../components/ListUserRoyaltyContract';
import { ListUserWallet } from '../components/ListUserWallets';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Dataflow client example</h1>
        <ListUserRoyaltyContract />

        <ListUserWallet />
        <GetServerInfo />

      </main>
    </>
  )
}