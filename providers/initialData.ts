export interface UserProps {
  id: string;
  fullname: string;
  username: string;
  bio: string;
  storyIsSeen: boolean;
  avatar: string;
  isVerified: boolean;
  stories: string[] | any[];
}

export interface CommentProps {
  author: UserProps;
  comment: string;
  content: string;
  likes: UserProps[];
}

export type media = {
  type: string;
  src: string;
};

export interface FeedProps {
  id: string;
  author: UserProps;
  media: media[];
  location: string;
  caption: string;
  likes: UserProps[];
  comments: CommentProps[] | any[];
  createdAt: string;
}

export const initialUsers = [
  {
    id: "1",
    fullname: "Deri Kurniawan",
    username: "deri561",
    bio: "👨‍💻 Full Stack Developer | React Developer | UI Designer \n🫂 part of @daunnesia",
    storyIsSeen: false,
    avatar:
      "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-19/334564746_494292326055154_5972906218444883814_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=FvZNLAuTklAAX-5EtlB&edm=ALlQn9MBAAAA&ccb=7-5&oh=00_AfAIFOiAP8fUWDVYWiOxpyxzXT6WyaDcjweGSHPgQZh7hQ&oe=6410DC50&_nc_sid=48a2a6",
    isVerified: true,
    stories: [
      {
        id: "1",
        image:
          "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-19/334564746_494292326055154_5972906218444883814_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=FvZNLAuTklAAX-5EtlB&edm=ALlQn9MBAAAA&ccb=7-5&oh=00_AfAIFOiAP8fUWDVYWiOxpyxzXT6WyaDcjweGSHPgQZh7hQ&oe=6410DC50&_nc_sid=48a2a6",
      },
    ],
  },
  {
    id: "2",
    fullname: "Anisa Mawarni",
    username: "mwranisaa",
    bio: "𝐀𝐧𝐢𝐬𝐚 𝐌𝐚𝐰𝐚𝐫𝐧𝐢",
    storyIsSeen: false,
    avatar:
      "https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/326553346_903016314221341_845051831767555621_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=101&_nc_ohc=5T3n5XCHzwwAX9MchYM&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDk6nzxVv4zK8c1iB9S4CKG61OgkDhSd41FH9rsxYrsVA&oe=6411E40D&_nc_sid=8fd12b",
    isVerified: true,
    stories: [],
  },
  {
    id: "3",
    fullname: "Mutia",
    username: "mutiasdh_",
    bio: "🙏😇",
    storyIsSeen: false,
    avatar:
      "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-19/317289480_1120397915328651_6263193118190339207_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SHxJ8zjMqgIAX_DqHhs&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDbwJzdzqciCCcpxMP1hMNqyfSw_kWtrG47OZvfq7ecEw&oe=64117846&_nc_sid=1527a3",
    isVerified: false,
    stories: [],
  },
  {
    id: "4",
    fullname: "Mayangsari",
    username: "myng._",
    bio: "Your life does not get better by chance.\nIt gets better by a change",
    storyIsSeen: false,
    avatar:
      "https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/332551247_912657626711802_2248289796923844388_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=scbntOyguo8AX_eu2Vs&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAsnJBQllY_RHfRsT0scuFFL5rEt5AKhR1Ftd_aKevMzg&oe=641057ED&_nc_sid=1527a3",
    isVerified: false,
    stories: [],
  },
  {
    id: "5",
    fullname: "Imasnurani",
    username: "ranin00_",
    bio: "Sukabumi 📍",
    storyIsSeen: false,
    avatar:
      "https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-19/280985979_999666204272322_7325573810016344282_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=e9WJblNoNGYAX-gY7KM&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAzrBC6z1fPgavRywZzwy0Es-Niizw3spFwtd9JcMs3Ww&oe=6410A41E&_nc_sid=1527a3",
    isVerified: false,
    stories: [],
  },
  {
    id: "6",
    fullname: "Syavina",
    username: "syavinanzhr",
    bio: "💌 dm for business inquiries\n@pinzhrr",
    storyIsSeen: false,
    avatar:
      "https://instagram.fcgk35-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?efg=eyJybWQiOiJpZ19hbmRyb2lkX21vYmlsZV9uZXR3b3JrX3N0YWNrX3F1aWNfY29uZ2VzdGlvbl9jb250cm9sX2FsZ29yaXRobV9iYnIyOmxpZ2VyX2N1YmljIn0&_nc_ad=z-m&_nc_ht=instagram.fcgk35-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=sNZJqatCjZIAX-uBOJp&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfDxeacOx9zsmsbFoD93gtAWVO5dDVJNkfRzRuuII9lcqA&oe=64112A0F&_nc_sid=6136e7",
    isVerified: !true,
    stories: [],
  },
  {
    id: "7",
    fullname: "𝕋𝕒𝕟",
    username: "tanianap15_",
    bio: "Be a pretty girl with a pretty heart✨",
    storyIsSeen: false,
    avatar:
      "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-19/329775359_173249212088259_7396912911622202488_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1govmHWWfzQAX9HOhEb&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBYaLsWB-EbIdd8M_v5NAh1vLO_0gHbeW3RYCIhsIjAJw&oe=64144048&_nc_sid=1527a3",
    isVerified: !true,
    stories: [],
  },
];

