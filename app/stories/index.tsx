import { useRouter, useSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { useGlobal } from "../../providers/GlobalProvider";
import { useEffect, useState } from "react";

export default function Stories() {
    const [storyData, setStoryData] = useState<any>(null);
    const { users, setUsers } = useGlobal();
    const { id } = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const user = users.find(user => user.id === id);
        if (user) {
            user.storyIsSeen = true;
            setStoryData(user)
            setUsers((prev: any) => {
                const index = prev.findIndex((user) => user.id === id);
                prev[index] = user;
                return [...prev];
            });
        } else {
            router.back();
        }
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{storyData?.fullname} story!</Text>
        </View>
    );
}