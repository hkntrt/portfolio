export interface Item {
    id: number,
    name: string,
    tech_stack: string,
    src_code_link?: string
    live_example_link?: string
    img_url: string
}

interface Information {
    welcome_banner: string,
    linkedin: string,
    github: string,
    twitter: string
}


const database: Item[] = [
    {
        id: 1,
        name: "Blog Website",
        tech_stack: "ASP.NET Core MVC C#",
        src_code_link: "https://github.com/hkntrt/MyBlogApp",
        img_url: "https://raw.githubusercontent.com/hkntrt/MyBlogApp/main/MyBlog.gif"
    },
    {
        id: 2,
        name: "Chat Application",
        tech_stack: "Python/Flask+Js+Socketio",
        src_code_link: "https://github.com/hkntrt/randomchatapp.com",
        img_url: "https://raw.githubusercontent.com/hkntrt/randomchatapp.com/main/screenshots/screenshot3.jpg"
    },
    {
        id: 3,
        name: "Snake Game",
        tech_stack: "C#",
        src_code_link: "https://github.com/hkntrt/SnakeGame",
        img_url: "https://raw.githubusercontent.com/hkntrt/SnakeGame/main/SnakeGame.gif"
    },
    {
        id: 4,
        name: "Sorularla Eğitim Bilimleri (Closed source)",
        tech_stack: "Android Java Room Database",
        src_code_link: "https://github.com/hkntrt/sorularlaegitimbilimleripublic",
        img_url: "https://raw.githubusercontent.com/hkntrt/sorularlaegitimbilimleripublic/main/Screenshots/ss1.png"
    }
]


const siteInformations: Information = {
    welcome_banner: "Portfolio Website",
    linkedin: "https://www.linkedin.com/in/hakanturut",
    github: "https://github.com/hkntrt",
    twitter: "https://twitter.com/hkntrt1"
}


export default { database, siteInformations }