import React, { Fragment } from 'react'
import FeedHeaderCard from "./FeedHeaderCard";
import FeedMediaCard from './FeedMediaCard';
import FeedBodyCard from './FeedBodyCard';
import { FeedProps } from '../../providers/initialData';

export default function FeedCard(feed: FeedProps) {
    return (
        <Fragment>
            <FeedHeaderCard {...feed} />
            <FeedMediaCard media={feed.media} />
            <FeedBodyCard {...feed} />
        </Fragment>
    )
}
