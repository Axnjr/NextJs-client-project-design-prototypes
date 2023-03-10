import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function job() {
  return (
    <div className={styles.universal}>
        <Head>
				<title>Exponential Dev Studios© | Jobs</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <video src='https://rejouice.com/videos/RJ-CONTACT-BG.webm' muted loop autoPlay ></video>
        <div>
        <a href='mailto:yakshitchhipa@gmail.com'>
        <p>We know you are busy, so let's get straight to it.</p>
        <h1>join@exponential.com</h1>
        </a>
        </div>
    </div>
  )
}
