import React, { Fragment } from 'react'
import { FeedProps } from '../../providers/GlobalProvider';
import FeedHeaderCard from "./FeedHeaderCard";
import FeedPicturesCard from './FeedPicturesCard';
import FeedBodyCard from './FeedBodyCard';

export default function FeedCard(feed: FeedProps) {
    return (
        <Fragment>
            <FeedHeaderCard {...feed} />
            <FeedPicturesCard pictures={feed.pictures} />
            <FeedBodyCard {...feed} />
        </Fragment>
    )
}
