import Image from 'next/image'

function SidebarRow({src,Icon,title}) {
  return (
    <div className="flex p-4 space-x-2 items-center rounded-xl cursor-pointer hover:bg-gray-200">
      {src && (
        <Image className="rounded-full" 
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {
        Icon && (
          <Icon className="text-blue-500" size={30} />
        )
      }
      <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow