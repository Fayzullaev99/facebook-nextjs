import {BiSearchAlt2} from 'react-icons/bi'
import {MdVideoCameraBack,MdMoreHoriz} from 'react-icons/md'
import Contact from './Contact'
const contacts = [
    { src: "https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-1/305204194_510458907747019_489459452906000849_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=c6021c&_nc_ohc=GVHdj45Dh5cAX9igBNP&_nc_ht=scontent.ftas2-1.fna&oh=00_AfDwgMuhs7cW73buoSxY4V0QJIUjLrdBeSeDdd0Odwq3Dw&oe=640FA2C2", name: "Biznes Rivoj" },
    { src: "https://scontent.ftas2-1.fna.fbcdn.net/v/t1.18169-1/14364810_1808982946005911_7803119236210807500_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=RN4PMwLpcJIAX_axN3W&_nc_ht=scontent.ftas2-1.fna&oh=00_AfDAV--jTfI1-PpujsbxYD2-3lpo5xMGWOOgxqL0r4sItA&oe=64318B6B", name: "Fashion Holics" },
    { src: "https://scontent.ftas2-1.fna.fbcdn.net/v/t1.6435-1/84469617_1560983240742225_9002794684174565376_n.jpg?stp=dst-jpg_p480x480&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=mvDSdxKfU6YAX8CTSWo&_nc_ht=scontent.ftas2-1.fna&oh=00_AfDzGlWZqztjw9LNcAGFVXVX3g5Iww1HfnRHLQimeQuDMg&oe=6431912C", name: "Science, Tech and Universe" },
    { src: "https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-1/278704278_411076921018672_7070743953366302939_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=ghagxV2NmCgAX_oaaTp&_nc_ht=scontent.ftas2-1.fna&oh=00_AfAmrzyjq70KB4EmkVvGb48PsBjzCeGzf9-cXsjbP5CvZg&oe=640F18E0", name: "Rodney Wood" },
    { src: "https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-1/240995288_106906375060743_121389361720779676_n.jpg?stp=dst-jpg_p320x320&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=qXUz983eM1oAX9fWmdl&_nc_ht=scontent.ftas2-1.fna&oh=00_AfA_BOLljvxKqfZMMuMz-h56ILVUYF6zqDBozkek8a9tMQ&oe=640F4FD5", name: "Fast+Furious Fans" },
    { src: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.30808-1/334311538_197706112944310_4935378322936890066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=UInJTRSlad4AX--321m&_nc_ht=scontent.ftas2-2.fna&oh=00_AfBa2tYL4GysRahTRPcWEBNC0L0CTp8Y-mV7Hliu8GJauQ&oe=640E3CD1", name: "Cybrary" },
    { src: "https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-1/272830991_584984559655690_8571594448065360897_n.jpg?stp=dst-jpg_p320x320&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=h_JkKA0oFHYAX_gaJ_3&_nc_ht=scontent.ftas2-1.fna&oh=00_AfCOtjRWdRCBxK3LjQ7B7bO0amAlq8Nky_1I3sxQmKHmzA&oe=640E786A", name: "Supercar Blondie" },
]

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <MdVideoCameraBack size={20} />
                    <BiSearchAlt2 size={20} />
                    <MdMoreHoriz size={20} />
                </div>
            </div>
            {contacts.map((contact)=>(
                <Contact key={contact.src} src={contact.src} name={contact.name}/>
            ))}
        </div>
    )
}

export default Widgets