import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Animated, Easing, FlatList, RefreshControl, StatusBar, StyleSheet, View } from 'react-native';
import { useGlobal } from '../providers/GlobalProvider';
import FeedCard from '../components/Feed/FeedCard';
import StoryBubble from '../components/StoryBubble';

export default function Page() {
  const { user, users, posts, setPosts } = useGlobal();
  const [sortUsersByStoryNotSeen, setSortUsersByStoryNotSeen] = useState(() =>
    users.slice().sort((a, b) => (a.storyIsSeen === b.storyIsSeen ? 0 : a.storyIsSeen ? 1 : -1))
  );
  const [refreshing, setRefreshing] = useState(false);
  const opacity = useRef(new Animated.Value(1)).current;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);


  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 0.4,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setSortUsersByStoryNotSeen(prev =>
        prev.slice().sort((a, b) => (a.storyIsSeen === b.storyIsSeen ? 0 : a.storyIsSeen ? 1 : -1))
      );
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setRefreshing(false);
      });
    });
  }, [posts]);

  // Refresh hook
  useEffect(() => {
    if (refreshing) {
      setPosts(prev =>
        prev.slice().sort((a, b) => Math.random() - 0.6)
      );
      setRefreshing(false);
    }
  }, [refreshing]);


  const renderStories = () => (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      style={{
        backgroundColor: 'white',
        paddingVertical: 8,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={sortUsersByStoryNotSeen.filter(item => item.id !== user.id)}
      ListHeaderComponent={() => <StoryBubble {...user} username="Your Story" />}
      renderItem={({ item }) => <StoryBubble {...item} />}
    />
  );

  const renderFeed = () => (

    <FlatList
      keyExtractor={(item, index) => index.toString()}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      data={posts}
      renderItem={({ item }) => <Animated.View style={{ opacity }}><FeedCard {...item} /></Animated.View>}
    />
  );

  return (
    <>
      <StatusBar />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <FlatList
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#fff"
              titleColor="#fff"
              progressBackgroundColor="#fff"
              title="Refreshing..."
              progressViewOffset={50}
            />
          }
          data={[{ key: 'stories' }, { key: 'feed' }]}
          renderItem={({ item }) => (item.key === 'stories' ? renderStories() : renderFeed())}
        />
      </View>
    </>
  );
}
