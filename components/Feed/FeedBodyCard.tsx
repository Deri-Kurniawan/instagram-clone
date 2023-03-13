import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Animated, Image, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { CommentProps, FeedProps, UserProps } from "../../providers/GlobalProvider";
import FeedBodyComment from "./FeedBodyComment";
import { watchTimePassedOut } from "../../utils";

export default function FeedBodyCard(props: FeedProps) {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [scaleLikeButtonValue] = useState(new Animated.Value(1));
    const [captionIsTruncated, setCaptionIsTruncated] = useState<boolean>(true);
    const [formattedCreatedAt, setFormattedCreatedAt] = useState<string>("");
    const [dynamicCaption, setDynamicCaption] = useState<string>("");

    const handlePressLike = useMemo(() => {
        return () => setIsLiked(prev => {
            console.log(`${!prev ? "like" : "unlike"} for (${props.author.username}) feed [from feed body]`)
            return !prev
        });
    }, [setIsLiked]);


    const handlePressComment = useCallback(() => {
        console.log(`comment for (${props.author.username}) feed [from feed body]`)
    }, []);

    const handlePressShare = useCallback(() => {
        console.log(`share for (${props.author.username}) feed [from feed body]`)
    }, []);

    const handlePressSave = useCallback(() => {
        setIsSaved(prev => {
            console.log(`${!prev ? "saved" : "unsave"} for (${props.author.username}) feed [from feed body]`)
            return !prev
        });
    }, []);

    const handlePressCaptionTruncate = useCallback(() => {
        setCaptionIsTruncated(false);
    }, []);

    const handlePressInLike = () => {
        Animated.spring(scaleLikeButtonValue, {
            toValue: 0.1,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOutLike = () => {
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

    useEffect(() => {
        const interval = setInterval(() => {
            setFormattedCreatedAt(watchTimePassedOut(props.createdAt));
        }, 1000 * 10);

        if (captionIsTruncated) {
            setDynamicCaption(props.caption.slice(0, 150));
        } else {
            setDynamicCaption(props.caption);
        }

        return () => clearInterval(interval);
    }, [captionIsTruncated, props.caption, props.createdAt, watchTimePassedOut]);


    return (
        <View>
            {/* action buttons */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 42,
                    paddingLeft: 2,
                    paddingRight: 8,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        height: "100%",
                        width: 150,
                        justifyContent: "space-between",
                    }}
                >
                    {/* Like Button */}
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPressIn={handlePressInLike}
                        onPressOut={handlePressOutLike}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                        onPress={handlePressLike}
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
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                        onPress={handlePressComment}
                    >
                        <Image
                            style={{
                                width: 22,
                                height: 22,
                            }}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/5948/5948565.png",
                            }}
                        />
                    </TouchableOpacity>

                    {/* Share Button */}
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                        onPress={handlePressShare}
                    >
                        <Image
                            style={{
                                width: 22,
                                height: 22,
                            }}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/5948/5948572.png",
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Save Button */}
                <TouchableOpacity
                    style={{
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 40,
                    }}
                    activeOpacity={0.9}
                    onPress={handlePressSave}
                >
                    <FontAwesome name={isSaved ? "bookmark" : "bookmark-o"} size={26} color="black" />
                </TouchableOpacity>
            </View>

            {/* content body */}
            <View style={{ padding: 14, paddingTop: props.caption === "" ? 0 : 4 }}>
                {/* likes profile stack */}
                {props.likes.length > 0 && (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: 4,
                        }}
                    >
                        <Link
                            href={{
                                pathname: "/feeds/likers",
                                params: { id: props.likes[0].id },
                            }}
                        >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                {props.likes
                                    .slice(0, 3)
                                    .map((like: UserProps, index: number) => (
                                        <Image
                                            key={index.toString()}
                                            style={{
                                                borderColor: "white",
                                                borderWidth: 2,
                                                width: 22,
                                                height: 22,
                                                borderRadius: 10,
                                                marginLeft: index > 0 ? -8 : 0,
                                                zIndex: 3 - index,
                                            }}
                                            source={{
                                                uri: like.avatar,
                                            }}
                                        />
                                    ))}
                            </View>
                        </Link>
                        <View style={{ marginLeft: 8 }}>
                            {props.likes.length > 0 && (
                                <Text>
                                    Liked by{" "}
                                    <Link
                                        style={{ fontWeight: "bold" }}
                                        href={{
                                            pathname: "/users",
                                            params: { id: props.likes[0].id },
                                        }}
                                    >
                                        {props.likes[0].username}
                                    </Link>{" "}
                                    <Link
                                        style={{
                                            fontWeight: "bold",
                                        }}
                                        href={{
                                            pathname: "feeds/likers",
                                            params: { id: props.id },
                                        }}
                                    >
                                        {props.likes.length > 3 && (
                                            <>
                                                and {props.likes.length - 3 === 0 ? <Fragment /> : props.likes.length - 3} others
                                            </>
                                        )}
                                    </Link>
                                </Text>
                            )}
                        </View>
                    </View>
                )}

                {props.caption !== "" && (
                    <Text style={{ fontWeight: "bold" }}>
                        {props.author.username}{" "}
                        <Text style={{ fontWeight: "normal" }}>
                            {captionIsTruncated ? (
                                <Text>
                                    {hashtagsMentionsLinking(dynamicCaption)}
                                    {props.caption.length > 150 && (
                                        <Text
                                            style={{ color: "#8e8e8e" }}
                                            onPress={handlePressCaptionTruncate}
                                        >
                                            {" "}
                                            ... more
                                        </Text>
                                    )}
                                </Text>
                            ) : (
                                <Text>{hashtagsMentionsLinking(dynamicCaption)}</Text>
                            )}
                        </Text>
                    </Text>
                )}
                {props.comments.length > 2 ? (
                    <View style={{ marginTop: 4 }}>
                        <Link
                            style={{ fontWeight: "bold", color: "#8e8e8e" }}
                            href={{
                                pathname: "/feeds/comments",
                                params: { id: props.id },
                            }}
                        >
                            View all {props.comments.length} comments
                        </Link>
                    </View>
                ) : (
                    <>
                        {props.comments.length > 0 && (
                            <View style={{ flexDirection: "column", marginTop: 6 }}>
                                {props.comments.map((comment: CommentProps, index) => (
                                    <FeedBodyComment key={index.toString()} {...comment} />
                                ))}
                            </View>

                        )}
                    </>
                )}
                <Text style={{ fontSize: 9.8, color: "#8e8e8e", marginTop: 6 }}>
                    {formattedCreatedAt}
                </Text>
            </View>
        </View>
    );
}