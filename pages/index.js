import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingIllustration from '../components/LandingIllustration'
import GithubIcon from '../components/icons/GithubIcon'
import LinkedinIcon from '../components/icons/LinkedinIcon'
import PhoneIcon from '../components/icons/PhoneIcon'
import TwitterIcon from '../components/icons/TwitterIcon'
import EmailIcon from '../components/icons/EmailIcon'
import CalendarIcon from '../components/icons/CalendarIcon'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Sorin ~ Software Developer</title>
        <meta
          name='description'
          content='Roman Sorin is a full-stack software developer who builds, designs, and engineers custom solutions for businesses of all sizes.'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main class='section container'>
        <div class='columns'>
          <div class='column is-full-mobile is-half-desktop is-two-thirds-tablet'>
            <div class='landing-copy'>
              <h1 class='landing-heading font-semibold'>
                Building products and experiences that businesses love
              </h1>
              <h2 class='landing-subheading font-light'>
                I am a freelance software developer who specializes in web
                application development & design. I offer SaaS/web app
                development, design, consulting, and server maintenance.
              </h2>
              <br />
              <h2 class='landing-subheading font-light'>
                I’m currently rebuilding and redesigning my portfolio with an
                updated stack, layout, and improved accessibility. In the
                meantime, please use a contact method below if you're interested
                in my projects or prior work.
              </h2>
              <br />
              <h2 class='landing-subheading font-light'>
                Email: rmaximsorin@gmail.com, roman@romansorin.com
              </h2>
            </div>
            <nav class='level'>
              <a href='https://github.com/romansorin' class='level-item'>
                <GithubIcon class='landing-icon' />
              </a>
              <a href='https://twitter.com/romansorinn' class='level-item'>
                <TwitterIcon class='landing-icon' />
              </a>
              <a href='https://linkedin.com/in/romansorin' class='level-item'>
                <LinkedinIcon class='landing-icon' />
              </a>
              <a href='tel:+2163028812' class='level-item'>
                <PhoneIcon class='landing-icon' />
              </a>
              <a href='mailto:hello@romansorin.com' class='level-item'>
                <EmailIcon class='landing-icon' />
              </a>
              <a href='https://calendly.com/rscom/30min' class='level-item'>
                <CalendarIcon class='landing-icon' />
              </a>
            </nav>
          </div>
          <div class='column is-hidden-mobile'>
            <LandingIllustration />
          </div>
        </div>
      </main>
    </div>
  )
}
