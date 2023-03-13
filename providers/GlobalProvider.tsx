import React, { createContext, useContext, useState } from 'react'
import { initialPosts, initialUser, initialUsers } from './initialData';

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

export interface CommentsProps {
    author: UserProps,
    comment: string,
    content: string,
    likes: UserProps[],
}

export interface PostsProps {
    id: string,
    author: UserProps,
    pictures: string[],
    location: string,
    caption: string,
    likes: UserProps[],
    comments: CommentsProps[] | any[],
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
    const [users, setUsers] = useState<UserProps[]>(initialUsers);

    const [user, setUser] = useState<UserProps>(initialUser);

    const [posts, setPosts] = useState<PostsProps[]>(initialPosts);

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