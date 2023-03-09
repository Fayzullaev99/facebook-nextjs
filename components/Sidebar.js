import {FaUserFriends} from 'react-icons/fa'
import {BsCalendarDate} from 'react-icons/bs'
import {MdOutlineGroups,MdOutlineExpandMore} from 'react-icons/md'
import {HiOutlineShoppingBag,HiOutlineDesktopComputer} from 'react-icons/hi'
import { useSession } from 'next-auth/react'
import SidebarRow from './SidebarRow'
function Sidebar() {
  const {data:session} = useSession()
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow src={session.user.image} title={session.user.name} />
        <SidebarRow Icon={FaUserFriends} title="Friends" />
        <SidebarRow Icon={MdOutlineGroups} title="Groups" />
        <SidebarRow Icon={HiOutlineShoppingBag} title="Marketplace" />
        <SidebarRow Icon={HiOutlineDesktopComputer} title="Events" />
        <SidebarRow Icon={BsCalendarDate} title="Memories" />
        <SidebarRow Icon={MdOutlineExpandMore} title="See More" />
    </div>
  )
}

export default Sidebar