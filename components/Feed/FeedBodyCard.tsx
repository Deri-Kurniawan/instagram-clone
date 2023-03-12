import React, { useEffect, useState } from 'react';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native'
import { Link } from 'expo-router';

const watchTimePassedOut = ((createdAt: any) => {
    if (!createdAt) return '0 seconds ago';
    const postCreatedAt = new Date(createdAt);
    const now = new Date();
    const diff = now.getTime() - postCreatedAt.getTime();
    const diffInDays = Math.floor(diff / (1000 * 3600 * 24));
    const diffInHours = Math.floor(diff / (1000 * 3600));
    const diffInMinutes = Math.floor(diff / (1000 * 60));
    const diffInSeconds = Math.floor(diff / (1000));

    if (diffInDays > 0 && diffInDays < 7) {
        if (diffInDays > 0 && diffInDays < 2)
            return `${diffInDays} day ago`;

        return `${diffInDays} days ago`;
    }

    if (diffInHours > 0 && diffInHours < 24) {
        if (diffInHours > 0 && diffInHours < 2)
            return `${diffInHours} hour ago`;

        return `${diffInHours} hours ago`;
    }

    if (diffInMinutes > 0 && diffInMinutes < 60) {
        if (diffInMinutes > 0 && diffInMinutes < 2)
            return `${diffInMinutes} minute ago`;

        return `${diffInMinutes} minutes ago`;
    }

    if (diffInSeconds > 0 && diffInSeconds < 60) {
        if (diffInSeconds > 0 && diffInSeconds < 2)
            return `${diffInSeconds} second ago`;

        return `${diffInSeconds} seconds ago`;
    }

    if (diffInSeconds >= 0 && diffInSeconds <= 10) {
        return `Just now`;
    }

    // Get the user's locale
    const userLocale = navigator.language || navigator.language;

    // Use the user's locale to format the date
    const formattedDate = new Date(postCreatedAt).toLocaleDateString(userLocale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return formattedDate;
});


interface FeedBodyCardProps {
    author: any,
    likes: number,
    caption: string,
    comments: number,
    createdAt: string,
}

export default function FeedBodyCard({ author, likes, caption, comments, createdAt }: FeedBodyCardProps) {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [scaleLikeButtonValue] = useState(new Animated.Value(1));
    const [captionIsTruncated, setCaptionIsTruncated] = useState<boolean>(true);
    const [formattedCreatedAt, setFormattedCreatedAt] = useState<string>("");
    const [dynamicCaption, setDynamicCaption] = useState<string>("");

    const handlePressIn = () => {
        Animated.spring(scaleLikeButtonValue, {
            toValue: 0.1,
            useNativeDriver: true
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleLikeButtonValue, {
            toValue: 1,
            friction: 6,
            tension: 400,
            useNativeDriver: true,
        }).start();
    };

    const animatedStyle = {
        transform: [{ scale: scaleLikeButtonValue }]
    };


    const captionWithLinks = (caption: string) => {
        const hashtagRegex = /#[\w]+/g;
        const mentionRegex = /@[\w]+/g;
        const whitespaceRegex = /\s/g;

        return caption.split(' ').map((word, index) => {
            let link = null;
            if (word.match(hashtagRegex)) {
                link = `/hashtags/${word.slice(1)}`;
            } else if (word.match(mentionRegex)) {
                link = `/users/${word.slice(1)}`;
            }

            return link ? (
                <Link href={link} key={index} style={{ color: '#097ACA' }}>
                    {word.replace(whitespaceRegex, "")}{" "}
                </Link>
            ) : (
                <React.Fragment key={index}>{word} </React.Fragment>
            );
        });
    };




    useEffect(() => {
        setFormattedCreatedAt(watchTimePassedOut(createdAt))
        const interval = setInterval(() => {
            setFormattedCreatedAt(watchTimePassedOut(createdAt))
        }, 1000 * 10)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (captionIsTruncated) {
            setDynamicCaption(caption.slice(0, 150))
        } else {
            setDynamicCaption(caption)
        }
    }, [captionIsTruncated])

    return (
        <View>
            {/* action buttons */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 42,
                paddingLeft: 2,
                paddingRight: 8,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: "100%",
                    width: 150,
                    justifyContent: 'space-between',
                }}>
                    {/* Like Button */}
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: "100%"
                        }}
                        onPress={() => {
                            setIsLiked(prev => !prev)
                            console.log("like")
                        }}
                    >
                        <Animated.View style={animatedStyle}>
                            <AntDesign
                                name={isLiked ? "heart" : "hearto"}
                                size={24}
                                color={isLiked ? "red" : "black"}
                            />
                        </Animated.View>
                    </TouchableOpacity>

                    {/* Comment Button  */}
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: "100%"
                        }}
                        onPress={() => console.log("comment")}
                    >
                        <Image
                            style={{
                                width: 22,
                                height: 22,
                            }}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/5948/5948565.png"
                            }}
                        />
                    </TouchableOpacity>

                    {/* Share Button */}
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: "100%"
                        }}
                        onPress={() => console.log("share")}
                    >
                        <Image
                            style={{
                                width: 22,
                                height: 22,
                            }}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/5948/5948572.png"
                            }} />
                    </TouchableOpacity>

                </View>

                {/* Save Button */}
                <TouchableOpacity
                    style={{
                        height: "100%",
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 40,
                    }}
                    activeOpacity={0.5}
                    onPress={() => console.log("save")}
                >
                    <FontAwesome name="bookmark-o" size={26} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ padding: 14, paddingTop: 4 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    {author.username}{" "}
                    {caption !== "" && (
                        <Text style={{ fontWeight: 'normal' }}>
                            {captionIsTruncated ? (
                                <Text>
                                    {captionWithLinks(dynamicCaption)}
                                    {caption.length > 150 && (
                                        <Text style={{ color: "#8e8e8e" }} onPress={() => setCaptionIsTruncated(false)}> ... more</Text>
                                    )}
                                </Text>
                            ) : (
                                <Text>
                                    {captionWithLinks(dynamicCaption)}
                                </Text>
                            )}
                        </Text>
                    )}
                </Text>
                <Text style={{ fontSize: 9.8, color: "#8e8e8e", marginTop: 6 }}>
                    {formattedCreatedAt}
                </Text>
            </View>

        </View>
    )
}

// 44
