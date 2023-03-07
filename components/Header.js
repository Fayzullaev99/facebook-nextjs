import Link from 'next/link'
import {BsFacebook,BsSearch,BsArrowDown,BsBell} from 'react-icons/bs'
import {AiFillHome,AiOutlineFlag,AiOutlinePlayCircle,AiOutlineShoppingCart,AiFillMessage} from 'react-icons/ai'
import {MdOutlineGroups} from 'react-icons/md'
import {HiOutlineViewGrid} from 'react-icons/hi'
import HeaderIcon from './HeaderIcon'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

function Header() {
    const {data:session} = useSession()
    console.log(session);
  return (
    <div className='sticky top-0 z-50 flex items-center bg-white py-2 lg:px-5 shadow-md'>
        <div className='flex items-center'>
            <Link href={""}><BsFacebook size={40} color="#3578e5"/></Link>
            <div className='flex items-center p-2 bg-gray-100 ml-2 rounded-full'>
                <BsSearch className='text-gray-600' size={18} />
                <input type={"text"} placeholder="Search Facebook" className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' />
            </div>
        </div>
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon={AiFillHome} />
                <HeaderIcon Icon={AiOutlineFlag} />
                <HeaderIcon Icon={AiOutlinePlayCircle} />
                <HeaderIcon Icon={AiOutlineShoppingCart} />
                <HeaderIcon Icon={MdOutlineGroups} />
            </div>
        </div>
        <div className='flex justify-end items-center sm:space-x-2'>
            <Image 
                onClick={signOut}
                src={session.user.image}
                alt="user"
                className="rounded-full cursor-pointer"
                width={40}
                height={40}
            />
            <p className='whitespace-nowrap font-semibold pr-3'>Sanjar</p>
                <HiOutlineViewGrid className="icon" size={15} />
                <AiFillMessage className="icon" size={15} />
                <BsBell className="icon" size={15} />
                <BsArrowDown className="icon" size={15} />
        </div>
    </div>
  )
}

export default Header