import React, { createContext, useContext, useState } from 'react'
import { initialFeeds, initialUser, initialUsers } from './initialData';

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

export interface CommentProps {
    author: UserProps,
    comment: string,
    content: string,
    likes: UserProps[],
}

export interface FeedProps {
    id: string,
    author: UserProps,
    pictures: string[],
    location: string,
    caption: string,
    likes: UserProps[],
    comments: CommentProps[] | any[],
    createdAt: string,
}


export interface UseGlobalProps {
    user: UserProps,
    setUser: any,
    users: UserProps[],
    setUsers: any,
    feeds: FeedProps[],
    setFeeds: any,
}

const GlobalContext = createContext(null)

export const useGlobal = (): UseGlobalProps => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {
    const [users, setUsers] = useState<UserProps[]>(initialUsers);

    const [user, setUser] = useState<UserProps>(initialUser);

    const [feeds, setFeeds] = useState<FeedProps[]>(initialFeeds);

    const value: UseGlobalProps = {
        user,
        setUser,
        users,
        setUsers,
        feeds,
        setFeeds
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}