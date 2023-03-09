import Head from 'next/head'
import Header from '@/components/Header'
import { useSession } from 'next-auth/react'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Widgets from '@/components/Widgets'

export default function Home() {
  const { data: session } = useSession()
  if (session) return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className='flex'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
  return <Login />
}