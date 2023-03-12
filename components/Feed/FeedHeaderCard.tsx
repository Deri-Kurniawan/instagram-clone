import { TouchableWithoutFeedback, View, Image, Text } from "react-native"
import { PostsProps } from "../../providers/GlobalProvider"
import { MaterialIcons } from "@expo/vector-icons"

export default function FeedHeaderCard({ id, author, location }: PostsProps) {
    return (
        <>
            {/* header */}
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 8,
                paddingLeft: 14,
                height: 50,
                borderBottomColor: "#DADBDA",
                borderBottomWidth: 1,
            }}>
                {/* image */}
                <TouchableWithoutFeedback onPress={() => console.log("user detail")}>
                    <View>
                        <Image
                            source={{ uri: author.avatar }}
                            style={{ width: 30, height: 30, borderRadius: 50 }}
                            alt=''
                        />
                    </View>
                </TouchableWithoutFeedback>

                {/* username & location */}
                <>
                    {location === "" ? (
                        <TouchableWithoutFeedback onPress={() => console.log("user detail")}>
                            {/* username & verified */}
                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                columnGap: 4,
                            }}>
                                <Text numberOfLines={1} style={{ fontWeight: "bold" }}>{author.username}</Text>

                                {author.isVerified && (
                                    <MaterialIcons name="verified" size={14} color="#3797F0" />
                                )}
                            </View>
                        </TouchableWithoutFeedback>
                    ) : (

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: "flex-start",
                            maxHeight: 30
                        }}>
                            <TouchableWithoutFeedback onPress={() => console.log("user detail")}>
                                {/* username & verified */}
                                <View style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    columnGap: 4,
                                }}>
                                    <Text numberOfLines={1} style={{ fontWeight: "bold" }}>{author.username}</Text>
                                    {author.isVerified && (
                                        <MaterialIcons name="verified" size={14} color="#3797F0" />
                                    )}
                                </View>
                            </TouchableWithoutFeedback>

                            {/* location */}
                            <TouchableWithoutFeedback onPress={() => console.log("location")}>
                                <View>
                                    <Text numberOfLines={1} style={{ fontSize: 11, margin: 0, padding: 0 }}>{location}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )}
                </>

                {/* more */}
                <TouchableWithoutFeedback onPress={() => console.log("more")}>
                    <View style={{
                        width: 35,
                        height: "100%",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                        <MaterialIcons name="more-vert" size={20} color="black" />
                    </View>
                </TouchableWithoutFeedback>
            </View >
        </>
    )
}