export const initialUser = initialUsers[0];

export const initialFeeds = [
  {
    id: "1",
    author: initialUsers.find(
      (u) => u.fullname.toLowerCase() === "deri kurniawan"
    ),
    media: [
      {
        type: "image",
        src: "https://scontent-xsp1-1.cdninstagram.com/v/t51.2885-15/293370319_1451695218593271_7055299281991302180_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-xsp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fZzqK6XhbP8AX81I8Td&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg4MTYwODA4MTAwNDg4NzMzOA%3D%3D.2-ccb7-5&oh=00_AfB2DpWy-DeS_GdmA7BjFQ9idVNWfulyKBizAFCcLdQX0g&oe=6411BB4C&_nc_sid=1527a3",
      },
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/105946146_279998916409147_5199586860693428395_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=75cewv-B7OYAX_umOba&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjM0MTkwNTk1NzUzMTE0NTQ5NQ%3D%3D.2-ccb7-5&oh=00_AfAy-p2We37QNJHTevZ_agZ_67jfBmQ7flD2uyISvImA0Q&oe=6414F1CD&_nc_sid=1527a3",
      },
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/28427067_1471103186333317_3260245215524421632_n.jpg?stp=dst-jpg_e35_s720x720&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=b-Vq-etOS_0AX_CBrzj&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MTczMDM5OTMyMzM2MTAwMzYzOA%3D%3D.2-ccb7-5&oh=00_AfAicMtuVAGj4RnhdO4-iTc0YkzQYrU0MCURnO_noczaww&oe=641397BC&_nc_sid=1527a3",
      },
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/41507069_302850033831595_755668843341115339_n.jpg?stp=dst-jpg_e35_s720x720&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=db2K01DE4IwAX-lFYHx&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MTg4MTMxMDM1ODY0MTU0NTI5MQ%3D%3D.2-ccb7-5&oh=00_AfAcAkoliqSLMO1zuIr6lw_0-mvJxw8PGjPnfLNcnWdFeQ&oe=6413B53F&_nc_sid=1527a3",
      },
      {
        type: "video",
        src: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      },
    ],
    location: "Puncak Habibie, Pelabuhan Ratu",
    caption:
      "Wazzup!👋 Gimana kabarnya? \nAku mau cerita nih tentang liburan aku yang seru banget di Puncak Habibie dan Sawarna! 🤩\n\nJadi, di Puncak Habibie kita naik gunung bareng-bareng dan menyaksikan sunrise yang keren banget! 🌄🌞\n\nTerus di Sawarna, kita main pasir pantai dan makan makanan enak di pinggir laut! 🏖️🍴\n\nSeru banget lah pokoknya! 🤘\n\nMakanya nih, aku mau kasih shoutout buat bersama orang terdekat ku @ranin00_ yang udah bikin liburan ini seru banget! 👏\n\nKalian udah pernah ke Puncak Habibie atau Sawarna? \n\nKalo belum, buruan deh planning buat kesana! 😍 \n\nJangan lupa tag aku ya @deri561 dengan hashtag #WonderfulIndonesia kalo udah kesana! 📷👀\n\n #PuncakHabibie #Sawarna #SerunyaLiburanBersamaOrangTerdekat #Sunrise #PantaiIndonesia #IndonesiaJuara",
    likes: [
      initialUsers[1],
      initialUsers[2],
      initialUsers[3],
      initialUsers[4],
      initialUsers[5],
    ],
    comments: [
      {
        author: initialUsers[2],
        content: "Wow",
        likes: [initialUsers[1], initialUsers[2]],
      },
      {
        author: initialUsers[6],
        content: "Mantapp @deri561",
        likes: [initialUsers[1]],
      },
      { author: initialUsers[3], content: "@deri561", likes: [] },
    ],
    createdAt: "2023-03-12T10:58:00.000Z",
  },
  {
    id: "25124",
    author: initialUsers.find((u) => u.fullname.toLowerCase() === "syavina"),
    media: [
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/334028216_142406412071953_5589402918466715935_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=CMaizLUIsZIAX-3vkQp&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1MDk1ODIxMDAwMjE5MjYyOA%3D%3D.2-ccb7-5&oh=00_AfDzaJLKnbxIVk4a6yrjDU9jbFOJQbby2VKoNRrOoY-vnQ&oe=64118A57&_nc_sid=1527a3",
      },
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/331124941_144100304923381_5444072805535340072_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8awnHo0Td_sAX9kBXZj&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1MDk1ODIxMDE1MzA4MTUzNw%3D%3D.2-ccb7-5&oh=00_AfAmRV5OR6hIWToFvEWlq5ubXt99rdrpMSZHA4Kxc09Q1Q&oe=641158F3&_nc_sid=1527a3",
      },
    ],
    location: "",
    caption: "dress cantik dari @memilih.co",
    likes: [initialUsers[2]],
    comments: [
      {
        author: initialUsers[0],
        content: "@syavinanzhr, sendalmu nih 👠 ketinggalan wkwk ",
        likes: [],
      },
      { author: initialUsers[4], content: "@deri561", likes: [] },
    ],
    createdAt: "2021-05-01T00:00:00.000Z",
  },
  {
    id: "3981je",
    author: initialUsers.find(
      (u) => u.fullname.toLowerCase() === "anisa mawarni"
    ),
    media: [
      {
        type: "video",
        src: "https://scontent-sin6-2.xx.fbcdn.net/v/t42.1790-2/125298932_1648141522026994_8948879649664778546_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjQyNCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_eui2=AeE-06OILNd1K_7EBRuCyiX0G1Ty27NKq9QbVPLbs0qr1JOfJCtK9Rp4KFQ1Wu4hbEJRNBdcnYYU4fPa6FyyHE_K&_nc_ohc=tGDR1BXCQ-sAX9wHlXB&rl=424&vabr=236&_nc_ht=scontent-sin6-2.xx&oh=00_AfDvnjJGrnTRnc3hfpDGb7C5RhJCGIs2AhJLuB4HLXISpw&oe=643BADF3",
      },
      {
        type: "video",
        src: "https://scontent-sin6-4.xx.fbcdn.net/v/t42.1790-2/124967384_135609761264070_2398094734569019029_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjM1OCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_eui2=AeEnA6PYIgn-BW9H6izJzXHXgxZHArKaIlODFkcCspoiU8TY_usqzF4v9EzAQSoXQeWQfa59FXmWxWOl_df2Z1VE&_nc_ohc=Z6-TZAeh9wEAX8UByXg&rl=358&vabr=199&_nc_ht=scontent-sin6-4.xx&oh=00_AfCoTUVfrcnEvMOKFlQ6sbVOfW8hGK3eCPT9ieVMvD4YTA&oe=643BAD35",
      },
    ],
    location: "Rumah",
    caption: "",
    likes: [initialUsers[3], initialUsers[2]],
    comments: [
      { author: initialUsers[1], content: "Seru banget kyknya", likes: [] },
      {
        author: initialUsers[2],
        content: "abis berapa duit? @deri561",
        likes: [],
      },
    ],
    createdAt: "2021-05-01T00:00:00.000Z",
  },
  {
    id: "4128931",
    author: initialUsers.find((u) => u.fullname.toLowerCase() === "mayangsari"),
    media: [
      {
        type: "image",
        src: "https://instagram.fkno3-1.fna.fbcdn.net/v/t51.2885-15/118641356_1694106117405546_1007823417088845330_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fkno3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=mviQpCX8lDQAX9QpAym&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjM4NTQzOTMzNDczMzEzNTM1OQ%3D%3D.2-ccb7-5&oh=00_AfD1ZdQOCinkkJfmTKS1jM-rk52uo4ljjCGWsTJVWZep8A&oe=64139CF8&_nc_sid=6136e7",
      },
    ],
    location: "",
    caption: "",
    likes: [initialUsers[4], initialUsers[5]],
    comments: [{ author: initialUsers[1], content: "Nice Art", likes: [] }],
    createdAt: "2022-05-01T00:00:00.000Z",
  },
  {
    id: "5dawudq",
    author: initialUsers.find((u) => u.fullname.toLowerCase() === "mutia"),
    media: [
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/67309107_667668443713961_9020273005329600904_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=XdeFk9aGAQwAX_cKP0F&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjExOTM1NDMyNDM5OTUzMzEzMg%3D%3D.2-ccb7-5&oh=00_AfBh15potylEAweSGY3Gwh09mp_fMk0ONFnNz6FwCWeOpw&oe=641291BA&_nc_sid=1527a3",
      },
    ],
    location: "Brisbane, Queensland, Australia",
    caption:
      "Terkadang satu – satunya orang yang mampu buatmu merasa lebih baik adalah orang yang sama yang telah membuat kamu terluka.",
    likes: [],
    comments: [
      { author: initialUsers[6], content: "liat ini @deri561", likes: [] },
    ],
    createdAt: "2019-08-27T00:00:00.000Z",
  },
  {
    id: "61928hd",
    author: initialUsers.find((u) => u.fullname.toLowerCase() === "syavina"),
    media: [
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/330667779_1078072963586342_289225769871943535_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=WQ9AQ8Z6OpAAX_1ZjbQ&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAzNzkyNDc3NDkyNDU4MTEyNw%3D%3D.2-ccb7-5&oh=00_AfD_b88_G_yzbJm_nZ0bac_DUcQ4qLNwZDAuuCmEq47gBA&oe=6412FB71&_nc_sid=1527a3",
      },
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/330619600_216315924264752_6468667679042626700_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=iu6dKGi5O18AX8Fw2Nq&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAzNzkyNDc3NTExNzUwNjY4MQ%3D%3D.2-ccb7-5&oh=00_AfBAwToT2HRXCDq2j65yZ0YktoRmaa8PqgDpZUE-FJpqdg&oe=64129955&_nc_sid=1527a3",
      },
    ],
    location: "",
    caption: "lebih gemes dress dari @ladivine.store atau pohonnya? hehe",
    likes: [initialUsers[5]],
    comments: [
      { author: initialUsers[2], content: "liat ini @deri561", likes: [] },
    ],
    createdAt: "2021-05-01T00:00:00.000Z",
  },
];

