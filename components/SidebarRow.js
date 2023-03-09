import Image from 'next/image'

function SidebarRow({src,Icon,title}) {
  return (
    <div className="flex p-4 space-x-2 items-center rounded-xl cursor-pointer hover:bg-gray-200">
      {src && (
        <Image className="rounded-full" 
          src={src}
          alt="user"
          width={30}
          height={30}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
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