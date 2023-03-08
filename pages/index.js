import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { getSession, useSession } from 'next-auth/react'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data:session} = useSession()
  if (session) return (
      <div className='h-screen bg-gray-100 overflow-hidden'>
        <Head>
          <title>Facebook</title>
        </Head>
        <Header />
        <main className='flex'>
          <Sidebar />
          <Feed />
        </main>
      </div>
    )
  return <Login />
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context)
//   return {
//     props:{
//       session
//     }
//   }
// }