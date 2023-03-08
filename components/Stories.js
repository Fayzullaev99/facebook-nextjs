import StoryCard from "./StoryCard"

const stories = [
    {
        name:"Fayzullaev Sanjar",
        src: "https://scontent.ftas1-2.fna.fbcdn.net/v/t45.1600-4/288623085_23850873131380344_3092789184777584523_n.png?stp=cp0_dst-jpg_p526x296_q90_spS444&_nc_cat=100&ccb=1-7&_nc_sid=68ce8d&_nc_ohc=_3_w-9Adc08AX86eZ7X&_nc_ht=scontent.ftas1-2.fna&oh=00_AfBRPUmpvRyFLVbyGGs5-RkPHTiyws65QpWB5sFacSXCSw&oe=640D8433",
        profile:"https://scontent.ftas1-1.fna.fbcdn.net/v/t39.30808-1/331313969_1346925032827485_7730825238041662668_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FvgryW30B_MAX9AipWV&_nc_ht=scontent.ftas1-1.fna&oh=00_AfDyzSnCNq0RMOvXEor34L-w4F3Of74rC08yi4l9Kp37gA&oe=640DEE48"
    },
    {
        name:"BiznesRivoj",
        src: "https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-6/334944588_737190411295640_1516469347239444527_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=wC7sd_zxNqgAX8hTT44&_nc_ht=scontent.ftas2-1.fna&oh=00_AfDANi2OCR-c4gfRWgTwp1gA9i9S0seBw3CMecxEeuwZuw&oe=640D9FFF",
        profile:"https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-1/305204194_510458907747019_489459452906000849_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=c6021c&_nc_ohc=GVHdj45Dh5cAX9igBNP&_nc_ht=scontent.ftas2-1.fna&oh=00_AfBqEdXWiXEFTQkCp_a0LurOaM57onRKWocV-jb1EqGXww&oe=640DA882"
    },
    {
        name:"トライズ",
        src: "https://scontent.ftas1-1.fna.fbcdn.net/v/t45.1600-4/311596227_23852581932990549_7053192256473333571_n.jpg?stp=cp0_dst-jpg_q75_s526x296_spS444&_nc_cat=103&ccb=1-7&_nc_sid=e84a38&_nc_ohc=Mm2TlesI5HsAX9tmHJr&_nc_ht=scontent.ftas1-1.fna&oh=00_AfDzjavFcA1PiUfQg6C8v5H7UnQu29L-BNfbRVXw_vxj1w&oe=640E4B67",
        profile:"https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-1/291776760_458968219564578_4891349533887216087_n.png?stp=dst-png_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_ohc=yAgeVboFZkUAX8BlxAp&_nc_oc=AQmwp9A9NHxBUF6hnmLuTkGAfIY_2UN2whIjAT8VvcY6UiWyj4Bxnuziaoiq3RdssW4&_nc_ht=scontent.ftas2-1.fna&oh=00_AfCSCkwDCQlcMi0-8zQqy1OlJFjxAtP1i9OWeGoDq5i6-w&oe=640E8171"
    },
    {
        name:"Basketball Network",
        src: "https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-6/334686706_741257450699733_6695270052646959231_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=fpSsO9-rJ58AX-bb0J_&_nc_ht=scontent.ftas2-1.fna&oh=00_AfDubO--p3iadHVVVHhTvw1eVzMV4piocouWfDLONNa3tw&oe=640D85C9",
        profile:"https://scontent.ftas2-1.fna.fbcdn.net/v/t1.6435-1/143025257_1858946277603006_8084195556900821537_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=BdEupM9L0nAAX9YFJ5x&_nc_ht=scontent.ftas2-1.fna&oh=00_AfDORaWVxVPxALrlIWWYj_JPxJv8Z8SogaLmrR9G1Ajkaw&oe=64304AE6"
    },
    {
        name:"Планета чудес",
        src: "https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-6/333059115_740888294675355_1139236881631127515_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MESgzAo5uOwAX-DuB7V&_nc_ht=scontent.ftas2-1.fna&oh=00_AfDBcXrW8oS8_gvpIXLMoSXginbcdtfMJqZgzJH3U1rvvQ&oe=640D4A64",
        profile:"https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-1/327443006_677060060832671_5071639226700042672_n.jpg?stp=c124.0.320.320a_dst-jpg_p320x320&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=fO7KscECGB8AX8c1tRf&_nc_ht=scontent.ftas2-1.fna&oh=00_AfCj8RuMANpfYkwWX40f5bWnR2oYdMo0ER40GPCcyYcE7g&oe=640DD159"
    }
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map(story =>(
                    <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
                ))
            }
        </div>
    )
}
export default Stories