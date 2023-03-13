import React, { useEffect, useRef, useState } from 'react';
import { View, Image, FlatList, Text, useWindowDimensions, Animated } from 'react-native';

interface Props {
    pictures: string[];
}

const FeedPicturesCard: React.FC<Props> = ({ pictures }) => {
    const [currentVisibleImageIndex, setCurrentVisibleImageIndex] = useState(0);
    const { width } = useWindowDimensions();

    const handleImageIndexChanged = (event: any) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const index = Math.floor(contentOffset.x / layoutMeasurement.width);
        setCurrentVisibleImageIndex(index);
    };

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [currentVisibleImageIndex]);

    const renderImageItem = ({ item }: { item: string }) => (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }}>
            <Image
                source={{ uri: item }}
                loadingIndicatorSource={{ uri: item }}
                style={{ width, aspectRatio: 1 }}
            />
        </View>
    );

    const RenderImageIndicator = () => (
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
                {currentVisibleImageIndex + 1}/{pictures.length}
            </Text>
        </View>
    );

    const DotsMediaFloatIndicator = () => (
        <View
            style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: -24,
                alignSelf: 'center',
            }}>
            {pictures.map((_, index) => (
                <View
                    key={index}
                    style={{
                        backgroundColor: currentVisibleImageIndex === index ? '#097ACA' : '#DADBDA',
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
            {pictures.length === 1 ? (
                <Image source={{ uri: pictures[0] }} style={{ width, height: 400 }} />
            ) : (
                <View style={{ position: 'relative' }}>
                    <FlatList
                        data={pictures}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderImageItem}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment={'center'}
                        snapToInterval={width}
                        decelerationRate={'fast'}
                        onMomentumScrollEnd={handleImageIndexChanged}
                    />
                    <RenderImageIndicator />
                    <DotsMediaFloatIndicator />
                </View>
            )}
        </View>
    );
};

export default FeedPicturesCard;
