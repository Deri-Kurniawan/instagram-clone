import { FlatList, StyleSheet, Text, View, Image, ScrollView, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import StoryBubble from "../components/StoryBubble";
import { useGlobal } from "../providers/GlobalProvider";
import FeedCard from "../components/Feed/FeedCard";

export default function Page() {
  const { user, users, posts } = useGlobal();
  const [sortUsersByStoryNotSeen, setSortUsersByStoryNotSeen] = useState(() => {
    return users.sort((a, b) => {
      if (a.storyIsSeen === b.storyIsSeen) {
        return 0;
      }
      if (a.storyIsSeen) {
        return 1;
      }
      return -1;
    });
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setSortUsersByStoryNotSeen((prev) => {
      return prev.sort((a, b) => {
        if (a.storyIsSeen === b.storyIsSeen) {
          return 0;
        }
        if (a.storyIsSeen) {
          return 1;
        }
        return -1;
      });
    })

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar />
      <View style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}>

        <ScrollView
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
          }>
          <View style={{
            flexDirection: "row", borderBottomColor: "#DADBDA",
            borderBottomWidth: 1,
          }}>
            {/* users stories */}
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              style={{ backgroundColor: "white", paddingVertical: 8 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={sortUsersByStoryNotSeen.filter((item) => item.id !== user.id)}
              ListHeaderComponent={() => <StoryBubble {...user} username="Your Story" />}
              renderItem={({ item }) => <StoryBubble {...item} />}
            />
          </View>
          <View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              data={posts}
              renderItem={({ item }) => <FeedCard {...item} />}
            />
          </View>
        </ScrollView>
      </View>

    </>
  )
}