export const initialOnRefreshFeedsUpdate = [
  {
    id: "d121h9dq9",
    author: initialUsers.find((u) => u.fullname.toLowerCase() === "imasnurani"),
    media: [
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/47582692_564225024348159_8252054012236847494_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=uHWxxjYtKpUAX-jMzCa&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MTk0MTkyODA2OTE4Mjk2MDUwNg%3D%3D.2-ccb7-5&oh=00_AfDHPvpNG9501RsdbaEYsZwaUzws9HzKLj4O3YQlfqSLUQ&oe=6414E523&_nc_sid=1527a3",
      },
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/47693427_225121348432821_5657800459014101456_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=WTpBTYbBRJEAX-Haz9m&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MTk0MTkyODA2OTE5OTY2MzE4Mw%3D%3D.2-ccb7-5&oh=00_AfB8ukyQFJ7p4OFzkChyDCXKItGLiFtTq567oU_tGeIBGQ&oe=64144E5A&_nc_sid=1527a3",
      },
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/46991074_318681665405270_5387490688642724496_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Au4VRlYLu10AX_T5pFO&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MTk0MTkyODA2OTE4MzAyODk3Mw%3D%3D.2-ccb7-5&oh=00_AfASjkImfmQHTcT-2wif1NibSUMb2FQ5X7N7baawp7SrKg&oe=64153930&_nc_sid=1527a3",
      },
    ],
    location: "",
    caption: '"i wanna kill every smoke"',
    likes: [initialUsers[1], initialUsers[2], initialUsers[5]],
    comments: [
      {
        author: initialUsers[0],
        content: "I wanna be a smoker😁",
        likes: [initialUsers[1]],
      },
      {
        author: initialUsers[4],
        content: "@deri561 i will kill you",
        likes: [],
      },
    ],
    createdAt: "2018-11-25T00:00:00.000Z",
  },
  {
    id: "251241",
    author: initialUsers.find((u) => u.fullname.toLowerCase() === "mayangsari"),
    media: [
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/327673030_508868394724917_9081182861511291230_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=PmTzEa1QqYUAX_WCS2W&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyNjM0NjUwNzc0MzQ4NDMyMg%3D%3D.2-ccb7-5&oh=00_AfCXz9pM6Pezm1lV9fmt16Bl4S3721C1kuW3HTG9E7dfUA&oe=64142AF6&_nc_sid=1527a3",
      },
    ],
    location: "",
    caption:
      "Be proud of your progress\n.\n.\n.\n.\n.\n.\n.\n.\n.\n #green #aime🎈 #digitalartwork #digitaldrawing #digitalillustration #anime #animehijab #ibispaint #ibispaintxart #ibispaintx #girl",
    likes: [initialUsers[2], initialUsers[3], [initialUsers[4]]],
    comments: [],
    createdAt: "2023-01-29T00:00:00.000Z",
  },
  {
    id: "315313614",
    author: initialUsers.find((u) => u.fullname.toLowerCase() === "mutia"),
    media: [
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/41068487_2379160398768535_7760026721340491861_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=drAEbp5jIxwAX8V2Sg7&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MTg2ODYzNTk4Mzg4NTgyODI0Nw%3D%3D.2-ccb7-5&oh=00_AfDRPuQBuRVLtglFSC3ZqXMon5nbUeJuGT5bZxF5SdIANA&oe=641435A9&_nc_sid=1527a3",
      },
    ],
    location: "",
    caption: "Aku merindukanmu seperti gurun merindukan hujan .",
    likes: [initialUsers[2], initialUsers[5]],
    comments: [
      { author: initialUsers[1], content: "Follback", likes: [] },
      { author: initialUsers[2], content: "❤️", likes: [] },
    ],
    createdAt: "2018-09-15T00:00:00.000Z",
  },
  {
    id: "d1927g1d9",
    author: initialUsers.find((u) => u.fullname.toLowerCase() === "mayangsari"),
    media: [
      {
        type: "image",
        src: "https://instagram.fkno3-1.fna.fbcdn.net/v/t51.2885-15/118641356_1694106117405546_1007823417088845330_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fkno3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=mviQpCX8lDQAX9QpAym&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjM4NTQzOTMzNDczMzEzNTM1OQ%3D%3D.2-ccb7-5&oh=00_AfD1ZdQOCinkkJfmTKS1jM-rk52uo4ljjCGWsTJVWZep8A&oe=64139CF8&_nc_sid=6136e7",
      },
    ],
    location: "",
    caption: "",
    likes: [initialUsers[4], initialUsers[5]],
    comments: [
      { author: initialUsers[4], content: "liat ini @deri561", likes: [] },
    ],
    createdAt: "2022-05-01T00:00:00.000Z",
  },
  {
    id: "aiwdhaowg219",
    author: initialUsers.find(
      (u) => u.username.toLowerCase() === "tanianap15_"
    ),
    media: [
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/331222037_545633454213288_4511594650061771362_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fGdjJQTW1mgAX9nSg0i&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAzOTQzNzYzNzQ4NTA2NDc2OA%3D%3D.2-ccb7-5&oh=00_AfBzSGcFRRCoJRJChq_gDsTByI2vUJNOA6jfFHbyH03Riw&oe=641390B6&_nc_sid=1527a3",
      },
    ],
    location: "",
    caption:
      "Happy birthday myself, thank you for sticking around this far and keeping it up !👸",
    likes: [initialUsers[6], initialUsers[5], initialUsers[1], initialUsers[6]],
    comments: [
      {
        author: initialUsers[4],
        content: "Mempertahankan siapa bu",
        likes: [],
      },
      {
        author: initialUsers[5],
        content: "Selamat ultah.moga pnjng umur.sehat slalu.",
        likes: [],
      },
    ],
    createdAt: "2023-02-17T00:00:00.000Z",
  },
  {
    id: "6123123",
    author: initialUsers.find((u) => u.fullname.toLowerCase() === "syavina"),
    media: [
      {
        type: "image",
        src: "https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/189012952_498811891332130_6008600049198635321_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=nkpH8HfYzdAAX96RPgH&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjU4MDYyMDMxMDcxODk1NjgzNQ%3D%3D.2-ccb7-5&oh=00_AfBL2jOv9CaZzUW69e_fdAEnlniVIsTV0h4u2PaWhiDZug&oe=64143818&_nc_sid=1527a3",
      },
    ],
    location: "",
    caption: "we'll be a fine line 💫",
    likes: [initialUsers[2], initialUsers[1], initialUsers[3]],
    comments: [
      { author: initialUsers[1], content: "😍", likes: [] },
      { author: initialUsers[2], content: "Follback", likes: [] },
    ],
    createdAt: "2021-05-24T00:00:00.000Z",
  },
];
