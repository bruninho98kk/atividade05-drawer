import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import  Ionicons   from "react-native-vector-icons/Ionicons";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    title: "Home",
                    drawerLabel: "Home",
                    headerShown: false,
                    headerLeft: true,
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
               <Drawer.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    drawerLabel: "Perfil",
                    headerShown: false,
                    headerLeft: true,
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />

        </Drawer>
        </GestureHandlerRootView>
    );
}