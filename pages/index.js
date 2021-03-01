import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Sorin ~ Software Developer</title>
        <meta
          name='description'
          content='Roman Sorin is a full-stack software developer who builds, designs, and engineers custom solutions for businesses of all sizes.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Under construction</h1>

        <p className={styles.description}>
          I am a freelance software developer who specializes in web application
          development & design. I offer SaaS/web app development, design,
          consulting, and server maintenance.
          <br />
          I’m currently rebuilding and redesigning my portfolio with an updated
          stack, layout, and improved accessibility. In the meantime, please use
          a contact method below if you're interested in my projects or prior
          work. Email: romansorin.com
        </p>
      </main>
    </div>
  )
}
