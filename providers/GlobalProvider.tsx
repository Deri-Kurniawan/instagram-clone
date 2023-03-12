import React, { createContext, useContext, useState } from 'react'

export interface UserProps {
    id: string,
    fullname: string,
    username: string,
    bio: string,
    storyIsSeen: boolean,
    avatar: string,
    isVerified: boolean,
    stories: string[] | any[],
}

export interface PostsProps {
    id: string,
    author: UserProps,
    pictures: string[],
    location: string,
    caption: string,
    likes: number,
    comments: number,
    createdAt: string,
}


export interface ReturnProps {
    user: UserProps,
    setUser: any,
    users: UserProps[],
    setUsers: any,
    posts: PostsProps[],
    setPosts: any,
}

const GlobalContext = createContext(null)

export const useGlobal = (): ReturnProps => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {
    const [users, setUsers] = useState(() => [
        {
            id: "1",
            fullname: "Deri Kurniawan",
            username: "deri561",
            bio: "👨‍💻 Full Stack Developer | React Developer | UI Designer \n🫂 part of @daunnesia",
            storyIsSeen: false,
            avatar: "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-19/334564746_494292326055154_5972906218444883814_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=FvZNLAuTklAAX-5EtlB&edm=ALlQn9MBAAAA&ccb=7-5&oh=00_AfAIFOiAP8fUWDVYWiOxpyxzXT6WyaDcjweGSHPgQZh7hQ&oe=6410DC50&_nc_sid=48a2a6",
            isVerified: true,
            stories: [{
                id: "1",
                image: "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-19/334564746_494292326055154_5972906218444883814_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=FvZNLAuTklAAX-5EtlB&edm=ALlQn9MBAAAA&ccb=7-5&oh=00_AfAIFOiAP8fUWDVYWiOxpyxzXT6WyaDcjweGSHPgQZh7hQ&oe=6410DC50&_nc_sid=48a2a6"
            }],
        },
        {
            id: "2",
            fullname: "Anisa Mawarni",
            username: "mwranisaa",
            bio: "𝐀𝐧𝐢𝐬𝐚 𝐌𝐚𝐰𝐚𝐫𝐧𝐢",
            storyIsSeen: false,
            avatar: "https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/326553346_903016314221341_845051831767555621_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=101&_nc_ohc=5T3n5XCHzwwAX9MchYM&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDk6nzxVv4zK8c1iB9S4CKG61OgkDhSd41FH9rsxYrsVA&oe=6411E40D&_nc_sid=8fd12b",
            isVerified: true,
            stories: []
        },
        {
            id: "3",
            fullname: "Mutia",
            username: "mutiasdh_",
            bio: "🙏😇",
            storyIsSeen: false,
            avatar: "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-19/317289480_1120397915328651_6263193118190339207_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SHxJ8zjMqgIAX_DqHhs&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDbwJzdzqciCCcpxMP1hMNqyfSw_kWtrG47OZvfq7ecEw&oe=64117846&_nc_sid=1527a3",
            isVerified: false,
            stories: []
        },
        {
            id: "4",
            fullname: "Mayangsari",
            username: "myng._",
            bio: "Your life does not get better by chance.\nIt gets better by a change",
            storyIsSeen: false,
            avatar: "https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/332551247_912657626711802_2248289796923844388_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=scbntOyguo8AX_eu2Vs&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAsnJBQllY_RHfRsT0scuFFL5rEt5AKhR1Ftd_aKevMzg&oe=641057ED&_nc_sid=1527a3",
            isVerified: false,
            stories: []
        },
        {
            id: "5",
            fullname: "Imasnurani",
            username: "ranin00_",
            bio: "Sukabumi 📍",
            storyIsSeen: false,
            avatar: "https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/280985979_999666204272322_7325573810016344282_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=e9WJblNoNGYAX-gY7KM&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAzrBC6z1fPgavRywZzwy0Es-Niizw3spFwtd9JcMs3Ww&oe=6410A41E&_nc_sid=1527a3",
            isVerified: false,
            stories: []
        },
        {
            id: "6",
            fullname: "Syavina",
            username: "syavinanzhr",
            bio: "💌 dm for business inquiries\n@pinzhrr",
            storyIsSeen: false,
            avatar: "https://instagram.fcgk35-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?efg=eyJybWQiOiJpZ19hbmRyb2lkX21vYmlsZV9uZXR3b3JrX3N0YWNrX3F1aWNfY29uZ2VzdGlvbl9jb250cm9sX2FsZ29yaXRobV9iYnIyOmxpZ2VyX2N1YmljIn0&_nc_ad=z-m&_nc_ht=instagram.fcgk35-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=sNZJqatCjZIAX-uBOJp&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfDxeacOx9zsmsbFoD93gtAWVO5dDVJNkfRzRuuII9lcqA&oe=64112A0F&_nc_sid=6136e7",
            isVerified: false,
            stories: []
        },
    ]);

    const [user, setUser] = useState(users[0]);

    const [posts, setPosts] = useState<any>([{
        id: "1",
        author: users[0],
        pictures: ["https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/293370319_1451695218593271_7055299281991302180_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fZzqK6XhbP8AX81I8Td&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg4MTYwODA4MTAwNDg4NzMzOA%3D%3D.2-ccb7-5&oh=00_AfB2DpWy-DeS_GdmA7BjFQ9idVNWfulyKBizAFCcLdQX0g&oe=6411BB4C&_nc_sid=1527a3"],
        location: "Puncak Habibie, Pelabuhan Ratu",
        caption: "Wazzup!👋 Gimana kabarnya? \nAku mau cerita nih tentang liburan aku yang seru banget di Puncak Habibie dan Sawarna! 🤩\n\nJadi, di Puncak Habibie kita naik gunung bareng-bareng dan menyaksikan sunrise yang keren banget! 🌄🌞\n\nTerus di Sawarna, kita main pasir pantai dan makan makanan enak di pinggir laut! 🏖️🍴\n\nSeru banget lah pokoknya! 🤘\n\nMakanya nih, aku mau kasih shoutout buat bersama pacar ku @ranin00_ yang udah bikin liburan ini seru banget! 👏\n\nKalian udah pernah ke Puncak Habibie atau Sawarna? \n\nKalo belum, buruan deh planing buat kesana! 😍 \n\nJangan lupa tag aku ya kalo udah kesana! 📷👀 \n\n#PuncakHabibie #Sawarna #SerunyaLiburanBersamaPacar #Sunrise #PantaiIndonesia #IndonesiaJuara",
        likes: 0,
        comments: 0,
        createdAt: "2023-03-12T10:58:00.000Z",
    },
    {
        id: "6",
        author: users[5],
        pictures: ["https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/334028216_142406412071953_5589402918466715935_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=CMaizLUIsZIAX-3vkQp&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1MDk1ODIxMDAwMjE5MjYyOA%3D%3D.2-ccb7-5&oh=00_AfDzaJLKnbxIVk4a6yrjDU9jbFOJQbby2VKoNRrOoY-vnQ&oe=64118A57&_nc_sid=1527a3", "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/331124941_144100304923381_5444072805535340072_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8awnHo0Td_sAX9kBXZj&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1MDk1ODIxMDE1MzA4MTUzNw%3D%3D.2-ccb7-5&oh=00_AfAmRV5OR6hIWToFvEWlq5ubXt99rdrpMSZHA4Kxc09Q1Q&oe=641158F3&_nc_sid=1527a3"],
        location: "",
        caption: "Hello world @deri561",
        likes: 0,
        comments: 0,
        createdAt: "2021-05-01T00:00:00.000Z",
    },
    {
        id: "2",
        author: users[1],
        pictures: ["https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/293370319_1451695218593271_7055299281991302180_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fZzqK6XhbP8AX81I8Td&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg4MTYwODA4MTAwNDg4NzMzOA%3D%3D.2-ccb7-5&oh=00_AfB2DpWy-DeS_GdmA7BjFQ9idVNWfulyKBizAFCcLdQX0g&oe=6411BB4C&_nc_sid=1527a3"],
        location: "Puncak Habibie, Pelabuhan Ratu",
        caption: "",
        likes: 0,
        comments: 0,
        createdAt: "2021-05-01T00:00:00.000Z",
    }, {
        id: "3",
        author: users[2],
        pictures: ["https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/293370319_1451695218593271_7055299281991302180_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fZzqK6XhbP8AX81I8Td&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg4MTYwODA4MTAwNDg4NzMzOA%3D%3D.2-ccb7-5&oh=00_AfB2DpWy-DeS_GdmA7BjFQ9idVNWfulyKBizAFCcLdQX0g&oe=6411BB4C&_nc_sid=1527a3"],
        location: "Puncak Habibie, Pelabuhan Ratu",
        caption: "",
        likes: 0,
        comments: 0,
        createdAt: "2021-05-01T00:00:00.000Z",
    }, {
        id: "4",
        author: users[3],
        pictures: ["https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/293370319_1451695218593271_7055299281991302180_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fZzqK6XhbP8AX81I8Td&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg4MTYwODA4MTAwNDg4NzMzOA%3D%3D.2-ccb7-5&oh=00_AfB2DpWy-DeS_GdmA7BjFQ9idVNWfulyKBizAFCcLdQX0g&oe=6411BB4C&_nc_sid=1527a3", "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/293370319_1451695218593271_7055299281991302180_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fZzqK6XhbP8AX81I8Td&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg4MTYwODA4MTAwNDg4NzMzOA%3D%3D.2-ccb7-5&oh=00_AfB2DpWy-DeS_GdmA7BjFQ9idVNWfulyKBizAFCcLdQX0g&oe=6411BB4C&_nc_sid=1527a3", "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/293370319_1451695218593271_7055299281991302180_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fZzqK6XhbP8AX81I8Td&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg4MTYwODA4MTAwNDg4NzMzOA%3D%3D.2-ccb7-5&oh=00_AfB2DpWy-DeS_GdmA7BjFQ9idVNWfulyKBizAFCcLdQX0g&oe=6411BB4C&_nc_sid=1527a3"],
        location: "Puncak Habibie, Pelabuhan Ratu",
        caption: "",
        likes: 0,
        comments: 0,
        createdAt: "2021-05-01T00:00:00.000Z",
    }, {
        id: "5",
        author: users[4],
        pictures: ["https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/293370319_1451695218593271_7055299281991302180_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fZzqK6XhbP8AX81I8Td&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg4MTYwODA4MTAwNDg4NzMzOA%3D%3D.2-ccb7-5&oh=00_AfB2DpWy-DeS_GdmA7BjFQ9idVNWfulyKBizAFCcLdQX0g&oe=6411BB4C&_nc_sid=1527a3"],
        location: "",
        caption: "",
        likes: 0,
        comments: 0,
        createdAt: "2021-05-01T00:00:00.000Z",
    }
    ]);

    const value: ReturnProps = {
        user,
        setUser,
        users,
        setUsers,
        posts,
        setPosts
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}