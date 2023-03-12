import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { View, Image, Text } from "react-native";

interface StoryBubbleProps {
  id: string,
  username: string,
  storyIsSeen: boolean,
  avatar: string,
}

export default function StoryBubble({ id, username, avatar, storyIsSeen }: StoryBubbleProps) {
  const truncateUsername = (username: string) => {
    if (username.length > 12) {
      return username.substring(0, 12) + "...";
    }
    return username;
  }

  return (
    <Link href={{
      pathname: "/stories",
      params: { id },
    }}>
      <View style={{
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 6,
        height: "100%",
        width: "100%"
      }}>
        {!storyIsSeen ? (
          <LinearGradient
            colors={['#FFC371', '#CA1D7E', '#E35157']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              height: 75,
              width: 75,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
              marginBottom: 4,
            }}>
            <Image
              source={{ uri: avatar }}
              style={{
                width: 70,
                height: 70,
                borderRadius: 75 / 2,
                alignSelf: 'center',
                borderColor: '#fff',
                borderWidth: 3
              }} />
          </LinearGradient>
        ) : (
          <View style={{
            width: 74,
            height: 74,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            borderColor: "#DADBDA",
            borderWidth: 1.5,
            marginBottom: 4,
          }}>
            <Image
              source={{ uri: avatar }}
              style={{
                backgroundColor: "#DADBDA",
                width: 64,
                height: 64,
                borderRadius: 50
              }} />
          </View>
        )}

        <Text style={{ fontSize: 12 }}>{truncateUsername(username)}</Text>
      </View>
    </Link>
  )
}