import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Animated, Text, TouchableOpacity, View } from 'react-native'
import { CommentsProps } from '../../providers/GlobalProvider'
import { AntDesign } from '@expo/vector-icons'
import { captionWithLinks } from './FeedBodyCard'

export default function FeedBodyComment(comment: CommentsProps) {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [scaleLikeButtonValue] = useState(new Animated.Value(1));

    const handlePressLike = () => {
        setIsLiked((prev) => !prev);
    }

    const handlePressIn = () => {
        Animated.spring(scaleLikeButtonValue, {
            toValue: 0.1,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleLikeButtonValue, {
            toValue: 1,
            friction: 4,
            tension: 40,
            velocity: 0,
            useNativeDriver: true,
        }).start();
    };

    const animatedStyle = {
        transform: [{ scale: scaleLikeButtonValue }],
    };

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
                <Text>
                    <Link
                        href={{
                            pathname: "users",
                            params: {
                                id: comment.author.id
                            }
                        }}
                        style={{ fontWeight: 'bold' }}
                    >
                        {comment.author.username}
                    </Link>{" "}
                    {captionWithLinks(comment.content)}
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={handlePressLike}
            >
                <Animated.View style={animatedStyle}>
                    <AntDesign
                        style={{ padding: 4 }}
                        name={isLiked ? "heart" : "hearto"}
                        size={12}
                        color={isLiked ? "red" : "black"}
                    />
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}