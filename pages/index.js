import Head from 'next/head'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Roman Sorin ~ Software Developer</title>
        <meta
          name='description'
          content='Roman Sorin is a full-stack software developer who builds, designs, and engineers custom solutions for businesses of all sizes.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <div>
          <h1 className='font-medium text-sm'>
            testing tailwind integration and absolute paths
          </h1>
        </div>
      </main>
    </div>
  )
}
