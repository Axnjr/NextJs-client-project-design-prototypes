import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function job() {
  return (
    <div className={styles.universal}>
        <Head>
				<title>Exponential Dev Studios© | WaitList</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <video src='https://rejouice.com/videos/RJ-CONTACT-BG.webm' muted loop autoPlay ></video>
        <div>
        <a href='mailto:yakshitchhipa@gmail.com'>
        <p>Exited, join our wait list to get notified when we launch.</p>
        <h1>waiting@forExpo.com</h1>
        </a>
        </div>
    </div>
  )
}
