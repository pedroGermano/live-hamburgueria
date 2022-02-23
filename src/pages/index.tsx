import Head from 'next/head'
import { Header } from 'components/Header'
import { Main } from 'components/Main'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rocky&apos;s</title>
      </Head>
      <Header />
      <Main />
    </div>
  )
}
