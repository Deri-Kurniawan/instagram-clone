import React, { useState } from 'react'
import { View, Image, FlatList, Text, useWindowDimensions } from 'react-native';

export default function FeedPicturesCard({ pictures }: { pictures: string[] }) {
    const [currentVisibleImage, setCurrentVisibleImage] = useState(1);

    const { width } = useWindowDimensions();

    return (
        <View style={{ flex: 1 }}>
            {pictures.length === 1 ? (
                <Image source={{ uri: pictures[0] }} alt='' style={{ width, height: 400 }} />
            ) : (
                <View style={{ position: 'relative' }}>
                    <FlatList
                        snapToAlignment={"center"}
                        snapToInterval={width}
                        decelerationRate={"fast"}
                        data={pictures}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Image source={{ uri: item }} alt='' style={{ width, aspectRatio: 1 / 1 }} />
                                </View>
                            )
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        onMomentumScrollEnd={(event) => {
                            const index = Math.floor(
                                event.nativeEvent.contentOffset.x /
                                event.nativeEvent.layoutMeasurement.width
                            );

                            setCurrentVisibleImage(index)
                        }}
                    />
                    <View style={{ backgroundColor: "black", position: 'absolute', top: 12, right: 8, width: 34, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "white", fontSize: 12 }}>{currentVisibleImage + 1}/{pictures.length}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}
