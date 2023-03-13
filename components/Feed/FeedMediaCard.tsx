import { Video } from 'expo-av';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { View, Image, FlatList, Text, useWindowDimensions, Animated, FlatListProps, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import { media } from '../../providers/initialData';

interface Props {
    media: media[];
}

const FeedMediaCard: React.FC<Props> = ({ media }) => {
    const [currentVisibleMediaIndexFlowX, setCurrentVisibleMediaIndexFlowX] = useState(0);
    const { width } = useWindowDimensions();

    const handleMediaIndexChanged = (event: any) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const index = Math.round(contentOffset.x / layoutMeasurement.width);
        setCurrentVisibleMediaIndexFlowX(index);
    };

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [currentVisibleMediaIndexFlowX]);

    const RenderMediaItem = (returnedItem: any) => {
        const { item, index } = returnedItem;
        const [isMuted, setIsMuted] = useState<boolean>(false);
        const videoRef = useRef<Video | any>();

        useEffect(() => {
            if (item.type === 'video') {
                if (index === currentVisibleMediaIndexFlowX) {
                    videoRef.current.playAsync()
                } else {
                    if (videoRef.current?.isPlaying) {
                        videoRef.current.setPositionAsync(0);
                        videoRef.current.pauseAsync();
                    }
                }
            }
        }, [currentVisibleMediaIndexFlowX]);

        const handlePressInMuted = useCallback(() => {
            if (item.type === 'video') {

                setIsMuted((prev) => {
                    console.log(`${!prev ? "muted" : "unmuted"}`)
                    return !prev
                });
            }
        }, [])

        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>
                {item.type === 'image' && (
                    <Image
                        source={{ uri: item.src }}
                        loadingIndicatorSource={{ uri: item.src }}
                        style={{ width, aspectRatio: 1 }}
                    />
                )}
                {item.type === 'video' && (
                    <Fragment>
                        <Video
                            ref={videoRef}
                            style={{ width, aspectRatio: 1, backgroundColor: "#000" }}
                            source={{
                                uri: item.src,
                            }}
                            posterSource={{
                                uri: item.src,
                            }}
                            useNativeControls={false}
                            isLooping
                            shouldPlay={false}
                            // @ts-ignore
                            resizeMode='contain'
                            onError={(error) => console.error(error)}
                        />
                        {/* <TouchableWithoutFeedback onPressIn={handlePressInMuted}>
                        </TouchableWithoutFeedback> */}
                    </Fragment>
                )}
            </View>
        );
    }

    const TextFloatMediaIndicator = () => (
        <View
            style={{
                backgroundColor: 'black',
                position: 'absolute',
                top: 12,
                right: 8,
                width: 34,
                height: 24,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 12 }}>
                {currentVisibleMediaIndexFlowX + 1}/{media.length}
            </Text>
        </View>
    );

    const DotsFloatMediaIndicator = () => (
        <View
            style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: -24,
                alignSelf: 'center',
            }}>
            {media.map((_, index) => (
                <View
                    key={index}
                    style={{
                        backgroundColor: currentVisibleMediaIndexFlowX === index ? '#097ACA' : '#DADBDA',
                        width: 6,
                        height: 6,
                        borderRadius: 4,
                        marginHorizontal: 2,
                    }}
                />
            ))}
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            {media.length === 1 ? (
                <Fragment>
                    {media[0].type === 'image' && (
                        <Image source={{ uri: media[0].src }} style={{ width, height: 400 }} />
                    )}

                    {media[0].type === 'video' && (
                        <Video
                            style={{ width, aspectRatio: 1, backgroundColor: "#000" }}
                            source={{
                                uri: media[0].src,
                            }}
                            posterSource={{
                                uri: media[0].src,
                            }}
                            useNativeControls={false}
                            isLooping
                            shouldPlay={true}
                            isMuted={false}
                            // @ts-ignore
                            resizeMode='contain'
                        />
                    )}
                </Fragment>
            ) : (
                <View style={{ position: 'relative' }}>
                    <FlatList
                        data={media}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(item) => <RenderMediaItem {...item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment={'center'}
                        snapToInterval={width}
                        decelerationRate={'fast'}
                        onMomentumScrollEnd={handleMediaIndexChanged}
                    />
                    <TextFloatMediaIndicator />
                    <DotsFloatMediaIndicator />
                </View>
            )}
        </View>
    );
};

export default FeedMediaCard;
