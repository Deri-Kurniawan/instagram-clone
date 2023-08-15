import { SplashScreen, Stack, Slot, Link } from "expo-router";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalProvider } from "../providers/GlobalProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Billabong: require("../assets/fonts/FontsFree-Net-Billabong.ttf"),
    ProximaNova: require("../assets/fonts/FontsFree-Net-proxima_nova_reg-webfont.ttf"),
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{
        headerTitle: "Instaclone",
        headerTitleStyle: {
          fontFamily: "Billabong",
          fontSize: 40,
        },
        headerShadowVisible: false,
        headerShown: !false,
        headerRight: () => {
          return (
            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
              <Link href="/notifications" style={{ paddingLeft: 8, paddingVertical: 9, paddingRight: 8 }}>
                <Feather name="heart" size={29} color="black" />
              </Link>

              <Link href="/messages" style={{ paddingLeft: 8, paddingVertical: 8, paddingRight: 2 }}>
                <MaterialCommunityIcons name="facebook-messenger" size={32} color="black" />
              </Link>
            </View>
          );
        }
      }}
      />
    </GlobalProvider>
  );
}