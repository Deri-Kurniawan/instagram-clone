import React, { useCallback, useRef, useState, useEffect, memo } from 'react';
import { ActivityIndicator, Animated, Easing, FlatList, FlatListProps, RefreshControl, StatusBar, StyleSheet, ToastAndroid, View } from 'react-native';
import { PostsProps, UserProps, useGlobal } from '../providers/GlobalProvider';
import FeedCard from '../components/Feed/FeedCard';
import StoryBubble from '../components/StoryBubble';

const MemoizedFlatList: React.FC<FlatListProps<any>> = React.memo(FlatList);

const maxShowsFeedLimit = 12;

export default function Page() {
  const { user, users, posts, setPosts } = useGlobal();
  const [sortUsersByStoryNotSeen, setSortUsersByStoryNotSeen] = useState<UserProps[]>(() =>
    users.slice().sort((a, b) => (a.storyIsSeen === b.storyIsSeen ? 0 : a.storyIsSeen ? 1 : -1))
  );
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [feedHasReachedThreesholdEnd, setfeedHasReachedThreesholdEnd] = useState<boolean>(false)

  const opacity = useRef(new Animated.Value(1)).current;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  const handleFeedEndReached = ({ distanceFromEnd }: { distanceFromEnd: number }) =>
    distanceFromEnd == 0 && setfeedHasReachedThreesholdEnd(true);

  useEffect(() => {
    console.log(posts.length);
  }, [posts])

  useEffect(() => {
    if (feedHasReachedThreesholdEnd) {
      if (posts.length === maxShowsFeedLimit) {
        setfeedHasReachedThreesholdEnd(false);
        ToastAndroid.showWithGravity(
          'No more posts to show',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        )
        return;
      };
      setPosts((prev: PostsProps[]) => [...prev, ...prev.slice(0, 3)])
      setfeedHasReachedThreesholdEnd(false);
    }
  }, [feedHasReachedThreesholdEnd]);

  // Refresh hook
  useEffect(() => {
    if (refreshing) {
      setPosts((prev: PostsProps[]) =>
        prev.slice(0, 6).sort((a: PostsProps, b: PostsProps) => Math.random() - 0.6)
      );
      setRefreshing(false);
    }
  }, [refreshing]);

  useEffect(() => {
    if (refreshing && !feedHasReachedThreesholdEnd) {
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
    }
  }, [posts, refreshing, feedHasReachedThreesholdEnd]);

  const RenderStories = memo(() => (
    <MemoizedFlatList
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
  ));

  const RenderFeed = () => {
    const renderItem = ({ item }) => <Animated.View style={{ opacity }}><FeedCard {...item} /></Animated.View>;
    const renderListFooter = memo(() => {
      if (posts.length === maxShowsFeedLimit) return null
      return (
        <View style={{ paddingVertical: 14, width: "100%", backgroundColor: "#DADBDA", opacity: 0.6, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator style={{ backgroundColor: '#fff', padding: 4, borderRadius: 50 }} size="large" color="#000" />
        </View>
      );
    })

    return (
      <MemoizedFlatList
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={posts}
        renderItem={renderItem}
        onEndReached={handleFeedEndReached}
        onEndReachedThreshold={2}
        ListFooterComponent={renderListFooter}
      />
    );
  }

  return (
    <>
      <StatusBar />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <MemoizedFlatList
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
          renderItem={({ item }) => (item.key === 'stories' ? <RenderStories /> : <RenderFeed />)}
          onEndReached={handleFeedEndReached}
        />
      </View>
    </>
  );
}
