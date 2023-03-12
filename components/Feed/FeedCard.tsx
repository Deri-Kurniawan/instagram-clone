import React, { Fragment } from 'react'
import { PostsProps } from '../../providers/GlobalProvider';
import FeedHeaderCard from "./FeedHeaderCard";
import FeedPicturesCard from './FeedPicturesCard';
import FeedBodyCard from './FeedBodyCard';

export default function FeedCard(post: PostsProps) {
    return (
        <Fragment>
            <FeedHeaderCard {...post} />
            <FeedPicturesCard pictures={post.pictures} />
            <FeedBodyCard {...post} />
        </Fragment>
    )
}
