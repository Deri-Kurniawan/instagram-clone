import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Animated, Text, TouchableOpacity, View } from 'react-native'
import { CommentProps } from '../../providers/GlobalProvider'
import { AntDesign } from '@expo/vector-icons'

export default function FeedBodyComment(comment: CommentProps) {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [scaleLikeButtonValue] = useState(new Animated.Value(1));

    const handlePressLike = () => {
        setIsLiked((prev) => {
            console.log(`${!prev ? "like" : "unlike"} for (${comment.author.username}) comment [from feed body]`)
            return !prev;
        });
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

    const hashtagsMentionsLinking = (caption: string) => {
        const hashtagRegex = /#[\w]+/g;
        const mentionRegex = /@[\w]+/g;
        const whitespaceRegex = /\s/g;

        return caption.split(" ").map((word, index) => {
            let href = null;
            if (word.match(hashtagRegex)) {
                href = {
                    pathname: "/hashtags/detail",
                    params: { username: word.slice(1) },
                };
            } else if (word.match(mentionRegex)) {
                href = {
                    pathname: "/users/profile",
                    params: { hashtagname: word.slice(1) },
                };
            }

            return href ? (
                <Link href={href} key={index} style={{ color: "#097ACA" }}>
                    {word.replace(whitespaceRegex, "")}{" "}
                </Link>
            ) : (
                <React.Fragment key={index}>{word} </React.Fragment>
            );
        });
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
                    {hashtagsMentionsLinking(comment.content)}
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
