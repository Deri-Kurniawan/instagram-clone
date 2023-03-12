import React from 'react'
import { FlatList, Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { PostsProps } from '../../providers/GlobalProvider';
import FeedHeaderCard from "./FeedHeaderCard";
import FeedPicturesCard from './FeedPicturesCard';
import FeedBodyCard from './FeedBodyCard';

export default function FeedCard(post: PostsProps) {
    return (
        <>
            <FeedHeaderCard {...post} />
            <FeedPicturesCard pictures={post.pictures} />
            <FeedBodyCard {...post} />
        </>
    )
}
