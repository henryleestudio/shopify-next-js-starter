import MainLayout from '@/components/layouts/MainLayout'
import Head from 'next/head'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
          <meta name="description" content="By create Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Index page</h1>
    </MainLayout>
  )
}
